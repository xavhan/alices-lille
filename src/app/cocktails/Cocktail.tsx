import type { Cocktail as TCocktail } from "@/data/cocktails";

export const Cocktail = ({
  label,
  price,
  composition,
  spicy,
  vegan,
  virgin,
}: TCocktail) => {
  return (
    <div className="flex flex-row items-end gap-4 justify-between">
      <div className="flex flex-col">
        <div className="flex gap-2">
          {label}
          {(spicy || vegan || virgin) && (
            <div>
              {spicy && <span aria-label="épicé">🌶</span>}
              {vegan && <span aria-label="vegan">🌱</span>}
              {virgin && <span aria-label="sans alcool">😇</span>}
            </div>
          )}
        </div>

        <div className="text-gold">{composition}</div>
      </div>
      <div>{price}</div>
    </div>
  );
};
