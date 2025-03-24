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
  target?: string;
};
export const ButtonLink = ({ href, target, ...rest }: ButtonLinkProps) => {
  return (
    <Link href={href} target={target}>
      <button {...rest} />
    </Link>
  );
};
