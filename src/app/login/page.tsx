/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsClockHistory } from 'react-icons/bs'
import Link from 'next/link'
import Header from '../components/Header'
function login() {
  return (
    <div className='bg-white h-screen'>
        
     <div>
      <Header/>
     </div>
            <div className='block md:flex px-4 lg:px-[150px] pt-3 md:pt-10 gap-x-[150px]  w-full'>
                <div className='w-[750px] hidden md:block border-[1px] border-[#e6e5e5]'>
                <div className='mt-7 pb-5'>
                        <p className='text-[25px] text-center px-3 text-[#575757]'>Notre portail self-service vous permet d'operer un nombre de service sans interventions humaine</p>
                    </div>
                    <div className='flex items-center justify-center mx-auto lg:px-[150px]'>
                    <select id="dropdownTextbox" className='w-full text-[#9d8882 px-7 mt-3 lg:mt-3 md:mt-3 outline-none lg:px-[20px] hover:cursor-pointer pl-4 py-2 text-[#292929] border-[#c70f06] hover:border-[#c70f06] rounded-[5px] border-[2px]'>
                        <option value="" selected disabled hidden>Veuillez selectionner le service que vous desirez </option>
                        <option value="Oui">Oui </option>
                        <option value="Non">Non</option>

                        </select>
                    </div>
                    <div className='mt-7 pb-5'>
                        <p className='text-[25px] text-center  text-[#575757]'>Ouvrez votre compte en mode self-service en suivant les etapes ci-apres</p>
                    </div>
                 <div className='flex gap-x-2 text-[#575757] pb-5 px-2'>
                    <div>
                        <p className='text-center'>1</p>
                        <div className='shadow-xl rounded-[10px] w-[234px] text-[18px] text-center py-5 px-4'>
                            <p>Selectionner le type compte que vous desirez</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-center'>2</p>
                        <div className='shadow-xl rounded-[10px] w-[234px] text-[18px] text-center py-5 px-4'>
                            <p>Telecharger les documents support requis</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-center'>3</p>
                        <div className='shadow-xl rounded-[10px] w-[234px] text-[18px] text-center py-5 px-4'>
                            <p>Remplissez votre formulaire de demande et soumettez-la</p>
                        </div>
                    </div>
                 </div>
                    
                </div>
                <div className='w-full md:w-[750px] pb-4 shadow-xl rounded-[15px]'>
                    <div className='mt-10'>
                        <p className='text-center mt-5 text-[20px] md:text-[25px] text-[#575757] '>Avez-vous un compte UBA Self-Service ?</p>
                        <div className='flex items-center justify-center mx-auto mt-5 lg:px-[70px]'>
                            
                            <button className='bg-[#d51a0b] w-full  px-5 py-2 mt-2 md:mt-[-5px] rounded-[5px] text-white hover:bg-[#963076]'>Enregistrez-vous</button>
                        </div>
                    </div>
                    <div className='mt-5 pb-2'>
                        <div className='pt-2 mt-5 px-5 lg:px-[70px] '>
                        <div className='mt-5 space-y-7'>
                        <input type="text" placeholder='Nom de l’utilisateur*' className=' w-full px-7  md:w-[265px]  lg:w-full pl-4 py-2 text-[#292929] border-[#d51a0b] border-[2px] rounded-[5px]'/>
                        <input type="text" placeholder='Mot de passe*' className=' w-full px-7  md:w-[265px]  lg:w-full pl-4 py-2 text-[#292929] border-[#d51a0b] border-[2px] rounded-[5px]'/>
                        </div>
                        <p className='text-[#d51a0b] mt-1'>Mot de passe oublié ?</p>
                        <p className='mt-5 text-center text-[#575757]'>En me connectant, j'accepte les termes et conditions</p>
                       <Link href="/admin">
                       <button className='bg-[#d51a0b] px-5 py-2 mt-2 rounded-[5px] w-full text-white hover:bg-[#963076]'>Connectez-vous</button>
                       </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[550px] pb-4 mt-10 block md:hidden'>
                    <div className='px-4 lg:px-[120px]'>
                    <img src="https://media.licdn.com/dms/image/D4E0BAQFTba6bmAfTRQ/company-logo_200_200/0/1695813797169/fonarev_rdc_logo?e=2147483647&v=beta&t=lQm0WvI9ZxeNA-XnOwrHrSa4LvzGWUB7o3O5GzL-cSI" alt="" 
                    className='w-full lg:w-[300px] h-auto'/>
                    </div>
                    <div className="px-0 pb-3">
                        <p className="text-black text-[20px] text-center  mt-3">Fonarev Pleintes Submission</p>

                        <div className="flex gap-x-4 lg:gap-x-6 px-2 lg:px-[100px] mt-2">
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
                    <div className='mt-10'>
                        <p className=' text-[30px] md:text-[45px] text-center text-[#575757]'>Portail de gestion des réparations</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default login