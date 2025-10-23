// components/Footer.js
"use client";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "../public/assets/images/genwinwhitelogo.png";
import SVG from "../public/assets/images/heading.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1E1A1A] text-white pt-4 justify-between ">
      {/* First Row */}
      <div className=" max-w-7xl lg:max-w-0xl xl:max-w-0xl container  mx-auto   mb-3  flex flex-col lg:flex xl:flex-row lg:flex-row  justify-between  ">
        {/* Column 1: Company Info */}

        <div className="ml-2 w-[310px] sm:w-[350px] md:w-[350px] lg:w-[800px] ">
          <Image src={logoWhite} width={191} height={55} alt="Logo Footer" />
          {/* <p className="mb-4 text-sm sm:text-base mt-5"> */}
          <p className="text-sm sm:text-base lg:text-base xl:text-base leading-relaxed  mt-3 font-[500] p-2  lg:text-justify xl:text-justify font-['Montserrat'] ">
            GENWIN is committed to providing innovative adhesive solutions that
            meet the diverse needs of customers across industries. Every tape we
            produce is engineered to deliver exceptional performance,
            durability, and ease of use. From personal DIY projects to complex
            industrial applications, our double-sided tapes are designed to
            ensure seamless bonding and outstanding results.
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between ">
          {/* Column 2: Our Company Links */}
          <div className="p-2">
            <h3 className="text-red-500 text-lg font-semibold mb-4 border lg:border-hidden xl:border-hidden font-['Montserrat']  bg-white lg:text-start xl: text-center lg:bg-[#1E1A1A] xl:bg-[#1E1A1A] lg:text-white xl:text-white">
              Our Company
            </h3>
            <ul>
              <li className="mb-2  gap-2 flex flex-row items-center ml-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <Link href="/" className="hover:text-primary ">
                  Home
                </Link>
              </li>

              <li className="mb-2  gap-2 flex flex-row items-center ml-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>

              <li className="mb-2  gap-2 flex flex-row items-center ml-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <Link href="/products" className="hover:text-primary">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="p-2">
            <h3 className="text-red-500 text-lg font-semibold mb-4 border lg:border-hidden xl:border-hidden font-['Montserrat'] lg:text-start xl: text-center bg-white lg:bg-[#1E1A1A] xl:bg-[#1E1A1A] lg:text-white xl:text-white">
              {" "}
              Quick Links
            </h3>
            <ul>
              <li className="mb-2  gap-2 flex flex-row items-center ml-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>

              <li className="mb-2  gap-2 flex flex-row items-center ml-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* contact us */}

          <div className="p-2">
            <h3 className="text-red-500 text-lg font-semibold mb-4 border lg:border-hidden xl:border-hidden font-['Montserrat'] width-[413px] bg-white lg:bg-[#1E1A1A] xl:bg-[#1E1A1A] lg:text-start xl: text-center lg:text-white xl:text-white">
              Contact Us
            </h3>

            <li className="mb-2 gap-2 flex flex-col   text-start ml-2 ">
              <div className="flex flex-row items-center gap-2 ">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <div className="flex flex-row ">Address</div>
              </div>
              <p className="flex-initial  ">National auto suppliers 
                  761/7A  chabi ganj 
                  Kashmere gate 
                  Delhi -110006</p>
            </li>

            <li className="mb-2 gap-2 flex flex-col   text-start ml-2 ">
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <div className="flex flex-row">Email</div>
              </div>
              <p className="flex-initial">contact@genwin-auto.com</p>
            </li>

            <li className="mb-2 gap-2 flex flex-col   text-start ml-2">
              <div className="flex flex-row items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="19">
                    <path
                      id="Vector"
                      d="M5.00475 10.0029C4.86284 10.0037 4.7239 9.96222 4.60564 9.88377C4.48738 9.80533 4.39517 9.69344 4.34075 9.56238C4.28633 9.43131 4.27218 9.28701 4.30009 9.14787C4.328 9.00873 4.39672 8.88106 4.49748 8.78113L8.28411 5.00164L4.49748 1.22215C4.38043 1.08548 4.31927 0.909664 4.32622 0.729852C4.33316 0.55004 4.4077 0.37947 4.53494 0.252229C4.66219 0.124988 4.83276 0.0504469 5.01257 0.0435016C5.19238 0.0365562 5.36819 0.0977182 5.50487 0.214765L9.79162 4.50152C9.92469 4.63538 9.99938 4.81646 9.99938 5.00521C9.99938 5.19396 9.92469 5.37504 9.79162 5.50891L5.50487 9.79566C5.37179 9.92765 5.19218 10.0021 5.00475 10.0029Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M0.718614 10.0034C0.576705 10.0042 0.437765 9.96276 0.319508 9.88432C0.201251 9.80587 0.109035 9.69398 0.0546167 9.56292C0.000198702 9.43185 -0.0139558 9.28755 0.0139579 9.14841C0.0418715 9.00928 0.110589 8.8816 0.211348 8.78167L3.99798 5.00218L0.211348 1.22269C0.0768129 1.08816 0.00123175 0.905691 0.00123175 0.715429C0.00123175 0.525168 0.0768129 0.342699 0.211348 0.208163C0.345883 0.073628 0.528352 -0.00195312 0.718614 -0.00195312C0.908876 -0.00195313 1.09134 0.073628 1.22588 0.208163L5.51263 4.49492C5.6457 4.62878 5.72039 4.80986 5.72039 4.99861C5.72039 5.18736 5.6457 5.36844 5.51263 5.5023L1.22588 9.78906C1.15971 9.85656 1.0808 9.91027 0.993727 9.94706C0.906653 9.98385 0.813142 10.003 0.718614 10.0034Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <div className="flex flex-row">Phone</div>
              </div>
              <p className="flex-initial  ">+91-9717121626</p>
            </li>
          </div>
        </div>

        {/* Column 5 : Follow us on */}

        <div className="flex flex-row lg:flex-col xl:flex-col lg:flex xl:flex  bg-red-500 lg:bg-[#1E1A1A] xl:bg-[#1E1A1A] justify-between lg:justify-normal xl:justify-normal pr-5 h-9 pt-1">
          <h4 className="text-white-600 text-18 font-[600] ml-3 font-['Montserrat'] whitespace-nowrap pb-1">
            Follow Us On
          </h4>
          <div className="flex justify-center space-x-2 pr-3">
            {/* <Link href="https://facebook.com" className="group">
              <div className="bg-white py-1 px-1 rounded-md hover:bg-red-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                  style={{ width: "20px", height: "20px" }}
                  className="w-full h-3 lg:w-5 xl:w-5  text-red-500 group-hover:text-white"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </div>
            </Link>
            <Link href="https://twitter.com" className="group">
              <div className="bg-white py-1 px-1  rounded-md hover:bg-red-500 transition w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  style={{ width: "20px", height: "20px" }}
                  className="w-3 h-3 lg:w-5 xl:w-5 text-red-500 group-hover:text-white"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </div>
            </Link>
            <Link href="https://linkedin.com" className="group">
              <div className="bg-white py-1 px-1  rounded-md hover:bg-red-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  style={{ width: "20px", height: "20px" }}
                  className="w-3 h-3 lg:w-5 xl:w-5 text-red-500 group-hover:text-white"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </div>
            </Link> */}
            <Link target="_blank" href="https://www.instagram.com/genwin.official/profilecard/?igsh=dmJiM2cyNHdrbmhp" className="group">
              <div className="bg-white py-1 px-1 rounded-md hover:bg-red-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  style={{ width: "20px", height: "20px" }}
                  className="w-3 h-3 lg:w-5 xl:w-5 text-red-500 group-hover:text-white"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 my-4"></div>

      {/* Second Row */}
      {/* <div className="bg-[#1E1A1A] text-sm py-4 text-white ">
  <div className="container pl-28 mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
    <p className="mb-2  lg:mb-0">Copyright &copy; 2024 genwin</p>
    <div className="flex space-x-4 pr-12">
      <Link href="#" className="hover:text-primary ">Privacy Policy</Link>
      <Link href="#" className="hover:text-primary ">Terms & Conditions</Link>
    </div>
  </div>
</div>
*/}

      <div className="bg-[#1E1A1A] text-sm py-4 text-white">
        <div className="container  mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-4 lg:space-y-0">
          <p className="mb-2 lg:mb-0 text-center lg:text-left xl:text-center">
            Copyright &copy; 2024 genwin
          </p>
          <div className="flex space-x-4 lg:pr-12 xl:pr-12 justify-center lg:justify-end pr-0">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
