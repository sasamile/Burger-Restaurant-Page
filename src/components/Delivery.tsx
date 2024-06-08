import { DeliveryImg } from "@/assets/images";
import { motion } from "framer-motion";
import { Bike, DoorOpen, FolderOpenDot } from "lucide-react";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem] ">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/**Imagen */}
        <motion.div
          transition={{ duration: 3 }}
          whileInView={{
            x: [-100, 0],
          }}
          viewport={{ once: true }}
        >
          <img src={DeliveryImg} alt="deliveryImg" />
        </motion.div>
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] uppercase font-bold text-gray-900 md:leading-[4rem] leading-[3rem] ">
            Your <span className="text-red-800"> Favorite burger</span> on the
            way!
          </h1>
          <p className="text-black opacity-60 mt-8 text-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            similique aliquam. Esse expedita vel aliquid sed ex eius ipsam
            deleniti!
          </p>
          {/**Inconos */}
          <div>
            <div className="flex items-center space-x-3 mt-[1rem] ">
              <Bike className="w-[2rem] h-[2rem] text-red-700" />
              <h1 className="text-[18px] text-black font-medium">
                Delivery in 30 minutes
              </h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem] ">
              <FolderOpenDot className="w-[2rem] h-[2rem] text-red-700" />
              <h1 className="text-[18px] text-black font-medium">
                Free shipping from 75$
              </h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem] ">
              <DoorOpen className="w-[2rem] h-[2rem] text-red-700" />
              <h1 className="text-[18px] text-black font-medium">
                Delivery on your Doorstep
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
