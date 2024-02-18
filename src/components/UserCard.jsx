import React, { useEffect, useState } from "react";
import RelationshipSidebar from "../components/RelationshipSidebar";
import { Tabs, Tab, Button, Switch, Image, Input, Badge } from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useConfirmFriendRequestMutation } from "../services/slices/friendApiSlice";
const UserCard = ({ user, type }) => {
  const [confirmFriendRequest, { isLoading, error }] = useConfirmFriendRequestMutation();

  console.log('user', user[0])
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    confirmFriendRequest
    navigate(`/profile/${user._id}`)

  };

  const handleAccept = async (id) => {
    console.log('id', id)
    await confirmFriendRequest({ id: id }).unwrap()



  };
  return (
    <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
      <div className="ava flex flex-col items-center justify-center">
        <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">

          <Image
            isZoomed
            className=" rounded-full  border-[2px] border-white shadow-md h-[100px]"
            width={100}
            height={100}
            src={user.avatar ?? user[0].avatar ?? avatar}
          />
        </Badge>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold">{user?.firstName ?? user[0].firstName}     {user?.lastName ?? user[0].lastName}</h1>
          <p className="text-medium text-text-gray">@{user?.username ?? user[0].username}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-9">

        {type === 'ALL_USERS' && (

          <Button
            onClick={(e) => handleButtonClick(e)}
            className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5"
            size="lg"
          >
            View Profile
          </Button>

        )}
        {type === 'FRIEND' && (
          <Button
            className="w-full   font-medium bg-btn-blue rounded-md text-xl  text-white px-5 "
            size="lg"
          >
            UnFriend
          </Button>
        )}
        {type === 'REQUEST' && (
          <Button
            className="w-full   font-medium bg-btn-blue rounded-md text-xl  text-white px-5 "
            size="lg"
            onClick={(e) => handleAccept(user[0]._id)}

          >
            Accept
          </Button>
        )}
        {type === 'REQUESTING' && (
          <Button
            className="w-full   font-medium bg-btn-blue rounded-md text-xl  text-white px-5 "
            size="lg"
          >
            Pending
          </Button>
        )}

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