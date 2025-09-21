import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { BackToTop } from "@/components/ui/BackToTop/BackToTop";

export default function Home() {
    return (
        <>
            <Header />
            <BackToTop />
            <Hero />
            <Footer />
        </>
    );
}
