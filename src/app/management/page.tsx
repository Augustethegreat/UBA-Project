import Link from 'next/link'
import React from 'react'
import { CiLogout } from 'react-icons/ci'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCircleUser, FaLocationDot, FaWpforms } from 'react-icons/fa6'
import { IoIosArrowDown, IoIosInformationCircle } from 'react-icons/io'
import { useSpring, animated } from '@react-spring/web'

function Management() {
  return (
    <div className=' flex h-full gap-x-0 text-[14px] overflow-hidden'>
    <div className='w-[300px]  bg-[#ffffff] shadow-xl shadow-[#727171] '>
        <div className='text-19px font-semibold text-[#707070] '>

        <div className='flex bg-[#204162] px-6 py-5 gap-x-3'>
        <FaCircleUser className='w-[60px] h-[60px] text-white' />
        <div className='py-2'>
        <p className='text-white font-semibold'>Kevin Ngunga</p>
        <p className='text-[#44ff88] font-semibold'>online</p>
        </div>
        </div>
        <div >
        <p className='py-2 px-5 border-b-[#007eb9] border-b-[2px] '>Directeur Général Adjoint</p>
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

    <div className='text-[#494949] text-[14px] w-full bg-slate-100 pb-[70px]'>
      <p className='text-[28px] text-center mt-3 font-bold'>Tableau des indicateurs</p>

      <div className='w-full '>
        <div className='px-[150px] space-y-4 mx-auto items-center justify-center mt-[30px]'>

          <div className='flex gap-x-4'>
          <div className='flex gap-x-4 font-medium text-[15px]'>
            <p className='w-[130px] text-center '>Vue de</p>
            <select id="dropdownTextbox" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-[2px] text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'>
            <option value="" selected disabled hidden>-</option>
            <option value="Male">Homme</option>
            <option value="Female">Femme</option>
            </select>
          </div>
          <div className='flex gap-x-4 font-medium text-[15px]'>
            <p className='w-[130px] text-center '>Province</p>
            <select id="dropdownTextbox" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-[2px] text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'>
            <option value="" selected disabled hidden>-</option>
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
          </div>
          </div>

          <div className='flex gap-x-4'>
          <div className='flex gap-x-4 font-medium text-[15px]'>
            <p className='w-[130px] text-center '>Form de violence</p>
            <select id="dropdownTextbox" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-[2px] text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'>
            <option value="" selected disabled hidden>-</option>
            <option value="Violence physique">Violence physique</option>
            <option value="Violence verbale">Violence verbale</option>
            <option value="Violence psychologique">Violence psychologique</option>
            <option value="Violence economique">Violence economique</option>
            </select>
          </div>
          <div className='flex gap-x-4 font-medium text-[15px]'>
            <p className='w-[130px] text-center '>Status</p>
            <select id="dropdownTextbox" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-[2px] text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'>
            <option value="" selected disabled hidden>-</option>
            <option value="Initié">Initié</option>
            <option value="Verifié">Verifié</option>
            <option value="Enregistré">Enregistré</option>
            <option value="En justice">En justice</option>
            <option value="En Reparation">En Reparation</option>
            <option value="Reparation finalisé">Reparation finalisé</option>
            <option value="Clos">Clos</option>
            </select>
          </div>
          </div>

          <div className='flex gap-x-4'>
          <div className='flex gap-x-4 font-medium text-[15px]'>
            <p className='w-[130px] text-center '>Intervalle de*</p>
            <input type="date" className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-[2px] text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'/>
         
           
          </div>
          <div className='flex gap-x-4 font-medium text-[15px]'>
            <p className='w-[130px] text-center '>Au*</p>
            <input type="date"  className='w-full px-7  md:w-[265px]  lg:w-[290px] pl-4 py-[2px] text-[#292929] border-[#972d71] border-[2px] rounded-[5px]'/>
            
          </div>
          </div>
        </div>

        <div className='px-[250px] lg:flex gap-x-6 text-[18px] font-medium mt-5'>
          <div className=''>
          <Link href="/admin">
              <div className='bg-[#ffff]  w-[350px] px-10 py-14 rounded-[10px] hover:shadow-xl hover:cursor-pointer text-[18px] hover:text-[20px] hover:text-[#007db7] hover:shadow-[#91b8ca]'>
                <p className='text-center text-[#ff2727]'>1546 incidents signalés...</p>
              </div></Link>
              <Link href="/admin">
              <div className='bg-[#fff] w-[350px] px-10 mt-3 py-14 rounded-[10px] hover:shadow-xl hover:cursor-pointer text-[18px] hover:text-[20px] hover:text-[#007db7] hover:shadow-[#91b8ca]'>
                
                <p className='text-center text-[#b967d2]'>1123 reparations en cours...</p>
              </div></Link>
          </div>
          <div className='space-y-3'>
          <Link href="/admin">
              <div className='bg-white w-[350px] px-10  py-14 rounded-[10px] hover:shadow-xl hover:cursor-pointer text-[18px] hover:text-[20px] hover:text-[#007db7] hover:shadow-[#91b8ca]'>
              <p className='text-center text-[#007db7]'>1237 incidents validés...</p>
              </div></Link>
              <Link href="/admin">
              <div  className='bg-white w-[350px] px-10 mt-3 py-14 rounded-[10px] hover:shadow-xl hover:cursor-pointer text-[18px] hover:text-[20px] hover:text-[#007db7] hover:shadow-[#91b8ca]'>
                <p className='text-center text-[#3ba162]'>89 réparations finalisées...</p>
              </div></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
       
  )
}

export default Management