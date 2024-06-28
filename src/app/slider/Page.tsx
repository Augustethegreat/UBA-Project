// components/Carousel.js
import { useState, useEffect, useRef } from 'react';
import s1 from "../img/f1.png"
import s2 from "../img/f2.png"
import s3 from "../img/f3.png"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import {motion} from "framer-motion"


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTile, setCurrentTitle] = useState(0);
  const [currentView, setCurrentView] = useState(0);
  const [currentDesc, setCurrentDesc] = useState(0);
  const [currentLink, setCurrentLink] = useState(0);
  const [thelink, setThelink] = useState('/home')
  const [countLink, setCountLink] = useState(0);
  const [countss, setCounts] = useState(0);
  const slides = [s1, s2, s3, ];
    const titles =["Fonarev User", "Fonarev Admin", "Fonarev Manager"];
    const views = ["User Portal", "User Admin", "User Manager"];
    const descripts = ["Online Fonarev Portal for User complaints Submission", "Online Fonarev Portal for Admin process View ", "Online Fonarev Portal for Manager System View" ];
    const linkss = ["/home", "/login", "/management"];
    var counts =0;
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setCurrentTitle((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    setCurrentView((prev) => (prev === views.length - 1 ? 0 : prev + 1));
    setCurrentDesc((prev) => (prev === descripts.length - 1 ? 0 : prev + 1));
    setCurrentLink((prev) => (prev === linkss.length - 1 ? 0 : prev + 1));
    if (countss < 2) {
        setCounts(countss + 1);
        setThelink(linkss[counts + 1]);
        setCountLink(countLink + 1);
      } else {
        setCounts(0);
        setThelink(linkss[0]);
        setCountLink(0);
      }
  
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setCurrentTitle((prev) => (prev ===  titles.length - 1 ? 0 : prev - 1));
    setCurrentView((prev) => (prev === views.length - 1 ? 0 : prev - 1));
    setCurrentDesc((prev) => (prev === descripts.length - 1 ? 0 : prev - 1));
    setCurrentLink((prev) => (prev === linkss.length - 1 ? 0 : prev - 1));
    if (countss === 0) {
      setCounts(2);
      // setThelink(linkss[2]);
      setCountLink(2);
    } else  {
      setCounts(counts - 1);
      // setThelink(linkss[counts - 1]);
      setCountLink(countLink - 1);
    }
  
  
  };

  return (
    <div id="default-carousel" className="relative w-full pb-0" data-carousel="slide">
      {/* Carousel wrapper */}
    

      <div className='w-full   hidden  md:w-full   mt-[-10px]  lg:px-[0]    lg:w-full h-[200px] md:flex lg:flex'>
    
     {slides.map((image, index) => (
         <div  key={index} className={`absolute hidden lg:block w-full h-full transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
        <img
       
        src={image.src}
        alt={`Slide ${index + 1}`}
        className={` transition-opacity duration-1000 w-full lg:px-0 md:px-[5%]  md:w-full lg:w-full object-cover   lg:h-[585px] mt-4 
         `} width={920} height={920}
      />
      <div className='bg-black hidden lg:block opacity-40 fixed w-full mt-[-585px] h-[585px]'>

            </div>
       </div>
    ))}
   
     </div>
      {/* Slider indicators */}
      <div className="fixed z-30 flex -translate-x-1/2 bottom-[80px] left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      
     <div className='fixed flex px-10 gap-x-[100%] md:gap-x-[600px] lg:gap-x-[1330px] mt-7'>
     <div  className='bg-black opacity-80 rounded-full text-white hover:cursor-pointer hover:bg-white hover:text-black'>
            <MdKeyboardArrowLeft className=' w-[60px] h-auto text-center py-2 px-2'/>
     </div>
     <div onClick={nextSlide}  className='bg-black opacity-80 z-30 rounded-full text-white hover:cursor-pointer hover:bg-white hover:text-black'>
            <MdKeyboardArrowRight className=' w-[60px] h-auto text-center py-2 px-2'/>
     </div>
   
     </div>

    <div className=' fixed mx-[200px] mt-[-50px] z-0 lg:z-50 hidden lg:block text-white w-fit'>
    <div  className=''>
          <div className='pb-[65px]'>
        {titles.map((title, index) => (
            <div key={index}  className={`absolute transition-all duration-1000 ${currentTile === index ? 'opacity-100' : 'opacity-0'} ${currentTile === index ? 'ml-[0px]' : 'ml-[100px]'}`}>
            <p className='text-[50px] font-semibold '>{title}</p>
            </div>))}
        </div>
        <div className='pb-[70px]'>
        {views.map((view, index) => (
                <div key={index} className={` bg-[#963076] w-fit transition-all duration-1000 absolute  ${currentTile === index ? 'opacity-100' : 'opacity-0'} ${currentTile === index ? 'ml-[0px]' : 'ml-[100px]'}`}>
                <p className='px-4 py-1 text-[35px] font-semibold'>{view}</p>
                </div>
        ))}
        </div>
            
            <div className='pb-[70px] w-[500px]'>
            {descripts.map((descript, index) => (
            <div key={index} className={`bg-[#d8d7d7] text-[#484848] transition-all duration-1000 font-medium text-[18px] rounded-[5px] absolute mt-2 ${currentTile === index ? 'opacity-100' : 'opacity-0'} `}>
            <p className={`transition-all duration-1000  px-2 py-1 ${currentTile === index ? 'opacity-100' : 'opacity-0'} `}>{descript}</p>
            </div>))}
            </div>

           <div className='pb-[70px]'> 
     
            <Link  href={linkss[countLink]}  >
           <div className={`bg-black flex absolute opacity-50 hover:opacity-100 hover:cursor-pointer w-fit rounded-[3px] mt-10`}>
                <p className='font-semibold py-1 px-3 text-[22px]'>Continuer</p>
               <div>
               <FaArrowRight className='font-semibold py-[9px] px-3 w-[50px] h-auto text-white'/>
               </div>
            </div>
           </Link>
     
           </div>
        </div>
     </div>


    </div>
)}

export default Slider