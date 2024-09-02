export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-02'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  "Missing environment variable: SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_ID,
  "Missing environment variable: SANITY_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
