"use client"
import React from 'react'
import pic1 from "./img/pic1.png"
import Image from 'next/image'
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon,QuestionMarkCircleIcon, UserCircleIcon, CreditCardIcon, BanknotesIcon, WalletIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
function TheBody() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div  className={` w-1200px h-1200px bg-black ${loginOpen ? ' blur-sm bg-[#000000] bg-opacity-80' : ''} `}>
        <div className=' w-120vh lg:w-1200px lg:h-900px pb-[200px] mt-7 px-5 lg:px-0'>
          {/* <p className='text-[#14a8d7] text-xl lg:text-4xl font-bold'>Bonjour,</p>
         */}
          <p className='text-black mt-2  text-sm lg:text-2xl font-bold text-center'>Bienvenue sur le portail de signalisation des incidents</p>
         
          <div className='mt-5 bg-[#f8f7f7] shadow-xl px-[100px] rounded-[15px] '>
            
            <div className='flex py-10 gap-x-5'>
              <div className='flex gap-x-3'>
                <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Nom*</p>
                <input type="text" placeholder='Nom' className='border-[4px] text-black outline-none bg-[#ededed] border-[#ededed] rounded-[5px] px-5 py-2' />              
              </div>
              <div className='flex gap-x-3'>
                <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Post-Nom*</p>
                <input type="text" placeholder='Post-Nom' className='border-[4px] text-black outline-none bg-[#ededed] border-[#ededed] rounded-[5px] px-5 py-2' />              
              </div>
            </div>

            <div className='flex gap-x-[180px]'>
         <div className='flex gap-x-3'>
         <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Genre*</p>            
            <select id="dropdownTextbox" className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[200px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '>
            <option value="" selected disabled hidden>Male</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
         </div>
         <div className='flex gap-x-3'>
         <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Age*</p>            
            <select id="dropdownTextbox" className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[200px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '>
            <option value="" selected disabled hidden>0  ~ 17ans</option>
            <option value="0  ~ 17ans">0  ~ 17ans</option>
            <option value="18  ~ 35ans">18  ~ 35ans</option>
            <option value="35 ~ 50ans">35 ~ 50ans</option>
            <option value="50ans +">50ans +</option>
            </select>
         </div>
            </div>

            <div className='flex py-10 gap-x-3'>
              <div className='flex gap-x-2'>
                <p className='text-black py-3 px-3 bg-white font-medium shadow-xl rounded-[5px]'>Numéro de contact*</p>
                <input type="text" placeholder='Numéro de contact' className='border-[4px] text-black outline-none bg-[#ededed] w-[190px] border-[#ededed] rounded-[5px] px-3 py-2' />              
              </div>
              <div className='flex gap-x-2'>
                <p className='text-black py-3 px-3 bg-white font-medium shadow-xl rounded-[5px]'>Adresse-Courriel*</p>
                <input type="text" placeholder='Adresse-Courriel ' className='border-[4px] text-black outline-none bg-[#ededed] w-[220px] border-[#ededed] rounded-[5px] px-3 py-2' />              
              </div>
            </div>

            <div className='flex gap-x-[160px]'>
         <div className='flex gap-x-3'>
         <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Province*</p>            
            <select id="dropdownTextbox" className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[200px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '>
            <option value="" selected disabled hidden>Province</option>
            <option value="Katanga">Katanga</option>
            <option value="Nord-kivu">Nord-kivu</option>
            <option value="Sud-kivu">Sud-kivu</option>
            <option value="Kasai-orientale">Kasai-orientale</option>
            <option value="Kasai-occidentale">Kasai-occidentale</option>
            <option value="Maniema">Maniema</option>
            <option value="Equateur">Equateur</option>
            <option value="Bas-congo">Bas-congo</option>
            <option value="Bandundu">Bandundu</option>
            <option value="Nord-kivu">Nord-kivu</option>
            </select>
         </div>
         <div className='flex gap-x-3'>
         <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Ville*</p>            
            <input id="dropdownTextbox" className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[200px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '      
            />
         </div>
            </div>

            <div className='flex gap-x-[80px] py-10'>
         <div className='flex gap-x-3'>
         <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Type de violence *</p>            
            <select id="dropdownTextbox" className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[220px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '>
            <option value="" selected disabled hidden>Violence physique</option>
            <option value="Violence physique">Violence physique</option>
            <option value="Violence verbale">Violence verbale</option>
            <option value="Violence psychologique">Violence psychologique</option>
            <option value="Violence sexuelle">Violence sexuelle</option>
            </select>
         </div>
         <div className='flex gap-x-3'>
         <p className='text-black py-3 px-5 bg-white font-medium shadow-xl rounded-[5px]'>Date*</p>            
           <input type="date" name="" id=""  className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[190px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] ' />
         </div>
            </div>

            <div className='block '>
              <p className='text-black py-3 px-5 w-[240px] bg-white font-medium shadow-xl rounded-[5px]'>Description de l’incident*</p>
              <textarea name="" id="" placeholder='Description de l’incident ' className='  px-7 mt-2 pl-4 py-2 text-[#292929] w-[780px] h-[150px] border-[#a22a2b] hover:border-[#a22a2b] rounded-[5px] border-[2px] '></textarea>
            </div>

            <div className='py-10'  onClick={() => setLoginOpen(true)}>
            <div className='bg-[#8e1f71] font-medium rounded-[10px] text-white'>
              <p className='px-5 py-2 text-center'>Envoyer</p>
            </div>
            </div>

         
          </div>
          <Dialog
        as="div"
        className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none "
        open={loginOpen}
        onClose={setLoginOpen}
      >
        <div className="ml items-center max-w-screen-lg   " />

        <Dialog.Panel className="relative max-w-4xl lg:w-[1900px] mt-7 shadow-xl p-6 bg-[#fcfcfc] rounded ">
          <div className="flex items-center justify-between outline-none">
            <a href="#" className="-m-1.5 p-1.5 text-black">
            <img
              className="w-40 h-auto outline-none"
              src="https://www.fonarev.cd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-fonarev.0e598c0b.png&w=3840&q=75"
              alt=""
            />
            </a>
            <p className='text-center text-black text-[30px] font-medium'>Qui doit utiliser ce formulaire ?</p>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setLoginOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className='px-5  text-black'>
            
            <p>•	Une victime soumettant une demande de réparation via FONAREV. Une victime est toute personne ou groupe de personnes ayant subi directement ou indirectement un ou plusieurs préjudices résultant des violences sexuelles liées aux conflits et/ou des crimes contre la paix et la sécurité de l'humanité perpétrés en République Démocratique du Congo.</p>
            <p>•	Une personne agissant au nom de la victime 
Lorsque la victime est mineure ou souffre d’un handicap l’empêchant d’agir en son nom propre, une autre personne peut agir en son nom. Lorsque la victime est décédée, une personne peut également agir en son nom. Par ailleurs, il est possible de formuler la demande avec le consentement de la victime. Dans tous les cas, la personne formulant la demande doit remplir la section B.
</p>         <p>•	Une personne assistant la victime 
Aussi bien la victime que la personne agissant en son nom peuvent être assistées par un tiers au moment de remplir ce formulaire. Tel sera par exemple le cas lorsque soit la victime soit la personne agissant en son nom sont incapables de lire et d’écrire. Toute personne offrant une telle assistance doit remplir la section C.
</p>
          </div>
          <div className='py-10 '  onClick={() => setLoginOpen(false)}>
            <div className='bg-[#8e1f71] font-medium rounded-[10px] px-[250px] hover:cursor-pointer text-white'>
              <p className='px-5 py-2 text-center'>Continuer</p>
            </div>
            </div>
      

          
        </Dialog.Panel>
      </Dialog>
        </div>
        </div>
  )
}

export default TheBody