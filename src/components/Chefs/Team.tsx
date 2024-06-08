import { DatosChefs } from "./datosChefs";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        MEET Our expert <span className="text-red-800">Chefs</span>
      </h1>

      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {/**Team Card */}

        {DatosChefs.map(({ Photo, id, name, title }) => (
          <TeamCard key={id} Photon={Photo} name={name} title={title}  />
        ))}
      </div>
    </div>
  );
};

export default Team;
