import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";

const MenuLateral = () => {
  return (
    <header className="w-[250px] h-full bg-slate-900 fixed z-10 ">
      <div className="h-[250px] w-full">
        <div className=" h-[280px] w-[249px] bg-green-500 top-[-180px] rounded-full absolute z-[-1]">
          <div>
            <Image
              src={"/images/fabio.jpg"}
              width={250}
              height={250}
              alt="fabio"
            />
            <div className="text-white text-center py-10">Fábio Lopes</div>
          </div>
        </div>
      </div>

      <div className="w-[250px] h-[450px] text-white text-center mt-20 ">
        <ul className="space-y-2">
          <li>
            <a href="">Home</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li>
            <a href="">Sobre</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li>
            <a href="">Serviços</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li>
            <a href="">Portfólio</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
      <div className="w-[250px] h-[50px] flex text-white gap-1 items-center justify-around ">
        <a href="">
          <GitHubLogoIcon />
        </a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </header>
  );
};

export default MenuLateral;
