// deno-lint-ignore-file no-explicit-any
import { projects } from "../libs/menus.ts"
import ProjectPreview from "./ProjectPreview.tsx"

type Props = {
    movies: any[]
}

export default function Movies({ movies }: Props) {

    return (
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, key) => (<ProjectPreview key={key} {...project} />))}
        </div>
    )

}