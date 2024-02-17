import React, { useEffect, useState } from "react";
import RelationshipSidebar from "../components/RelationshipSidebar";
import {Tabs, Tab, Button, Switch, Image, Input, Badge} from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
const UserCard = ({user, type}) => {
  return (
    <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
    <div className="ava flex flex-col items-center justify-center">
    <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">

      <Image
        isZoomed
        className=" rounded-full  border-[2px] border-white shadow-md"
        width={100}
        src={user.avatar ?? avatar}
        />
        </Badge>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold">Roxie Mills</h1>
        <p className="text-medium text-text-gray">@username_mills</p>
      </div>
    </div>
    <div className="flex gap-3 mt-9">
    <Button
          className="w-full   bg-btn-blue rounded-md text-xl  text-white px-5 "
          size="lg"
        >
          View Profile
        </Button>
        <Button
          className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
          size="lg"
        >
              Follow
        </Button>
    </div>
  </div>
  )
}

export default UserCard