import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="relative h-screen bg-bgMain pt-10">
      <h3 className="m-auto text-center text-3xl text-white md:text-5xl lg:pl-[300px]">
        Entre em contato
      </h3>
      <div className="items-center gap-3 p-5 pt-8 md:grid lg:grid-cols-1 lg:pl-[300px]">
        <div className="m-auto space-y-8 text-white">
          <h1 className="pb-5 text-center text-xl md:text-2xl">
            Vamos conversar sobre seu projeto!
          </h1>
        </div>
        <div className="m-auto flex max-w-[1000px] flex-col gap-3 md:min-w-[700px]">
          <input
            type="text"
            placeholder="Seu nome"
            className="h-[50px] w-full rounded-sm p-2 focus:outline-none focus:ring-4 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="h-[50px] w-full rounded-sm p-2 hover:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Assunto"
            className="h-[50px] w-full rounded-sm p-2 hover:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500"
          />
          <textarea
            placeholder="Sua mensagem"
            className="h-[150px] w-full resize-none rounded-sm p-2 hover:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500"
          />
          <Button className="bg-green-500 p-3 text-white hover:bg-green-700">
            Enviar
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-green-600 text-center text-white hover:bg-green-700 lg:pl-[300px]">
        <p className="p-3"> Fábio Lopes - © 2024 </p>
      </div>
    </section>
  );
};

export default Contact;
