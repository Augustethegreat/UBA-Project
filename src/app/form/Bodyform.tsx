import React from 'react'

export default function Bodyform() {
  return (
    <div className='flex mx-auto items-center justify-center w-full px-[300px] text-[18px] text-black'>
      <div className=' shadow-xl h-[800px] w-full '>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[100px]'>
                <p className='text-[20px] w-[300px]'>Quel est votre statut en RDC ?  </p>
                <select id="dropdownTextbox" defaultValue="Search by" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="" selected disabled hidden>Resident / Non-resident</option>
                  <option  value="Resident">Resident</option>
                  <option  value="Non-resident">Non-resident</option>
                  </select>
            </div>
        </div>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[10px]'>
                <p className='text-[20px] w-[300px]'>Type de Compte </p>
                <select id="dropdownTextbox" defaultValue="Search by" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="" selected disabled hidden>Individuel / Joint</option>
                  <option  value="Individuel">Individuel</option>
                  <option  value="Joint">Joint</option>
                </select>
            </div>
        </div>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[10px]'>
                <p className='text-[20px] w-[300px]'>Catégorie</p>
                <select id="dropdownTextbox" defaultValue="Search by" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="" selected disabled hidden>Individuel / Joint</option>
                  <option  value="Individuel">Individuel</option>
                  <option  value="Joint">Joint</option>
                </select>
            </div>
        </div>
        <div>
            <div className='flex mx-auto items-center justify-center gap-x-[60px] pt-[10px]'>
                <p className='text-[20px] w-[300px]'>Type de Compte </p>
                <select id="dropdownTextbox" defaultValue="Search by" className='w-full px-10 mt-0 md:w-[300px]  pl-4 py-3 text-black font-semibold border-[#000] hover:border-[#000] rounded-[5px] border-[1px] '>      
                  <option value="" selected disabled hidden>Individuel / Joint</option>
                  <option  value="Individuel">Individuel</option>
                  <option  value="Joint">Joint</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  )
}
