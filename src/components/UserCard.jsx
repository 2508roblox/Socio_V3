import React, { useState } from "react";
import { Button, Image, Badge } from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
import { useNavigate } from "react-router-dom";
import { useConfirmFriendRequestMutation, useDeleteFriendMutation } from "../services/slices/friendApiSlice";
import { useSelector } from "react-redux";

const UserCard = ({ user, type }) => {
  console.log('user', user)
  const [confirmFriendRequest, { isLoading, error }] = useConfirmFriendRequestMutation();
  const [deleteFriend] = useDeleteFriendMutation();
  const auth_id = useSelector((state) => state.auth.userInfo.user._id);

  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleUnfriend = async (id) => {
    await deleteFriend({ id }).unwrap();
  };

  const handleAccept = async (id) => {
    await confirmFriendRequest({ id }).unwrap();
  };

  return (
    <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
      {user.receiver_info && user.receiver_info._id !== auth_id && !user.receiver
        &&
        <>

          <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
              <Image
                isZoomed
                className="rounded-full border-[2px] border-white shadow-md h-[100px]"
                width={100}
                height={100}
                src={user.receiver_info.avatar}
              />
            </Badge>
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => handleButtonClick(user.receiver_info._id)}>
              <h1 className="font-semibold">{user?.receiver_info.firstName} {user?.receiver_info.lastName}</h1>
              <p className="text-medium text-text-gray">@{user?.receiver_info.username}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-9">
            <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => handleUnfriend(user._id)}>
              UnFriend
            </Button>

            <Button className="w-full text-black dark:bg-btn-gray dark:text-white rounded-md text-xl px-3 !py-1" size="lg">
              Follow
            </Button>
          </div>
        </>
      }
      {user.receiver_info && user.receiver_info._id !== auth_id && user.receiver
        &&
        <>

          <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
              <Image
                isZoomed
                className="rounded-full border-[2px] border-white shadow-md h-[100px]"
                width={100}
                height={100}
                src={user.receiver_info.avatar}
              />
            </Badge>
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => handleButtonClick(user.receiver_info._id)}>
              <h1 className="font-semibold">{user?.receiver_info.firstName} {user?.receiver_info.lastName}</h1>
              <p className="text-medium text-text-gray">@{user?.receiver_info.username}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-9">
            <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => handleUnfriend(user._id)}>
              Pending
            </Button>

            <Button className="w-full text-black dark:bg-btn-gray dark:text-white rounded-md text-xl px-3 !py-1" size="lg">
              Follow
            </Button>
          </div>
        </>
      }
      {user.sender_info && user.sender_info._id !== auth_id && !user.receiver
        &&
        <>
          <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
              <Image
                isZoomed
                className="rounded-full border-[2px] border-white shadow-md h-[100px]"
                width={100}
                height={100}
                src={user.sender_info.avatar}
              />
            </Badge>
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => handleButtonClick(user.sender_info._id)}>
              <h1 className="font-semibold">{user?.sender_info.firstName} {user?.sender_info.lastName}</h1>
              <p className="text-medium text-text-gray">@{user?.sender_info.username}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-9">
            <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => handleUnfriend(user._id)}>
              UnFriend
            </Button>

            <Button className="w-full text-black dark:bg-btn-gray dark:text-white rounded-md text-xl px-3 !py-1" size="lg">
              Follow
            </Button>
          </div>
        </>
      }
      {user.sender_info && user.sender_info._id !== auth_id && user.receiver
        &&
        <>
          <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
              <Image
                isZoomed
                className="rounded-full border-[2px] border-white shadow-md h-[100px]"
                width={100}
                height={100}
                src={user.sender_info.avatar}
              />
            </Badge>
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => handleButtonClick(user.sender_info._id)}>
              <h1 className="font-semibold">{user?.sender_info.firstName} {user?.sender_info.lastName}</h1>
              <p className="text-medium text-text-gray">@{user?.sender_info.username}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-9">
            <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => { handleAccept(user?.sender_info._id) }}>
              Accept
            </Button>

            <Button className="w-full text-black dark:bg-btn-gray dark:text-white rounded-md text-xl px-3 !py-1" size="lg">
              Follow
            </Button>
          </div>
        </>
      }
      {!user.sender_info &&
        <>
          <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
              <Image
                isZoomed
                className="rounded-full border-[2px] border-white shadow-md h-[100px]"
                width={100}
                height={100}
                src={user.avatar}
              />
            </Badge>
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => { handleButtonClick(user._id) }}>
              <h1 className="font-semibold">{user.firstName} {user.lastName}</h1>
              <p className="text-medium text-text-gray">@{user.username}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-9">

            <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => { handleButtonClick(user._id) }}>
              View Profile
            </Button>
            <Button className="w-full text-black dark:bg-btn-gray dark:text-white rounded-md text-xl px-3 !py-1" size="lg">
              Follow
            </Button>
          </div>
        </>

      }



    </div>
  );
};

export default UserCard;