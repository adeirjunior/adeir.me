// deno-lint-ignore-file no-explicit-any
import Layout from "../components/Layout.tsx";
import Projects from "../components/Projects.tsx";
import { useState, useEffect } from "preact/hooks";
import { runQuery } from "../libs/sanity.ts";
import { indexQuery } from "../libs/queries.ts";

export default function ProjectsPage() {

  const [movies, setMovies] = useState<any>([]);
  const updateMovies = (movies: any[]) => {
    setMovies(movies);
  };

  useEffect(() => {
    runQuery(indexQuery, updateMovies);
  }, []);

  return <>
    <Layout>
        <Projects movies={movies}/>
    </Layout>
  </>
}