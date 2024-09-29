import fs, { PathLike, PathOrFileDescriptor } from 'fs'
import { groq } from 'next-sanity'
import path from 'path'
import { client } from '@/sanity/lib/client'
import { Post } from './types'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function sanitizeMDXContent(content: string): string {
  let sanitizedContent = content.replace(/(width|height|src|alt)=([^\s>"'}]+)/g, '$1="$2"');
  sanitizedContent = sanitizedContent.replace(/<img([^>]+)(?<!\/)>/g, '<img$1/>');

  // Substituir o trecho com a tabela de autores
  sanitizedContent = sanitizedContent.replace(/\| \[<img.+<\/sub>\]\(.+filipedeschamps.+\)/, `
    <table>
      <tr>
        <td align="center">
          <a href="https://github.com/filipedeschamps">
            <img src="https://github.com/filipedeschamps.png?size=115" width="115" />
            <br />
            <sub>@filipedeschamps</sub>
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/lucianopf">
            <img src="https://github.com/lucianopf.png?size=115" width="115" />
            <br />
            <sub>@lucianopf</sub>
          </a>
        </td>
      </tr>
    </table>
  `);

  return sanitizedContent;
}



function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export const generateRandomGradient = (): string => {
  const angle = Math.floor(Math.random() * 360);
  const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
};

export async function getBlogPosts(): Promise<Post[]> {
  return await client.fetch(groq`*[_type == 'post'] `);
}

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
