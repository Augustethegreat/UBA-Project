"use client"
import Image from "next/image";
import TheBody from "../components/Body";
import react, {useState } from "react";
import Components from "../components/page";
import { BsClockHistory } from "react-icons/bs";
import Link from "next/link";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
export default function Home() {

  const [show1, setShow1] = useState('');
  const [show2, setShow2] = useState('none');
  function Theone() {
    setShow1('')
    setShow2('none')
  }
  function Thesecond() {
    setShow1('none')
    setShow2('')
  }
  
  return (
    <main className=" min-h-screen  bg-white pb-[50px] lg:pb-0">
         <p className='text-center text-black text-[17px] pb-1 md:text-[23px] pt-3 font-medium'>Fornav Online portail de signalisation des incidents</p>
      
     <div className="block md:flex px-5 lg:px-[80px] ">
    
      <div className="w-full lg:w-[720px] mt-7 ">
        <div className=" flex px-[50px] gap-x-[540px] mt-[170px]">
          <MdKeyboardArrowLeft className="text-[#7c7b7b] text-[45px]"/>
          <MdKeyboardArrowRight className="text-[#7c7b7b] text-[45px]"/>
        </div>
    <div className="px-3 lg:px-[100px] flex gap-x-5 mt-[-215px]">
      <div className="rounded-[10px] shadow-xl shadow-[#adadad]">
          <img src="https://i0.wp.com/fatshimetrie.org/wp-content/uploads/2023/11/image_1701211307690.jpg?fit=1024%2C1024&ssl=1" alt="" 
      className="h-auto w-full lg:w-[250px] " />
     <p className="text-center mt-2 text-[#757575] text-[15px] px-2 font-medium w-full lg:w-[250px]">Fonds National des Réparations des Victimes de violences...</p>

     <div className="flex py-5 text-[#027fba] px-[55px] lg:px-[35px]  lg:w-auto items-center text-[18px] gap-x-2 text-center">
     <p className="px-1 lg:px-0">Apprendre plus</p>
      <GoArrowRight className=" mt-[2px] text-[25px] font-medium"/>
     </div>
      </div>
      <div className="rounded-[10px] hidden lg:block shadow-xl shadow-[#adadad]">
          <img src="https://pbs.twimg.com/media/GMwj8fzXgAAtrHW?format=jpg&name=large" alt="" 
      className="h-auto w-[250px] " />
     <p className="text-center mt-2 text-[#757575] text-[15px] px-2 font-medium w-[250px]">Fonds National des Réparations des Victimes de violences...</p>

     <div className="flex py-5 text-[#027fba] px-10 items-center text-[18px] gap-x-2 text-center">
     <p className=" ">Apprendre plus</p>
      <GoArrowRight className=" mt-[2px] text-[25px] font-medium"/>
     </div>
      </div>
    </div>

  <div className="px-3 lg:px-[100px] ">
  <Link href='/components'>
   <div className="lg:mt-10 mt-7 hover:cursor-pointer bg-[#027fba] hover:bg-[#972d71] rounded-[5px] w-full">
     <p className="text-[#fff]  py-2  text-center font-semibold">Continuer</p>
   </div>
   </Link>
  </div>
      </div>

      <div className="  w-auto mt-6 shadow-xl rounded-[10px] px-0 lg:px-10">
   
   <div className="block lg:flex lg:w-auto w-full lg:border-[1px] lg:border-[#d4d4d4] rounded-[10px]">
  
       <div className="text-black w-full lg:w-[270px]  ">
         <div className="p-5 space-y-4">
           <p className="text-center font-semibold">Suivez les étapes du process</p>
         <p>1. Open the Nedbank Money app on your cellphone.</p>
         <p>2. Tap on Scan from the bottom navigation.</p>
         <p>3. Hold the scanner in front of this QR code to scan it.</p>
         <p>4. Finally, authenticate on the mobile app and log in Online banking.</p>
         </div>
       </div>
       <div className="border-t-[1px] border-b-[1px] lg:border-b-0 border-l-0 lg:border-t-0 lg:border-l-[1px] border-[#d4d4d4] ">
         <div className="p-5">
               <iframe className='mx-auto w-full  lg:w-[280px] lg:h-[190px] md:w-[250px] md:h-auto  
           object-cover object-center items-center rounded-lg '  width="560" height="315" 
           src="https://www.youtube.com/embed/Om_UACg11u8?si=lgHUweF7VeUOpsFh" title="YouTube video player" 
         allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
           web-share" allowFullScreen></iframe>
           <p className="text-center text-black w-full lg:w-[250px] mt-2 lg:mt-0">Si vous rencontrez des difficultés pour remplir le formulaire, regardez la démo.</p>
             <a href="https://youtu.be/Om_UACg11u8?si=Jb18v7IMPf9S8VqB">
             <div className="text-[#027fba] font-medium flex mt-3 mx-auto items-center px-[100px] lg:px-[70px] gap-x-2">
               <MdOutlineVideoSettings  className="text-[20px] pt-[3px]"/>
               <p className=" text-[18px]">Demo</p>
               </div>
             </a>
         </div>

   
       </div>
   </div>
   <div className="px-4 pb-3">
  <p className="text-black text-[20px]  text-center mt-3">Fonarev Pleintes Submission</p>

<div className="flex gap-x-4 lg:gap-x-6 px-2  lg:px-[100px] mt-2">
 <div className="text-[#575757] flex hover:text-[#972d71] gap-x-1 lg:gap-x-3">
 <BsClockHistory className="text-[20px] pt-[3px]"/>
   <p className="text-[18px]">Rapide</p>
 </div>
 <div className="text-[#575757] flex hover:text-[#972d71] gap-x-1 lg:gap-x-3">
 <BsClockHistory className="text-[20px] pt-[3px]"/>
   <p className="text-[18px]">Simple</p>
 </div>
 <div className="text-[#575757] flex hover:text-[#972d71] gap-x-1 lg:gap-x-3">
 <BsClockHistory className="text-[20px] pt-[3px]"/>
   <p className="text-[18px]">Securisé</p>
 </div>
</div>

   <div className="px-2 lg:px-[70px] mt-3">
           <p className="text-[#575757] font-medium text-[16px] text-center">Access an enhanced banking experience with
   great new features and regular updates.</p>
   </div>
  </div>
 
 </div>
  </div>

    </main>
  );
}
