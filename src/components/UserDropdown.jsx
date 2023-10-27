import React, { useState } from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'
import avatar from '../assets/imgs/avatar.avif'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";
import {Badge, Avatar, Switch} from "@nextui-org/react";
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../services/slices/themeSlice';
const UserDropdown = () => {
  const dispatch = useDispatch()
    const [isInvisible, setIsInvisible] = useState(false);
    const {theme} = useSelector((state) => state.theme)
  return (
    <Dropdown 
    className={`${theme}   `}
    >
      <DropdownTrigger>
        <Button color={"gray"} variant={"shadow"} className="capitalize p-0 ">
          <div className=" flex items-center gap-2 p-2">
            <img src={avatar} className="rounded-full" width={40} alt="" />
            <span className="text-medium">Giang Tran</span>
            <UilAngleDown />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu className='dark:text-white'
    
        aria-label="Dropdown Variants"
        color={"primary"}
        variant={"shadow"}
      >
        <DropdownItem key="new">Profile</DropdownItem>
        <DropdownItem
          className="flex flex-row items-center justify-between"
          key="copy"
        >
          Theme
          <Switch
        
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <UilSun className={className} />
              ) : (
                <UilMoon className={className} />
              )
            }
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(toggleMode('light'))
              }else {
                dispatch(toggleMode('dark'))

              }
            }}
            size="sm"
            className="flex float-right text-sm"
            isSelected={!isInvisible}
            onValueChange={(value) => setIsInvisible(!value)}
          ></Switch>
        </DropdownItem>
        <DropdownItem key="edit">Setting</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserDropdown