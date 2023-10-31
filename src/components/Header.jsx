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
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Tabs, Tab, } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,   useDisclosure} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux'
import {Badge, Button} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  let {pathname: location} = useLocation();
    const {theme} = useSelector((state) => state.theme)
    const navigate = useNavigate();
    console.log(location)
    const activeTab = ( ) => {
      if (location == '/') {
        return 'home'
      }else if (location == '/chat') {
        return 'chat'

      }else {
        return 'explore'
      }
    }
  return (
    <header className="grid grid-cols-5 h-[7vh] relative items-center">
      <div className="flex gap-5 justify-between items-center px-2">
        <img width={50} src={lightLogo} alt="" />
        <input
          className="w-4/5 px-2 py-2 rounded-lg shadow-md"
          type="text"
          placeholder="#Explore..."
        />
      </div>
      <nav className="col-span-3 px-2">
        <Tabs
        defaultSelectedKey={() => activeTab()}
          aria-label="Options"
          color={`primary`}
          className={`${theme} flex justify-center gap-10 bg-transparent `}
          variant="light"
        >
          <Tab
            className="dark:bg-transparent border-none "
            key="home"
            title={
              <Link to={"/"}>
                <div className="flex items-center space-x-2  rounded-full">
                  <UilEstate size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
          <Tab
            
            className="dark:bg-transparent"
            key="explore"
            title={
              <Link to={"/explore"}>
                <div className="flex items-center space-x-2  ">
                  <UilCompass size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
          <Tab
            className="dark:bg-transparent"
            key="chat"
            title={
              <Link to={"/chat"}>
                <div className="flex items-center space-x-2   ">
                  <UilHipchat size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
          <Tab
            className="dark:bg-transparent"
            key="more"
            title={
              <Link to={"/"}>
                <div className="flex items-center space-x-2  ">
                  <UilUsersAlt size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
        </Tabs>
      </nav>

      <div className="px-2 flex items-center gap-4 justify-end">
        <UserDropdown></UserDropdown>

        <Dropdown>
          <DropdownTrigger>
            <Badge content="99+" shape="circle" color="primary">
              <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications "
                className="dark:bg-transparent dark:text-white"
                variant="light"
              >
                <UilBell></UilBell>
              </Button>
            </Badge>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Example with disabled actions"
            disabledKeys={["edit", "delete"]}
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <Card>
                <CardBody></CardBody>
              </Card>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header