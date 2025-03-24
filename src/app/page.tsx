import type { Metadata } from "next";
import { CenteredText, Header, JsonLd, Title } from "@/components";
import { FACEBOOK_URL, GOOGLE_REVIEW_URL, INSTAGRAM_URL } from "@/data/links";
import { timerange } from "@/utils/time";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";
import { HugeButtonLink } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "Alices | Lille",
  description:
    "Situé entre la grand place et l'opéra de Lille, Alices vous accueille pour un café, un verre de vin nature, une pinte de bière locale ou même faire la fête le soir dans son Mini Club. Réservation possible sur Instagram ou Facebook.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <HugeButtonLink href="/carte">Découvrir la carte</HugeButtonLink>
        <HugeButtonLink href="/cocktails">Nos cocktails</HugeButtonLink>
        {/* <HugeButtonLink href="/events">Tous nos events</HugeButtonLink> */}
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
            <Link target="_blank" href={INSTAGRAM_URL} className="underline">
              Instagram
            </Link>
            •
            <Link target="_blank" href={FACEBOOK_URL} className="underline">
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
            <Link
              target="_blank"
              href={GOOGLE_REVIEW_URL}
              className="underline"
            >
              Ça vous a plu ? Faites-le savoir !
            </Link>
            ⭐
          </div>
        </CenteredText>
      </div>

      <div className="flex justify-center py-8">
        <picture>
          <source
            srcSet="/icons/alices-dark.png"
            media="(prefers-color-scheme: dark)"
          />
          <img src="/icons/alices.png" alt="Alice et Alice" width="80" />
        </picture>
      </div>

      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Alices",
          description:
            "Situé entre la grand place et l'opéra de Lille, Alices vous accueille pour un café, un verre de vin nature, une pinte de bière locale ou même faire la fête le soir dans son Mini Club. Réservation possible sur Instagram ou Facebook.",
          currenciesAccepted: "EUR",
          openingHours: [
            "Mo 16:00-23:00",
            "Tu-We 16:00-00:00",
            "Tu-Fr 16:00-01:00",
            "Sa 15:00-01:00",
          ],
          address: "12 rue des 3 couronnes, 59000 Lille, France",
          paymentAccepted: "Cash, Credit Card",
          latitude: "50.6375004",
          longitude: "3.0638824",
          maximumAttendeeCapacity: 50,
          url: "https://alices-lille.com",
        }}
      />
    </div>
  );
}
