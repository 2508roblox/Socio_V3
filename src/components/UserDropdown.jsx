import React, { useState } from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'
import avatar from '../assets/imgs/avatar.avif'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio } from "@nextui-org/react";
import { Badge, Avatar, Switch } from "@nextui-org/react";
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../services/slices/themeSlice';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/slices/authSlice';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const UserDropdown = () => {
  const userInfo = useSelector(state => state.auth.userInfo.user)

  const { theme } = useSelector((state) => state.theme)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async () => {
    dispatch(logout())
    navigate('register')

  }
  return (
    <Dropdown
      className={`${theme}   `}
    >
      <DropdownTrigger>
        <Button color={"gray"} variant={"shadow"} className="dark:bg-transparent dark:text-white capitalize p-0 ">
          <div className=" flex items-center gap-2 p-2">
            <PhotoProvider maskOpacity={0.5}>
              <PhotoView src={userInfo.avatar}>
                <img src={userInfo.avatar} className="rounded-full" width={40} alt="" />

              </PhotoView>
            </PhotoProvider>
            <span className="text-medium font-medium">{userInfo.firstName} {userInfo.lastName}</span>
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
              theme == 'light' ? (
                <UilSun className={className} />
              ) : (
                <UilMoon className="dark:text-black dark:bg-transparent   " />
              )
            }
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(toggleMode('light'))
              } else {
                dispatch(toggleMode('dark'))

              }
            }}
            size="sm"
            className="flex float-right text-sm"
            isSelected={theme == 'light'}
            onValueChange={(value) => theme}
          ></Switch>
        </DropdownItem>
        <DropdownItem key="edit">Setting</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" onClick={handleLogout}>
          <span className='text-sm' >
            Logout
          </span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserDropdown