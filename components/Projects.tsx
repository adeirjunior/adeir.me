// deno-lint-ignore-file no-explicit-any
import ProjectPreview from "./ProjectPreview.tsx"

type Props = {
    movies: any[]
}

export default function Movies({ movies }: Props) {
    const projects = [
        {
            title: "Madames",
            description: "M'adames is a Brazilian physical and online store that sells products focused on women's intimate life.",
            github: "https://github.com/adeirjunior/madames",
            view: "https://madames.store/",
            picture: "/projects/madames.png",
        },
        {
            title: "Assuntos",
            description: "A blog made with the aim of helping me to complete my programming studies, where I write about content that I am studying at the moment.",
            github: "https://github.com/adeirjunior/assuntos",
            view: "https://assuntos.dev/",
            picture: "/projects/assuntos.png",
        },
        {
            title: "Bitcoin Conversor",
            description: "Bitcoin to Dollar and Euro Converter.",
            github: "https://github.com/adeirjunior/bitcoin-price-tracker",
            view: "https://bpt.deno.dev/",
            picture: "/projects/btc.png",
        },
        {
            title: "Hulu Clone",
            description: "Clone of the Hulu Streaming service, where the most famous movies of today are shown, categorized into Action, Comedy, Romance, Animation, Horror, and so on.",
            github: "https://github.com/adeirjunior/hulu-clone",
            view: "https://hulu-clone-lake-eight.vercel.app/",
            picture: "/projects/hulu.png",
        },
        {
            title: "ScandiWeb",
            description: "Inventory manager project for a store created during the selection process of an Estonian company called ScandiWeb",
            github: "https://github.com/adeirjunior/scandiweb-test-task",
            view: "https://scandiwebtesttasksite.000webhostapp.com/",
            picture: "/projects/scandiweb.png",
        },
    ]

    return (
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, key) => (<ProjectPreview key={key} {...project} />))}
        </div>
    )

}