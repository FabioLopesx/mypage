"use client";
import { useEffect } from "react";
import { Separator } from "@/app/components/ui/separator";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const SideMenu = () => {
  const [navbar, setNavbar] = useState(true);

  const updateSizeScreen = () => {
    const screenSize = window.innerWidth;
    if (screenSize > 1024) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    updateSizeScreen();
    window.addEventListener("resize", updateSizeScreen);
    return () => window.removeEventListener("resize", updateSizeScreen);
  }, []);

  return (
    <>
      <button
        className="fixed right-6 top-6 z-30 cursor-pointer font-bold text-green-500 lg:hidden"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? <Menu size={30} /> : <X size={30} />}
      </button>

      <section>
        <header
          className={`fixed z-30 h-full w-[250px] bg-bgSecond lg:block ${navbar ? "left-[-100%]" : "left-[0]"} transition-all delay-150 duration-200`}
        >
          <div className="mb-[85px] h-[250px] w-full">
            <div className="absolute left-[-40px] top-[-170px] z-[-1] h-72 w-[291px] rounded-full bg-green-500"></div>
            <div>
              <Image
                src={"/Iam.png"}
                width={120}
                height={120}
                alt="fabio"
                className="mx-auto mt-12 justify-center rounded-full"
              />
              <div className="py-2 text-center tracking-[0.2em] text-white">
                FÁBIO LOPES
              </div>
            </div>
          </div>

          <div className="w-[250px] text-center text-sm text-white">
            <ul className="space-y-2 tracking-[0.2em]">
              <li className="hover:text-green-700">
                <a href="#home">HOME</a>
              </li>
              <Separator className="bg-slate-900" />
              <li className="hover:text-green-700">
                <a href="#about">SOBRE</a>
              </li>
              <Separator className="bg-slate-900" />
              <li className="hover:text-green-700">
                <a href="#skill">HABILIDADES</a>
              </li>
              <Separator className="bg-slate-900" />
              <li className="hover:text-green-700">
                <a href="#portfolio">PORTFÓLIO</a>
              </li>
              <Separator className="bg-slate-900" />
              <li className="hover:text-green-700">
                <a href="#contact">CONTATO</a>
              </li>
            </ul>
          </div>

          <div className="flex w-[250px] justify-center space-x-5 px-5 pt-[320px] text-white">
            <Link href="https://github.com/FabioLopesx" target="_blank">
              <BsGithub className="hover:text-green-700" size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fabio-lopes-208649164/"
              target="_blank"
            >
              <BsLinkedin className="hover:text-green-700" size={22} />
            </Link>
            <Link href="https://www.instagram.com/fabiolopesx/" target="_blank">
              <FaInstagram className="hover:text-green-700" size={22} />
            </Link>
          </div>
        </header>
      </section>
    </>
  );
};

export default SideMenu;
