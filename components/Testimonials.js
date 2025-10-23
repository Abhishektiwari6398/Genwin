import Image from "next/image";
import { PlayIcon } from '@heroicons/react/24/solid';
import t1 from '../public/assets/images/t1.webp';
import t2 from '../public/assets/images/t2.webp';
import t3 from '../public/assets/images/t3.webp';
import { Platypi } from 'next/font/google';


const platypi = Platypi({
  weight: ['600','400','500'], 
  preload: false,
});

const TData = [
  {
    name: 'Rajesh M., Auto Body Shop Owner – Mumbai',
    desc: "Genwin double-sided tape has made our bumper and trim repairs faster and cleaner. We use it for sticking side moldings, number plates, and emblems. It holds up even in Mumbai's humid weather and saves us from using messy adhesives.",
    imagePath: "https://5.imimg.com/data5/GLADMIN/Default/2022/10/LH/KR/LO/96571/youtube-500x500.jpg",
  },
  {
    name: 'Neha S., Car Accessories Retailer – Delhi',
    desc: "Customers love the neat installation we offer with Genwin tape. From fixing door visors to installing dashboard accessories, this tape is super strong and doesn’t damage car surfaces. It's a game-changer for our business!",
    imagePath: "https://content.jdmagicbox.com/v2/comp/delhi/i8/011px120.x120.101204160000.u3i8/catalogue/auto-square-noida-sector-16-noida-car-repair-and-services-honda-srprz56fm3.jpg", 
  },
  {
    name: 'Amit T., Automotive Assembly Engineer – Pune',
    desc: "In our plant, we rely on Genwin double-sided tapes for attaching lightweight components during the assembly of dashboards and interior trims. It maintains bond strength even during high temperatures inside the vehicle. Highly recommended for industrial use.",
    imagePath: "https://c8.alamy.com/comp/ET0NXF/car-manufacture-assembly-line-man-working-india-indian-car-factory-ET0NXF.jpg", 
  },
];


export default function Testimonials(){

    return(
        <div className="max-w-7xl mx-auto p-5 rounded-2xl">
          <div className="text-center lg:mb-10 xl:mb-10 mb-6">
             <h2 className={`text-30 lg:text-40 xl:text-40 font-[400] lg:text-center xl:text-center text-start ${platypi.className} text-gray-800`}>Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TData.map((testimonial, index) => (
            <div key={index} className="relative group overflow-hidden rounded-md">
              {/* Image with transition effect */}
              <div className="relative w-full h-64 overflow-hidden rounded-md group">
                <img
                  src={testimonial.imagePath}
                  alt="Image 3"
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
                {/* Overlay Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center border border-[#ee313c33] rounded-md">
                  <button
                    className="p-4 rounded-full shadow-lg mt-[23%]  lg:mt-[10%] xl:mt-[10%]  lg:ml-64 xl:ml-64 ml-[70%] bg-[rgba(238,49,60,0.15)] backdrop-blur-[26.514286041259766px] transition-colors duration-300 ease-in-out  group-hover:bg-[#E52D38] overflow-hidden"
                  >
                    <PlayIcon className="text-white w-5 h-5" />
                  </button>
                </div> */}
              {/* Text Section */}
              <div className='bg-white p-4 rounded-md'>
                            <h3 className="mt-4  lg:text-20 xl:text-20 font-[600] text-start text-black group-hover:text-[#E52D38]">{testimonial.name}</h3>
                              <p className="mt-2 text-188118 text-start text-14 lg:text-16 xl:text-16 font-[500]">
                              {testimonial.desc}
                              </p>
              </div>
            </div>
          ))}
        </div>

        </div>
    );
}