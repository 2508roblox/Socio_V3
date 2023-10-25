import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilCompass } from '@iconscout/react-unicons'
import { UilHipchat } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import lightLogo from '../assets/imgs/light-full-logo.png'
import avatar from '../assets/imgs/avatar.avif'
import UserDropdown from './UserDropdown'
const Header = () => {
  return (
    <header className='grid grid-cols-5 h-[7vh] relative items-center'>
        <div className="flex gap-5 justify-between items-center px-2">
            <img width={50}   src={lightLogo} alt="" />
                <input className='w-4/5 px-2 py-2 rounded-lg shadow-md' type="text" placeholder='#Explore...' />
        </div>
        <nav className='col-span-3 px-2'>
            <ul className='flex justify-center gap-10'>
                <li className=''>
                    <UilEstate size={30} className="opacity-70"/>
                </li>
                <li>
                    <UilCompass size={30} className="opacity-70"/>
                </li>
                <li>
                    <UilHipchat size={30} className="opacity-70"/>
                </li>
                <li>
                    <UilUsersAlt size={30} className="opacity-70"/>
                </li>
            </ul>
        </nav>
       <div className="px-2 flex items-center gap-4 justify-end">
       <UserDropdown  ></UserDropdown>
        <UilBell></UilBell>
       </div>
    </header>

  )
}

export default Header