
import { Section } from "@/components/ui/Sections/Section/Section";
import styles from "./Features.module.css";
import { SectionName } from "@/components/ui/Sections/SectionName/SectionName";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/ui/Sections/SectionDescription/SectionDescription";
import { ProductFeatureCard } from "@/components/ui/Cards/ProductFeatureCard/ProductFeatureCard";
import { Brackets, ChevronsLeftRight, Clock, Puzzle, Rocket, Shuffle, SquareMenu, TriangleAlert, Waypoints } from "lucide-react";

const ITEMS = [
   {
      title: "+250 funções e variáveis",
      desc: "Amplo conjunto pronto para criar estratégias sofisticadas sem sair do editor.",
      icon: <Brackets />
   },
   {
      title: "Suporte a múltiplos ativos",
      desc: "Permite análise de diversos mercados simultaneamente na mesma estratégia.",
      icon: <Puzzle />
   },
   {
      title: "Criação rápida de estratégias",
      desc: "Desenvolva e ajuste suas estratégias de forma ágil e intuitiva.",
      icon: <Rocket />
   },
   {
      title: "Controle de risco integrado",
      desc: "Trailing stop, breakeven, parciais e martingale/sorosgale configuráveis.",
      icon: <TriangleAlert />
   },
   {
      title: "Gestão automatizada de ordens",
      desc: "Execução rápida e eficiente das suas operações, do envio ao encerramento.",
      icon: <Shuffle />
   },
   {
      title: "Integração com indicadores",
      desc: "Combine os melhores indicadores do MT5 direto nos cálculos de entrada e saída.",
      icon: <Waypoints />
   },
   {
      title: "Painel intuitivo",
      desc: "Monitoramento e controle completo do robô direto pelo gráfico.",
      icon: <SquareMenu />
   },
   {
      title: "Expressões lógicas",
      desc: "Crie sistemas complexos de entrada e saída com operadores lógicos avançados.",
      icon: <ChevronsLeftRight />
   },
   {
      title: "Horários de operação",
      desc: "Janelas de início, parada e finalização, com regras por dia da semana.",
      icon: <Clock />
   }
];

export function Features() {
   return (
      <Section className={styles.features} classNameContent={styles.featuresContent}>
         <SectionName title="Características" />
         <SectionTitle title="Tudo que sua estratégia precisa" />
         <SectionDescription text="Mais de 250 funções e variáveis prontas, painel intuitivo e controle total sobre suas operações." />

         <div className={styles.featuresCards}>
            {ITEMS.map((item) => (
               <ProductFeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} width="100%" height="125px" maxWidth="380px" />
            ))}
         </div>
      </Section>
   );
}