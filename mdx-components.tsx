import type { MDXComponents } from "mdx/types";
import { Url } from "next/dist/shared/lib/router/router";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { createElement, HTMLAttributes, Key, ReactNode } from "react";
import { highlight } from "sugar-high";
import { slugify } from "./app/(utils)/utils";

export function Table({ data }: any) {
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

export function CustomLink({
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

export function RoundedImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} className="rounded-lg" />;
}

export function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

export function createHeading(level: number) {
  const Heading = ({
    children,
    ...props
  }: { children?: ReactNode } & HTMLAttributes<HTMLHeadingElement>) => {
    const childText = typeof children === "string" ? children : ""; // Extract text for slug if children is a string
    const slug = slugify(childText);

    return createElement(
      `h${level}`,
      { id: slug, ...props }, // Pass props to ensure compatibility
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
        children, // Render children, even if it's undefined it will be safely handled
      ]
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    Image: RoundedImage,
    a: CustomLink as any, // Explicitly cast to any to bypass type mismatch
    code: Code,
    Table,
    ...components,
  };
}
