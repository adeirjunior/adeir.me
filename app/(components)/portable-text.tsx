import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";
import { highlight } from "sugar-high";
import { createElement, HTMLAttributes, Key, ReactNode } from "react";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import {
  PortableText,
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
} from "next-sanity";
import { PostBody } from "../(utils)/types";
import { urlFor } from "@/sanity/lib/image";

function Table({ data }: any) {
  let headers = data.headers.map((header: string, index: Key) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: string[], index: Key) => (
    <tr key={index}>
      {row.map((cell: string, cellIndex: Key) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) {
  const hrefString = typeof href === "string" ? href : (href as Url).toString(); // Convert Url to string

  if (hrefString.startsWith("/")) {
    // Internal link
    return (
      <Link {...props} href={href as Url}>
        {children}
      </Link>
    );
  }

  if (hrefString.startsWith("#")) {
    // Anchor link
    return (
      <a {...props} href={hrefString}>
        {children}
      </a>
    );
  }

  // External link
  return (
    <a target="_blank" rel="noopener noreferrer" href={hrefString} {...props}>
      {children}
    </a>
  );
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

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
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
    talbe: Table,
    code: Code,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
  },
};

export function CustomPortableText({ value }: { value: PostBody[] }) {
  return <PortableText value={value} components={components} />;
}
