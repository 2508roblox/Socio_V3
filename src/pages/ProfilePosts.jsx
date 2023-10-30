import React, { useState } from "react";
import Header from "../components/Header";
import { UilSmile } from "@iconscout/react-unicons";
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

const ProfilePosts = () => {
  return (
    <main className="grid grid-cols-5 mt-3">
      <ProfileSidebar></ProfileSidebar>
      {/* posts */}
      <div className="col-span-3 relative flex flex-col mx-3 w-full h-[88vh] overflow-y-scroll flex-1  overflow-x-hidden scrollbar-hide">
        <CreatePostModal></CreatePostModal>
        <PostCard></PostCard>
      </div>
      {/*  */}
      <div className="col-span-1 mx-3 p-3">
        <div className="row-span-3 bg-secondary-light  shadow-xl dark:bg-secondary-dark rounded-xl  mb-3">
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
          <div className="relative -mt-24 flex justify-center">
            <img
              src={avatar}
              alt=""
              className="   w-[150px] h-[200px] object-cover rounded-2xl border-[6px]  border-white"
            />
            <UilCameraPlus className="rounded-sm bg-primary-light dark:bg-primary-dark absolute right-24 bottom-5"></UilCameraPlus>
          </div>
          <div className=" px-6 flex justify-center flex-col items-center m-6 pb-4">
            <h1 className="text-3xl font-bold flex gap-2 items-center">
              Rachel Derek
              <div className="status w-3 h-3 rounded-full bg-green-400 mt-2"></div>
            </h1>
            <p className="text-xl opacity-70">@Rachel_Derek</p>
            <p className="text-lg font-semibold">MERN stack developer</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePosts