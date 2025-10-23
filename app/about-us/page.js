import Image from 'next/image';
import AbuFirst from '../../components/AbuFirst';
import Partners from '../../components/Partners';
import Testimonials from '../../components/Testimonials';
import { PlayIcon } from '@heroicons/react/24/solid'
import aboutDesL from '../../public/assets/images/ad1.webp';
import img from '../../public/assets/images/aboutBannerM.webp';
import aboutDesR from '../../public/assets/images/ad2.webp';
import circleImg from '../../public/assets/images/circleimg.webp';
import aboutBannerM from '../../public/assets/images/aboutBannerM.webp';
import aboutBannerc from '../../public/assets/images/bg-m.webp';
import imgB from'../../public/assets/images/bg-blur.webp';
import imgages from '../../public/assets/images/bg-m.webp'
import t1 from '../../public/assets/images/t1.webp';
import t2 from '../../public/assets/images/t2.webp';
import mobileBg from '../../public/assets/images/mobileBg.png';
import t3 from '../../public/assets/images/t3.webp';
import op1 from '../../public/assets/images/op1.webp';
import op2 from '../../public/assets/images/op2.webp';
import op3 from '../../public/assets/images/op1.webp';
import op4 from '../../public/assets/images/op2.webp';
import Newsletter from '@/components/Newsletter';
import { Platypi } from 'next/font/google';


export const metadata ={
  title: 'About Us',
  description:"Shop transparent double sided tape, thin double sided tape, strong double sided tape & 3M double sided tape alternatives at best double sided tape price "
}

const platypi = Platypi({
  weight: ['400'],
  preload: false,
});

export default function AboutUsPage() {
  
  
      return (
        <>
          <section
           
         
          className={`bg-top bg-no-repeat bg-cover bg-center flex items-center justify-center text-center max-[768px]:bg-[url('/assets/images/mobileBg.png')] bg-[url('/assets/images/Background.webp')]`}
            
            // style={{ backgroundImage: `url(${aboutBanner.src})` }} // Replace with your image URL
          >
            {/* <div className="bg-opacity-50 p-6 rounded-md"> */}
            
            <div className='max-w-7xl mx-auto'>
              <h1 className={`${platypi.className} text-4xl font-bold text-white mb-2 pt-20`}>About Us</h1>
            
              <div className="text-justify text-white text-sm leading-relaxed mb-2 text-[16px] font-[500] py-7 px-6 xl:px-0 lg:px-0">
          <p className="mb-4">
        GENWIN is a leader in adhesive solutions, offering top-tier double-sided tapes that cater to a variety of industries, including construction, automotive, packaging, and design. With over a decade of experience, we specialize in delivering innovative and reliable products that simplify bonding processes while enhancing performance and aesthetics.
        </p>
      <p className="mb-4">
       Our commitment to quality has earned us the trust of thousands of satisfied customers worldwide. With a 99% satisfaction rate and 14,000+ positive reviews, we aim to continuously innovate and provide adhesive solutions that exceed industry standards.
        </p>
       <p>
     We collaborate with trusted partners to ensure our products meet the specific needs of diverse applications, from DIY enthusiasts to industrial manufacturers. GENWIN is your one-stop destination for durable, efficient, and high-performance bonding solutions.
     </p>
</div>

              </div>
            {/* </div> */}
          </section>     
            {/* <img src={img}></img> */}
          {/* Second Section - First Intro */}
          <section
          //  style={{ backgroundImage: `url(${aboutusBg}) w-full` }} 
          className="bg-cover bg-center h-[700x]  bg-[url('/assets/images/about_us-bg.webp')]">
        {/* //   className="bg-cover bg-center h-[700px]" 
        //   style={{ backgroundImage: "url('/assets/images/about_us-bg.webp')", height: "716px" }}
        // > */}
            <AbuFirst />              
          </section>      
    
          {/* Third Section - Second Intro */}
          <section className="container max-w-7xl mx-auto px-4 py-8 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-3" >            
            {/* Left Column */}
            <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6">
              <Image
                src={aboutDesL}
                alt="Top Image"
                width={400} // Set proper width
                height={250} // Set proper height
                className="w-full h-auto rounded-md shadow-lg"
              />
              <div className="bg-white rounded-md shadow-md pb-4 p-2">
                <div>
                  <span className="text-[#090909] font-[600] text-[10px] lg:text-12 xl:text-12 flex justify-between py-2">
                    Best Ratings
                    <span className="text-yellow-500 text-10 lg:text-xl xl:text-2xl">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </span>
                  </span>
                </div>
                <p className="text-[#09090980] text-[10px] lg:text-12 xl:text-12 font-[500]">
                  GENWIN products combine unique adhesive formulations with advanced manufacturing...
                </p>
                <Image src={circleImg} width={90} height={50} className="mt-2" alt="Circle Image" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-md shadow-md pb-4 p-2">
                <h4 className="text-black font-[700] text-[10px] lg:text-12 xl:text-12 py-1 border-b">
                  Premium-Quality Adhesive Technology
                </h4>
                <p className="text-[#09090980] font-[500] text-ellipsis bg-[#FFFFFF] text-[10px] lg:text-12 xl:text-12 mt-2">
                  GENWIN double-sided tapes are engineered to outperform traditional bonding solutions...
                </p>
              </div>

              <Image
                src={aboutDesR}
                alt="Bottom Image"
                width={400}
                height={350}
                className="w-full rounded-md shadow-lg h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
              />
            </div>
          </div>

    
            {/* Right Column */}
            <section className="
            bg-cover bg-center py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${imgB})` }}>
            <div className="space-y-4">

              <h2 className={`${platypi.className} text-4xl font-bold text-black mb-2 `}>A Little Bit More About <span className="text-primary">Our Products</span></h2>
              <p className='text-[16px]'>Our double-sided acrylic tape is designed to offer a seamless and robust bonding experience, making it the go-to choice for applications that require high-performance adhesion. Here’s why our tape stands out: </p>
              <p><strong>Product Highlights:</strong></p>
              <ol className="list-decimal list-inside text-primary mb-3">
            <li>
              <strong>Superior Bonding Strength :</strong> 
              <span className="text-gray-700"> GenWin Auto’s double-sided acrylic tape features advanced adhesive technology, ensuring a firm and long-lasting bond across various surfaces, including metal, plastic, glass, wood, and composite materials. This makes it an excellent alternative to traditional mechanical fasteners, such as screws and rivets. </span>
            </li>
            <li>
              <strong>Durability & Weather Resistance :</strong> 
              <span className="text-gray-700"> Unlike conventional tapes that deteriorate over time, our acrylic tapes are designed to withstand extreme temperatures, UV exposure, moisture, and other environmental factors, making them ideal for both indoor and outdoor applications. </span>
            </li>
            <li>
            <strong>Versatility Across Industries :</strong>
            <p className='ml-3'>Our tapes are widely used in:</p>
            <ul className="list-disc list-inside ml-3">
              <li>
                <span>Automotive Industry:</span> 
                <span className="text-gray-700"> Attaching trim, moldings, emblems, and badges without damaging the vehicle surface.</span> 
              </li>
              <li>
                <span>Construction & Architecture:</span> 
                <span className="text-gray-700"> Mounting glass panels, mirrors, and insulation materials securely.</span>
              </li>
              <li>
                <span>Electronics & Appliances:</span> 
                <span className="text-gray-700"> Ensuring strong adhesion in the assembly of devices, displays, and circuit boards.</span>
              </li>
              <li>
                <span>Industrial Manufacturing:</span> 
                <span className="text-gray-700"> Securing components in aerospace, marine, and heavy machinery industries.</span>
              </li>
              <li>
                <span>Home & Office Applications:</span> 
                <span className="text-gray-700"> DIY projects, decorative installations, and furniture assembly.</span>
              </li>
            </ul>
          </li>
            <li>
              <strong>Seamless & Aesthetic Finish :</strong> 
              <span className="text-gray-700"> Unlike screws and bolts, our tape provides a clean and invisible finish, enhancing the aesthetics of any application without compromising strength. </span>
            </li>

            <li>
              <strong>Easy Application & Time Efficiency :</strong> 
              <span className="text-gray-700"> With its user-friendly design, GenWin Auto’s double-sided acrylic tape simplifies the bonding process, reducing assembly time and labor costs significantly.</span>
            </li>
          </ol>
          

<div 
  className="flex flex-col sm:flex-row items-center relative bg-cover bg-center" 
  // style={{ backgroundImage: `url(${imgB.src})` }}
>
  {/* <p className="flex-grow z-10 relative sm:pr-8">
    Our double-sided tapes are designed for both lightweight and heavy-duty applications, offering unmatched durability, aesthetic appeal, and flexibility.
  </p> */}
  {/* <Image
    src={imgB}
    alt="Product"
    className="w-full sm:w-1/2 sm:absolute sm:right-0 sm:top-0 sm:h-full object-cover z-0"
    width={200}
    height={500}
  /> */}
</div>
            </div>
          </section>
          </section>
          


          {/* Fourth Section - Our Partners */}
          <Partners />
          {/* Fifth Section - Customer Testimonials */}
          {/* <section className="py-8">
            <Testimonials />            
          </section> */}
          <Newsletter />
        </>
      );
  }