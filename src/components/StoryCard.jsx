import React from 'react'
import avatar from "../assets/imgs/avatar.avif";
import { Avatar, Button, Image } from '@nextui-org/react';

const StoryCard = () => {
  return (
  <>
    {/*  */}
    <div className=" story-card h-[100%] w-[140px]  flex-shrink-0  relative shadow-md rounded-2xl  flex">
               <Button
                 className="h-full w-[100%] p-0 bg-transparent  border-btn-blue dark:border-btn-yellow border-opacity-30"
                 color="primary"
               >
                
                 <Image
                   isBlurred
                   shadow={"sm"}
                   className="h-[100%]  "
                   alt="NextUI hero Image"
                   src={"https://i.pinimg.com/564x/3b/6d/8d/3b6d8d54c22d249fa621b6577232eb44.jpg"}
                 />
               </Button>
               <div className="absolute bottom-3 gap-2 flex flex-col  items-center justify-center w-full">
                 <Avatar size="sm" isBordered src={avatar} />
                 <p className="text-white text-xs font-medium">Alex</p>
               </div>
             </div>
  </>
  )
}

export default StoryCard