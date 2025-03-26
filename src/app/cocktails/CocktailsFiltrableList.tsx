"use client";

import { Select } from "@/components";
import type { Cocktail as TCocktail } from "@/data/cocktails";
import { useEffect, useState } from "react";
import { Product } from "@/components/Product";

const BASES = [
  { label: "Amaretto", value: "amaretto" },
  { label: "Bourbon", value: "bourbon" },
  { label: "Campari", value: "campari" },
  { label: "Calvados", value: "calvados" },
  { label: "Chartreuse", value: "chartreuse" },
  { label: "Cognac", value: "cognac" },
  { label: "Gin", value: "gin," }, //avoid gin and ginger overlap
  { label: "Ginger", value: "ginger" },
  { label: "Mescal", value: "mescal" },
  { label: "Pisco", value: "pisco" },
  { label: "Rhum", value: "rhum" },
  { label: "Sour", value: "sour" },
  { label: "Tequila", value: "tequila" },
  { label: "Vodka", value: "vodka" },
  { label: "Whisky", value: "whisky" },
];
type CocktailsFiltrableList = {
  cocktails: TCocktail[];
};
export const CocktailsFiltrableList = ({
  cocktails,
}: CocktailsFiltrableList) => {
  const [base, setBase] = useState<string>();
  const [displayedCocktails, setDisplayedCocktails] = useState(cocktails);

  useEffect(() => {
    setDisplayedCocktails(
      cocktails.filter((c) =>
        c.composition
          .toLocaleLowerCase()
          .includes((base ?? "").toLocaleLowerCase())
      )
    );
  }, [base]);

  return (
    <>
      <div>
        <Select
          onChange={(e) => setBase(e.target.value)}
          options={BASES}
          placeholder="Choisir une base"
        />
      </div>

      <ul className="flex flex-col gap-2">
        {displayedCocktails.map((c) => (
          <li key={c.label}>
            <Product
              label={
                c.label +
                (c.spicy ? " 🌶️" : "") +
                (c.vegan ? " 🌱" : "") +
                (c.virgin ? " 😇" : "")
              }
              description={c.composition}
              price={c.price ?? 0}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
