import React, { useState } from "react";
import Header from "../components/Header";
import { UilSmile } from "@iconscout/react-unicons";
import {Tabs, Tab} from "@nextui-org/react";
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
const ProfileScreen = () => {
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <Header></Header>
      <main className="grid grid-cols-5 mt-3">
        <div className="">
          <div className="  shadow-lg rounded-xl ">
            {/* sidebar */}
            <div className="col-span-1 p-3 dark:bg-secondary-dark rounded-xl w-full ">
              <NavLink
              style={{verticalAlign:'middle'}}
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full  flex  text-medium gap-2 rounded-lg p-3 "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilUser
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Profile
              </NavLink>
              <NavLink
                to="/profile/post"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilImageEdit
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Posts
              </NavLink>
              <NavLink
                to="/profile/story"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilNotebooks
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Story
              </NavLink>
              <NavLink
                to="/profile/friends"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilUsersAlt
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Friends
              </NavLink>
              <NavLink
                to="/profile/gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilImages
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Gallery
              </NavLink>
              <NavLink
                to="/profile/message"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilEnvelopeEdit
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Message
              </NavLink>
              <NavLink
                to="/profile/group"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilApps
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Group
              </NavLink>
              <NavLink
                to="/profile/saved"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilBookmarkFull
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
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
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilLamp
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Theme
              </NavLink>
              <NavLink
                to="/profile/saved"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilWrench
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Update 
              </NavLink>
              <NavLink
                to="/profile/saved"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
                }
              >
                <UilSlidersVAlt
                  className={
                    "text-xl text-white pointer-events-none  "
                  }
                />
                Setting
              </NavLink>
              <NavLink
                to="/profile/saved"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-btn-blue text-white w-full flex gap-2 rounded-lg p-3 text-medium "
                    : " w-full flex gap-2 rounded-lg p-3  dark:text-red-600 text-medium     "
                }
              >
                <UilSignout
                  className={
                    "text-xl text-red-600 pointer-events-none  "
                  }
                />
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileScreen