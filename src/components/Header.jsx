import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilCompass } from '@iconscout/react-unicons'
import { UilHipchat } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import lightLogo from '../assets/imgs/light-full-logo.png'
import darkLogo from '../assets/imgs/dark-logo.png'
import avatar from '../assets/imgs/avatar.avif'
import UserDropdown from './UserDropdown'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Tabs, Tab, } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { Badge, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import TabsComponent from './TabsComponent'
const Header = () => {
  let {pathname: location} = useLocation();
    const {theme} = useSelector((state) => state.theme)
    const navigate = useNavigate();
   
    
  return (
    <header className="grid grid-cols-5 h-[7vh] relative items-center">
      <div className="flex gap-5 justify-between items-center px-2">
        <img width={50} src={theme == 'light' ? lightLogo : darkLogo} alt="" />
        <input
          className="w-4/5 px-2 py-2 rounded-lg shadow-md"
          type="text"
          placeholder="#Explore..."
        />
      </div>
      <nav className="col-span-3 px-2">
      <TabsComponent></TabsComponent>
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