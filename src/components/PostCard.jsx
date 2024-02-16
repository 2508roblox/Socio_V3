import React, { useCallback, useEffect, useState } from "react";
import avatar from "../assets/imgs/avatar.avif";
import { UilSmile } from "@iconscout/react-unicons";
import { UilCommentDots } from "@iconscout/react-unicons";
import { UilShare } from "@iconscout/react-unicons";
import { UilBookmark } from "@iconscout/react-unicons";
 
import Carousel, { Modal, ModalGateway } from "react-images";
import { Image } from "@nextui-org/react";
import Gallery from 'react-photo-gallery';
import ConfettiExplosion from 'react-confetti-explosion';
//animation
import { motion } from "framer-motion";
import PostOption from "./PostOption";
import { useGetByIdMutation } from "../services/slices/userApiSlice";
import { useLikePostMutation, useUnLikePostMutation } from "../services/slices/postApiSlice";
import { useSelector } from "react-redux";
import formatTime from "../utils/formatTime";
const PostCard = ({post}) => {
  const auth_id = useSelector((state) => state.auth.userInfo.user._id )
  const includesLikeId = post.likes.includes(auth_id)
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLiked, setIsLiked] = useState(includesLikeId)

  const [likeCount, setLikeCount] = useState(post.likes.length)
  const [getUser, { isLoading: getUserLoading, error: getUserError }] = useGetByIdMutation();
  const [likePost, { isLoading: getLikePostsLoading, error: getLikePostsError }] = useLikePostMutation();
  const [unLikePost, { isLoading: getUnLikePostsLoading, error: getUnLikePostsError }] = useUnLikePostMutation();

  const photos = post.images.map(photo => ({
    src: photo,
    width: 4,
    height: 4
  }));
  useEffect(() => {
    const getUserData = async ( ) => {
      await getUser(post.user).unwrap()
      .then((response) => {
        setUserData(response.user)
      })
    } 
    getUserData()
     
  }, [])
  
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
 
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const handleLikePost = (e) => {
    e.preventDefault()
    if (!isLiked) {
      setLikeCount(prev => prev +1)
        likePost(post._id).unwrap()
      
    }else{
      setLikeCount(prev => prev - 1)
      unLikePost(post._id).unwrap()

    }
    setIsLiked(prev => !prev)
  }
  return (
    <>
      <div  className=" w-full m-3 flex flex-col gap-4   bg-white dark:bg-secondary-dark shadow-lg rounded-3xl">
        <div className=" pt-6 px-6  items-start flex flex-row justify-between ">
          <div className=" flex gap-4 items-start">
            <Image
              isZoomed
              className=" rounded-full border-[2px] border-white shadow-md"
              alt="NextUI hero Image"
              width={50}
              src={avatar}
            />

            <div className="">
            
             {
              getUserLoading ?
              <>
              <div class="h-2.5 animate-pulse bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
              <div class="h-2.5 animate-pulse bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
              </>
              :
             <>
              <h1 className="font-semibold">{userData?.firstName} {userData?.lastName}</h1>
              <p className="text-medium text-text-gray">
                {formatTime(post.createdAt)  }
              </p>
              </>
             } 
            </div>
          </div>
          <div className="">
            <PostOption></PostOption>
          </div>
        </div>
        {/* post content */}
        <p className=" px-6 ">
          {post.content}
        </p>
        <div className=" px-6 py-2 img-container   h-[100%] w-[100%]   ">
          <Gallery photos={photos} onClick={openLightbox} />


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
                    fill-rule="evenodd"
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
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <ConfettiExplosion zIndex="100" width="600" height="30vh" particleSize="3px" />

              </motion.div>

            )}
            {likeCount} Likes
          </div>
          <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
            <UilCommentDots size="35" /> 10k Commments
          </div>
          <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
            <UilShare size="35" /> 3,6k Share
          </div>
          <div className="flex items-center gap-2 text-lg font-medium opacity-60 ">
            <UilBookmark size="35" /> 100 Saved
          </div>
        </div>
        {/* comment */}
        <hr />
        <div className="px-6 flex flex-row gap-4 justify-between items-center ">
          <img src={avatar} width={40} className="rounded-full" alt="" />
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
    </>
  )
}

export default PostCard