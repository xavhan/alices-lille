import { ComponentPropsWithRef } from "react";

type AdditionalTextProps = ComponentPropsWithRef<"div"> & {
  children: React.ReactNode;
};

export const AdditionalText = ({
  className,
  children,
  ...rest
}: AdditionalTextProps) => (
  <div className={className + " w-full text-gold text-right"} {...rest}>
    {children}
  </div>
);

// todo: use cn
