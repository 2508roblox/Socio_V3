import React, { useEffect, useState } from 'react'
import { UilSmile } from '@iconscout/react-unicons'
import avatar from "../assets/imgs/avatar.avif";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { UilVideo } from '@iconscout/react-unicons'
import { UilImages } from '@iconscout/react-unicons'
import { UilSmileBeam } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'

// emoji lib
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
// file pond
// card
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Register the plugins
//animation
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { useCreatePostMutation, useGetAllPostsByUserIdMutation } from '../services/slices/postApiSlice';
import { setPosts } from '../services/slices/postSlice';

const CreatePostModal = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [postContent, setPostContent] = useState('')
  const [files, setFiles] = useState([])
  const [showingFiles, setShowingFiles] = useState([])
  const { theme } = useSelector((state) => state.theme)
  const auth_id = useSelector((state) => state.auth.userInfo.user._id)
  console.log(auth_id)
  const dispatch = useDispatch()
  const [createPost, { isLoading: createPostLoading, error: createPostError }] = useCreatePostMutation();
  const [getPosts, { isLoading: getPostsLoading, error: getPostsError }] = useGetAllPostsByUserIdMutation();

  useEffect(() => {
    const fetchUserPosts = async () => {
      await getPosts(auth_id).unwrap()
        .then((response) => {
          dispatch(setPosts(response.result))
          console.log(response)
        })
    }
    fetchUserPosts()
  }, [])
  const handleChangeContent = (e) => {
    setPostContent(e.target.value)
  }
  const handleEmoji = (e) => {
    setPostContent(prev => prev + e.native)
  }

  const handleFile = async (event) => {
    if (!event.target.files[0]) {
      return
    }
    //
    const data = new FormData();
    data.append("file", event.target.files[0]);
    data.append(
      "upload_preset",
      'nte7vuwr'
    );
    data.append("cloud_name", 'derz9qdf3');
    data.append("folder", "Cloudinary-React");
    setShowingFiles(prev => [...prev, URL.createObjectURL(event.target.files[0])])

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/derz9qdf3/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      setFiles(prev => [...prev, res.url]);
      console.log(res)
    } catch (error) {
    }
    //


  };
  const handleCreatePost = async () => {
    let postData = {
      content: postContent,
      images: files,
    };
    await createPost(postData)
      .unwrap()
      .then((response) => {
        console.log(response);
        setPostContent("");
        setFiles([]);
        setShowingFiles([]);
      });
  }


  return (
    <>

      <div
        className="px-3 m-3 w-[100%] rounded-xl py-2 bg-white dark:bg-secondary-dark shadow-md"
        onClick={onOpen}
      >
        <h1 className="font-bold mb-2">Post Something</h1>
        <hr />
        <div className="  p-3  flex gap-4  items-start">
          <Image
            isZoomed
            className={`${theme}  rounded-full border-[2px] border-white shadow-md`}
            alt="NextUI hero Image"
            width={40}

            src={avatar}
          />

          <div className=" w-full flex flex-col gap-2 items-center ">
            <div className="px-4  rounded-xl border-none shadow-inner w-full flex justify-between items-center dark:bg-primary-dark bg-primary-light p-2">
              <input
                className="bg-transparent outline-none "
                type="text"
                placeholder="what's new with you?"
              />
              <UilSmile></UilSmile>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        className={`${theme} dark:bg-secondary-dark `}
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop={"blur"}
        closeButton={

          <svg aria-hidden="true" fill="none" focusable="false" height="1.6em" role="presentation" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1.6em"><path d="M18 6L6 18M6 6l12 12"></path></svg>

        }
      >
        <ModalContent className=" dark:bg-secondary-dark">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark:bg-secondary-dark text-center dark:text-white ">
                Create Post
              </ModalHeader>
              <hr />
              <ModalBody className="flex flex-col dark:bg-secondary-dark">
                <div className=" flex gap-4 items-start ">
                  <img
                    className=" rounded-full border-[2px] border-white dark:border-black shadow-md"
                    src={avatar}
                    width={50}
                    alt=""
                  />
                  <div className="">
                    <h1 className="font-semibold dark:text-white">Roxie Mills</h1>
                    <p className="text-medium text-text-gray">@admin</p>
                  </div>
                </div>
                {/* input */}
                <textarea
                  name="content"
                  placeholder="Roxie Mills, what are you thinking? "
                  className="outline-none dark:text-white dark:bg-transparent   p-2 rounded-2xl"
                  id=""
                  value={postContent}
                  onChange={(e) => handleChangeContent(e)}
                  cols="30"
                  rows="3"
                ></textarea>
                <div className="flex justify-end">

                  <Popover
                    className='p-0  '
                    key={"bottom-start"}
                    placement={"bottom-start"}
                    color="primary"
                  >
                    <PopoverTrigger>
                      <Button
                        color=""
                        variant="flat"
                        className="capitalize dark:bg-transparent  "
                      >
                        <UilSmile className="dark:text-white"></UilSmile>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='bg-transparent p-0'>
                      <Picker data={data} onEmojiSelect={(e) => handleEmoji(e)} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="media border-2 dark:border-primary-dark  flex justify-between items-center rounded-xl">
                  <h1 className="ml-3 dark:text-white">Add to your post</h1>
                  <div className="flex gap-2  rounded-lg p-2 justify-end">
                    <div className=" p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-primary-dark text-dark dark:text-white">
                      <UilVideo color="#3B82F6    " /> Video
                    </div>
                    <label htmlFor='hehe' className=" p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-primary-dark text-dark dark:text-white">
                      <UilImages color="green" /> Image
                    </label>
                    <input onChange={(e) => handleFile(event)} type="file" hidden name='hehe' id='hehe' />
                    <div className=" p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-primary-dark  text-dark dark:text-white">
                      <UilSmileBeam color="orange" /> Emoji
                    </div>
                    <div className=" p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-primary-dark text-dark dark:text-white">
                      <UilCalendarAlt color="red" /> Schedule
                    </div>
                  </div>
                </div>
                {/* image preview */}
                <div className="grid grid-cols-4 gap-3">
                  {showingFiles && showingFiles.map((file, index) => {


                    return <motion.div
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
                      <Image
                        isBlurred

                        src={file}
                        alt="NextUI Album Cover"
                        classNames="m-5"
                      />
                    </motion.div>
                  })}
                </div>
              </ModalBody>
              <ModalFooter className='dark:bg-secondary-dark'>
                <Button color="primary" onClick={handleCreatePost} onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreatePostModal