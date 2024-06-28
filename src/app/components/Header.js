/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Fragment, useState , useEffect} from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {ChatBubbleLeftIcon,ChevronDownIcon,HomeIcon,PaperAirplaneIcon,PhoneIcon,PlayCircleIcon} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { BsChatRightText, BsPhone } from "react-icons/bs";
import logo from "../img/fonarev_rdc_logo.jpg"
import { FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import { cn } from "../lib/utils";


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const text = "Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur contrôle des opérations.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === text.length - 1 ? 0 : prevIndex + 1));
    }, 100); // Adjust the speed of text sliding here

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <div className="overflow-hidden  shadow-xl  ">
    
      <header  className="bg-[#ffffff] h-15 border-b-[1px]    shadow-xl ">
       
      <nav
        className="mx-auto flex justify-between  items-center w-full py-3 px-6 lg:py-3 lg:px-[100px]  "
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-11 " aria-hidden="true" />
          </button>
        </div>
        <div className="flex   ">
          <Link href="/" className="-m-1.1 p-1">
            
             {/* <img
              className="h-auto w-[200px]  hidden md:block"
              src="https://www.fonarev.cd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-fonarev.0e598c0b.png&w=3840&q=75"
              alt=""
            />
               <img
              className="h-[60px] w-[60px] block md:hidden"
              src={logo.src}
              alt=""
            /> */}
            <p className="text-[#d51a0b] text-[40px] font-semibold text-center">Bienvenu a notre portail self-service</p>
          </Link>
        </div>
        <div className="flex text-[#d51a0b] md:px-[0%] text-[22px] ml-[-150px] lg:text-[18px] gap-x-7 lg:gap-x-5">
        <div className="">
            <div>
              <img src="https://www.ubagroup.com/wp-content/uploads/2018/06/UBA-Logo.png" className="w-[200px] h-auto" alt=""/>
            </div>
          <div className="flex hover:cursor-pointer  gap-x-5 py-3">
            <div className="text-[#000] hover:text-[#d51a0b] text-[19px]">
              <FaYoutube/>
            </div>
            <div className="text-[#000] hover:text-[#d51a0b] text-[19px]">
              <FaTiktok/>
            </div>
            <div className="text-[#000] hover:text-[#d51a0b] text-[19px]">
              <FaInstagram/>
            </div>
            <div className="text-[#000] hover:text-[#d51a0b] text-[19px]">
              <FaLinkedin/>
            </div>
            <div className="text-[#000] hover:text-[#d51a0b] text-[19px]">
              <FaXTwitter/>
            </div>
            <div className="text-[#000] hover:text-[#d51a0b] text-[19px]">
              <FaFacebook/>
            </div>
          </div>

        </div>

        
        </div>
       
        

 </nav>
 
    </header>
 
    </div>
  );
}
export default Header;