import { BadgePoundSterling, Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        {/**1st part */}
        <div>
          {/**Logo */}
          <div className="flex items-center text-white space-x-2">
            <BadgePoundSterling className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">
              BurgerKint
            </h1>
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            commodi dolorum molestiae reiciendis
          </p>
          <p className="mt-[1rem] text-white">support@example.com</p>
          <p className="text-red-300 text-[19px] font-bold">+0123 456 789</p>
        </div>
        {/** 2nd part*/}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Products
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Chicken Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Beef Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Crispy Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Clasic Burger
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Delight Burger
          </p>
        </div>
        {/** 3nd part*/}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Link
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Home
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            About
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Menu
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Products
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-red-300 transition-all duration-200 cursor pointer w-filt">
            Newsletter
          </p>
        </div>
        {/**4th part */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] uppercase text-white">
            Opening Hours
          </h1>
          <p className="text-white text-[18px]">
            Monday - Friday : <span className="text-red-300">8am - 4pm</span>
          </p>
          <p className="text-white text-[18px]">
            Saturday : <span className="text-red-300">8am - 12am</span>
          </p>
          {/**social */}
          <div className="flex mt-[2rem] items-center space-x-6 ">
            <Facebook className="w-[1.5rem] h-[1.5rem] text-blue-600" />
            <Instagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
            <Twitter className="w-[1.5rem] h-[1.5rem] text-blue-300" />
          </div>
        </div>
      </div>
      {/**CopyRigh */}
      <p className="text-center text-white opacity-50 mt-[1.5rem]">
        Copyright © 2024 <span className="text-red-300">WebDev Warriors</span>.
        All rights reserved
      </p>
    </div>
  );
};

export default Footer;
