import React, { useState } from "react";
import { Tabs, Tab, Button, Switch, Image } from "@nextui-org/react";
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
import { NavLink, Outlet } from "react-router-dom";
import avatar from "../assets/imgs/avatar.avif";

import { toggleMode } from '../services/slices/themeSlice';
import { UilDirection } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux"; import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ProfileSidebar = () => {
  const userInfo = useSelector(state => state.auth.userInfo.user)

  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  return (
    <>
      {/* sidebar */}
      <div className="col-span-1 bg-secondary-light  shadow-lg p-3 dark:bg-secondary-dark rounded-xl w-full ">
        <div className=" flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">

            <PhotoProvider maskOpacity={0.5}>
              <PhotoView src={userInfo.avatar}>
                <Image
                  isZoomed
                  className="rounded-full cursor-pointer border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  height={50}
                  layout="responsive" // Thêm thuộc tính layout="responsive"
                  src={userInfo.avatar}
                />

              </PhotoView>
            </PhotoProvider>
            <div className="">
              <h1 className="font-semibold">{userInfo.firstName} {userInfo.lastName}</h1>
              <p className="text-medium text-text-gray"> {new Date(userInfo.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <UilDirection></UilDirection>
        </div>
        <hr className="mb-3" />

        <NavLink replace
          style={{ verticalAlign: "middle" }}
          end
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
          end
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
          end
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
          end
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
          end
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
          end
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
          end
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
          end
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
        <hr className="" />
        {/* other options */}
        <div
          className="px-3 flex items-center justify-between mt-4 "

        >
          <div className=" flex items-center gap-2 text-medium">
            <UilLamp className={"text-xl pointer-events-none  "} />
            Theme
          </div>
          <Switch
            thumbIcon={({ isSelected, className }) =>
              theme == "dark" && isSelected
            }
            onChange={(e) => {
              if (e.target.checked) {
                dispatch(toggleMode("dark"));
              } else {
                dispatch(toggleMode("light"));
              }
            }}
            size="sm"
            className="flex float-right text-sm"
            isSelected={theme == "dark"}
            onValueChange={(value) => theme}
          ></Switch>
        </div>
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
          Account Setting
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
          Settings
        </NavLink>
        <hr />
        <div className="plan px-5 flex justify-between items-center my-3">
          <div className="">
            <h1 className="text-medium">Free Plan</h1>
            <h1 className="text-medium">12,000 views</h1>
          </div>
          <Button color="primary" className="opacity-60 text-primary-900 rounded-md !p-0 text-sm" variant="light">
            Update
          </Button>
        </div>
        <hr />
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
    </>
  )
}

export default ProfileSidebar