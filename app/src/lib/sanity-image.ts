import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { client } from "./sanity-client";

const builder = imageUrlBuilder(client);

const urlFor: (source: string) => ImageUrlBuilder = (source: string) => builder.image(source);

export default urlFor;