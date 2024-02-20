
import React, { useEffect, useState } from "react";
import RelationshipSidebar from "../components/RelationshipSidebar";
import { Tabs, Tab, Button, Switch, Image, Input, Badge } from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
import { UilSearch } from "@iconscout/react-unicons";
import { useGetFriendsMutation } from "../services/slices/friendApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFriend } from "../services/slices/friendSlice";
import UserCard from "../components/UserCard";
import ProfileSidebar from "../components/ProfileSidebar";


const ProfileFriends = () => {
  const auth_id = useSelector((state) => state.auth.userInfo.user._id);
  const [getFriends, { isLoading, error }] = useGetFriendsMutation();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.friend.friendData?.friend);
  console.log('users', users)

  useEffect(() => {
    const fetchFriend = async () => {
      await getFriends(auth_id)
        .unwrap()
        .then((response) => {
          console.log("check dispatch: ", response);
          dispatch(setFriend(response));
        });
    };
    fetchFriend();
  }, []);
  return (
    <main className="grid grid-cols-5 mt-3">
      <ProfileSidebar></ProfileSidebar>
      {/* posts */}
      <div className="col-span-4 relative flex gap-4 flex-col mx-3 w-full h-[88vh] overflow-y-scroll flex-1  overflow-x-hidden scrollbar-hide">
        <h1 className="text-4xl font-bold">Friends</h1>
        <div className="filter-section flex justify-between items-center">
          <Input
            type="text"
            placeholder="Search..."
            labelPlacement="outside"
            className="w-3/12 shadow-md rounded-lg p-3 bg-secondary-light dark:bg-secondary-dark "
            startContent={
              <UilSearch size={35} className=" p-1 bg-btn-blue text-white  dark:bg-btn-yellow rounded-lg  text-4xl dark:text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <div className="flex gap-4">
            <div className="rounded-md bg-secondary-light dark:bg-secondary-dark px-4 py-2  shadow-md">
              Set A - Z descrending
            </div>
            <div className="rounded-md bg-secondary-light dark:bg-secondary-dark px-4 py-2  shadow-md">
              Filter
            </div>
          </div>
        </div>
        <div className="friends grid grid-cols-4 gap-4">
          {/* item */}
          {
            users.length > 0 && users.map(user => {
              return <UserCard user={user[0] ?? user} type={"FRIEND"}></UserCard>
            })

          }

        </div>
      </div>
    </main>
  );
}

export default ProfileFriends