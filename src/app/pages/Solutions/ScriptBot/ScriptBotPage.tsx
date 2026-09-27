import { DefaultPage } from "@/components/layout/DefaultPage/DefaultPage";

import { ScriptBotHero } from "./components/ScriptBotHero/ScriptBotHero";
import { Compatibility } from "./components/Compatibility/Compatibility";
import { Features } from "./components/Features/Features";

export function ScriptBotPage() {
   return (
      <DefaultPage>
         <ScriptBotHero />
         <Compatibility />
         <Features />
      </DefaultPage>
   );
}