import React from "react";
import Header from "../components/Header";
import avatar from "../assets/imgs/avatar.avif";
import story from "../assets/imgs/story.jpg";
import { UilSearch } from "@iconscout/react-unicons";
import { UilBookMedical } from "@iconscout/react-unicons";
import { UilSmile } from '@iconscout/react-unicons'
import { UilVideo } from '@iconscout/react-unicons'
import { UilImages } from '@iconscout/react-unicons'
import { UilSmileBeam } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentDots } from '@iconscout/react-unicons'
import { UilShare } from '@iconscout/react-unicons'
import { UilBookmark } from '@iconscout/react-unicons'
import {Avatar} from "@nextui-org/react";
import { UilCheck } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import CreatePostModal from "../components/CreatePostModal";
//animation
import { motion } from "framer-motion"
const HomeScreen = () => {
  return (
    <div className="bg-primary-light w-full min-h-screen px-6 pt-3">
      <Header></Header>
      <main className="grid grid-cols-5 mt-3">
        <div className="flex flex-col gap-4">
          {/* card */}
          <div className="bg-secondary-light shadow-lg rounded-xl ">
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
              <Button
                className="w-full  bg-btn-blue rounded-md text-xl  text-white p-4 "
                size="lg"
              >
                My Profile
              </Button>
            </div>
          </div>
          {/* skills */}
          <h1 className="font-bold">Skills</h1>
          <div className="flex gap-3 flex-wrap ">
            <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white px-4 py-1 ">
              React
            </p>
            <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white px-4 py-1 ">
              Node
            </p>
            <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white px-4 py-1 ">
              Php
            </p>
            <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white px-4 py-1 ">
              Laravel
            </p>
            <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white px-4 py-1 ">
              Mysql
            </p>
            <p className="rounded-lg items-center text-center shadow-md text-text-light-gray bg-white px-4 py-1 ">
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
          <div className=" h-[240px]    w-full px-3 flex gap-2 whitespace-nowrap  overflow-x-scroll  overflow-y-hidden scrollbar-hide mx-2 ">
            {/*  */}

            <div className=" story-card h-[100%]  w-[120px]   relative shadow-md rounded-2xl  flex">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                   isBlurred
                   shadow={"sm"}
                className=""
                  alt="NextUI hero Image"
                  src={story}
                />
              </motion.button>
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
            <div className=" m-3 flex flex-col gap-4   bg-white shadow-lg rounded-3xl">
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
              <div className=" px-6 py-2 img-container gap-4    grid grid-cols-2 ">
                <img
                  className="row-span-2 h-full  rounded-2xl"
                  src="https://w0.peakpx.com/wallpaper/241/723/HD-wallpaper-road-clouds-landscape-nature-sky.jpg"
                  alt=""
                />
                <img
                  className="  h-[300px] w-full object-cover rounded-2xl"
                  src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
                  alt=""
                />
                <img
                  className="  h-[300px] w-full object-cover rounded-2xl"
                  src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"
                  alt=""
                />
              </div>
              {/* handle */}
              <hr />

              <div className=" px-6 flex justify-between mx-6">
                <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
                  <UilHeart size="35" color="black" /> 120k Likes
                </div>
                <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
                  <UilCommentDots size="35" color="black" /> 10k Commments
                </div>
                <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
                  <UilShare size="35" color="black" /> 3,6k Share
                </div>
                <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
                  <UilBookmark size="35" color="black" /> 100 Saved
                </div>
              </div>
              {/* comment */}
              <hr />
              <div className="px-6 flex flex-row gap-4 justify-between items-center ">
                <img src={avatar} width={40} className="rounded-full" alt="" />
                <div class="px-4  rounded-xl border-none shadow-inner w-full flex justify-between items-center bg-primary-light p-1">
                  <input
                    class="bg-transparent"
                    type="text"
                    placeholder="what's new with you?"
                  />

                  <UilSmile></UilSmile>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        {/* etc */}
        <div className="flex flex-col gap-4   overflow-y-scroll h-[90vh]  scrollbar-hide pr-4">
          {/* ads */}
          <div className="mx-3 bg-white p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
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
          <div className="mx-3 bg-white p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
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
                className="w-full    bg-text-light-gray rounded-md text-xl  text-white p-4 "
                size="lg"
              >
                <UilTimes />{" "}
                <p className=" pr-2 text-medium font-semibold">Ignore</p>
              </Button>
            </div>
          </div>
          {/* suggest page */}
          <div className="mx-3 bg-white p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
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
