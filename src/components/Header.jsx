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
import {Tabs, Tab} from "@nextui-org/react"; 
import { useSelector } from 'react-redux'
const Header = () => {
    const {theme} = useSelector((state) => state.theme)

  return (
    <header className='grid grid-cols-5 h-[7vh] relative items-center'>
        <div className="flex gap-5 justify-between items-center px-2">
            <img width={50}   src={lightLogo} alt="" />
                <input className='w-4/5 px-2 py-2 rounded-lg shadow-md' type="text" placeholder='#Explore...' />
        </div>
        <nav className='col-span-3 px-2'>
             
            <Tabs onSelectionChange={(e) => {console.log(e)}}  aria-label="Options"   color={`primary`} className='flex justify-center gap-10 bg-transparent ' variant="light">
        <Tab   className='dark:bg-transparent border-none '
          key="photos"
          title={
            <div className="flex items-center space-x-2 dark:text-white rounded-full">
                                <UilEstate size={23}   className="opacity-70"/>  
            </div>
          }
        />
        <Tab onPress={(e) => console.log(e)} className='dark:bg-transparent'
          key="music"
          title={
            <div className="flex items-center space-x-2 dark:text-white ">
                                 <UilCompass size={23}   className="opacity-70"/>
              
            </div>
          }
        />
        <Tab className='dark:bg-transparent'
          key="videos"
          title={
            <div className="flex items-center space-x-2 dark:text-white  ">
                                <UilHipchat size={23}   className="opacity-70"/>
          
            </div>
          }
        />
        <Tab className='dark:bg-transparent'
          key="more"
          title={
            <div className="flex items-center space-x-2 dark:text-white ">
                                <UilUsersAlt size={23}  className="opacity-70"/>
             
            </div>
          }
        />
      </Tabs>
        </nav>
       <div className="px-2 flex items-center gap-4 justify-end">
       <UserDropdown  ></UserDropdown>
        <UilBell></UilBell>
       </div>
    </header>

  )
}

export default Header