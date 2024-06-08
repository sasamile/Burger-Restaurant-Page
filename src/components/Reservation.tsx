import { Phone } from "lucide-react";
import ReservationForm from "./Chefs/ReservationForm";


const Reservation = () => {
  return (
    <div className="pt-[5rem] bg-center bg-cover relative  mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('src/assets/images/bg-black.jpg')]">
      {/**overplay */}
      <div className="absolute w-full h-full bg-[#000000a6] inset-0"/>
      <div className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        {/**text content */}
        <div>
          <h1 className=" text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold font-Ubuntu leading-[3rem] md:leading-[4rem]">
            DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
          </h1>
          <p className="text-white text-[17px] mt-4 text-opacity-50">
            Make online reservations , read restaurant reviews from dinners, and
            earn points toeards free meals OpenTable is a real time online
            reservation.
          </p>
          <div className="flex mt-[2rem] items-center space-x-4">
            <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center flex-col">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
                <h1 className="text-[25px] text-white font-semibold">Quick order 24/7</h1>
                <h1 className="text-yellow-300 text-[30px] font-bold">+0123 456 789</h1>
            </div>
          </div>
        </div>
        {/** Reservation form */}
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
