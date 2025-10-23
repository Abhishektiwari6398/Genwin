import Image from "next/image";
import op1 from "../public/assets/images/op1.webp";
import op2 from "../public/assets/images/op2.webp";
import op3 from "../public/assets/images/op1.webp";
import op4 from "../public/assets/images/op2.webp";
import Carousel from "./Craousel";
import CustomCarousel from "./Craousel";

export default function Partners() {
  const partners = [
    { name: "Abc", imagePath: op1 },
    { name: "Abc", imagePath: op2 },
    { name: "Abc", imagePath: op3 },
    { name: "Abc", imagePath: op4 },
  ];

  return (
    <section className="bg-primary  w-full sticky">
      <div className=" hidden md:block text-center w-full">
        {/* Grid layout for larger screens */}
        <div className="w-full ">
          <CustomCarousel partners={partners} />
        </div>
      </div>
      {/* Horizontal scroll for mobile */}
      <div className="md:hidden overflow-x-auto">
        <CustomCarousel partners={partners} />
      </div>
    </section>
  );
}
