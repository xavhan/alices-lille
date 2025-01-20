import * as COCKTAILS from "./../products/cocktails";
import type { Cocktail } from "./../products/cocktails";

const CocktailsArray = Object.values(COCKTAILS)
  .filter((c) => c.availableEveryday)
  .sort((a, b) => a.label.localeCompare(b.label));

export default function CockailsPage() {
  return (
    <div className="flex flex-col max-w-[300px]">
      <Title>Tous nos cocktails</Title>

      <div>
        <select name="" id="">
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>
      </div>

      <ul className="flex flex-col gap-2">
        {CocktailsArray.map((c) => (
          <li key={c.label}>
            <Cocktail {...c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl">{children}</h2>
);

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
