 
import React, { useEffect, useState } from "react";
import RelationshipSidebar from "../components/RelationshipSidebar";
import {Tabs, Tab, Button, Switch, Image, Input, Badge} from "@nextui-org/react";
import avatar from "../assets/imgs/avatar.avif";
import { UilSearch } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { useGetFriendsMutation, useGetUserRequestMutation } from "../services/slices/friendApiSlice";
import {  setRequesting } from "../services/slices/friendSlice";

const RequestingScreen = () => {
     const handleGoTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' })
  }
  const auth_id = useSelector((state) => state.auth.userInfo.user._id);
  const [getRequesting, { isLoading , error }] = useGetUserRequestMutation();
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchRequesting = async () => {
      await getRequesting(auth_id)
        .unwrap()
        .then((response) => {
          console.log("check dispatch: ", response);
          dispatch(setRequesting(response));
        });
    };
    fetchRequesting();
  }, []);
  return (
    
      
       <main className="px-3 py-6 grid grid-cols-5 gap-4">
       <div className="col-span-1">
        <RelationshipSidebar></RelationshipSidebar>
       </div>
       <div className="col-span-4">
       <div className="col-span-4 relative flex gap-4 flex-col mx-3 w-full h-[88vh] overflow-y-scroll flex-1  overflow-x-hidden scrollbar-hide">
        <h1 className="text-4xl font-bold">Requestings</h1>
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
          <div className="item bg-secondary-light dark:bg-secondary-dark p-6 rounded-lg shadow-lg flex flex-col justify-end">
            <div className="ava flex flex-col items-center justify-center">
            <Badge content="" color="success" shape="circle" size="lg" className="right-5" placement="bottom-right">
       
              <Image
                isZoomed
                className=" rounded-full  border-[2px] border-white shadow-md"
                width={100}
                src={avatar}
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
                  Pending
                </Button>
                <Button
                  className="w-full  text-black   dark:bg-btn-gray dark:text-white rounded-md text-xl    px-3 !py-1 "
                  size="lg"
                >
                  Cancle
                </Button>
            </div>
          </div>
          
        </div>
      </div>

       </div>
       </main>
      
    
  )
}

 

export default RequestingScreen