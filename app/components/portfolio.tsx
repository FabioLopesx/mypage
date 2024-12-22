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

const useImage = ["restaurante", "oficina", "MobiSeguro", "halloween"];

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
          <CarouselContent className="rounded-xl p-2 md:p-6">
            {useImage.map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <CardContent>
                    <Image
                      src={`/${image}.png`}
                      alt={image}
                      width={1500}
                      height={550}
                      className="justify-self-center rounded-xl object-cover contain-size"
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="border-white bg-green-600 object-center text-white hover:bg-green-700" />
          <CarouselNext className="border-white bg-green-600 text-white hover:bg-green-700" />
        </Carousel>
      </div>
    </section>
  );
}
