import { Header, Title } from "@/components";
import { HugeButtonLink } from "@/components/Buttons";
import { FACEBOOK_URL, GOOGLE_REVIEW_URL, INSTAGRAM_URL } from "@/data/links";

export default function LinksPage() {
  return (
    <div className="flex flex-col gap-4">
      <Header>
        <Title className="text-center">Liens</Title>
      </Header>

      <HugeButtonLink href="/carte">La carte</HugeButtonLink>
      <HugeButtonLink href="/cocktails">Nos cocktails</HugeButtonLink>
      <HugeButtonLink href={INSTAGRAM_URL} target="_blank">
        Insta
      </HugeButtonLink>
      <HugeButtonLink href={FACEBOOK_URL} target="_blank">
        Facebook
      </HugeButtonLink>
      <HugeButtonLink href={GOOGLE_REVIEW_URL} target="_blank">
        Avis Google
      </HugeButtonLink>
      <HugeButtonLink href="/">Le site</HugeButtonLink>
    </div>
  );
}
