import Script from "next/script";
import { useId } from "react";

type JsonLdProps = {
  json: any;
};
export const JsonLd = ({ json }: JsonLdProps) => {
  const id = useId();

  return (
    <Script
      id={`json-ld-${json["@type"]}-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...json,
        }),
      }}
    />
  );
};
