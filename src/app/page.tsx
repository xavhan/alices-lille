import { Header, Title } from "@/components";
import { FACEBOOK_URL, GOOGLE_REVIEW_URL, INSTAGRAM_URL } from "@/data/links";
import { timerange } from "@/utils/time";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <HugeButtonLink href="/carte">Découvrir la carte</HugeButtonLink>
        <HugeButtonLink href="/cocktails">Nos cocktails</HugeButtonLink>
        <HugeButtonLink href="/events">Tous nos events</HugeButtonLink>
      </div>

      <div className="flex flex-col gap-4">
        <Header>
          <Title className="text-center">Horaires d'ouverture</Title>
        </Header>

        <CenteredText>
          Lundi : {timerange(["16:00", "23:00"])}
          <br />
          Mardi, Mercredi : {timerange(["16:00", "00:00"])}
          <br />
          Jeudi, Vendredi : {timerange(["16:00", "1:00"])}
          <br />
          Samedi : {timerange(["15:00", "1:00"])}
        </CenteredText>
      </div>

      <div className="flex flex-col gap-4">
        <Header>
          <Title className="text-center">Réseaux sociaux</Title>
        </Header>

        <CenteredText>
          <div className="flex flex-row gap-2">
            <Link target="_blank" href={INSTAGRAM_URL}>
              Instagram
            </Link>
            •
            <Link target="_blank" href={FACEBOOK_URL}>
              Facebook
            </Link>
          </div>
        </CenteredText>
      </div>

      <div className="flex flex-col gap-4">
        <Header>
          <Title className="text-center">Soutien</Title>
        </Header>

        <CenteredText>
          <div className="flex flex-row gap-2">
            ⭐
            <Link target="_blank" href={GOOGLE_REVIEW_URL}>
              Ça vous a plu ? Faites-le savoir !
            </Link>
            ⭐
          </div>
        </CenteredText>
      </div>
    </div>
  );
}

type HugeButtonLinkProps = ButtonLinkProps;
const HugeButtonLink = ({ ...rest }: HugeButtonLinkProps) => {
  return <ButtonLink {...rest} className="p-4 border rounded-full w-full" />;
};

type ButtonLinkProps = ComponentPropsWithRef<"button"> & {
  href: string;
};
const ButtonLink = ({ href, ...rest }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <button {...rest} />
    </Link>
  );
};

type CenteredTextProps = {
  children: React.ReactNode;
};
const CenteredText = ({ children }: CenteredTextProps) => {
  return <div className="text-center flex justify-center">{children}</div>;
};
