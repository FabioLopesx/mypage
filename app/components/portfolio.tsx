import * as React from "react";
import { CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Image from "next/image";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="h-[80vh] content-baseline bg-bgMain p-10 lg:h-screen lg:pl-[300px]"
    >
      <h1 className="pb-8 text-center text-3xl text-white md:text-5xl">
        Meus projetos
      </h1>
      <div className="px-2 shadow-lg shadow-green-700 md:px-8">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div>
                <CardContent className="rounded-xl p-2 md:p-6">
                  <h2 className="text-center text-xl text-white sm:text-3xl">
                    Página de Halloween
                  </h2>
                  <div className="py-3">
                    <Image
                      width="1500"
                      height="550"
                      src={"/halloween.png"}
                      alt="Halloween"
                      className="justify-self-center rounded-xl object-cover contain-size"
                    />
                  </div>
                </CardContent>
              </div>
            </CarouselItem>

            <CarouselItem>
              <CardContent className="rounded-xl p-2 md:p-6">
                <h2 className="text-center text-xl text-white sm:text-3xl">
                  Projeto Oficina
                </h2>
                <div className="py-3">
                  <Image
                    src={"/oficina.png"}
                    width="1500"
                    height="550"
                    alt="Oficina"
                    className="justify-self-center rounded-xl object-cover contain-size"
                  />
                </div>
              </CardContent>
            </CarouselItem>

            <CarouselItem>
              <CardContent className="rounded-xl p-2 md:p-6">
                <h2 className="text-center text-xl text-white sm:text-3xl">
                  Replica IFood
                </h2>
                <div className="py-3">
                  <Image
                    src={"/restaurante.png"}
                    width="1500"
                    height="550"
                    alt="restaurante"
                    className="justify-self-center rounded-xl object-cover contain-size"
                  />
                </div>
              </CardContent>
            </CarouselItem>

            <CarouselItem>
              <div>
                <CardContent className="max-h-[360px] rounded-xl p-2 md:p-6">
                  <h2 className="text-center text-xl text-white sm:text-3xl">
                    Mobi Seguro
                  </h2>
                  <div className="py-3">
                    <Image
                      src={"/MobiSeguro.png"}
                      width="1500"
                      height="550"
                      alt="Mobi Seguro"
                      className="justify-self-center rounded-xl object-cover contain-size"
                    />
                  </div>
                </CardContent>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="border-white bg-green-600 object-center text-white hover:bg-green-700" />
          <CarouselNext className="border-white bg-green-600 text-white hover:bg-green-700" />
        </Carousel>
      </div>
    </section>
  );
}
