import CardsFeatures from "./components/CardsFeature";
import Team from "./components/Chefs/Team";
import Delivery from "./components/Delivery";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import HeaderCardSlider from "./components/HeaderCardSlider";
import Navbar from "./components/Navbar";
import PopularBurgers from "./components/PopularBurgers";
import Reservation from "./components/Reservation";
import Carousel from "./components/carousel";
import { CardsFeature, infoHeaderCarousel } from "./constants";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <header>
        <Carousel
          slidesLenght={infoHeaderCarousel.length}
          autoSlide
          isButtonB={true}
        >
          {infoHeaderCarousel.map((info) => (
            <HeaderCardSlider
              key={info.id}
              image={info.icon}
              title={info.Title}
              subtitle={info.subtitle}
              description={info.description}
              clasSlider={info.clasSlider}
            />
          ))}
        </Carousel>
      </header>
      <main>
        <Feature>
          {CardsFeature.map(({ Clas1, Icon, Title }, index) => (
            <CardsFeatures key={index} Img={Icon} Title={Title} Clas1={Clas1} />
          ))}
        </Feature>
        <PopularBurgers />
        <Delivery />
        <Team />
        <Reservation />
        <div className="pt-[5rem] pb-[5rem]">
          <div className="text-center">
            <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
              Join for hot offfers
            </h1>
            <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              fugit error fugiat nostrum, ullam porro! Optio nobis incidunt eum
              voluptatum voluptatem provident autem ipsa at nesciunt voluptate,
              ea assumenda quaerat?
            </p>
            <div className="flex items-center space-x-2 mt-[3rem] justify-center">
              {/**input */}
              <input
                type="email"
                placeholder="Email Address"
                className="px-5 py-4 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black"
              />
              {/**Subcribe button */}
              <button className="px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200 rounded-md text-white font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
