import Layout from "../components/Layout.tsx";
import MoviePreview from "../components/MoviePreview.tsx";

export default function Home() {

  return <>
    <Layout>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <MoviePreview />
      </div>
    </Layout>
  </>
}
