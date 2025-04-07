import { euro } from "@/utils/money";

type ProductProps = {
  label: string;
  description?: string;
  price?:
    | number
    | {
        25: number;
        33?: number;
        50: number;
      };
  abv?: number;
};

export const Product = ({ label, description, price, abv }: ProductProps) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex flex-col items-start text-start">
        <div className="text-black flex gap-2">
          {label}
          {abv && <div className="text-black">{abv}º</div>}
        </div>
        {description && <div className="text-gold">{description}</div>}
      </div>
      {!price ? null : typeof price === "number" ? (
        <div>{euro(price)}</div>
      ) : (
        <div className="flex gap-2 tracking-tight">
          {Object.entries(price).map(([_, p], i) => (
            <div className="w-10 text-right" key={i}>
              {euro(p)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
