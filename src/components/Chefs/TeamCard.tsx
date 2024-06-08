import { motion } from "framer-motion";

interface TeamCardProps {
  Photon: string;
  name: string;
  title: string;
  
}

const TeamCard = ({ Photon, name, title, }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 , scale:1.2 }}
      whileInView={{
        y: [-20, 0],
        scale:1,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 2.5}}
    >
      <img
        src={Photon}
        alt={title}
        height={400}
        width={400}
        className="rounded-2xl mx-auto"
      />
      <h1 className=" text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium uppercase">
        {title}
      </p>
      <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ducimus?
      </p>
    </motion.div>
  );
};

export default TeamCard;
