import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const MenuLateral = () => {
  return (
    <header className="w-[250px] h-full bg-slate-900 fixed z-10 ">
      <div className="h-[250px] w-full mb-[85px]">
        <div className=" h-72 w-[291px] bg-green-500 left-[-40px] top-[-170px] rounded-full absolute z-[-1]"></div>
        <div>
          <Image
            src={"/Iam.png"}
            width={120}
            height={120}
            alt="fabio"
            className="justify-center mx-auto rounded-full mt-12"
          />
          <div className="text-white text-center py-2  tracking-[0.2em]">
            FÁBIO LOPES
          </div>
        </div>
      </div>

      <div className="w-[250px] text-white text-center text-sm ">
        <ul className="space-y-2 tracking-[0.2em]">
          <li className="hover:text-slate-400 ">
            <a href="">HOME</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li className="hover:text-slate-400">
            <a href="">SOBRE</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li className="hover:text-slate-400">
            <a href="">SERVIÇOS</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li className="hover:text-slate-400">
            <a href="">PORTFÓLIO</a>
          </li>
          <Separator className="bg-slate-700 " />
          <li className="hover:text-slate-400">
            <a href="">CONTATO</a>
          </li>
        </ul>
      </div>

      <div className="w-[250px] flex justify-center  text-white space-x-5 px-5 pt-[350px] ">
        <a href="">
          <BsGithub className="hover:text-slate-400" size={22} />
        </a>
        <a href="">
          <BsLinkedin className="hover:text-slate-400" size={22} />
        </a>
        <a href="">
          <FaInstagram className="hover:text-slate-400" size={22} />
        </a>
      </div>
    </header>
  );
};

export default MenuLateral;
