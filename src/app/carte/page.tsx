import { CenteredText, Header, Title } from "@/components";
import {
  BISE,
  HOUTLAND,
  LESAUVAGE,
  MONGYTRIPLE,
  QUIDAM,
  SPECIALE,
} from "@/data/beers";
import {
  AMARETTOSOUR,
  BerryPlease,
  Daiquiri,
  DarkAndStormy,
  EspressoMartini,
  FrenchMargarita,
  Gimlet,
  GrannyDaddy,
  Mocktail,
  Negroni,
  OliveDryMartini,
  Paloma,
  Penicillin,
  VieuxCarré,
} from "@/data/cocktails";
import { Metadata } from "next";
import Link from "next/link";
import { Cocktail } from "../cocktails/Cocktail";
import { euro } from "@/utils/money";
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
        <Header>
          <Title>Bières pression</Title>
          <span className="whitespace-nowrap">25, 33 ou 50cl</span>
        </Header>

        <ul>
          {[BISE, HOUTLAND, LESAUVAGE, MONGYTRIPLE, SPECIALE].map((beer) => {
            return (
              <li key={beer.label}>
                <Product
                  key={beer.label}
                  label={beer.label}
                  description={beer.brewery}
                  price={beer.price}
                />
              </li>
            );
          })}
        </ul>
      </Block>

      <Block>
        <Header>
          <Title>Bières Bouteilles</Title>
        </Header>

        <CenteredText>
          <br />
          🍾🍺🍾🍺🍾
          <br />
          Notre sélection de bières bouteilles <br /> et canettes craft <br />{" "}
          avec des options sans alcool & sans gluten <br /> est à retrouver
          directement au bar <br />
          🍺🍾🍺🍾🍺
        </CenteredText>
      </Block>

      <Block>
        <Header>
          <Title>Vin</Title>
          <span className="whitespace-nowrap">Au verre ou en bouteille</span>
        </Header>
        {WINES.map((wine) => {
          return (
            <Product
              key={wine.label}
              label={wine.label}
              description={wine.description}
              price={wine.price}
            />
          );
        })}
      </Block>

      <Block>
        <Header>
          <Title>Cocktails</Title>
        </Header>

        <div>
          <ul className="flex flex-col gap-2">
            {[
              Mocktail,
              GrannyDaddy,
              BerryPlease,
              AMARETTOSOUR,
              OliveDryMartini,
              Daiquiri,
              Negroni,
              DarkAndStormy,
              FrenchMargarita,
              Paloma,
              EspressoMartini,
              Penicillin,
              VieuxCarré,
            ].map((cocktail) => {
              return (
                <li key={cocktail.label}>
                  <Cocktail {...cocktail} />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <ul>
            <li>🌱 vegan</li>
            <li>🌶️ spicy</li>
            <li>😇 virgin</li>
          </ul>
        </div>

        <div className="flex justify-between">
          <span>🍸🥂🥃🍹</span>
          <Link href="/cocktails">Voir tous nos cocktails</Link>
        </div>
      </Block>

      <Block>
        <Header>
          <Title>Shooters</Title>
          <span className="whitespace-nowrap">3.5€ l’unité & 18€ les 6</span>
        </Header>

        <CenteredText>
          <br />
          🔫💥🔫💥🔫
          <br />
          Nos recettes maison changent régulièrement
          <br />
          Viens voir les jarres au bar !
          <br />
          💥🔫💥🔫💥
        </CenteredText>
      </Block>

      <Block>
        <Header>
          <Title>Spiritueux</Title>
        </Header>

        {SPIRITS.map((spirit) => {
          return (
            <Product
              key={spirit.label}
              label={spirit.label}
              description={spirit.description}
              price={spirit.price}
            />
          );
        })}
      </Block>

      <Block>
        <Header>
          <Title>Soft</Title>
        </Header>

        {SOFTS.map((soft) => {
          return (
            <Product key={soft.label} label={soft.label} price={soft.price} />
          );
        })}
      </Block>

      <Block>
        <Header>
          <Title>Tartinades</Title>
        </Header>

        <CenteredText>
          <br />
          🍽️🧀🍽️🧀🍽️
          <br />
          Voir ardoise au bar
          <br />
          tartinades, grilled cheese, fromage,
          <br />
          garlic bread, saucisson et autres
          <br />
          🧀🍽️🧀🍽️🧀
        </CenteredText>
      </Block>

      <Block>
        <Header>
          <Title>Cafés</Title>
        </Header>
        {COFFEE.map((coffee) => {
          return (
            <Product
              key={coffee.label}
              label={coffee.label}
              description={coffee.description}
              price={coffee.price}
            />
          );
        })}
      </Block>

      <Block>
        <Header>
          <Title>Et pleins d'autres surprises au bar</Title>
        </Header>
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
