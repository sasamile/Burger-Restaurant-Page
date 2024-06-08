import { dataPopularBurgers } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { ShoppingBagIcon, Star } from "lucide-react";

function PopularBurgers() {
  return (
    <div className="py-12 ">
      <h1 className="heading">
        Our Popular <span className="text-red-800"> Burgers </span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {dataPopularBurgers.map(
              ({ title, imagen, numero, price }, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div key={index} className="bg-white p-6 rounded-lg m-3">
                    <div className="w-[150px] mx-auto h-[150px] flex items-center justify-center">
                      <img
                        src={imagen}
                        alt={title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-[22px] mt-[1.3rem] text-black font-semibold ">
                      {title}
                    </h1>
                    <div className="flex items-center mt-2 space-x-3">
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <Star
                              key={index}
                              className="w-4 h-4 text-yellow-600"
                            />
                          ))}
                      </div>
                      <span className="text-black opacity-80">{numero}</span>
                    </div>
                    <p className="mt-2 text-black text-opacity-70">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex justify-between mt-[1.4rem] items-center">
                      <h1 className="text-2xl font-bold text-red-700">
                        {price}
                      </h1>

                      <button className=" px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white ">
                        <ShoppingBagIcon className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default PopularBurgers;
