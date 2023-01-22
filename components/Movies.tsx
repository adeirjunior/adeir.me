// deno-lint-ignore-file no-explicit-any

import Movie from "./Movie.tsx"

type Props = {
    movies: any[]
}

export default function Movies({ movies }: Props) {
    return <div class="grid">
        {
            movies.map((movie: any) => (
                <Movie key={movie._id} {...movie} />
        ))}
    </div>
}