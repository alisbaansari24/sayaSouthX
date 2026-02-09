import React from 'react'

export default function Navbar() {
  return (
    <div className='px-6 py-2'>
        <ul className='flex md:text-[14px] text-[10px] gap-2 text-[#515151] cursor-pointer'>
            <li className=''>HOME</li><span>/</span>
            <li>PROJECTS</li><span>/</span>
            <li className='uppercase'>Commercial</li><span>/</span>
            <li className='uppercase text-[#F6883E]'>SAYA-SOUTHX</li>
            <li></li>
        </ul>
    </div>
  )
}
