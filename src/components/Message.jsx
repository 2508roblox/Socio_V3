import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import avatar from "../assets/imgs/avatar.avif";
import { useGetByIdMutation } from '../services/slices/userApiSlice';

const Message = ({mess}) => {
    const auth_id = useSelector((state) => state.auth.userInfo.user._id);
    const authData = useSelector((state) => state.auth.userInfo.user);
    const [ userData, setUserData] = useState(null) 
  const [getUser, { isLoading: getUserLoading, error: getUserError }] = useGetByIdMutation();

  useEffect(() => {
    const getUserData = async () => {
        let user_id = mess.sender
        if (auth_id == mess.sender ) {
          return   setUserData(authData)
        }
        await getUser(user_id).unwrap()
          .then((response) => {
            setUserData(response.user)
          })
    }
    getUserData()
  }, [ ])
    if (mess.sender != auth_id) {
        return (
          <div className="left  flex gap-2 items-center">
          <Avatar radius="full" src={userData?.avatar || avatar} size="lg" />
          <div className="flex flex-col gap-2 ">
            <p className="  ">{userData?.firstName}</p>
            <p className="bg-primary-light dark:bg-primary-dark p-3 rounded-2xl rounded-tl-none ">
             {mess.content}
            </p>
            <p className=" text-btn-blue dark:text-btn-yellow text-sm opacity-60 ">
            {mess?.createdAt}

            </p>
          </div>
        </div>
        )
      }else {
        return (
          <div className="right justify-end flex gap-2 items-center">

          <div className="flex items-end flex-col gap-2 ">
          <p className="  ">{userData?.firstName} {userData?.lastName}</p>
            <p className=" dark:bg-btn-gray bg-btn-blue text-white p-3 rounded-2xl rounded-br-none ">
            {mess.content}
            </p>
            <p className=" text-btn-blue dark:text-btn-yellow text-sm opacity-60 ">
            {mess?.createdAt}
            </p>
          </div>
          <Avatar radius="full" src={userData?.avatar || avatar} size="lg" />
        </div>
        )
      }
 
}

export default Message