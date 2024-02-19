import React from "react";
import { Button, Image, Badge } from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
import { useNavigate } from "react-router-dom";
import { useConfirmFriendRequestMutation, useDeleteFriendMutation } from "../services/slices/friendApiSlice";
import { useSelector } from "react-redux";

const UserCard = ({ user, type }) => {
  const [confirmFriendRequest, { isLoading, error }] = useConfirmFriendRequestMutation();
  const [deleteFriend] = useDeleteFriendMutation();
  const auth_id = useSelector((state) => state.auth.userInfo.user._id);

  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    const id = user.receiver == auth_id ? (user._id ?? user[0]?.receiver) : (user._id ?? user[0]?.sender);
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
      <div className="ava flex flex-col items-center justify-center">
        <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
          <Image
            isZoomed
            className="rounded-full border-[2px] border-white shadow-md h-[100px]"
            width={100}
            height={100}
            src={user.avatar ?? user[0]?.avatar ?? avatar}
          />
        </Badge>
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={handleButtonClick}>
          <h1 className="font-semibold">{user?.firstName ?? user[0]?.firstName} {user?.lastName ?? user[0]?.lastName}</h1>
          <p className="text-medium text-text-gray">@{user?.username ?? user[0]?.username}</p>
        </div>
      </div>
      <div className="flex gap-3 mt-9">
        {type === 'ALL_USERS' && (
          <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={handleButtonClick}>
            View Profile
          </Button>
        )}
        {type === 'FRIEND' && (
          <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => handleUnfriend(user[0]._id)}>
            UnFriend
          </Button>
        )}
        {type === 'REQUEST' && (
          <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg" onClick={() => handleAccept(user[0]._id)}>
            Accept
          </Button>
        )}
        {type === 'REQUESTING' && (
          <Button className="w-full font-medium bg-btn-blue rounded-md text-xl text-white px-5" size="lg">
            Pending
          </Button>
        )}
        <Button className="w-full text-black dark:bg-btn-gray dark:text-white rounded-md text-xl px-3 !py-1" size="lg">
          Follow
        </Button>
      </div>
    </div>
  );
};

export default UserCard;