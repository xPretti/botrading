import { DefaultPage } from "@/components/layout/DefaultPage/DefaultPage";

import { ScriptBotHero } from "./components/ScriptBotHero/ScriptBotHero";
import { Compatibility } from "./components/Compatibility/Compatibility";
import { Features } from "./components/Features/Features";
import { Ready } from "./components/Ready/Ready";

export function ScriptBotPage() {
   return (
      <DefaultPage>
         <ScriptBotHero />
         <Compatibility />
         <Features />
         <Ready />
      </DefaultPage>
   );
}