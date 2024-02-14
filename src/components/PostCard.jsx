import React, { useState } from "react";
import avatar from "../assets/imgs/avatar.avif";
import { UilSmile } from "@iconscout/react-unicons";
import { UilCommentDots } from "@iconscout/react-unicons";
import { UilShare } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import ConfettiExplosion from 'react-confetti-explosion';
//animation
import { motion } from "framer-motion";
import {Input} from "@nextui-org/react";
import { Link } from "react-router-dom";
import PostOption from "./PostOption";
const PostCard = () => {
    const [isLiked ,setIsLiked] = useState(false)
    const handleLikePost =(e) => {
      e.preventDefault()
      setIsLiked(prev =>!prev)
    }
  return (
    <div className=" m-3 flex flex-col gap-4   bg-white dark:bg-secondary-dark shadow-lg rounded-3xl">
    <div className=" pt-6 px-6  items-start flex flex-row justify-between ">
      <div className=" flex gap-4 items-start">
        <Image
          isZoomed
          className=" rounded-full border-[2px] border-white shadow-md"
          alt="NextUI hero Image"
          width={50}
          src={avatar}
        />

        <div className="">
          <h1 className="font-semibold">Roxie Mills</h1>
          <p className="text-medium text-text-gray">
            December 28, 2018
          </p>
        </div>
      </div>
      <div className="">
      <PostOption></PostOption>
      </div>
    </div>
    {/* post content */}
    <p className=" px-6 ">
      Travelling to the future. It's already December 2018 here!
    </p>
    <div className=" px-6 py-2 img-container gap-4  h-[100%]   grid grid-cols-2 ">
      <div className="row-span-2    col-span-1 ">
        <Image
          shadow="sm"
          className="    h-[800px] object-cover  rounded-2xl"
          alt="NextUI hero Image"
          src="https://w0.peakpx.com/wallpaper/241/723/HD-wallpaper-road-clouds-landscape-nature-sky.jpg"
        />
      </div>
      <Image
        isBlurred
        shadow="sm"
        removeWrapper={true}
        className="   h-full w-[100%]  object-cover  rounded-2xl"
        alt="NextUI hero Image"
        src="https://i.pinimg.com/736x/35/1a/53/351a53a310f10cd6cab28d751e174beb.jpg"
      />
      <Image
        isBlurred
        shadow="sm"
        removeWrapper={true}
        className="    h-full w-[100%]  object-cover  rounded-2xl"
        alt="NextUI hero Image"
        src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
      />
    </div>
    {/* handle */}
    <hr className=" " />

    <div className=" px-6 flex justify-between mx-6">
      <div
        onClick={(e) => {
          handleLikePost(e);
        }}
        className="flex items-center gap-2 text-lg font-medium opacity-60 cursor-pointer"
      >
   



        {!isLiked ? (
     
  <>
     <svg
     xmlns="http://www.w3.org/2000/svg"
     width="26"
     height="26"
     fill="currentColor"
     class="bi bi-heart-fill"
     viewBox="0 0 16 16"
   >
     <path
       fill-rule="evenodd"
       d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
     />

   </svg>
  </>

        ) : (
         <motion.div
        
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.3,
           ease: [0, 0.71, 0.2, 1.01],
           scale: {
             type: "spring",
             damping: 5,
             stiffness: 100,
             restDelta: 0.001
           }
         }}
       >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="red"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
   <ConfettiExplosion zIndex="100" width="600" height="30vh" particleSize="3px"  />

        </motion.div>

        )}
        120k Likes
      </div>
      <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
        <UilCommentDots size="35" /> 10k Commments
      </div>
      <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
        <UilShare size="35" /> 3,6k Share
      </div>
      <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
        <UilBookmark size="35" /> 100 Saved
      </div>
    </div>
    {/* comment */}
    <hr />
    <div className="px-6 flex flex-row gap-4 justify-between items-center ">
      <img src={avatar} width={40} className="rounded-full" alt="" />
      <div class="px-4  rounded-xl border-none shadow-inner w-full flex justify-start gap-2  items-center bg-primary-light dark:bg-primary-dark p-1">
        <UilSmile className="text-2xl text-default-400 pointer-events-none flex-shrink-0"></UilSmile>
        <input
          type="text"
          placeholder="what's new with you?"
          className="dark:bg-primary-dark bg-primary-light text-black   flex items-center mb-1 w-full outline-none  dark:text-white"
          color="default"
        />
      </div>
    </div>
    <hr />
  </div>
  )
}

export default PostCard