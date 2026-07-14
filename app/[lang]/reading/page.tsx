import { baseUrl } from "@/app/sitemap";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import { Book, Lang } from "@/app/(utils)/types";
import { getBooks } from "app/(utils)/utils";

const ogImage = `${baseUrl}/og?title=${encodeURIComponent("reading")}`;

export const metadata = {
  title: "Reading",
  description: "See my reading list.",
  openGraph: {
    title: "My Reading List",
    description: "This is the place for my recommendations.",
    url: `${baseUrl}/reading`,
    siteName: "adeir.me",
    locale: "en_US",
    type: "website",
    images: ogImage,
  },
};

export const revalidate = 60;

export default async function Page({ params }: {params: Lang}) {
  const {reading} = await getDictionary(params.lang)
  const books = await getBooks();

  const booksByCategory = books.reduce((acc, book) => {
    const category = book.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(book);
    return acc;
  }, {} as Record<string, Book[]>);

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {reading.reading_list.title}
      </h1>
      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: reading.reading_list.content }}></div>
        <div>
          {Object.entries(booksByCategory).map(([category, books]) => (
            <div key={category}>
              <h2>{category}</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {books.map((book, index) => (
                  <li key={index} className="flex flex-col">
                    <a target="_blank" href={book.href} rel="noopener noreferrer" className="group">
                      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 shadow-md group-hover:shadow-xl transition-all duration-300">
                        <Image
                          fill
                          src={book.image}
                          alt={book.name}
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium leading-tight text-neutral-900 dark:text-neutral-100 group-hover:underline">
                        {book.name}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
