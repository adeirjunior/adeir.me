import { baseUrl } from "@/app/sitemap";
import Image from "next/image";

const ogImage = `${baseUrl}/og?title=${encodeURIComponent("reading")}`;

export const metadata = {
  title: "Reading",
  description: "See my reading list.",
  openGraph: {
    title: "My Reading List",
    description: "This is the place for my reading recommendations.",
    url: baseUrl,
    siteName: "adeir.me",
    locale: "en_US",
    type: "website",
    images: ogImage,
  },
};

const list = {
  Programming: {
    books: [
      {
        name: "WebAssembly: The Definitive Guide",
        href: "https://amzn.to/3APUfQK",
        image: "https://m.media-amazon.com/images/I/91vhWTofMdL._SL1500_.jpg",
      },
    ],
  },
  Classical: {
    books: [
      {
        name: "Crime and Punishment",
        href: "https://amzn.to/4dMzDHw",
        image: "https://m.media-amazon.com/images/I/71hjHuIcflL._SL1500_.jpg",
      },
      {
        name: "The Art of War",
        href: "https://amzn.to/3XJqCcV",
        image: "https://m.media-amazon.com/images/I/71xJdnydklL._SL1000_.jpg",
      },
      {
        name: "The Iliad & the Odyssey",
        href: "https://amzn.to/4ebhfYG",
        image: "https://m.media-amazon.com/images/I/810rw5b5WxL._SL1500_.jpg",
      },
      {
        name: "Animal Farm",
        href: "https://amzn.to/4cRm9sV",
        image: "https://m.media-amazon.com/images/I/71je3-DsQEL._SL1500_.jpg",
      },
      {
        name: "1984",
        href: "https://amzn.to/4cUzfWk",
        image: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SL1500_.jpg",
      },
    ],
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Reading List
      </h1>
      <div className="prose">
        <p>
          I do a lot of reading, and when I find books that are particularly
          good, I write them down so I can recommend them to others. This
          reading list is made up of my current favorite books and are organized
          by category. I consider these books “must-read” for their category as
          they will help you learn and grow in your career.
        </p>
        <p>
          Note: This page contains affiliate links. If you click through and
          purchase a book, I may receive compensation for that purchase.
        </p>
        <div>
          {Object.entries(list).map(([category, { books }]) => (
            <div key={category}>
              <h2>{category}</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {books.map((book, index) => (
                  <li key={index}>
                    <a target="_blank" href={book.href}>
                      <div>
                        <Image
                          width={200}
                          height={500}
                          src={book.image}
                          alt={book.name}
                        />

                        <p>{book.name}</p>
                      </div>
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
