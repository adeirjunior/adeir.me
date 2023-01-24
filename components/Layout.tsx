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
        <div class="bg-white dark:bg-gray-700">
            <Header active="true"/>
            <main class="min-h-screen py-10 px-8">
                {children}
            </main>
            <Footer />
        </div>
        
    </>
}