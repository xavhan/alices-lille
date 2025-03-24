import { Header, Title } from "@/components";
import * as COCKTAILS from "@/data/cocktails";
import { Metadata } from "next";
import { CocktailsFiltrableList } from "./CocktailsFiltrableList";

export const metadata: Metadata = {
  title: "Alices | Cocktails",
  description:
    "Tous les cocktails du Alices, des plus classiques aux plus aventureux",
};
const CocktailsArray = Object.values(COCKTAILS)
  .filter((c) => c.availableEveryday)
  .sort((a, b) => a.label.localeCompare(b.label));

export default function CockailsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Header>
        <Title>Tous nos cocktails</Title>
      </Header>

      <CocktailsFiltrableList cocktails={CocktailsArray} />
    </div>
  );
}
