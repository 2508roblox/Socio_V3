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
import { UilTopArrowFromTop } from '@iconscout/react-unicons'
const ExploreScreen = () => {
  const handleGoTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="no-scrollbar bg-primary-light relative transition-all duration-1000 dark:bg-primary-dark w-full  min-h-screen px-6 pt-3 ">
      
       <Header></Header>
       <main className="flex flex-col justify-center mt-3 items-center gap-4 scrollbar-hide">
        <h1 className="text-4xl font-bold">Exploring</h1>
          <div className="w-3/6 flex flex-col justify-center scrollbar-hide ">
          <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
            <PostCard ></PostCard>
          </div>

       </main>
      <Button
      onClick={() => handleGoTop()}
      className="fixed bottom-4 bg-btn-blue text-white dark:bg-btn-yellow dark:text-black right-5"
      >
      <UilTopArrowFromTop></UilTopArrowFromTop>
      </Button>
    </div>
  )
}

export default ExploreScreen