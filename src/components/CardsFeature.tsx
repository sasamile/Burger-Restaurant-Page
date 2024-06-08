import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardsFeatureProps {
  Img: string;
  Title: string;
  Clas?: string;
  Clas1?: string;
}
const variants = {
  Img1: { x: [80, -0], opacity: 1 },
  Img2: { opacity: 1 },
  Img3: { x: [-80, 0], opacity: 1 },
};

const CardsFeatures = ({ Img, Title, Clas1 }: CardsFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={
        Clas1 === "Img1"
          ? variants.Img1
          : Clas1 === "Img2"
          ? variants.Img2
          : variants.Img3
      }
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <div
        className={cn(
          "p-6 hover:bg-white rounded-lg transition-all duration-200",
          Title === "Your Opinion is Important" && "lg:translate-y-[3rem]"
        )}
      >
        <img src={Img} alt="burger" className="rounded-3xl" />
        <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
          {Title}
        </h1>
        <p className="mt-[.2rem] text-black text-opacity-60 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          suscipit delectus voluptate ullam vero eos molestias, reiciendis
          aspernatur repellendus exercitationem.
        </p>
      </div>
    </motion.div>
  );
};

export default CardsFeatures;
