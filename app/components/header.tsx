import { Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-slate-700 flex items-center place-content-center line">
      <div>
        <div className="text-white ">
          <h3 className="text-2xl pb-5">Olá, eu sou</h3>
          <h1 className="font-semibold text-6xl pb-5 ">Fábio Lopes</h1>
          <h2 className="text-lg pb-5">Desenvolvedor Web</h2>
        </div>
      </div>
      <a className="top-6 right-6 absolute text-yellow-300">
        <Sun />
      </a>
    </section>
  );
};

export default Hero;
