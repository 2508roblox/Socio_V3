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
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
             {/*  */}
             <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent"
                 color="primary"
               >
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]"
                   alt="NextUI hero Image"
                   src={story}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
           </div>
           {/* create post */}
           <CreatePostModal></CreatePostModal>
           {/* posts */}
           <div className="posts ">
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
                   <UilEllipsisH></UilEllipsisH>
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
                   src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
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
                     className="dark:bg-primary-dark text-black   flex items-center mb-1 w-full outline-none  dark:text-white"
                     color="default"
                   />
                 </div>
               </div>
               <hr />
             </div>
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
