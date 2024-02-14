import React from 'react'
import avatar from "../assets/imgs/avatar.avif";
import { Avatar, Button, Image } from '@nextui-org/react';

const StoryCard = ({storyImage, user}) => {
  return (
  <>
    {/*  */}
    <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                variant="light"
                 className="h-full w-[100%] p-0 dark:bg-transparent bg-transparent    border-opacity-30"
                 color="primary"
               >
                
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]  "
                   alt="NextUI hero Image"
                   src={storyImage}
                 />
               </Button>
               <div className=" select-none absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="md" isBordered src={avatar} />
                 <p className=" text-white text-sm font-medium">Alex</p>
               </div>
             </div>
  </>
  )
}

export default StoryCard