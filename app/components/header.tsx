import { Button } from "@/app/components/ui/button";
import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <section id="home" className="z-10 bg-bgMain min-[380px]:h-screen">
      <div className="h-full">
        <div className="absolute h-full w-full overflow-hidden">
          <div className="absolute right-[-10%] top-[-20%] h-[110vh] w-[110vh] rounded-full bg-bgSecond shadow-lg shadow-green-700 xl:top-[-20%] xl:h-[100vh] xl:w-[100vh]"></div>
        </div>
        <div className="relative space-x-5 space-y-5 pt-20 text-white md:pl-[120px] lg:pl-[450px] lg:pt-[150px]">
          <h3 className="pl-5 text-3xl">Olá, eu sou</h3>
          <h1 className="text-7xl font-semibold">Fábio Lopes</h1>
          <h3 className="text-xl lg:text-2xl">Desenvolvedor Web</h3>
          <p className="max-w-[400px] lg:text-xl min-[1500px]:max-w-[600px]">
            Apesar de estar começando na área de desenvolvimento web, meu
            entusiasmo, capacidade de adaptação e desejo de agregar valor vai se
            tornar uma adição promissora para a equipe!
          </p>
          <p>Venha e conheça um pouco mais sobre mim</p>

          <ArrowDown size={28} />
          <Button className="mt-5 h-[45px] w-[150px] bg-green-600 text-base tracking-[0.1em] transition-all delay-100 hover:scale-110 hover:bg-green-700">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
