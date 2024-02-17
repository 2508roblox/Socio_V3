 
import React, { useEffect, useState } from "react";
import RelationshipSidebar from "../components/RelationshipSidebar";
import {Tabs, Tab, Button, Switch, Image, Input, Badge} from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
import { UilSearch } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllUsersMutation } from "../services/slices/userApiSlice";
import { setAllUsers } from "../services/slices/friendSlice";
import UserCard from "../components/UserCard";

const RelationshipScreen = () => {
  const handleGoTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }
  const auth_id = useSelector((state) => state.auth.userInfo.user._id);
  const users = useSelector((state) => state.friend.friendData?.allUser);
  console.log(users)
  const [getUsers, { isLoading , error }] = useGetAllUsersMutation();
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchAllUser = async () => {
      await getUsers(auth_id)
        .unwrap()
        .then( async(response) => {
          console.log("check dispatch: ", response.users);
            let payload_data =  response.users
          console.log('update', payload_data)
         dispatch(setAllUsers(payload_data));
        });
    };
    fetchAllUser();
  }, []);
  return (
    
      
       <main className="px-3 py-6 grid grid-cols-5 gap-4">
       <div className="col-span-1">
        <RelationshipSidebar></RelationshipSidebar>
       </div>
       <div className="col-span-4">
       <div className="col-span-4 relative flex gap-4 flex-col mx-3 w-full h-[88vh] overflow-y-scroll flex-1  overflow-x-hidden scrollbar-hide">
        <h1 className="text-4xl font-bold">Others People</h1>
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
                console.log( 'check',users)
            }
            {
            
               users.map(user => { return 
                <UserCard user={user} type={'ALL_USER'}></UserCard>
              })
            }
      
           </div>
      </div>

       </div>
       </main>
      
    
  )
}


export default RelationshipScreen