import React, { useEffect, useRef, useState } from "react";
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
import { Avatar, Badge, Skeleton } from "@nextui-org/react";
import { UilCheck } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import CreatePostModal from "../components/CreatePostModal";
import ConfettiExplosion from 'react-confetti-explosion';
import { UilEdit } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
 
import { UilEnvelopeShare } from '@iconscout/react-unicons'
import { UilFolderOpen } from '@iconscout/react-unicons'
//animation
import { motion } from "framer-motion";
import {Input} from "@nextui-org/react";
import { Link } from "react-router-dom";
import ChatRoom from "../components/ChatRoom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllRoomByAuthIdMutation, useGetRoomBySearchParamsMutation } from "../services/slices/chatApiSlice";
import { setChatRoomList } from "../services/slices/chatSlice";
import Message from "../components/Message";
import ChatInput from "../components/ChatInput";
import { useGetMessageMutation } from "../services/slices/messageApiSlice";
const ChatScreen = () => {
  const [isExpand, setIsExpand] = useState(false)
  const handleExpandRoomInfo = (e) => {
    setIsExpand(prev => !prev)
  }

  //chat logic
  const chatContainerRef = useRef(null);

  const auth_id = useSelector((state) => state.auth.userInfo?.user?._id);
  const roomData = useSelector(state => state.chat.chatData?.chat)
  const messageData = useSelector(state => state.message.messageData)
  const [getRoom, { isLoading: getRoomLoading, error: getRoomError }] = useGetAllRoomByAuthIdMutation();
  const [searchRoom, { isLoading: searchRoomLoading, error: searchRoomError }] = useGetRoomBySearchParamsMutation();
  const [getMessage, { isLoading: getMessageLoading, error: getMessageError }] = useGetMessageMutation();

  const dispatch = useDispatch();
  
  const fetchRoom = async () => {
    await getRoom( )
      .unwrap()
      .then((response) => {
        dispatch(setChatRoomList(response.result ));
      });
  };

  useEffect(() => {
  
    fetchRoom();
  }, []);
  let searchRequest;

  const handleSearch = async (e) => {
    let searchParams = e.target.value;
    
    if (searchParams === '') {
      return fetchRoom();
    }
    if (searchRequest) {
      searchRequest.abort(); // Abort the previous search request if it exists
    }
    
    
    
    try {
     await searchRoom(searchParams).unwrap().then((response) => 
      
      dispatch(setChatRoomList(response.result.conversations))
      );
    } catch (error) {
      // Handle error
    }
  };
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <Header></Header>
      <main className="grid grid-cols-5 mt-3 bg-secondary-light dark:bg-secondary-dark shadow-lg rounded-xl">
        {/* groups */}
        <div className="groups p-6  flex flex-col gap-3 border-r-1 border-primary-light dark:border-primary-dark ">
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
              onChange={(e) => handleSearch(e)}
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
            {
              console.log('data',roomData)
            }
            
{
   searchRoomLoading &&     <div className="max-w-[300px] w-full flex items-center gap-3">
  <div>
    <Skeleton className="flex rounded-full w-12 h-12"/>
  </div>  
  <div className="w-full flex flex-col gap-2">
    <Skeleton className="h-3 w-3/5 rounded-lg"/>
    <Skeleton className="h-3 w-4/5 rounded-lg"/>
  </div>
</div>
}
{
   getRoomLoading &&     <div className="max-w-[300px] w-full flex items-center gap-3">
  <div>
    <Skeleton className="flex rounded-full w-12 h-12"/>
  </div>  
  <div className="w-full flex flex-col gap-2">
    <Skeleton className="h-3 w-3/5 rounded-lg"/>
    <Skeleton className="h-3 w-4/5 rounded-lg"/>
  </div>
</div>
}
            {
           !searchRoomLoading && !getRoomLoading&& roomData && roomData.length > 0 && roomData.map(room =>   <ChatRoom key={room._id || room.user_id} room={room} getMessage={getMessage}></ChatRoom> )
            }
         
          </div>
        </div>
        {/* message */}

        <div
          className={`${
            !isExpand ? "col-span-4" : "col-span-3"
          } transition-width duration-200 ease-in-out flex flex-col justify-start h-[90vh] border-r-1 border-primary-light dark:border-primary-dark `}
        >
          <div className="top p-3 border-b-1 border-primary-light dark:border-primary-dark flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
              >
                <Avatar radius="full" src={avatar} size="lg" />
              </Badge>

              <div className="">
                <h1 className="font-semibold">Roxie Mills</h1>
                <p className="text-medium text-text-gray">@username</p>
              </div>
            </div>
            <UilFolderOpen className="cursor-pointer"
              onClick={(e) => {
                handleExpandRoomInfo(e);
              }}
            ></UilFolderOpen>
          </div>
          <div ref={chatContainerRef} className="message p-5 flex flex-col gap-5 h-4/5 overflow-y-scroll scrollbar-hide">
            {/* messages */}
   {
    getMessageLoading &&
  <>
   <div className="max-w-[300px] w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-12 h-12"/>
    </div>  
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  </div>
    <div className="max-w-[300px] w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-12 h-12"/>
    </div>  
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  </div>
    <div className="max-w-[300px] w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-12 h-12"/>
    </div>  
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  </div>
    <div className="max-w-[300px] w-full float-right flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-12 h-12"/>
    </div>  
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  </div>
    <div className="max-w-[300px] w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-12 h-12"/>
    </div>  
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5 rounded-lg"/>
      <Skeleton className="h-3 w-4/5 rounded-lg"/>
    </div>
  </div>
  </>
    
   }
            {
             !getMessageLoading && messageData && messageData.map(mess => {
               return <Message key={mess._id} mess={mess}></Message>
              })
            }
        
          
          
          </div>
          {/* chat input */}
        <ChatInput scroll={chatContainerRef}></ChatInput>
        </div>
{/* collasap */}
      {isExpand && 
       
      <div className={`col-span-1   block `}>
      <div className="flex flex-col justify-center p-6 gap-2 items-center border-b-1 border-primary-light dark:border-primary-dark mx-3 ">
        <Image
          isZoomed
          className=" rounded-full  border-[2px] border-white shadow-md"
          width={100}
          src={avatar}
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold">Roxie Mills</h1>
          <p className="text-medium text-text-gray">@username_mills</p>
        </div>
        <div className=" flex justify-center gap-3 items-center text-lg">
          <UilPhoneAlt size="34px" />
          <UilVideo size="34px" />
          <UilEnvelopeShare size="34px" />
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h1>Photos & Multimedia</h1>
        <div className="grid grid-cols-3 gap-3">
          <Image
            alt="NextUI hero Image"
            className=" rounded-lg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <Image
            alt="NextUI hero Image"
            className=" rounded-lg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <Image
            alt="NextUI hero Image"
            className=" rounded-lg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <Image
            alt="NextUI hero Image"
            className=" rounded-lg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <Image
            alt="NextUI hero Image"
            className=" rounded-lg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <Image
            alt="NextUI hero Image"
            className=" rounded-lg"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </div>
        <p className="text-center underline text-btn-blue text-medium dark:text-btn-yellow">
          view all
        </p>
      </div>

      <div className="flies p-6 flex flex-col gap-3">
        <h1>ATTACHMENTS</h1>
        <p>Source file</p>
        <div className="flex gap-3 items-center">
          <div className="bg-purple-600 rounded-md px-4 py-3">ZIP</div>
          <p>How to create project</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-purple-600 rounded-md px-4 py-3">ZIP</div>
          <p>How to create project</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-purple-600 rounded-md px-4 py-3">ZIP</div>
          <p>How to create project</p>
        </div>
      </div>
    </div>
    
      }
      </main>
    </div>
  );
};

export default ChatScreen