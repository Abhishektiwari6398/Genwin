"use client"; // Required for client-side rendering
import { useState } from "react"; // Ensure React hooks are imported
import contactBanner from "../public/assets/images/aboutBanner.webp";
import Newsletter from "@/components/Newsletter";
import { Platypi } from 'next/font/google';
import Contact from '@/components/Contactphone';
import Gmail from '@/components/Gmaill';
import Location from '@/components/Location';
import Contactphone from "@/components/Contactphone";

const platypi = Platypi({
    weight: ['400', '500', '600'],
    preload: false,
});


export default function ContactUsPage() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { name, email, phone, subject, message } = formData
        const response = await fetch("/api/feedback", {
            headers: {
                application: "application/json",
            },
            method: "POST",
            body: JSON.stringify({ name, email, phone, subject, message }),
        })
        setLoading(false)
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
        // Add form submission logic here
    };

    return (
        <div>
            {/* Section 1: Banner */}
            <section
                className="bg-cover bg-center h-[400px] flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${contactBanner.src})` }}
            >
                <div className="p-6 rounded-md">
                    <h1 className="text-30 font-[600] text-white">Contact Us</h1>
                    <p className="mt-4 text-gray-200 text-16 font-[500]">
                        We&apos;re here to help! Feel free to reach out to us for any inquiries.
                    </p>
                </div>
            </section>

            {/* Section 2: Content and Form */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {/* Content Column */}
                    <div className="space-y-6">
                        <h2 className={`text-30  font-[600] text-gray-800 ${platypi.className}`}>Have a <span className="text-primary">Question</span> or <span className="text-primary">Feedback?</span></h2>
                        <p className="text-181818 text-16 font-[500]">
                            If you have any questions, comments, or just want to say hello,
                            please feel free to use the contact form below to reach us.
                        </p>
                        <h4 className={`mb-3 text-30 font-[600] text-gray-800 ${platypi.className}`}><span className="text-primary">Follow</span> our official social network</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="group">
                                <div className="bg-red-50 p-2 rounded-md border border-red-200 hover:bg-red-500 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 320 512"
                                        className="w-5 h-5 text-red-500 group-hover:text-white"
                                    >
                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="https://twitter.com" className="group">
                                <div className="bg-red-50 p-2 rounded-md border border-red-200 hover:bg-red-500 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                        className="w-5 h-5 text-red-500 group-hover:text-white"
                                    >
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="https://linkedin.com" className="group">
                                <div className="bg-red-50 p-2 rounded-md border border-red-200 hover:bg-red-500 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                        className="w-5 h-5 text-red-500 group-hover:text-white"
                                    >
                                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="https://instagram.com" className="group">
                                <div className="bg-red-50 p-2 rounded-md border border-red-200 hover:bg-red-500 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                        className="w-5 h-5 text-red-500 group-hover:text-white"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-181818 font-[500] text-16 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-3 w-full text-14 font-[500]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-181818 font-[500] text-16 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-3 w-full  text-14 font-[500]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-181818 font-[500] text-16 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-3 w-full  text-14 font-[500]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-181818 font-[500] text-16 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md p-3 w-full  text-14 font-[500]"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-181818 font-[500] text-16 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-md p-3 w-full  text-14 font-[500]"
                                ></textarea>
                            </div>

                            {loading ? (
                                <button
                                    type="submit"
                                    className="bg-[#E52D38] text-white py-3 px-6 rounded-md w-full flex items-center justify-center gap-2"
                                    disabled
                                >
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-[#E52D38] text-white py-3 px-6 rounded-md w-full flex items-center justify-center gap-2"
                                >
                                    Send Message
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Section 3: Map and Address */}
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4">
                    {/* Google Map */}
                    <div className="
                     shadow-md 
                        rounded-t-lg  
                        sm:rounded-t-lg  
                        md:rounded-t-lg  
                        lg:rounded-l-lg lg:rounded-tr-none
                        xl:rounded-l-lg xl:rounded-tr-none
                    ">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7589504056186!2d77.22437899678954!3d28.66693540000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda004af6c5f%3A0x478a5ece4ee10da5!2sKashmiri%20Gate!5e0!3m2!1sen!2sin!4v1745310324437!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Address */}
                    <div className=" bg-black p-4">
                        <h3 className={`text-30 font-[600] text-white ${platypi.className}`}>We’re here to help.</h3>
                        <p className="text-16 font-[500] text-white"></p>
                        <div className="pt-4 space-y-2">
                            <p className="text-white text-16 font-[500] flex gap-2">
                                <strong className="w-4 h-4 flex mt-1 text-xs items-center"><Location /></strong>National auto suppliers <br />
                                    761/7A  chabi ganj
                                    Kashmere gate <br />
                                    Delhi -110006
                            </p>
                            <p className="text-white text-16 font-[500] flex items-center gap-2">
                                <strong className="w-4 h-4 flex items-center"><Contactphone /></strong> +919717121626    </p>
                            <p className="text-white text-16 font-[500] flex items-center gap-2">
                                <strong className="w-4 h-4 flex items-center"><Gmail /></strong>  contact@genwin-auto.com 
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
        </div>
    );
}
