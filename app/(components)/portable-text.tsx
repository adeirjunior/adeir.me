import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";
import { highlight } from "sugar-high";
import { createElement, HTMLAttributes, Key, ReactNode } from "react";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import {
  PortableText,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "next-sanity";
import { PostBody } from "../(utils)/types";
import { urlFor } from "@/sanity/lib/image";
import { slugify } from "../(utils)/utils";
import { Code, CustomLink, Table } from "@/mdx-components";
import { TypedObject } from "sanity";

interface LinkValue extends TypedObject {
  href: string;
}

function CustomPortableTextLink({
  value,
  children,
}: PortableTextMarkComponentProps<LinkValue>) {
  const href = value?.href || "#"; // Fallback to '#' if href is undefined

  return <CustomLink href={href}>{children}</CustomLink>;
}

function RoundedImage({ value }: PortableTextTypeComponentProps<any>) {
  const { alt } = value; // Extract the src and alt from value

  return (
    <Image
      className="rounded-lg w-full"
      src={urlFor(value).url()}
      alt={alt}
      width={500}
      height={300}
    />
  );
}

function createHeading(level: number) {
  const Heading = ({ value }: PortableTextTypeComponentProps<any>) => {
    const children = value.children.map((child: any) => child.text).join(""); // Extract text from child nodes for slug
    const slug = slugify(children);

    return createElement(
      `h${level}`,
      { id: slug }, // Set the id for anchor linking
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
        children, // Render children as text
      ]
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export const components: Partial<PortableTextReactComponents> = {
  types: {
    image: RoundedImage,
    table: Table,
    code: Code,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
  },
  marks: {
    link: CustomPortableTextLink, // Use CustomPortableTextLink for link marks
  },
};

export function CustomPortableText({ value }: { value: PostBody[] }) {
  return <PortableText value={value} components={components} />;
}
