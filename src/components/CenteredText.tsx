type CenteredTextProps = {
  children: React.ReactNode;
};
export const CenteredText = ({ children }: CenteredTextProps) => {
  return <div className="text-center flex justify-center">{children}</div>;
};
