import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import avatar from "../assets/imgs/avatar.avif";

import { UilSearch } from "@iconscout/react-unicons";
import { UilBookMedical } from "@iconscout/react-unicons";

import { UilCheck } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from '@iconscout/react-unicons'
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import CreatePostModal from "../components/CreatePostModal";


import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../services/slices/postSlice";
import { useGetAllPostsByUserIdMutation } from "../services/slices/postApiSlice";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeScreen = () => {
  const [isLiked, setIsLiked] = useState(false);
  const auth_id = useSelector((state) => state.auth.userInfo.user._id);
  const userInfo = useSelector(state => state.auth.userInfo.user)

  const postsData = useSelector((state) => state.post.postData?.posts ?? []);
  console.log("ca", postsData);
  const [getPosts, { isLoading: getPostsLoading, error: getPostsError }] = useGetAllPostsByUserIdMutation();
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    const fetchUserPosts = async () => {
      await getPosts(auth_id)
        .unwrap()
        .then((response) => {
          dispatch(setPosts(response));
          console.log("check dispatch: ", postsData);
        });
    };
    fetchUserPosts();
  }, []);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleMouseDown = (event) => {
      event.preventDefault();
      scrollContainer.style.cursor = "grabbing";
      scrollContainer.style.userSelect = "none";

      let prevClientX = event.clientX;

      const handleMouseMove = (event) => {
        const delta = event.clientX - prevClientX;
        scrollContainer.scrollLeft -= delta;
        prevClientX = event.clientX;
      };

      const handleMouseUp = () => {
        scrollContainer.style.cursor = "grab";
        scrollContainer.style.removeProperty("user-select");

        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleScrollButtonClick = () => {
    const scrollContainer = scrollContainerRef.current;
    const scrollDistance = 100; // Điều chỉnh giá trị 100 để thay đổi khoảng cách khi kéo qua
    const scrollStep = 5; // Điều chỉnh giá trị 10 để thay đổi tốc độ kéo qua

    let scrollPosition = scrollContainer.scrollLeft;
    let scrollTarget = scrollPosition + scrollDistance;
    let scrollDirection = scrollTarget > scrollPosition ? 1 : -1;

    const scroll = () => {
      scrollPosition += scrollStep * scrollDirection;
      if (
        (scrollDirection === 1 && scrollPosition >= scrollTarget) ||
        (scrollDirection === -1 && scrollPosition <= scrollTarget)
      ) {
        scrollContainer.scrollLeft = scrollPosition;
      } else {
        requestAnimationFrame(scroll);
        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    scroll();
  };
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <Header></Header>
      <main className="grid grid-cols-5 mt-3">
        <div className="flex flex-col gap-4">
          {/* card */}
          <div className="bg-secondary-light dark:bg-secondary-dark shadow-lg rounded-xl ">
            <PhotoProvider maskOpacity={0.5}>
              <PhotoView src={userInfo.banner}>
                <Image
                  isBlurred
                  about=""
                  className="w-full object-cover rounded-2xl h-[210px] z-1"
                  alt="NextUI hero Image"
                  src={userInfo.banner}
                />

              </PhotoView>
            </PhotoProvider>
            <div className="relative h-[150px]">
              {/* avatar */}
              <div className="absolute top-[-20px] w-full">
                <div className=" flex justify-center gap-3 items-end">
                  <div className="text-center flex flex-col justify-center  text-sm font-medium">
                    <span className="text-2xl">1000</span>
                    <span className="text-text-gray text-lg">Followers</span>
                  </div>
                  <div className="   ">

                    <PhotoProvider maskOpacity={0.5}>
                      <PhotoView src={userInfo.avatar}>
                        <img
                          width={85}
                          src={userInfo.avatar}
                          className="rounded-xl border-primary-dark border-[2px]"
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div className="text-center flex flex-col justify-center text-sm font-medium">
                    <span className="text-2xl">1000</span>
                    <span className="text-text-gray text-lg">Followings</span>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-center text-2xl mr-2">{userInfo.firstName} {userInfo.lastName}</h1>

                  <p className="text-center  mr-2 text-md text-text-gray ">
                    @{userInfo.username}
                  </p>
                </div>
                <div className="text-center">Hello</div>
                <hr className="mt-3 " />
              </div>
            </div>

            <div className="p-6 mt-2">
              <Link to={"/profile"}>
                <Button
                  onPress={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full  bg-btn-blue rounded-md font-medium  text-xl dark:text-black  text-white p-4 "
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
          style={{ flexFlow: "row wrap", padding: "0 2rem", position: 'relative' }}
          className="scrollbar-hide  col-span-3 flex flex-col h-[90vh] overflow-y-scroll overflow-x-visible py-5"
        >

          <UilArrowCircleRight
            style={{
              position: 'absolute',
              zIndex: '10',
              right: '3rem',
              top: '100px',

            }}
            width="50px"
            height="50px"
            onClick={handleScrollButtonClick}
            className=" bg-secondary-light text-btn-blue   dark:bg-secondary-dark dark:text-btn-yellow rounded-full "
          ></UilArrowCircleRight >
          {/* story */}
          <div ref={scrollContainerRef} className=" h-[240px] mb-4   w-full px-3 flex gap-2   overflow-x-scroll  overflow-y-hidden scrollbar-hide mx-4 ">
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
            <StoryCard
              storyImage={
                "https://i.pinimg.com/564x/86/b6/53/86b653f4cc32988b33c5539b98c73ce5.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/564x/7e/26/3c/7e263c6ce3a56b562b7619e9f4c022a4.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/736x/5f/b4/54/5fb45486744f8e0e3b19fbf3d812d1a3.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/736x/35/1a/53/351a53a310f10cd6cab28d751e174beb.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/564x/66/d5/60/66d560c0fc45bba26f720da922332f4a.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/564x/d4/c2/52/d4c252afb184abbdfbcd47a3fe6dc00c.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/564x/b1/4d/dc/b14ddc3fce6074c077787b839f0b5a1d.jpg"
              }
            ></StoryCard>
            <StoryCard
              storyImage={
                "https://i.pinimg.com/736x/6e/a4/23/6ea423e7748d35c004470cf1437172a8.jpg"
              }
            ></StoryCard>
          </div>
          {/* create post */}
          <CreatePostModal></CreatePostModal>
          {/* posts */}
          {postsData
            .slice()
            .reverse()
            .map((post) => (
              <PostCard key={post._id} post={post}></PostCard>
            ))}
        </div>
        {/* etc */}
        <div className="flex flex-col gap-4   overflow-y-scroll h-[90vh]  scrollbar-hide pr-4">
          {/* ads */}
          <div className="mx-3 bg-white dark:bg-secondary-dark p-6 rounded-2xl shadow-lg relative w-full flex flex-col gap-2 ">
            <Image
              style={{ width: "100%" }}
              width={600}
              className="w-full h-[214px] object-cover scroll-m-0  "
              alt="NextUI hero Image"
              src="https://i.pinimg.com/736x/35/1a/53/351a53a310f10cd6cab28d751e174beb.jpg"
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
            <div className="w-full">
              <Image
                style={{ width: "100%" }}
                width={600}
                className="w-full h-[214px] object-cover scroll-m-0  "
                alt="NextUI hero Image"
                src="https://i.pinimg.com/736x/35/1a/53/351a53a310f10cd6cab28d751e174beb.jpg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
