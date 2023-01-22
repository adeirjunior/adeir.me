// deno-lint-ignore-file no-explicit-any
import imageURLBuilder from "sanity";

type SanityClientOptions = {
  projectId: any;
  dataset: any;
  apiVersion: string;
  token?: string;
  useCdn?: boolean;
};

type QueryParameters = Record<string, string | number>;

const sanityCredentials = {
  projectId: Deno.env.get("SANITY_PROJECT_ID"),
  dataset: Deno.env.get("SANITY_DATASET"),
  token: Deno.env.get("SANITY_TOKEN"),
};

const sanityClient = (options: SanityClientOptions) => {
  const { useCdn, projectId, dataset, token, apiVersion } = options;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn && !hasToken ? "apicdn.sanity.io" : "api.sanity.io";
  const endpoint =
    `https://${projectId}.${baseHost}/v${apiVersion}/data/query/${dataset}`;

  // Parse JSON and throw on bad responses
  const responseHandler = (response: Response) => {
    if (response.status >= 400) {
      throw new Error([response.status, response.statusText].join(" "));
    }
    return response.json();
  };

  // We need to prefix groq query params with `$` and quote the strings
  const transformedParams = (parameters: QueryParameters) =>
    Object.keys(parameters).reduce<QueryParameters>((prev, key) => {
      prev[`$${key}`] = JSON.stringify(parameters[key]);
      return prev;
    }, {});

  return {
    // deno-lint-ignore require-await
    fetch: async (query: string, parameters?: QueryParameters) => {
      const urlParams = new URLSearchParams({
        query,
        ...(parameters && transformedParams(parameters)),
      });

      const url = new URL([endpoint, urlParams].join("?"));
      const request = new Request(url.toString());

      if (hasToken) {
        request.headers.set("Authorization", `Bearer ${token}`);
      }

      return (
        fetch(request)
          .then(responseHandler)
          // The query results are in the `result` property
          .then((json) => json.result)
      );
    },
  };
};

export const runQuery = async (
  query: string,
  callback: (json: any[]) => void,
) => {
  const client = sanityClient({
    ...sanityCredentials,
    useCdn: false,
    apiVersion: "2023-01-21",
  });
  await client.fetch(query).then(callback).catch((error) =>
    console.error(error.message)
  );
};

export const urlFor = (source: any) =>
  imageURLBuilder(sanityCredentials).image(source);
