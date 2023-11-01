import React, { useState } from "react";
import {Tabs, Tab, Button, Switch, Image} from "@nextui-org/react";
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
import { useDispatch, useSelector } from "react-redux";
const RelationshipSidebar = () => {
    const dispatch = useDispatch()
    const {theme} = useSelector((state) => state.theme)
  return (
    <div className="col-span-1 bg-secondary-light  shadow-lg p-3 dark:bg-secondary-dark rounded-xl w-full ">
          <div className=" flex justify-between items-center mb-4">
            <div className="flex gap-2 items-center">
              <Image
                isZoomed
                className=" rounded-full border-[2px] border-white shadow-md"
                alt="NextUI hero Image"
                width={50}
                src={avatar}
              />

              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">December 28, 2018</p>
              </div>
            </div>
            <UilDirection></UilDirection>
          </div>
            <hr  className="mb-3"/>

          <NavLink replace
            style={{ verticalAlign: "middle" }}
            end
            to="/relationship"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "dark:bg-btn-yellow dark:text-black bg-btn-blue text-white w-full  flex  text-medium gap-2 rounded-lg p-3 "
                : " w-full flex gap-2 rounded-lg p-3  text-medium  text-black dark:text-white"
            }
          >
            <UilUser className={"text-xl pointer-events-none  "} />
            All Users
          </NavLink>
          <NavLink
            to="/relationship/friends"
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
            Friends
          </NavLink>
          <NavLink
            to="/relationship/requesting"
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
            Requesting
          </NavLink>
        
          <NavLink
            to="/relationship/request"
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
        Request
          </NavLink>
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
  )
}

export default RelationshipSidebar