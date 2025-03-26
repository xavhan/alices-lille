import { Title } from "@/components";
import { HugeButtonLink } from "@/components/Buttons";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <br />
      <br />
      <Title>
        Plus rien ici ! mais peut etre cherchais-tu une autre page ?
      </Title>
      <div className="flex justify-center py-20">
        <Image
          src="/icons/mini-boule.png"
          alt="Discoball"
          width="200"
          height="200"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <HugeButtonLink href="/carte">La carte</HugeButtonLink>
        <HugeButtonLink href="/cocktails">Les cocktails</HugeButtonLink>
      </div>
    </div>
  );
}
