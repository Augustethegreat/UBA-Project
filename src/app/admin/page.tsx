
"use client"
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown, IoIosInformationCircle, IoIosLogOut } from "react-icons/io";
import dataVictime from './data/Victims.json'
import { CiLogout } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaWpforms, FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import logo from "../img/fonarev_rdc_logo.jpg"
import Link from 'next/link';


function Admin() {
  const[DataExp, SetDataExp] = useState([...dataVictime]);
  const victime = ["Francine Mbuyi", "Francine Mbuyi", "Francine Mbuyi","Francine Mbuyi","Francine Mbuyi","Francine Mbuyi"]
  return (
    <div className=' flex h-full gap-x-10 text-[14px] bg-slate-100'>
        <div className='w-[300px]  bg-[#ffffff] shadow-xl shadow-[#727171] '>
            <div className='text-19px font-semibold text-[#707070] '>

            <div className='flex bg-[#204162] px-6 py-5 gap-x-3'>
            <FaCircleUser className='w-[60px] h-[60px] text-white' />
            <div className='py-2'>
            <p className='text-white font-semibold'>Dylan  Dilukombo</p>
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


              <div className='h-auto  '>
                <div className='text-black mt-2 space-y-2'>
                  <p className='text-[#007eb9] font-semibold text-[26px]'>Repertoire des cas</p>
                  <p className='text-[#707070] text-[14px] font-semibold'>Vue globale du progres de tous les cas </p>
                </div>

                  <div className='flex gap-x-10 mt-4'>
                      <select id="dropdownTextbox" defaultValue="Search by" 
                    className='w-full px-[100px] mt-0 md:w-auto outline-none pl-0 pb-1 text-[#707070] text-[14px] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option value="USD">Recherche par</option>
                  <option  value="Option 1">Option 1</option>
                  <option  value="Option 2">Option 2</option>
                  <option  value="Option 3">Option 3</option>                
                  </select>

                  <select id="dropdownTextbox" defaultValue="Search by" 
                    className='w-full px-[50px] mt-0 md:w-auto outline-none pl-0 pb-1 text-[#707070] text-[14px] font-semibold border-[#cdcdcd] hover:border-[#000]  border-b-[1px] '>      
                  <option value="USD">Recherche par la demande</option>
                  <option  value="Option 1">Option 1</option>
                  <option  value="Option 2">Option 2</option>
                  <option  value="Option 3">Option 3</option>                
                  </select>

                  <div>
                   <div className='flex gap-x-2 p-2 text-[#007eb9] hover:text-white text-[14px] hover:bg-[#007eb9] hover:cursor-pointer font-semibold border-[#007eb9] border-[2px] rounded-[7px]'>
                    <IoIosSearch className=' w-[20px] h-auto ' />
                   <p >SEARCH</p>
                   </div>
                  </div>

                  </div>


                <div className='mt-5'>
                  <div className='flex gap-x-10'>
                    <div className='text-[#707070] text-[14px] font-semibold border-[2px] border-[#cdcdcd] rounded-[10px]'>
                      <p className='p-2 bg-[#f7f7f7] rounded-t-[10px] pr-[100px]'>Réparations en cours</p>
                      <p className='p-2 bg-white rounded-b-[10px]'>1123</p>
                    </div>

                    <div className='text-[#707070] text-[14px] font-semibold border-[2px] border-[#cdcdcd] rounded-[10px]'>
                      <p className='p-2 bg-[#f7f7f7] rounded-t-[10px] pr-[100px]'>Réparations declinées</p>
                      <p className='p-2 bg-white rounded-b-[10px]'>15</p>
                    </div>

                    <div className='text-[#707070] text-[14px] font-semibold border-[2px] border-[#cdcdcd] rounded-[10px]'>
                      <p className='p-2 bg-[#f7f7f7] rounded-t-[10px] pr-[100px]'>Réparations finaliseés</p>
                      <p className='p-2 bg-white rounded-b-[10px]'>849</p>
                    </div>
                  </div>
                </div>

                     <div className="overflow-x-auto mt-5 h-[340px] overflow-y-scroll  w-[130%]">
          <table className=" bg-white  border border-gray-300 w-full"> {/* min-w-full  */}
            <thead className="bg-[#ebebeb] text-[#007eb9] text-left">
        <tr>
          <th className="py-2 px-1 md:px-4 border-r-[1px] border-r-[#cdcdcd] ">De</th>
          <th className="py-2 px-1 md:px-4 border-r-[1px] border-r-[#cdcdcd] md:block hidden">Titre</th>
          <th className="py-2 px-1 md:px-4 border-r-[1px] border-r-[#cdcdcd]">Recu</th>
          <th className="py-2 px-1 md:px-4 border-r-[1px] border-r-[#cdcdcd] md:block hidden">Temps</th>
          <th className="py-2 px-1 md:px-4 border-r-[1px] border-r-[#cdcdcd] ">Province</th>
          <th className="py-2 px-1 md:px-4 border-r-[1px] border-r-[#cdcdcd]">Status</th>
        </tr>
      </thead>
       <tbody>
        {/* Example row */}
     
        {
                DataExp && DataExp.map((i, index) => {
                  return(
                    <tr key={index} className='text-black text-[14px] odd:bg-white   even:bg-[#007eb9] even:bg-opacity-15'>
                  
                    <td  className="py-2 px-1 md:px-4 border-b hover:cursor-pointer"><Link href="/view">{i.name}</Link></td>    
                    <td className="py-2 px-1 md:px-4 border-b md:block hidden hover:cursor-pointer"><Link href="/view">{i.titre}</Link></td>
                    <td className="py-2 px-1 md:px-4 border-b hover:cursor-pointer"><Link href="/view">{i.recu}</Link></td>
                    <td className="py-2 px-1 md:px-4 border-b md:block hidden hover:cursor-pointer"><Link href="/view">{i.temps}</Link></td>
                    <td className="py-2 px-1 md:px-4 border-b  hover:cursor-pointer"><Link href="/view">{i.province}</Link></td>
                    <td className="py-2 px-1 md:px-4 border-b hover:cursor-pointer"><Link href="/view">{i.status}</Link></td>
                  
                    </tr>
                  )
                })}
     
        {/* Add more rows as needed */}
      </tbody> 
    </table>
  </div>

              </div>
   
  
    </div>
  )
}

export default Admin




