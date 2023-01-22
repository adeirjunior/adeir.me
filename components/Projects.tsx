// deno-lint-ignore-file no-explicit-any
import ProjectPreview from "./ProjectPreview.tsx"

type Props = {
    movies: any[]
}

export default function Movies({ movies }: Props) {
    const index = [[],[],[],[],[]]

    return (
        <div class="grid gap-8 my-24 grid-cols-1 sm:grid-cols-2 px-8">
            {index.map((index, key) => (<ProjectPreview key={key} />))}
        </div>
    )

}