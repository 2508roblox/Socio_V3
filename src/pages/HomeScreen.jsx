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
import { Avatar } from "@nextui-org/react";
import { UilCheck } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import CreatePostModal from "../components/CreatePostModal";
import ConfettiExplosion from 'react-confetti-explosion';
//animation
import { motion } from "framer-motion";
import {Input} from "@nextui-org/react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";
const HomeScreen = () => {
  const [isLiked ,setIsLiked] = useState(false)
  const handleLikePost =(e) => {
    e.preventDefault()
    setIsLiked(prev =>!prev)
  }
   return (
     <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      
       <Header></Header>
       <main className="grid grid-cols-5 mt-3">
         <div className="flex flex-col gap-4">
           {/* card */}
           <div className="bg-secondary-light dark:bg-secondary-dark shadow-lg rounded-xl ">
             <Image
               isBlurred
               about=""
               className="w-full rounded-2xl h-[210px] z-1"
               alt="NextUI hero Image"
               src="https://cdna.artstation.com/p/assets/images/images/024/538/828/original/pixel-jeff-clipc-s.gif?1582740521"
             />
             <div className="relative h-[150px]">
               {/* avatar */}
               <div className="absolute top-[-20px] w-full">
                 <div className=" flex justify-center gap-3 items-end">
                   <div className="text-center flex flex-col justify-center  text-sm font-medium">
                     <span className="text-2xl">1000</span>
                     <span className="text-text-gray text-lg">followers</span>
                   </div>
                   <div className="   ">
                     <img
                       width={85}
                       src={avatar}
                       className="rounded-xl border-primary-dark border-[2px]"
                       alt=""
                     />
                   </div>
                   <div className="text-center flex flex-col justify-center text-sm font-medium">
                     <span className="text-2xl">1000</span>
                     <span className="text-text-gray text-lg">followings</span>
                   </div>
                 </div>
                 <div className="">
                   <h1 className="text-center text-2xl mr-2">Charaleo</h1>

                   <p className="text-center  mr-2 text-md text-text-gray ">
                     @admin
                   </p>
                 </div>
                 <div className="text-center">Hello</div>
                 <hr className="mt-3 " />
               </div>
             </div>

             <div className="p-6 mt-2">
               <Link to={'/profile'}>
               <Button
               onPress={(e) => {
                e.preventDefault()
               }}
                 className="w-full  bg-btn-blue rounded-md text-xl dark:text-black  text-white p-4 "
                 size="lg"
               >
                My Profile
               </Button>
                </Link>
             </div>
           </div>
           {/* skills */}
           <h1 className="font-bold">Skills</h1>
           <div className="flex gap-3 flex-wrap ">
             <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white dark:bg-secondary-dark px-4 py-1 ">
               React
             </p>
             <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white dark:bg-secondary-dark px-4 py-1 ">
               Node
             </p>
             <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white dark:bg-secondary-dark px-4 py-1 ">
               Php
             </p>
             <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white dark:bg-secondary-dark px-4 py-1 ">
               Laravel
             </p>
             <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white dark:bg-secondary-dark px-4 py-1 ">
               Mysql
             </p>
             <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white dark:bg-secondary-dark px-4 py-1 ">
               UI/UX
             </p>
           </div>
           {/* Communities heading */}
           <div className="flex justify-between items-center ">
             <h1 className="font-bold">Communities</h1>
             <div className="text-text-light-gray flex gap-2  ">
               <UilSearch width="15px" />
               <UilBookMedical width="15px" />
             </div>
           </div>
           {/* Communities */}
           <div className=" flex flex-col gap-3">
             <div className="flex flex-row gap-4 items-center">
               <img
                 className="rounded-2xl border-[2px] border-white shadow-md"
                 src={avatar}
                 width={80}
                 alt=""
               />
               <div className="">
                 <h1 className="text-medium font-semibold">
                   UX Designers community
                 </h1>
                 <div className=" text-xs flex gap-2 items-center">
                   <div className="dot w-1 h-1 bg-btn-blue shadow-lg rounded-full"></div>
                   <p className="text-sm ">32 your friends are in</p>
                 </div>
               </div>
             </div>
             <div className="flex flex-row gap-4 items-center">
               <img
                 className="rounded-2xl border-[2px] border-white shadow-md"
                 src={avatar}
                 width={80}
                 alt=""
               />
               <div className="">
                 <h1 className="text-medium font-semibold">
                   UX Designers community
                 </h1>
                 <div className=" text-xs flex gap-2 items-center">
                   <div className="dot w-1 h-1 bg-btn-blue shadow-lg rounded-full"></div>
                   <p className="text-sm ">32 your friends are in</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* feeds */}
         <div
           style={{ flexFlow: "row wrap" }}
           className="scrollbar-hide  col-span-3 flex flex-col h-[90vh] overflow-y-scroll overflow-x-visible"
         >
           {/* story */}
           <div className=" h-[240px]    w-full px-3 flex gap-2   overflow-x-scroll  overflow-y-hidden scrollbar-hide mx-4 ">
             {/*  */}
             <div className=" story-card h-[100%]  w-[140px]   flex-shrink-0  relative shadow-md rounded-2xl  flex flex-col border-[2px] border-gray-400 border-dashed items-center justify-center gap-4">
               <Button
                 className="h-full p-3  dark:bg-transparent flex flex-col w-[100%]  bg-transparent"
                 color="primary"
               >
                 <div className=" p-4 bg-blue-100 dark:bg-btn-gray rounded-full">
                   <UilPlus className="text-btn-blue  dark:text-btn-yellow rounded-full"></UilPlus>
                 </div>
                 <div className="   text-center ">
                   <h1 className="text-sm font-semibold   text-text-gray">
                     Create <br /> new story
                   </h1>
                 </div>
               </Button>
             </div>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
             <StoryCard></StoryCard>
            
            
           </div>
           {/* create post */}
           <CreatePostModal></CreatePostModal>
           {/* posts */}
           <div className="posts ">
            <PostCard></PostCard>
           </div>
         </div>
         {/* etc */}
         <div className="flex flex-col gap-4   overflow-y-scroll h-[90vh]  scrollbar-hide pr-4">
           {/* ads */}
           <div className="mx-3 bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
             <Image
               isZoomed
               className="w-full h-[214px] object-cover scroll-m-0  "
               alt="NextUI hero Image"
               src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
             />
             <div className="flex flex-row justify-start gap-2  items-center">
               <Image
                 className=" rounded-full    object-cover scroll-m-0  "
                 width={40}
                 alt="NextUI hero Image"
                 src={avatar}
               />
               <div className="">
                 <h1 className="font-bold">Roxie Mills</h1>
                 <p className="text-medium text-text-gray">Restauran</p>
               </div>
             </div>
             <p className="text-medium font-medium opacity-60 px-2">
               Travelling to the future. It's already December 2018 here!{" "}
             </p>
             <hr />

             <Button
               className="w-full  bg-btn-blue rounded-md text-xl  text-white p-4 "
               size="lg"
             >
               Create Ads
             </Button>
           </div>
           {/* friend requests */}
           <div className="mx-3 bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
             <div className="flex gap-2 justify-between items-center ">
               <h1 className="font-bold">Friend Requests</h1>
               <span className="text-medium font-medium text-btn-blue">
                 See all
               </span>
             </div>
             <div className="flex gap-3  items-center">
               <Image
                 className=" rounded-full    object-cover scroll-m-0  "
                 width={40}
                 alt="NextUI hero Image"
                 src={avatar}
               />
               <div className="">
                 <h1 className="font-semibold">Roxie Mills</h1>
                 <p className="text-medium text-text-gray">Restauran</p>
               </div>
             </div>
             <div className="flex gap-2">
               <Button
                 className="w-full  bg-btn-blue rounded-md text-xl  text-white p-4 "
                 size="lg"
               >
                 <UilCheck size={100} />{" "}
                 <p className=" pr-2 text-medium font-semibold">Accept</p>
               </Button>
               <Button
                 className="w-full  dark:bg-btn-gray dark:text-white  bg-text-light-gray rounded-md text-xl  text-white p-4 "
                 size="lg"
               >
                 <UilTimes />{" "}
                 <p className=" pr-2 text-medium font-semibold ">Ignore</p>
               </Button>
             </div>
           </div>
           {/* suggest page */}
           <div className="mx-3 bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
             <div className="flex gap-2 justify-between items-center ">
               <h1 className="font-bold">Suggested Page</h1>
               <span className="text-medium font-medium text-btn-blue">
                 See all
               </span>
             </div>
             <hr />
             <div className="flex flex-row justify-start gap-2  items-center">
               <Image
                 className=" rounded-full    object-cover scroll-m-0  "
                 width={40}
                 alt="NextUI hero Image"
                 src={avatar}
               />
               <div className="">
                 <h1 className="font-bold">Roxie Mills</h1>
                 <p className="text-medium text-text-gray">Restauran</p>
               </div>
             </div>
             <Image
               isZoomed
               className="w-full h-[214px] object-cover scroll-m-0  "
               alt="NextUI hero Image"
               src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
             />
           </div>
         </div>
       </main>
     </div>
   );
};

export default HomeScreen;
