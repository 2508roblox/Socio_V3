import React, { useState } from "react";
import Header from "../components/Header";
import { UilSmile } from "@iconscout/react-unicons";
import {Tabs, Tab, Button} from "@nextui-org/react";
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
import { NavLink } from "react-router-dom";
import avatar from "../assets/imgs/avatar.avif";
import { UilCameraPlus } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilImageUpload } from '@iconscout/react-unicons'

const ProfileScreen = () => {
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <Header></Header>
      <main className="grid grid-cols-5 mt-3">
        {/* sidebar */}
        <div className="col-span-1 bg-secondary-light  shadow-lg p-3 dark:bg-secondary-dark rounded-xl w-full ">
          <NavLink
            style={{ verticalAlign: "middle" }}
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full  flex  text-medium gap-2 rounded-lg p-3 "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilUser className={"text-xl pointer-events-none  "} />
            Profile
          </NavLink>
          <NavLink
            to="/profile/post"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilImageEdit className={"text-xl pointer-events-none  "} />
            Posts
          </NavLink>
          <NavLink
            to="/profile/story"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilNotebooks className={"text-xl pointer-events-none  "} />
            Story
          </NavLink>
          <NavLink
            to="/profile/friends"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilUsersAlt className={"text-xl pointer-events-none  "} />
            Friends
          </NavLink>
          <NavLink
            to="/profile/gallery"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilImages className={"text-xl pointer-events-none  "} />
            Gallery
          </NavLink>
          <NavLink
            to="/profile/message"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilEnvelopeEdit className={"text-xl pointer-events-none  "} />
            Message
          </NavLink>
          <NavLink
            to="/profile/group"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilApps className={"text-xl pointer-events-none  "} />
            Group
          </NavLink>
          <NavLink
            to="/profile/saved"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilBookmarkFull className={"text-xl pointer-events-none  "} />
            Saved
          </NavLink>
          <hr />
          {/* other options */}
          <NavLink
            to="/profile/saved"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilLamp className={"text-xl pointer-events-none  "} />
            Theme
          </NavLink>
          <NavLink
            to="/profile/saved"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilWrench className={"text-xl pointer-events-none  "} />
            Update
          </NavLink>
          <NavLink
            to="/profile/saved"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilSlidersVAlt className={"text-xl pointer-events-none  "} />
            Setting
          </NavLink>
          <NavLink
            to="/profile/saved"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                : " w-full flex gap-2 rounded-lg p-3  dark:text-red-600 text-medium     "
            }
          >
            <UilSignout
              className={"text-xl text-red-600 pointer-events-none  "}
            />
            Logout
          </NavLink>
        </div>
        {/* profile  */}
        <div className="col-span-4 mx-3   h-[88vh] grid  grid-rows-5 grid-cols-1 ">
          <div className="row-span-3 bg-secondary-light  shadow-xl dark:bg-secondary-dark rounded-xl w-full mb-3">
            <div className="h-3/5 w-full relative z-1">
              <img
                className="rounded-xl h-full w-full object-cover "
                src="https://cdna.artstation.com/p/assets/images/images/024/538/828/original/pixel-jeff-clipc-s.gif?1582740521"
                alt=""
              />
              <div className="absolute flex gap-3 top-2 right-3">
                <UilEdit className="cursor-pointer bg-primary-light dark:bg-primary-dark  rounded-sm " />
                <UilImageUpload className="cursor-pointer bg-primary-light dark:bg-primary-dark  rounded-sm " />
              </div>
            </div>
            <div className="z-2  flex items-end -mt-32 flex-row gap-2 justify-between mx-32">
              <div className="flex relative gap-4 items-end">
                <div className="relative">
                  <img
                    src={avatar}
                    alt=""
                    className=" object-cover h-[230px] w-[160px] rounded-2xl border-[6px]  border-white"
                  />
                  <UilCameraPlus className="rounded-sm bg-primary-light dark:bg-primary-dark absolute bottom-3 right-3"></UilCameraPlus>
                </div>
                <div className="">
                  <h1 className="text-3xl font-bold flex gap-2 items-center">
                    Rachel Derek
                    <div className="status w-3 h-3 rounded-full bg-green-400 mt-2"></div>
                  </h1>
                  <p className="text-xl opacity-70">@Rachel_Derek</p>
                  <p className="text-lg font-semibold">MERN stack developer</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
                  size="lg"
                >
                  Add Friend
                </Button>
                <Button
                  className="w-full   bg-btn-gray dark:bg-btn-gray dark:text-white rounded-md text-xl  text-white px-3 !py-1 "
                  size="lg"
                >
                  Chat
                </Button>
              </div>
            </div>
            <div className="mx-32 my-3 flex gap-4">
              <p className="text-xl font-bold opacity-60 cursor-pointer hover:opacity-90">
                8000 Followers
              </p>
              <p className="text-xl font-bold opacity-60 cursor-pointer hover:opacity-90">
                10 Followings
              </p>
              <p className="text-xl font-bold opacity-60 cursor-pointer hover:opacity-90">
                100 Friends
              </p>
            </div>
          </div>

          <div className="row-span-2 bg-secondary-light  shadow-xl dark:bg-secondary-dark rounded-xl w-full"></div>
        </div>
      </main>
    </div>
  );
}

export default ProfileScreen