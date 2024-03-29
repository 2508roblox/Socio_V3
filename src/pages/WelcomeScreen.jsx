import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Tabs,
  Tab,
  Switch,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Card,
  CardBody,
  Badge,
  Button,
  Link,
} from "@nextui-org/react";
import { UilEstate } from "@iconscout/react-unicons";
import { UilCompass } from "@iconscout/react-unicons";
import { UilHipchat } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilBell } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";
import { UilSmile } from "@iconscout/react-unicons";
import { UilCommentDots } from "@iconscout/react-unicons";
import { UilShare } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
import lightLogo from "../assets/imgs/light-full-logo.png";
import darkLogo from "../assets/imgs/dark-logo.png";
import avatar from "../assets/imgs/avatar.avif";
import Carousel, { ModalGateway } from "react-images";
import { Image } from "@nextui-org/react";
import Gallery from "react-photo-gallery";
import ConfettiExplosion from "react-confetti-explosion";
import Header from "../components/Header";
import UserDropdown from "../components/UserDropdown";
import TabsComponent from "../components/TabsComponent";
import PostOption from "../components/PostOption";
import { useGetByIdMutation } from "../services/slices/userApiSlice";
import {
  useLikePostMutation,
  useUnLikePostMutation,
} from "../services/slices/postApiSlice";
import { toggleMode } from "../services/slices/themeSlice";
import formatTime from "../utils/formatTime";

const WelcomeScreen = () => {
    const {theme} = useSelector((state) => state.theme)
  const [isLiked, setIsLiked] = useState(false)

    const dispatch = useDispatch()
    const auth_id = useSelector((state) => state.auth.userInfo?.user._id)
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [userData, setUserData] = useState(null);
  
    const [getUser, { isLoading: getUserLoading, error: getUserError }] = useGetByIdMutation();
    const [likePost, { isLoading: getLikePostsLoading, error: getLikePostsError }] = useLikePostMutation();
    const [unLikePost, { isLoading: getUnLikePostsLoading, error: getUnLikePostsError }] = useUnLikePostMutation();
    let photos = [
        {
            src: 'https://2508roblox.github.io/Socio_Client/static/media/story7.cba428df9498654eef31.avif',
            width: 2,
            height: 2
          } 
      ]
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
      <header className="grid grid-cols-5 h-[7vh] relative items-center">
      <div className="flex gap-5 justify-between items-center px-2">
        <Link className="flex flex-row gap-2 items-center" to={'/'}>
        <img width={50} src={theme == 'light' ? lightLogo : darkLogo} alt="" />
        <h1 className='font-bold text-[2.5rem]'>Socio</h1>
        </Link>
      
        
      </div>
      <nav className="col-span-3 px-2">
      <TabsComponent></TabsComponent>
      </nav>

      <div className="px-2 flex items-center gap-4 justify-end">
      <Switch

thumbIcon={({ isSelected, className }) =>
  theme == 'light' ? (
    <UilSun className={className} />
  ) : (
    <UilMoon className="dark:text-black dark:bg-transparent   " />
  )
}
onChange={(e) => {
  if (e.target.checked) {
    dispatch(toggleMode('light'))
  } else {
    dispatch(toggleMode('dark'))

  }
}}
size="sm"
className="flex float-right text-sm"
isSelected={theme == 'light'}
onValueChange={(value) => theme}
></Switch>
<Button className='bg-btn-blue text-white dark:text-black'> Sign Up</Button>
      </div>
    </header>
      <main className="  mt-3">
        <div className="flex mx-[10rem] justify-between items-center gap-12  ">
            <div className="left">
                <p className='dark:text-btn-yellow text-blue-500'>Created by GiangTran, ps26818 - ps26819</p>
                <h1 style={{ lineHeight: '1.2' }} className='text-[4rem] font-bold space'>Bringing <span className='dark:text-btn-yellow text-[4rem] font-bold text-blue-500'>people</span> together, one click at a time...</h1>
                <Button size="lg"  className="bg-btn-blue text-white font-medium text-lg mt-5">Get Started Now</Button>
            </div>
            <div className="right">
                    <div className="">
                    <div  className=" w-full m-3 flex flex-col gap-4   bg-white dark:bg-secondary-dark shadow-lg rounded-3xl">
        <div className=" pt-6 px-6  items-start flex flex-row justify-between ">
          <div className=" flex gap-4 items-start">
            <Image
              isZoomed
              className=" rounded-full border-[2px] border-white shadow-md h-[50px]"
              alt="NextUI hero Image"
              width={50}
              src={ 'https://i.stack.imgur.com/l60Hf.png'}
            />
           <div>

          <h1 className="font-semibold"> Giang Tran</h1>
                    <p className="text-medium text-text-gray">
                    Thứ Hai, 19 tháng 2, 2024 (GMT+7)
                    </p>
            </div>
          </div>
         
        </div>
        {/* post content */}
        <p className=" px-6 ">
        Welcome to my Socio😎
        </p>
        <div className=" px-6 py-2 img-container   h-[100%] w-[100%]   ">
    <img src="https://firebasestorage.googleapis.com/v0/b/socialmediav2.appspot.com/o/5927911.gif?alt=media&token=2afdd798-aa21-46b0-9ede-150886879a1d" alt="" />

        </div>
        {/* handle */}
        <hr className=" " />

        <div className=" px-6 flex justify-between mx-6">
          <div
            onClick={(e) => {
              handleLikePost(e);
            }}
            className="flex items-center gap-2 text-lg font-medium opacity-60 cursor-pointer"
          >
            {!isLiked ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />

                </svg>
              </>
            ) : (
              <motion.div

                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="red"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <ConfettiExplosion zIndex="100" width="600" height="30vh" particleSize="3px" />

              </motion.div>

            )}
            324 Likes
          </div>
          <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
            <UilCommentDots size="35" />  Commments
          </div>
          <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
            <UilShare size="35" />   Share
          </div>
          <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
            <UilBookmark size="35" />   Saved
          </div>
        </div>
        {/* comment */}
        <hr />
        <div className="px-6 flex flex-row gap-4 justify-between items-center ">
          <img src={ 'https://i.stack.imgur.com/l60Hf.png'} width={40} height={40} className="rounded-full h-[40px] w-[40px]" alt="" />
          <div class="px-4  rounded-xl border-none shadow-inner w-full flex justify-start gap-2  items-center bg-primary-light dark:bg-primary-dark p-1">
            <UilSmile className="text-2xl text-default-400 pointer-events-none flex-shrink-0"></UilSmile>
            <input
              type="text"
              placeholder="what's new with you?"
              className="dark:bg-primary-dark text-black   flex items-center mb-1 w-full outline-none  dark:text-white"
              color="default"
            />
          </div>
        </div>
        <hr />
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}  >
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
                    </div>

            </div>
        </div>
      </main>
    </div>
  )
}

export default WelcomeScreen