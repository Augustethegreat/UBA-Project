"use client"
import React, {useState, useEffect} from 'react'
import { Inter, Encode_Sans, Roboto } from "next/font/google";
import Image from 'next/image';
import headerpic from "../img/headerpic.png"
import {motion, useAnimation} from "framer-motion"
import { SlSocialSpotify } from 'react-icons/sl';
import Forms from './Forms';
import { ImCloudCheck } from "react-icons/im";
import { IoDocumentText } from "react-icons/io5";
import { IoIosAdd, IoIosClose, IoMdAddCircleOutline } from "react-icons/io";
import { MdClose, MdCloudUpload } from 'react-icons/md';

const font1 = Encode_Sans({ subsets: ["latin"] });
const font2 = Roboto({
    subsets: ["latin"],
    weight: '100'
});
export default function Page() {
   const [form, setAction] = useState('');
   const [offline, setOffline] = useState('none');
   const controls = useAnimation();
   const [online, setOnline] = useState('none');
   const[personne, setPersonne] = useState("")
   const[morale, setMorale] = useState('none');
   const[societecongo, Setsociete] = useState('none');
   const[page, setPage] = useState('');
   useEffect(() => {
    function HideShadow() {
      if (form == "Oui" ) {
        setOffline('none');
        setOnline('')
      } else if(form== "Non") {
        setOffline('');
        setOnline('none')
      }
    }
    function Person() {
        if(personne == "Morale") {
            setMorale('')
        }
        else if (personne=='Physique') {
            setMorale('none')
        }
    }

  

    HideShadow();
    Person();

  }, [form, personne, societecongo]);

  function Society() {
    if(societecongo=="none") {
      Setsociete('')
      setPage('none')
    } else {
      Setsociete('none')
      setPage('')
    }
  }


  return (
    <div className=' bg-[#fff] pb-[100px] overflow-x-hidden'>
        {/* <Image src={headerpic} className='w-full h-auto'  alt='' /> */}
         <div className=''>
         <div style={{display:page}} className='pt-[60px] h-screen'>
                <div className={font1.className}>
                <p className='text-center text-[27px] text-[#c70f06] font-semibold'>Bienvenue au portail d’ouverture de compte UBA</p>
                
                </div>
                <div className={`text-[#9d8882] flex items-center justify-center mx-auto  w-full`}>
                 <div>
                 <div className='px-[100px] justify-start items-start shadow-xl h-[600px] text-start'>
                   <p className='py-3'>Veuillez sélectionner les options qui s’appliquent à vous. </p>
                   <p>Voudriez-vous compléter le formulaire en ligne ou non ?</p> 

                  
                   <div className='items-center justify-center mx-auto flex'>
                   <select id="dropdownTextbox" className='w-full text-[#9d8882 px-7 mt-3 lg:mt-3 md:mt-3 outline-none md:w-[265px]  lg:w-[350px] hover:cursor-pointer pl-4 py-2 text-[#292929] border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[2px]'
                   onChange={(event) => {
                    const inputval1 = event.target.value;         
                    setAction(inputval1);
                 } }>
                        <option value="" selected disabled hidden>Oui \ Non</option>
                        <option value="Oui">Oui </option>
                        <option value="Non">Non</option>

                        </select>
                   </div>
                  
                   
                   <div className='py-3 text-center' style={{display:offline}}>
                    <p>Veuillez télécharger le <span className='text-[#c70f06] underline hover:cursor-pointer'>formulaire KYC</span></p>
                   </div>

                   <div className='items-center justify-center mx-auto flex'>
                   <div style={{display:online}} className='py-5'>
                    <p>Etes-vous une personne?</p>
                   <select id="dropdownTextbox" className='w-full text-[#9d8882 px-7 mt-3 lg:mt-0 md:mt-0 outline-none md:w-[265px]  lg:w-[350px] hover:cursor-pointer pl-4 py-2 text-[#292929] border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[2px]'
                   onChange={(event) => {
                    const inputval1 = event.target.value;         
                    setPersonne(inputval1);
                 } }>
                        <option value="" selected disabled hidden>Morale / Physique</option>
                        <option value="Morale">Morale</option>
                        <option value="Physique">Physique</option>

                        </select>

                        <div style={{display:morale}} className='py-5'>
                    <p>Quel type de personne morale êtes-vous ?</p>
                   <select id="dropdownTextbox" className='w-full text-[#9d8882 px-7 mt-3 lg:mt-0 md:mt-0 outline-none md:w-[265px]  lg:w-[350px] hover:cursor-pointer pl-4 py-2 text-[#292929] border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[2px]'
                   onChange={(event) => {
                    const inputval1 = event.target.value;         
                    setAction(inputval1);
                 } }>
                        <option value="" selected disabled hidden>Société de droit congolais / Société de droit étranger</option>
                        <option value="Société de droit congolais">Société de droit congolais</option>
                        <option value="Société de droit étranger">Société de droit étranger</option>
                        <option value="ONG & ABSL">ONG & ABSL</option>
                        <option value="Association ou parti politique">Association ou parti politique</option>
                        <option value="Etablissement publique">Etablissement publique</option>
                        <option value="Province">Province</option>
                        <option value="Ambassade">Ambassade</option>

                        </select>
                   </div>

                    <div onClick={Society} className='text-white bg-[#c70f06] hover:cursor-pointer mt-4 md:w-[265px]  lg:w-[350px] text-center font-bold rounded-[5px]'>
                        <p className='py-2 px-4'>Next</p>
                    </div>

                   </div>
                   </div>


                  



                   </div>
                 </div>
                </div>
            </div>

            <motion.div initial={{x: +200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        animate={controls}
        viewport={{once:false}} style={{display:societecongo}} className='flex items-center justify-center mx-auto pt-10 '>
             <div className='w-full px-[350px] '>
             
               <div className='text-[#555454] shadow-xl h-full px-5 bg-[#ffedec] rounded-[15px]'>
               <p className='text-center text-[30px] font-medium text-[#c70f06]'>Société de droit congolais</p>
               {/* <p>Veuillez remplir les champs ci-bas</p> */}
               <p className='text-[20px] font-medium text-[#c70f06]'>Identification Nationale</p>

               <div className='flex border-b-[2px] border-t-[2px] text-[18px] mt-2 p-3 gap-x-[0px] border-[#c70f06] w-full'>
                <div className='space-y-3 w-[500px]'>
                  <p className='h-[40px]'>Numéro d’Identification Nationale*</p>
                  <p className='h-[40px]'>Numéro d’impôt*</p>
                  <p className='h-[40px]'>Numéro Import-export (selon le cas)</p>
                </div>

                <div className='space-y-3 w-full px-[150px]'>
                  <div className=' '>
                  <input type="text" className='w-full h-[40px] px-5 border-[1px] rounded-[5px] border-[#000]'/>
                  </div>
                  <div >
                  <input type="text" className='w-full h-[40px] px-5 border-[1px] rounded-[5px] border-[#000]'/>
                  </div>
                  <div >
                  <input type="text" className='w-full h-[40px] px-5 border-[1px] rounded-[5px] border-[#000]'/>
                  </div>

               </div>
         
               </div>

                <div className='text-[20px] font-medium text-[#c70f06]'>
                  <p>Veuillez joindre les documents suivants :</p>
                  <div className='flex underline'>
                  <ImCloudCheck />
                  <p className=' text-[14px]'>Telechager vos PDF, DOC, GIF or JPEG documents. (Maximum 5mb par doc)</p>
                  </div>
                  
                </div>
                  
                <div className='w-full px-3 pt-2 text-[18px]'>
                  <p className='w-full'>Pieces d’identités des personnes habilitées à engager la Société et de tous les
                  actionnaires (si l’actionnaire est une personne morale, ses statuts seront exigés)</p>
                </div>

         
                <div className='flex pt-5 text-[18px]'>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <IoMdAddCircleOutline className=' text-[20px]' />
                  <p></p>
                  <div>
                   <form action="/upload" method="post" encType="multipart/form-data" className='flex '>
                        <label htmlFor="file">Joindre</label>
                        <input type="file" id="file" name="file" className='hidden' placeholder='joindre'></input><br/>
                   
                    </form>
                   </div>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-b-[1px] border-t-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdCloudUpload  className=' text-[20px]' />
                  <p>Telecharger</p>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdClose className=' text-[23px]' />
                  <p>Annuler</p>
                  </div>
                  </div>
                </div>
                <div className='flex  text-[18px]'>
                  <div className='flex  rounded-[0px] border-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-b-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-[1px] border-[#000] border-t-[0px] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                    <p className='text-[#ffedec]'>fke</p>
                  </div>
                </div>
                <div className='flex  text-[18px]'>
                  <div className='flex  rounded-[0px] border-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-b-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-[1px] border-[#000] border-t-[0px] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                    <p className='text-[#ffedec]'>fke</p>
                  </div>
                </div>
                <div className='flex pb-5 text-[18px]'>
                  <div className='flex  rounded-[0px] border-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-b-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-[1px] border-[#000] border-t-[0px] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                    <p className='text-[#ffedec]'>fke</p>
                  </div>
                </div>


                {/* <div className='flex mx-auto items-center justify-center text-[18px]'>
                <div className='flex gap-x-3 text-[#146814]'>
                <IoDocumentText className='text-[25px]'/>
                <p>file.doc</p>
                <p>1.7 mb</p>
                </div>
                </div>
                <div className='flex py-3 mx-auto items-center justify-center text-[18px]'>
                <div className='flex gap-x-3 text-[#146814]'>
                <IoDocumentText className='text-[25px]'/>
                <p>document.pdf</p>
                <p>2.5 mb</p>
                </div>
                </div> */}

                <div className='w-full px-3 pt-2 text-[18px]'>
                  <p className='w-full'>Statuts de la société (l’authentification et/ou notariat sont facultatifs) ;</p>
                </div>

                 <div className='flex pt-5 text-[18px]'>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <IoMdAddCircleOutline className=' text-[20px]' />
                     <form action="/upload" method="post" encType="multipart/form-data" className='flex '>
                        <label htmlFor="file">Joindre</label>
                        <input type="file" id="file" name="file" className='hidden' placeholder='joindre'></input><br/>
                   
                    </form>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-b-[1px] border-t-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdCloudUpload  className=' text-[20px]' />
                  <p>Telecharger</p>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdClose className=' text-[23px]' />
                  <p>Annuler</p>
                  </div>
                  </div>
                </div>
                <div className='flex  text-[18px]'>
                  <div className='flex  rounded-[0px] border-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-b-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-[1px] border-[#000] border-t-[0px] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                    <p className='text-[#ffedec]'>fke</p>
                  </div>
                </div>
                <div className='flex pb-5 text-[18px]'>
                  <div className='flex  rounded-[0px] border-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-b-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-[1px] border-[#000] border-t-[0px] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                    <p className='text-[#ffedec]'>fke</p>
                  </div>
                </div>

                <div className='w-full px-3 pt-2 text-[18px]'>
                  <p className='w-full'>Autorisations des Ministères compétents en fonction des activités reprises dans
                  l’objet social</p>
                </div>

                 <div className='flex pt-5 border-b-[1px] border-black text-[18px]'>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <IoMdAddCircleOutline className=' text-[20px]' />
                     <form action="/upload" method="post" encType="multipart/form-data" className='flex '>
                        <label htmlFor="file">Joindre</label>
                        <input type="file" id="file" name="file" className='hidden' placeholder='joindre'></input><br/>
                   
                    </form>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-b-[1px] border-t-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdCloudUpload  className=' text-[20px]' />
                  <p>Telecharger</p>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdClose className=' text-[23px]' />
                  <p>Annuler</p>
                  </div>
                  </div>
                </div>
                <div className='flex pb-5 text-[18px]'>
                  <div className='flex  rounded-[0px] border-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-b-[1px] border-t-[0px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <p className='text-[#ffedec]'>fke</p>
                  </div>
                  <div className='flex  rounded-[0px] border-[1px] border-[#000] border-t-[0px] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                    <p className='text-[#ffedec]'>fke</p>
                  </div>
                </div>

                <div className='w-full px-3 pt-2'>
                  <p className='w-full'>Acte d’immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM)
                  Procès-verbal de la dernière assemblée générale de la Société</p>
                </div>

                <div className='w-full px-3 pt-2'>
                  <p className='w-full'>Lettre de demande d’ouverture de compte désignant les signataires, précisant
                    leurs pouvoirs de signature et indiquant la nature des activités de la société
                    </p>
                    <p className='text-black font-medium'>[Téléchargez un prototype…]</p>
                </div>

                  <div className='px-2'>
                  <input type="text" className='mt-2 border-[2px] border-[#000] w-full text-end px-2' placeholder='...' />
                  </div>

                  <div className='px-2'>
                    <p>Les formulaires d’ouverture de compte dûment complétés</p>
                    <p className='mt-1'>Signataires</p>
                  </div>

                  <div>
                    {/* <input type="text" className='border-[2px] border-[#000] w-full text-end' placeholder='...' />
                    <div className='border-[2px] border-[#000] h-5 border-t-[0px] flex'>

                        <div className='border-r-[2px] border-[#000] w-full'>
                          <p className='text-white'>k</p>
                        </div>
                        <div className='border-r-[2px] border-[#000] w-full'>
                          <p className='text-white'>k</p>
                        </div>
                        <div className='border-r-[2px] border-[#000] w-full'>
                          <p className='text-white'>k</p>
                        </div>
                        <div className='border-r-[2px]  border-[#000] w-full'>
                          <p className='text-black'>Signature</p>
                        </div>
                        <div className=' w-full'>
                          <p className='text-black'>Signature</p>
                        </div>
                    </div>
                    <div className='border-[2px] border-[#000] h-5 border-t-[0px] flex'>

                    <div className='border-r-[2px] border-[#000] w-full flex justify-between'>
                      
                      <p className='text-end text-black'>+</p>
                
                      <p className='text-end text-black -mt-1'>...</p>
                    </div>
                    <div className='border-r-[2px] border-[#000] w-full'>
                      <p className='text-black -mt-1 text-end'>...</p>
                    </div>
                    <div className='border-r-[2px] border-[#000] w-full'>
                      <p className='text-black -mt-1 text-end'>...</p>
                    </div>
                    <div className='border-r-[2px]  border-[#000] w-full'>
                      <p className='text-black -mt-1 text-end'>...</p>
                    </div>
                    <div className=' w-full'>
                      <p className='text-black -mt-1 text-end'>...</p>
                    </div>
                    </div>

                    <div  className='border-[2px] border-[#000] h-5 text-end border-t-[0px] flex'>
                        <p className='text-black -mt-1 text-end ml-[98%]'>...</p>
                    </div> */}
                    <div className='flex py-5'>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <IoMdAddCircleOutline className=' text-[20px]' />
                     <form action="/upload" method="post" encType="multipart/form-data" className='flex '>
                        <label htmlFor="file">Joindre</label>
                        <input type="file" id="file" name="file" className='hidden' placeholder='joindre'></input><br/>
                   
                    </form>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdCloudUpload  className=' text-[20px]' />
                  <p>Telecharger</p>
                  </div>
                  </div>
                  <div className='flex bg-[#c70f06] rounded-[0px] border-[1px] border-[#000] gap-x-3 font-bold w-full  mx-auto items-center justify-center text-white'>
                  <div className='py-1 flex gap-x-2'>
                  <MdClose className=' text-[23px]' />
                  <p>Annuler</p>
                  </div>
                  </div>
                </div>
                <div className='w-full text-end mt-10'>
                  <p className='pr-8 text-[18px]'>Signature</p>
                </div>
                    <p className='mt-2'>Si Oui, veuillez télécharger ce <span className='text-[#c70f06]'>formulaire FATCA</span> à remplir</p>

                    <div className='flex justify-between mt-3 pb-10'>
                      <button className='bg-[#c70f06] rounded-[5px] text-white text-center p-2'>Completez ce formulaire</button>
                      <button className='bg-[#c70f06] rounded-[5px] text-white text-center p-2'>Soumettre</button>
                    </div>
                  </div>
               </div>
             </div>
                  
            </motion.div> 
         
         </div>
    </div>
  )
}
