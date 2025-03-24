import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

type HugeButtonLinkProps = ButtonLinkProps;
export const HugeButtonLink = ({ ...rest }: HugeButtonLinkProps) => {
  return (
    <ButtonLink
      {...rest}
      className="p-4 rounded-full w-full border-2 border-gold hover:shadow-md"
    />
  );
};

type ButtonLinkProps = ComponentPropsWithRef<"button"> & {
  href: string;
};
export const ButtonLink = ({ href, ...rest }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <button {...rest} />
    </Link>
  );
};
