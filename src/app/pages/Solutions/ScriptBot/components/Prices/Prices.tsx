import { Check, ExternalLink, Minus } from "lucide-react";
import { Section } from "@/components/ui/Sections/Section/Section";
import styles from "./Prices.module.css";
import { SectionName } from "@/components/ui/Sections/SectionName/SectionName";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";
import { SectionDescription } from "@/components/ui/Sections/SectionDescription/SectionDescription";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";

type PriceFeatureValue = boolean | string;

type PriceFeature = {
   label: string;
   free: PriceFeatureValue;
   full: PriceFeatureValue;
   fullHighlight?: boolean;
};

type PricePlanButton = {
   label: string;
   href: string;
   variant: "outline" | "primary";
   external?: boolean;
};

type PricePlan = {
   key: "free" | "full";
   name: string;
   price: string;
   priceSuffix?: string;
   priceNote?: string;
   recommended?: boolean;
   badge?: string;
   button: PricePlanButton;
   disabled?: boolean;
};

const PLANS: PricePlan[] = [
   {
      key: "free",
      name: "Limitada",
      price: "R$0",
      priceSuffix: "/mês",
      button: {
         label: "Baixar",
         href: "https://sb.botrading.net/resources/downloads/",
         variant: "outline",
      },
      disabled: false,
   },
   {
      key: "full",
      name: "Licença Completa",
      price: "???",
      priceNote: "MQL5 Market",
      recommended: true,
      badge: "Recomendado",
      button: {
         label: "Comprar no MQL5",
         href: "https://www.mql5.com/",
         variant: "primary",
         external: true,
      },
      disabled: true,
   },
];

const FEATURES: PriceFeature[] = [
   { label: "Todas as funções liberadas", free: true, full: true },
   { label: "Limite de faturamento", free: "R$300/mês", full: "Sem limite", fullHighlight: true },
   { label: "Painel de controle completo", free: true, full: true },
   { label: "Atualizações inclusas", free: true, full: true },
   { label: "Suporte", free: "Normal", full: "Prioritário", fullHighlight: true },
   { label: "Uso em conta real", free: "Até o limite", full: "Sem restrições", fullHighlight: true },
];

function FeatureValue({ value, highlight }: { value: PriceFeatureValue; highlight?: boolean; }) {
   if (typeof value === "boolean") {
      return value ? (
         <Check className={styles.priceFeatureCheck} width={18} height={18} />
      ) : (
         <Minus className={styles.priceFeatureMinus} width={18} height={18} />
      );
   }

   return (
      <span className={highlight ? styles.priceFeatureValueHighlight : styles.priceFeatureValue}>
         {value}
      </span>
   );
}

function PlanHeader({ plan }: { plan: PricePlan; }) {
   return (
      <div className={`${styles.planHeader} ${plan.recommended ? styles.planHeaderRecommended : ""}`}>
         {plan.badge && <span className={styles.planBadge}>{plan.badge}</span>}
         <p className={styles.planName}>{plan.name}</p>
         <div className={plan.recommended ? styles.planPriceBox : styles.planPriceBoxPlain}>
            <p className={styles.planPrice}>{plan.price}</p>
            {plan.priceSuffix && <p className={styles.planPriceSuffix}>{plan.priceSuffix}</p>}
            {plan.priceNote && <p className={styles.planPriceNote}>{plan.priceNote}</p>}
         </div>
      </div>
   );
}

export function Prices() {
   return (
      <Section className={styles.prices} classNameContent={styles.pricesContent}>
         <SectionName title="Preços" />
         <SectionTitle title="Escolha seu plano" />
         <SectionDescription text="Escolha o plano certo para voce." />

         <div className={styles.pricesCards}>
            {PLANS.map((plan) => (
               <div
                  key={plan.key}
                  className={`${styles.priceCard} ${plan.recommended ? styles.priceCardRecommended : ""}`}
               >
                  <PlanHeader plan={plan} />

                  <div className={styles.priceCardFeatures}>
                     {FEATURES.map((feature, index) => (
                        <div className={styles.priceCardFeatureRow} key={`${feature.label}-${index}`}>
                           <span className={styles.priceCardFeatureLabel}>{feature.label}</span>
                           <FeatureValue
                              value={plan.key === "full" ? feature.full : feature.free}
                              highlight={plan.key === "full" ? feature.fullHighlight : false}
                           />
                        </div>
                     ))}
                  </div>

                  <div className={styles.priceCardButton}>
                     <ButtonLink
                        title={plan.button.label}
                        variant={plan.button.variant}
                        fontSize="1rem"
                        fontWeight="600"
                        href={plan.button.href}
                        fullWidth
                        disabled={plan.disabled}
                     >
                        {plan.button.label}
                        {plan.button.external && (
                           <ExternalLink width={21} height={21} />
                        )}
                     </ButtonLink>
                  </div>
               </div>
            ))}
         </div>
      </Section>
   );
}