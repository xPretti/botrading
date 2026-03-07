import { Hero } from "./components/Hero/Hero";
import { Brokers } from "./components/Brokers/Brokers";
import { Metatrader } from "./components/Metatrader/Metatrader";
import { Features } from "./components/Features/Features";
import { Community } from "./components/Community/Community";

export default function Home() {
   return (
      <>
         <Hero />
         <Brokers />
         <Metatrader />
         <Features />
         <Community />
      </>
   );
}
