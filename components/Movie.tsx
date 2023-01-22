// deno-lint-ignore-file no-explicit-any
import { urlFor } from "../libs/sanity.ts";

type Props = {
  title: string,
  overview: any,
  releaseDate: string,
  poster: {
    asset: {
      _ref: string
    }
  }
}

export default function Movie ({ title, overview, releaseDate, poster }: Props) {
  return (
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img
          src={`${urlFor(poster.asset._ref)}`}
          alt={title}
        />
        <div class="px-6 py-4">
          <h3 class="text-xl mb-2 text-center">{title}</h3>
          <p class="text-md justify-start">
            {overview[0].children[0].text}
          </p>
        </div>
        <div class="align-bottom">
          <p class="text-gray text-center text-xs font-medium my-5">
            Released on {new Date(releaseDate).toDateString()}
          </p>
        </div>
      </div>
  );
}