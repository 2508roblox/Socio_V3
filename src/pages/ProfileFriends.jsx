import React, { useState } from "react";
import Header from "../components/Header";
import { UilSmile } from "@iconscout/react-unicons";
import {Tabs, Tab, Button, Switch, Image, Input, Badge} from "@nextui-org/react";
import { UilUser } from '@iconscout/react-unicons'
import { UilImageEdit } from '@iconscout/react-unicons'
import { UilNotebooks } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilImages } from '@iconscout/react-unicons'
import { UilEnvelopeEdit } from '@iconscout/react-unicons'
import { UilBookmarkFull } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilLamp } from '@iconscout/react-unicons'
import { UilWrench } from '@iconscout/react-unicons'
import { UilSlidersVAlt } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'
import {Listbox, ListboxItem, cn} from "@nextui-org/react";
import { NavLink, Outlet } from "react-router-dom";
import avatar from "../assets/imgs/avatar.avif";
import { UilCameraPlus } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilImageUpload } from '@iconscout/react-unicons'

import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../services/slices/themeSlice';
import { UilDirection } from '@iconscout/react-unicons'
import ProfileSidebar from "../components/ProfileSidebar";
import CreatePostModal from "../components/CreatePostModal";
import PostCard from "../components/PostCard";
import { UilSearch } from "@iconscout/react-unicons";


const ProfileFriends = () => {
  return (
    <main className="grid grid-cols-5 mt-3">
      <ProfileSidebar></ProfileSidebar>
      {/* posts */}
      <div className="col-span-4 relative flex gap-4 flex-col mx-3 w-full h-[88vh] overflow-y-scroll flex-1  overflow-x-hidden scrollbar-hide">
        <h1 className="text-4xl font-bold">Friends</h1>
        <div className="filter-section flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search..."
            labelPlacement="outside"
            className="w-3/12 shadow-md rounded-lg p-3 bg-secondary-light dark:bg-secondary-dark "
            startContent={
              <UilSearch size={35} className=" p-1 bg-btn-blue text-white  dark:bg-btn-yellow rounded-lg  text-4xl dark:text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <div className="flex gap-4">
            <div className="rounded-md bg-secondary-light dark:bg-secondary-dark px-4 py-2  shadow-md">
              Set A - Z descrending
            </div>
            <div className="rounded-md bg-secondary-light dark:bg-secondary-dark px-4 py-2  shadow-md">
              Filter
            </div>
          </div>
        </div>
        <div className="friends grid grid-cols-4 gap-4">
            {/* item */}
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
                />
                </Badge>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username_mills</p>
              </div>
            </div>
            <div className="flex gap-3 mt-9">
            <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Friend
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileFriends