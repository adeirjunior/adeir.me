// deno-lint-ignore-file no-explicit-any
import Layout from "../components/Layout.tsx";
import Hero1 from "../components/Hero1.tsx";
import Hero2 from "../components/Hero2.tsx";
import Hero3 from "../components/Hero3.tsx";
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

  return (
    <Layout>
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </Layout>
  )
}