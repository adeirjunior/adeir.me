// deno-lint-ignore-file no-explicit-any
import Layout from "../components/Layout.tsx";
import { useState, useEffect } from "preact/hooks";
import { runQuery } from "../libs/sanity.ts";
import { indexQuery } from "../libs/queries.ts";

export default function Home() {

  const [movies, setMovies] = useState<any>([]);
  const updateMovies = (movies: any[]) => {
    setMovies(movies);
  };

  useEffect(() => {
    runQuery(indexQuery, updateMovies);
  }, []);

  return <>
    <Layout>
        <div class="grid place-content-center">
          <h1 class="text-center text-2xl font-semibold">Hello World!</h1>
        </div>
    </Layout>
  </>
}