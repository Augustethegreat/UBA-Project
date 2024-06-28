
"use client"
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosInformationCircle, IoIosLogOut } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaWpforms, FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import logo from "../img/fonarev_rdc_logo.jpg"
import Link from 'next/link';
function View() {
  return (
    <div className=' flex h-full gap-x-10 text-[14px] font-medium bg-slate-100 text-[#4f4f4f] '>
        <div className='w-[300px]  bg-[#ffffff] shadow-xl shadow-[#727171] pb-10'>
            <div className='text-19px font-semibold text-[#707070] '>

            <div className='flex bg-[#204162] px-6 py-5 gap-x-3'>
            <FaCircleUser className='w-[60px] h-[60px] text-white' />
            <div className='py-2'>
            <p className='text-white font-semibold'>Toto Munayi</p>
            <p className='text-[#44ff88] font-semibold'>online</p>
            </div>
            </div>
            <div >
            <p className='py-2 px-5 border-b-[#007eb9] border-b-[2px] '>Administrateur</p>
            <div className='px-5'>
            {/* <p>Dernière connexion :</p>
            <p>6 mai 2024 @15 :33</p> */}
            </div>
             
            <div className=' text-[14px]'>
              <div className=' hover:bg-[#204162] hover:cursor-pointer py-5 hover:text-white'>
                <div className='px-5 flex gap-x-2'>
                <FaLocationDot className='w-[20px] h-[20px] mt-[3px]'/>
                <p className='w-[200px]'>Region</p>
                <IoIosArrowDown className='w-[20px] h-[20px] mt-[3px] text-right'/>
                </div>
              </div>

              <div className=' hover:bg-[#204162] hover:cursor-pointer py-5 hover:text-white'>
                <div className='px-5 flex gap-x-2'>
                <FaRegCalendarAlt  className='w-[20px] h-[20px] mt-[3px]'/>
                <p className='w-[200px]'>Date</p>
                
                </div>
              </div>

              <div className=' hover:bg-[#204162] hover:cursor-pointer py-5 hover:text-white'>
                <div className='px-5 flex gap-x-2'>
                <FaWpforms className='w-[20px] h-[20px] mt-[3px]'/>
                <p className='w-[200px]'>Type de violence</p>
                <IoIosArrowDown className='w-[20px] h-[20px] mt-[3px] text-right'/>
                </div>
              </div>

              <div className=' hover:bg-[#204162] hover:cursor-pointer py-5 hover:text-white'>
                <div className='px-5 flex gap-x-2'>
                <IoIosInformationCircle  className='w-[20px] h-[20px] mt-[3px]'/>
                <p className='w-[200px]'>Status</p>
                
                </div>
              </div>

              <div className=' hover:bg-[#204162] hover:cursor-pointer py-5 hover:text-white'>
                <Link href='/login'>
                <div className='px-5 flex gap-x-2'>
                <CiLogout  className='w-[20px] h-[20px] mt-[3px]'/>
                <p className='w-[200px]'>Log out</p>
                </div>
                </Link>
                
              </div>

            </div>
                <div className='px-[100px] mx-auto items-center'>
                <img src="https://media.licdn.com/dms/image/D4E0BAQFTba6bmAfTRQ/company-logo_200_200/0/1695813797169/fonarev_rdc_logo?e=2147483647&v=beta&t=lQm0WvI9ZxeNA-XnOwrHrSa4LvzGWUB7o3O5GzL-cSI" alt="" 
                    className='w-[100px] h-auto rounded-full  '/>
                </div>
            </div>
            </div>
        </div>


        <div className='mt-2 '>
                <p className='text-[#007eb9] font-semibold text-[26px] '>Vérification du cas</p>

                <div className='flex gap-x-8 mt-5'>
                    <div>
                        <p className='mt-2 font-bold'>Nom</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>Francine Mbuyi</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-2 font-bold'>Gender</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>Femme</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-2 font-bold'>Age</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>18 - 35 ans</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-2 font-bold'>Province</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>Uvira</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-2 font-bold'>Ville</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>Isiro</p>
                        </div>
                    </div>
                </div>

                <div className='flex mt-5 gap-x-8'>
                    <div>
                    <p className='mt-2 font-bold'>Description</p>
                    <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-9 px-5 w-[500px]'>J’étais victime des violences d’un homme qui m’est parenté…A plusieurs reprises il a fait des avances inappropriées qui m’ont laissée dégoutée et le cœur brisé.</p>
                    </div>
                    </div>
                    
                    <div>
                    <div className='flex gap-x-8'>
                    <div>
                        <p className='mt-2 font-bold'>Telephone</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>099 456 4021</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-2 font-bold'>Address Email</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>francim@gmail.com</p>
                        </div>
                    </div>
                    </div>

                    <div className='flex gap-x-8'>
                    <div>
                        <p className='mt-2 font-bold'>Forme de violence</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>Sexuelle</p>
                        </div>
                    </div>

                    <div>
                        <p className='mt-2 font-bold'>Date</p>
                        <div className='rounded-[6px]  bg-[#fff] shadow-xl'>
                            <p className='py-3 px-5 w-[180px]'>04 avril 2024</p>
                        </div>
                    </div>
                    </div>
                    </div>

                    
                </div>
                <div className='border-t-[1px] border-[#e4e4e4] w-full mt-10 flex gap-x-10'>
                        <div className='mt-5 space-y-5'>
                            <p>Commentaire sur l’incident</p>
                            <p>Initie</p>
                            <p>Urgence</p>
                        </div>
                        <div className='mt-5 flex gap-x-5'>
                            <textarea name="" id="" placeholder='Conclusion' className='border-[1px] text-[14px] font-medium text-[#4f4f4f] border-[#2c2c2c] outline-none h-[120px] p-5 w-[600px]'></textarea>
                            <div className='mt-0 space-y-2'>
                            <div><button className='bg-[#007eb9] text-white font-bold p-2  w-full hover:bg-[#963076]'>Imprimer</button></div>
                           <div> <Link href='/admin'><button className='bg-[#007eb9] text-white font-bold p-2  w-full hover:bg-[#963076]'>Retour</button>
                            </Link></div>
                           <div> <button className='bg-[#007eb9] text-white font-bold p-2  w-full hover:bg-[#963076]'>Soumettre</button>
                            </div>
                            </div>
                        </div>
                    </div>
        </div>

    </div>
  )
}

export default View