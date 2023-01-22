import { ComponentChildren } from "preact";
import HeadTag from "./Head.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type Props = {
    children?: ComponentChildren;
};

export default function Layout({ children }: Props) {
    return <>
        <HeadTag />
        <Header active="true"/>
        <main class="min-h-screen">
            {children}
        </main>
        <Footer />
    </>
}