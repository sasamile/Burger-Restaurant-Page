import { cn } from "@/lib/utils";

interface HeaderProps {
  key: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  clasSlider: string;
}

function HeaderCardSlider({
  image,

  title,
  subtitle,
  description,
  clasSlider,
}: HeaderProps) {
  return (
    <div
      className={cn(
        "min-w-full md:h-[88vh] h-full flex items-center justify-center md:clip_path overflow-auto max-md:pt-12 ",
        clasSlider
      )}
    >
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem]">
        <img src={image} alt="buger1" />
        <div className="pb-8">
          <h1 className="text-[40px] font-semibold text-yellow-400 ">
            {subtitle}
          </h1>
          <h1 className="lg:text-[90px] text-7xl font-Ubuntu uppercase leading-[5rem] text-white font-bold w-[50%] flex flex-1">
            {title}
          </h1>

          <p className="mt-[1rem] text-white text-opacity-70 text-[18px]  ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderCardSlider;
