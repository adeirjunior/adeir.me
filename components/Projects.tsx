import { projects } from "../libs/menus.ts"
import ProjectPreview from "./ProjectPreview.tsx"

export default function Movies() {

    return (
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, key) => (<ProjectPreview key={key} {...project} />))}
        </div>
    )

}