"use client";

import { Header, Select, Title } from "@/components";
import * as COCKTAILS from "@/data/cocktails";
import type { Cocktail } from "@/data/cocktails";
import { useEffect, useState } from "react";

const CocktailsArray = Object.values(COCKTAILS)
  .filter((c) => c.availableEveryday)
  .sort((a, b) => a.label.localeCompare(b.label));

const BASE = ["Calvados", "Vodka"];

export default function CockailsPage() {
  const [base, setBase] = useState<string>();
  const [displayedCocktails, setDisplayedCocktails] = useState(CocktailsArray);

  useEffect(() => {
    setDisplayedCocktails(
      CocktailsArray.filter((c) =>
        c.composition
          .toLocaleLowerCase()
          .includes((base ?? "").toLocaleLowerCase())
      )
    );
  }, [base]);

  return (
    <div className="flex flex-col gap-8">
      <Header>
        <Title>Tous nos cocktails</Title>
      </Header>

      <div>
        <Select
          onChange={(e) => setBase(e.target.value)}
          options={BASE.map((b) => ({
            value: b,
            label: b,
          }))}
          placeholder="Choisir une base"
        />
      </div>

      <ul className="flex flex-col gap-2">
        {displayedCocktails.map((c) => (
          <li key={c.label}>
            <Cocktail {...c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const Cocktail = ({
  label,
  price,
  composition,
  spicy,
  vegan,
  virgin,
}: Cocktail) => {
  return (
    <div className="flex flex-row items-end gap-4 justify-between">
      <div className="flex flex-col">
        <div className="flex gap-2">
          {label}
          {(spicy || vegan || virgin) && (
            <div>
              {spicy && <span>🌶</span>}
              {vegan && <span>🌱</span>}
              {virgin && <span>😇</span>}
            </div>
          )}
        </div>

        <div>{composition}</div>
      </div>
      <div>{price}</div>
    </div>
  );
};
