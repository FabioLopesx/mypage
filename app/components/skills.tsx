import { Button } from "@/app/components/ui/button";

const Skills = () => {
  return (
    <section id="skill" className="h-full bg-bgMain xl:h-screen">
      <div className="text-white">
        <h1 className="pt-10 text-center text-3xl font-semibold lg:px-[150px] lg:pl-[300px] lg:text-5xl">
          Minhas habilidades
        </h1>
      </div>
      <div className="relative grid gap-6 p-7 pt-11 text-justify tracking-[0.05em] lg:pl-[300px] lg:pr-[100px] xl:flex">
        <div className="rounded-xl bg-bgSecond p-4 text-white transition-all delay-150 duration-200 hover:scale-110 hover:bg-hoverColor xl:min-h-[500px] 2xl:max-h-[420px]">
          <h3 className="pb-6 text-xl lg:text-3xl">HTML & CSS </h3>
          <p className="pb-5 text-base lg:text-lg">
            Possuo experiência em desenvolvimento web, com foco em HTML e CSS.
            Tenho habilidades sólidas na criação de estruturas semânticas e na
            estilização de páginas web, garantindo um design responsivo e
            atraente. Além disso, estou familiarizado com boas práticas e
            otimizações para a web, assegurando um desempenho eficiente.
          </p>
          <Button className="bg-green-500 p-3 text-white hover:bg-green-700 xl:absolute">
            Ver mais
          </Button>
        </div>

        <div className="rounded-xl bg-bgSecond p-4 text-white transition-all delay-150 duration-200 hover:scale-110 hover:bg-hoverColor xl:min-h-[500px] 2xl:max-h-[420px]">
          <h3 className="pb-6 text-xl lg:text-3xl">JavaScript</h3>
          <p className="pb-5 text-base lg:text-lg">
            Sou apto para criação de funcionalidades dinâmicas e interativas.
            Minhas habilidades incluem a manipulação do DOM, desenvolvimento de
            aplicações usando frameworks como React, e implementação de lógica
            de negócios complexa no lado do cliente. Além de estar familiarizado
            com práticas de programação assíncrona.
          </p>
          <Button className="bg-green-500 p-3 text-white hover:bg-green-700 xl:absolute">
            Ver mais
          </Button>
        </div>

        <div className="rounded-xl bg-bgSecond p-4 text-white transition-all delay-150 duration-200 hover:scale-110 hover:bg-hoverColor xl:min-h-[500px] 2xl:max-h-[420px]">
          <h3 className="pb-6 text-xl lg:text-3xl">React</h3>
          <p className="pb-5 text-base lg:text-lg">
            Estou ampliando meus conhecimento para a criação de componentes
            reutilizáveis, o uso de hooks, roteamento com React Router e a
            integração de APIs RESTful para construir interfaces de usuário
            dinâmicas e responsivas. Além de seguir as melhores práticas de
            desenvolvimento, como o uso de testes unitários e integração
            contínua.
          </p>
          <Button className="bg-green-500 p-3 text-white hover:bg-green-700 xl:absolute">
            Ver mais
          </Button>
        </div>
      </div>
      <div className="px-5 pb-6 lg:pl-[300px] lg:pr-6">
        <div className="relative mx-auto max-w-[800px] rounded-xl bg-bgSecond">
          <h2 className="pb-3 pt-10 text-center text-2xl text-white lg:text-3xl">
            Tem algum projeto em mente?
          </h2>
          <p className="text-center text-white">
            Estou disponível para avaliar seu projeto
          </p>

          <div className="flex justify-center pb-10">
            <Button className="mr-4 mt-4 bg-green-500 p-3 text-white hover:bg-green-700">
              Entre em contato
            </Button>
            <Button className="mt-4 bg-green-500 p-3 text-white hover:bg-green-700">
              Me envie um e-mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
