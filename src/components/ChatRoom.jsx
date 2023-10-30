import { Badge, Image } from '@nextui-org/react'
import React from 'react'
import avatar from "../assets/imgs/avatar.avif";

const ChatRoom = () => {
  return (
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
              <Badge
                content="5"
                size="lg"
                color="primary"
                className="mr-5"
              ></Badge>
            </div>
  )
}

export default ChatRoom