import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { createElement, Key } from "react";
import React from "react";
import { Url } from "next/dist/shared/lib/router/router";

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

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
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
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink as any, // Explicitly cast to any to bypass type mismatch
  code: Code,
  Table,
};

export function CustomMDX(props: MDXRemoteProps ) {
  return (
    <MDXRemote
      {...props}
    />
  );
}
