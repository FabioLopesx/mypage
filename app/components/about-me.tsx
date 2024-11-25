import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="h-full bg-bgMain xl:h-screen">
      <div className="pt-10 text-white">
        <h1 className="pb-10 text-center text-3xl font-semibold lg:text-5xl">
          Sobre mim!!
        </h1>
        <div className="grid pt-6">
          <Image
            src={"/astro.jpg"}
            width={450}
            height={450}
            alt="rocket"
            className="justify-self-center rounded-full"
          />

          <div className="mx-4 mt-11 bg-bgSecond text-justify lg:ml-[300px] lg:mr-[150px]">
            <div className="center m-auto max-w-[1200px] space-y-5 p-5">
              <h3 className="text-lg lg:text-xl">
                Um apaixonado por desenvolvimento Web.
              </h3>
              <p className="text-lg lg:text-xl">
                Atualmente estou cursando análise e desenvolvimento de sistemas
                pela Multivix, e estou em busca de uma oportunidade para
                ingressar no mercado de trabalho.
              </p>
              <p className="text-lg lg:text-xl">
                Sou um iniciante apaixonado por programação, sempre em busca de
                aprender e melhorar minhas habilidades. Estou explorando o
                ecossistema do React, Next.js e Node.js.
              </p>
              <p className="text-lg lg:text-xl">
                Estou sempre em busca de novos desafios e oportunidades para
                aprimorar minhas habilidades e conhecimentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
