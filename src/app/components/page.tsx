"use client"
import React, { useEffect } from 'react'
import pic1 from "./img/pic1.png"
import Image from 'next/image'
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid'
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import logo from "../img/logo-fonarev.webp"
import {motion} from "framer-motion"

import Link from 'next/link';
function Components() {
  const [loginOpen, setLoginOpen] = useState(true);
  const [shadow, setShadow] = useState('')

  useEffect(() => {
    function HideShadow() {
      if (loginOpen) {
        setShadow('');
      } else {
        setShadow('none');
      }
    }

    HideShadow();
  }, [loginOpen]);



  return (
    <div>
      <div  className={`scroll-smooth pb-[20px] bg-white items-center justify-center mx-0 lg:px-[240px] ${loginOpen ? ' blur-[2px] ' : ''} `}>
        <div className='scroll-smooth flex  w-full mx-auto items-center text-[13px] md:text-[17px] font-medium'>
  
        </div>
        <div>   
            <motion.div initial={{y: +200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='pb-[60px] rounded-[15px] mx-auto items-center shadow-xl md:mt-10 lg:max-w-screen-lg font-body'>
        <p id="sendus"  className='text-black text-[20px] md:text-2xl font-medium text-center mt-2 pb-5'>Bienvenue sur le portail de signalisation des incidents</p>
        <div className='justify-center items-center w-full '>
           <div className='mx-auto space-y-5 px-4 lg:px-[250px] '>
           {/* <p className='text-xl mt-3 text-black font-medium'>Avez-vous un souci ? </p>
            <p className='text-sm mt-2 text-black'>Déposez-nous un mot dans ce formulaire de contact et nous vous reviendrons sous peu.</p> */}
            <div className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px]  gap-x-4 mt-2'>
                <input type="text" placeholder='Nom*' className='  w-full px-7 md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px]  border-[2px] '/>
                <input type="text" placeholder='Post-Nom*' className=' w-full px-7 mt-3 lg:mt-0 md:mt-0   md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px] ' />
            </div>
            <div className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px]  gap-x-4 mt-2'>
            <select id="dropdownTextbox" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'>
            <option value="" selected disabled hidden>Genre*</option>
            <option value="Male">Homme</option>
            <option value="Female">Femme</option>
            </select>
            <select id="dropdownTextbox" className='w-full px-7 mt-3 lg:mt-0 md:mt-0  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px]'>
            <option value="" selected disabled hidden>Age*</option>
            <option value="0 ~ 17ans">0 ~ 17ans </option>
            <option value="18 ~ 35ans">18 ~ 35ans</option>
            <option value="35 - 50ans">35 - 50ans</option>
            <option value="+50ans">+ 50ans</option>
            </select>
            </div>
            <div  className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px] md:space-y-0  space-y-2 gap-x-4 mt-2'>
            <input type="text" placeholder='Numéro de contact*' className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] border-[2px] rounded-[5px] ' />
                <input type="text" placeholder='Adresse-Courriel*' className=' w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'/>
             </div>
            <div className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px]]  gap-x-4 mt-2'>
            <select id="dropdownTextbox" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'>
            <option value="" selected disabled hidden>Province*</option>
            <option value="Bas-Uele">Bas-Uele</option>
            <option value="Equateur ">Equateur</option>
            <option value="Haut-Katanga">Haut-Katanga</option>
            <option value="Haut-Lomami">Haut-Lomami</option>
            <option value="Haut-Uele">Haut-Uele</option>
            <option value="Ituri">Ituri</option>
            <option value="Kasaï Central">Kasaï Central </option>
            <option value="Kasaï Oriental">Kasaï Oriental</option>
            <option value="Kasaï">Kasaï</option>
            <option value="Kinshsa">Kinshsa</option>
            <option value="Kongo Central">Kongo Central</option>
            <option value="Kwango">Kwango</option>
            <option value="Kwilu">Kwilu</option>
            <option value="Lomami">Lomami</option>
            <option value="Lualaba">Lualaba</option>
            <option value="Mai-Ndombe">Mai-Ndombe</option>
            <option value="Maniema">Maniema</option>
            <option value="Mongala">Mongala</option>
            <option value="Nord Kivu">Nord Kivu</option>
            <option value="Nord-Ubangui">Nord-Ubangui</option>
            <option value="Sankuru">Sankuru</option>
            <option value="Sud Kivu">Sud Kivu</option>
            <option value="Sud-Ubangu">Sud-Ubangu</option>
            <option value="Tanganyika">Tanganyika</option>
            <option value="Tshopo">Tshopo</option>
            <option value="Tshuapa">Tshuapa</option>

            </select>
            <input type="text" placeholder='Ville*' className=' w-full px-7 mt-3 lg:mt-0 md:mt-0   md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px] ' />
           
            </div>
            <div className='block md:flex lg:flex w-full md:w-[542px] lg:w-[542px]   gap-x-4 mt-0 md:mt-2'>
            <select id="dropdownTextbox" className='w-full px-7 mt-0 lg:mt-0 md:mt-0  md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px]'>
            <option value="" selected disabled hidden>Forme de violence*</option>
            <option value="Violence physique">Violence physique</option>
            <option value="Violence sexuelle">Violence sexuelle</option>
            <option value="Violence economique">Violence economique</option>
            <option value="Violence verbale">Violence verbale</option>
            <option value="Violence psychologique">Violence psychologique</option>

            </select>
            <input type="date" name="" id=""  className='w-full px-7 mt-3 lg:mt-0 md:mt-0   md:w-[265px]  lg:w-[290px] pl-4 py-2 text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px]' />
        
            </div>
           
            <textarea name="" id="" placeholder='Description de l’incident*'  className='w-full px-7 mt-3 lg:w-[542px] pl-4 py-2 h-[100px] text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px]'></textarea>
            <div onClick={() => setLoginOpen(true)} className=' bg-[#972d71] hover:bg-[#972d71] hover:cursor-pointer w-full px-7 mt-3 lg:w-[542px] pl-4 py-2  text-[#292929] border-[#972d71] hover:border-[#972d71] rounded-[5px] border-[2px] shadow-lg shadow-[#7c7a7a]'>
                <p className='text-center  py-3 text-white font-semibold'>Envoyer</p>
            </div>
           </div>
         
        </div>
      
      
        </motion.div>


      



        <motion.div initial={{y: +200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:2.5}}
        viewport={{once:false}} className=' w-full lg:px-[370px]'>
        <Dialog
        as="div"
        className="fixed inset-0 px-4  lg:px-[250px] outline-none focus:outline-none "
        open={loginOpen}
        onClose={setLoginOpen}
      >
        <div className="  w-full  px-4 py-10   lg:py-[50px] " />

        <Dialog.Panel className="relative outline-none  w-full px-4 md:px-[35px] mt-0 shadow-xl p-6 bg-[#fcfcfc] rounded ">
          <div className="flex items-center justify-between outline-none">
            <a href="#" className="-m-1.5 p-1.5 text-black">
            <Image
              className=" w-40 h-auto outline-none" width={200} height={200}
              src={logo}
              alt=""
              ></Image>
           
            </a>
           <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setLoginOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <p className='px-0 lg:px-5 mt-4 text-[#2b2a2a] font-semibold text-[20px] lg:text-[25px] text-center'>Qui doit utiliser ce formulaire ?</p>
            
          <div className='px-0 md:px-10 text-[14px] text-black space-y-2 lg:space-y-6 mt-2 lg:mt-5 h-[310px] lg:h-auto lg:overflow-hidden overflow-y-scroll'>
            
            <p>•	Une victime soumettant une demande de réparation via FONAREV. Une victime est toute personne ou groupe de personnes ayant subi directement ou indirectement un ou plusieurs préjudices résultant des violences sexuelles liées aux conflits et/ou des crimes contre la paix et la sécurité de l'humanité perpétrés en République Démocratique du Congo.</p>
            <p className='border-b-[1px] border-t-[1px] py-3'>•	Une personne agissant au nom de la victime 
              Lorsque la victime est mineure ou souffre d’un handicap l’empêchant d’agir en son nom propre, une autre personne peut agir en son nom. Lorsque la victime est décédée, une personne peut également agir en son nom. Par ailleurs, il est possible de formuler la demande avec le consentement de la victime. Dans tous les cas, la personne formulant la demande doit remplir la section B.
              </p>         <p className=''>•	Une personne assistant la victime 
              Aussi bien la victime que la personne agissant en son nom peuvent être assistées par un tiers au moment de remplir ce formulaire. Tel sera par exemple le cas lorsque soit la victime soit la personne agissant en son nom sont incapables de lire et d’écrire. Toute personne offrant une telle assistance doit remplir la section C.
              </p>
   

          </div>
       
          <div className='pt-7 md:pt-3 px-3 pb-2 md:pb-10 md:px-0 flex gap-x-5'  >
            
            <div className='hover:bg-[#8e1f71] bg-white  font-medium rounded-[15px] md:px-4  border-[2px] hover:cursor-pointer border-[#8e1f71] text-[#8e1f71] hover:text-white' onClick={() => setLoginOpen(false)}>
              <p className='px-5 py-2 text-center'>Continuer</p>
            </div>
            <Link href='/home' onClick={() => setLoginOpen(false)}>
            <div className='hover:bg-[#8e1f71] bg-white  font-medium rounded-[15px] md:px-4  border-[2px] hover:cursor-pointer border-[#8e1f71] text-[#8e1f71] hover:text-white'>
              <p className='px-6 py-2 text-center'>Annuler</p>
            </div>
            </Link>
            </div>

          
        </Dialog.Panel>
      </Dialog>
      </motion.div>
        </div>

        
        
   
      
    </div>
    
            <div style={{display:shadow}} className='bg-[#000] z-30 opacity-50 w-full mt-[-2000px] h-[2100px] lg:mt-[-828px]'>

            </div>
            </div>
  )
}

export default Components