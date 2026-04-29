import { IoLanguage } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";



const Footer = () => {
    return (
        <div className=" w-full h-max flex flex-col">
            <div className="w-full h-max font-mona flex flex-col md:flex-row justify-between items-center md:pr-28 pt-14">

                {/* 1st Row */}
                <div className="w-full md:w-[45%] lg:w-[35%] h-max flex flex-col gap-8 py-3 px-10">
                    <div className=" w-full h-max flex flex-col items-center md:items-start gap-5 md:gap-3">
                        <div className=" w-max h-max"><p className=" font-monaSemi text-[20px]">Axivor</p></div>
                        <div className=" w-max h-max flex gap-3">
                            <button className=" w-max h-max flex gap-2 py-2 px-3 bg-[#e0e0e0] bg-opacity-55 rounded-lg">
                                <IoLanguage size={16} />
                                <p className=" text-[14px] font-monaMedium">Language</p>
                            </button>
                            <button className=" w-max h-max flex gap-2 py-2 px-3 bg-[#e0e0e0] bg-opacity-55 rounded-lg">
                                <BiDollar size={16} />
                                <p className=" text-[14px] font-monaMedium">Currency</p>
                            </button>
                        </div>
                    </div>
                    <div className=" w-full h-max hidden md:flex justify-between items-end">
                        {/* Socials Group */}
                        <div className=" w-max h-max flex flex-col gap-2">
                            <button className="social-links hover:bg-black">
                                <FaXTwitter size={16} />
                            </button>
                            <div className=" flex gap-3">
                                <button className="social-links hover:bg-pink-500">
                                    <FaInstagram size={16} />
                                </button>
                                <button className="social-links hover:bg-blue-500">
                                    <FaFacebook size={16} />
                                </button>
                            </div>
                            <div className=" flex gap-3">
                                <button className="social-links hover:bg-yellow-500">
                                    <IoMail size={16} />
                                </button>
                                <button className="social-links hover:bg-blue-500">
                                    <FaTelegramPlane size={16} />
                                </button>
                                <button className="social-links hover:bg-[#5561E9]">
                                    <BsDiscord size={16} />
                                </button>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className=" w-max h-max flex gap-0.5 items-center">
                            <LiaCopyrightSolid size={13} />
                            <p className="text-[11px]">Axivor 2024.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] lg:w-[33%] h-max flex flex-col md:flex-row items-center md:items-start gap-16 pt-14 md:pt-0">
                    {/* 2nd Row */}
                    <div className=" w-max h-max flex flex-col gap-5 text-center md:text-start text-[15px]">
                        <p className=" font-monaMedium">Products</p>
                        <div className=" flex flex-col gap-4 md:text-[14px] lg:text-[15px] items-center md:items-start">
                            <button className=""><p className=" text-gray-400 w-max">Axivor API</p></button>
                            <button className=""><p className=" text-gray-400 w-max">Sitemap</p></button>
                        </div>
                    </div>

                    {/* 3rd Row */}
                    <div className=" w-max h-max flex flex-col gap-5 text-center md:text-start text-[15px]">
                        <p className=" font-monaMedium">Company</p>
                        <div className=" flex flex-col gap-4 md:text-[14px] lg:text-[15px] items-center md:items-start">
                            <button className=" w-max"><p className=" text-gray-400">About Us</p></button>
                            <button className=" w-max"><p className=" text-gray-400">Terms of Use</p></button>
                            <button className=" w-max"><p className=" text-gray-400">Privacy Policy</p></button>
                            <button className=" w-max"><p className=" text-gray-400 flex gap-2 items-center">Careers <span className="bg-[#48B4A9] w-max h-max px-1.5 text-[10px] rounded-full text-white">We're Hiring</span></p></button>
                        </div>
                    </div>

                    {/* 4th Row */}
                    <div className=" w-max h-max flex flex-col gap-5 text-center md:text-start text-[15px]">
                        <p className=" font-monaMedium">Support</p>
                        <div className=" flex flex-col gap-4 md:text-[14px] lg:text-[15px] items-center md:items-start">
                            <button className=" w-max"><p className=" text-gray-400 w-max">Contact Us</p></button>
                            <button className=" w-max"><p className=" text-gray-400">FAQs</p></button>
                        </div>
                    </div>
                </div>

                <div className=" w-full h-max flex flex-col md:hidden justify-between items-center pt-10 gap-3 pb-5">
                    {/* Socials Group */}
                    <div className=" w-max h-max flex flex-row gap-2">
                        <button className="social-links hover:bg-black">
                            <FaXTwitter size={16} />
                        </button>
                        <div className=" flex gap-3">
                            <button className="social-links hover:bg-pink-500">
                                <FaInstagram size={16} />
                            </button>
                            <button className="social-links hover:bg-blue-500">
                                <FaFacebook size={16} />
                            </button>
                        </div>
                        <div className=" flex gap-3">
                            <button className="social-links hover:bg-yellow-500">
                                <IoMail size={16} />
                            </button>
                            <button className="social-links hover:bg-blue-500">
                                <FaTelegramPlane size={16} />
                            </button>
                            <button className="social-links hover:bg-[#5561E9]">
                                <BsDiscord size={16} />
                            </button>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className=" w-max h-max flex gap-0.5 items-center">
                        <LiaCopyrightSolid size={13} />
                        <p className="text-[11px]">Axivor 2024.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;