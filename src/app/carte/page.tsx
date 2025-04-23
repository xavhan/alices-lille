import { AdditionalText, CenteredText, Header, Title } from "@/components";
import { BISE, HOUTLAND, MONGYTRIPLE, SPECIALE, ZINNEBIR } from "@/data/beers";
import {
  ChampsÉlysées,
  Daiquiri,
  DarkAndStormy,
  ElDiablo,
  EspressoMartini,
  Garibaldi,
  HibiscusFizz,
  LitchiMartini,
  Mezcalita,
  Mocktail,
  Negroni,
  SpritzCampari,
  SumacManhattan,
} from "@/data/cocktails";
import { Metadata } from "next";
import Link from "next/link";
import { WINES } from "@/data/wine";
import { SPIRITS } from "@/data/spirits";
import { SOFTS } from "@/data/soft";
import { COFFEE } from "@/data/coffee";
import { Product } from "@/components/Product";

export const metadata: Metadata = {
  title: "Alices | La Carte",
  description:
    "Café torréfié à Lille, vins natures et surprenants, bières locales, cocktails délicieux, large gamme de softs et tartinables faits sur place",
};

export default function () {
  return (
    <div className="flex flex-col gap-8">
      <Block>
        <CenteredText>
          <br />
          🪩🕺🪩🕺🪩
          <br />
          <br />
          le service est exclusivement au bar aujourd'hui
          <br />
          <br />
          🕺🪩🕺🪩🕺
          <br />
        </CenteredText>
      </Block>

      <div className="flex justify-center">
        <picture>
          <source
            srcSet="/icons/cocktail-dark.png"
            media="(prefers-color-scheme: dark)"
          />
          <img src="/icons/cocktail.png" alt="Cocktail" width="40" />
        </picture>
      </div>
    </div>
  );
}

type BlockProps = {
  children: React.ReactNode;
};
const Block = ({ children }: BlockProps) => {
  return <div className="flex flex-col gap-2 text-left">{children}</div>;
};
