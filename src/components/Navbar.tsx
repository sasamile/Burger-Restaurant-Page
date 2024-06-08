import { BadgePoundSterling } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const navLinks = [
  { id: 1, title: "Home", href: "/home" },
  { id: 2, title: "Shop", href: "/shop" },
  { id: 3, title: "Menu", href: "/menu" },
  { id: 4, title: "Blog", href: "/blog" },
  { id: 5, title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [color, setColor] = useState("white")
  const scrollY = useMotionValue(0);
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setBackgroundColor("white");
        setColor("black")
        
      } else {
        setBackgroundColor("transparent");
        setColor("white")
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className="h-[12vh] fixed inset-0 z-50 "
        initial={{ backgroundColor: "transparent", color:"white"}}
        animate={{backgroundColor , color , x:[-80,0]}}
        style={{ y: scrollY }}
        translate="yes"
        transition={{ duration: 2.5 }}
      >
        <div className="sm:w-[90%] w-[95%] mx-auto flex h-full items-center justify-between ">
          {/**Logo */}
          <div className="flex items-center space-x-2">
            <BadgePoundSterling className="w-[1.2rem] h-[1.4rem] sm:w-[2rem] sm:h-[2rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold font-Ubuntu">
              BurgerKint
            </h1>
          </div>
          {/**Nav Links */}
          <ul className="hidden lg:flex items-center space-x-10">
            {navLinks.map((nav) => (
              <motion.li
                whileHover={{ scale: 1.2 }}
                key={nav.id}
                className="text-[16px] font-semibold hover:text-orange-600"
              >
                <a href={nav.href}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
