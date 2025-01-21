type HeaderProps = {
  children: React.ReactNode;
};
export const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <hr />
      <div className="flex flex-row items-center justify-between py-2">
        {children}
      </div>
      <hr />
    </div>
  );
};
