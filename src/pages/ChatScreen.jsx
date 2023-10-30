import React, { useState } from "react";
import Header from "../components/Header";
import avatar from "../assets/imgs/avatar.avif";
import story from "../assets/imgs/story.jpg";
import { UilSearch } from "@iconscout/react-unicons";
import { UilBookMedical } from "@iconscout/react-unicons";
import { UilSmile } from "@iconscout/react-unicons";
import { UilVideo } from "@iconscout/react-unicons";
import { UilImages } from "@iconscout/react-unicons";
import { UilSmileBeam } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";
import { UilEllipsisH } from "@iconscout/react-unicons";
import { UilHeart } from "@iconscout/react-unicons";
import { UilCommentDots } from "@iconscout/react-unicons";
import { UilShare } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
import { Avatar, Badge } from "@nextui-org/react";
import { UilCheck } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import CreatePostModal from "../components/CreatePostModal";
import ConfettiExplosion from 'react-confetti-explosion';
import { UilEdit } from '@iconscout/react-unicons'
 
 UilEdit
UilBookMedical
//animation
import { motion } from "framer-motion";
import {Input} from "@nextui-org/react";
import { Link } from "react-router-dom";
const ChatScreen = () => {
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <Header></Header>
      <main className="grid grid-cols-5 mt-3 bg-secondary-light dark:bg-secondary-dark shadow-lg rounded-xl">
        {/* groups */}
        <div className="groups p-3 col-span-1 flex flex-col gap-3">
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
              <p className="text-medium text-text-gray">My Account</p>
            </div>
          </div>

          <hr />
          <div className="onlineUsers flex gap-3 flex-col">
            <div className="flex items-center justify-between">
              <h1>Online now</h1>
              <p>10</p>
            </div>
            <div className="avatars flex gap-3 overflow-y-scroll flex-1 scrollbar-hide  ">
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>
            </div>
          </div>
          <div className="message">
            <div className=" flex justify-between items-center my-3">
              <h1>Message</h1>
              <div className="ico flex gap-2">
                <UilEdit className="text-sm" size="16px" />
                <UilBookMedical className="text-sm" size="16px" />
              </div>
            </div>
            <Input
              type="text"
              placeholder="Search..."
              labelPlacement="outside"
              startContent={
                <UilSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          {/* friends */}

          <div className="flex  flex-col items-start gap-4 h-[55vh]">
            {/* item */}
            <div className="flex justify-between w-full items-center">
             <div className="flex gap-2 items-center">
             <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Image
                  isZoomed
                  className=" rounded-full border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  src={avatar}
                />
              </Badge>
              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">
                  Suma is typing . . .
                </p>
              </div>
             </div>
            <Badge content="5" size="lg" color="primary">
               
            </Badge>
            </div>
            <div className="flex justify-between w-full items-center">
             <div className="flex gap-2 items-center">
             <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Image
                  isZoomed
                  className=" rounded-full border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  src={avatar}
                />
              </Badge>
              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">
                  Suma is typing . . .
                </p>
              </div>
             </div>
            <Badge content="5" size="lg" color="primary">
               
            </Badge>
            </div>
            <div className="flex justify-between w-full items-center">
             <div className="flex gap-2 items-center">
             <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Image
                  isZoomed
                  className=" rounded-full border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  src={avatar}
                />
              </Badge>
              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">
                  Suma is typing . . .
                </p>
              </div>
             </div>
            <Badge content="5" size="lg" color="primary">
               
            </Badge>
            </div>
            <div className="flex justify-between w-full items-center">
             <div className="flex gap-2 items-center">
             <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Image
                  isZoomed
                  className=" rounded-full border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  src={avatar}
                />
              </Badge>
              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">
                  Suma is typing . . .
                </p>
              </div>
             </div>
            <Badge content="5" size="lg" color="primary">
               
            </Badge>
            </div>
            <div className="flex justify-between w-full items-center">
             <div className="flex gap-2 items-center">
             <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Image
                  isZoomed
                  className=" rounded-full border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  src={avatar}
                />
              </Badge>
              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">
                  Suma is typing . . .
                </p>
              </div>
             </div>
            <Badge content="5" size="lg" color="primary">
               
            </Badge>
            </div>
            <div className="flex justify-between w-full items-center">
             <div className="flex gap-2 items-center">
             <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Image
                  isZoomed
                  className=" rounded-full border-[2px] border-white shadow-md"
                  alt="NextUI hero Image"
                  width={50}
                  src={avatar}
                />
              </Badge>
              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">
                  Suma is typing . . .
                </p>
              </div>
             </div>
            <Badge content="5" size="lg" color="primary">
               
            </Badge>
            </div>
          </div>
     
     
         
       </div>
        <div className="col-span-3">aa</div>
        <div className="col-span-1"></div>
      </main>
    </div>
  );
};

export default ChatScreen