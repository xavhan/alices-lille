import { ComponentPropsWithRef } from "react";

type TitleProps = ComponentPropsWithRef<"h2"> & {
  children: React.ReactNode;
};

export const Title = ({ className, children, ...rest }: TitleProps) => (
  <h2 className={className + " w-full"} {...rest}>
    {children}
  </h2>
);

// todo: use cn
