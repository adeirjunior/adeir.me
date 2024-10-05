import { getDictionary } from "./dictionaries";

export default async function page({ params }: { params: { lang: 'en' | 'pt' } }) {
    const {home} = await getDictionary(params.lang)
    return (
        <article>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Adeir Junior</h1>

            <section className="prose">
                <h2>{home.bio.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: home.bio.content }}>
                </p>
            </section>

            <section className="prose">
                <h2>{home.main_projects.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: home.main_projects.content }}>
                </p>
            </section>

            <section className="prose">
                <h2>{home.programming_languages.title}</h2>
                <ul>
                    <li>Rust</li>
                    <li>Typescript</li>
                    <li>Kotlin</li>
                </ul>
            </section>

            <section className="prose">
                <h2>{home.idioms.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: home.idioms.content }}>
                </p>
            </section>

            <section className="prose">
                <h2>{home.hobbies.title}</h2>
                <ul dangerouslySetInnerHTML={{ __html: home.hobbies.content }}>
                </ul>
            </section>
        </article>
    );
};
