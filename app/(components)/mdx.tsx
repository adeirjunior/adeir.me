import { Code, createHeading, CustomLink, RoundedImage, Table } from "@/mdx-components";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

export const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  Image: RoundedImage,
  a: CustomLink as any,
  code: Code,
  Table,
};

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
