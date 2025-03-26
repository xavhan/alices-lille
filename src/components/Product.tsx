import { euro } from "@/utils/money";

type ProductProps = {
  label: string;
  description?: string;
  price:
    | number
    | {
        25: number;
        33?: number;
        50: number;
      };
};

export const Product = ({ label, description, price }: ProductProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start text-start">
        <div className="text-red">{label}</div>
        {description && <div className="text-gold">{description}</div>}
      </div>
      {typeof price === "number" ? (
        <div>{euro(price)}</div>
      ) : (
        <div className="flex gap-2 tracking-tight">
          {Object.entries(price).map(([_, p]) => (
            <div className="w-10 text-right">{euro(p)}</div>
          ))}
        </div>
      )}
    </div>
  );
};
