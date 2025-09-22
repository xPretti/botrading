import { Headset } from "lucide-react";
import styles from "./Features.module.css";
import { FeatureCard } from "@/components/ui/Cards/FeatureCard/FeatureCard";

const ITEMS = [
  {
    title: "Suporte",
    desc: "Nossa equipe especializada oferece suporte ágil e personalizado, pronta para atender suas necessidades com eficiência e garantir uma experiência simples e sem complicações.",
    icon: <Headset />
  },
  {
    title: "Qualidade garantida",
    desc: "Entregamos soluções testadas, seguras e eficientes, com alto padrão de desempenho e confiabilidade.",
    icon: <Headset />
  },
  {
    title: "Projetos documentados",
    desc: "Todos os nossos projetos contam com documentação completa e acessível, para que você possa começar rápido e sem complicação.",
    icon: <Headset />
  },
  {
    title: "Comunidade",
    desc: "Participe de uma comunidade de traders e investidores que evoluem juntos, compartilhando estratégias, resultados e experiências com nossas soluções.",
    icon: <Headset />
  },
  {
    title: "Projetos gratuitos",
    desc: "Todos os nossos projetos possuem versões gratuitas e prontas para produção. Pague apenas quando realmente precisar de recursos adicionais.",
    icon: <Headset />
  },
  {
    title: "Projetos atualizados",
    desc: "Mantemos todos os nossos projetos sempre atualizados, garantindo segurança, estabilidade e as novidades mais recentes.",
    icon: <Headset />
  }
];

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContent}>
        <div className={styles.featuresHeader}>
          <h3>
            Tudo para alavancar seus resultados
          </h3>
          <p>
            Soluções completas, inteligentes e com suporte dedicado, prontas para impulsionar seus resultados no mercado financeiro.
          </p>
        </div>
        <div className={styles.featuresCards}>
          {ITEMS.map((item) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} width="100%" height="178px" maxWidth="380px" />
          ))}
        </div>
      </div>
    </section >
  );
}