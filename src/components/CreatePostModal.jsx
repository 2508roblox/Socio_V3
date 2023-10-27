import React, { useState } from 'react'
import { UilSmile } from '@iconscout/react-unicons'
import avatar from "../assets/imgs/avatar.avif";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { UilVideo } from '@iconscout/react-unicons'
import { UilImages } from '@iconscout/react-unicons'
import { UilSmileBeam } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'

// emoji lib
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
// file pond
// card
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

// Register the plugins
//animation
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';

const CreatePostModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [postContent , setPostContent] = useState('')
    const [files, setFiles] = useState([])
    const {theme} = useSelector((state) => state.theme)
    
    const handleChangeContent = (e ) => {
        setPostContent(e.target.value)
    }
    const handleEmoji = (e) => {
        setPostContent(prev => prev + e.native)
    }
   
    const handleFile = event => {
        if (!event.target.files[0]) {
            return
        }
        setFiles(prev => [...prev,  URL.createObjectURL(event.target.files[0])]);
        console.log(files)
        // const formData = new FormData();
        // formData.append("fileupload", event.target.files[0]);

        // fetch(REACT_APP_REST + "/product/upload", {
        //     method: 'POST',

        //     body: formData,
        //     dataType: "jsonp"
        // })
    };
  return (
    <>
  
      <div
        className="px-3 m-3 w-full rounded-xl py-2 bg-white dark:bg-secondary-dark shadow-md"
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
      hideCloseButton='true'
      className={ `${theme} dark:bg-secondary-dark `}
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop={"blur"}
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
                  className="outline-none   p-2 rounded-2xl"
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
                <div className="media border dark:border-black flex justify-between items-center rounded-xl">
                  <h1 className="ml-3 dark:text-white">Add to your post</h1>
                  <div className="flex gap-2  rounded-lg p-2 justify-end">
                    <div className="border p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-secondary-dark text-white">
                      <UilVideo color="#3B82F6    " /> Video
                    </div>
                    <label htmlFor='hehe'  className="border p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-secondary-dark text-white">
                      <UilImages color="green" /> Image
                    </label>
                    <input onChange={(e) =>handleFile(event)} type="file" hidden name='hehe' id='hehe'/>
                    <div className="border p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-secondary-dark  text-white">
                      <UilSmileBeam color="orange" /> Emoji
                    </div>
                    <div className="border p-2 rounded-lg flex items-center gap-2  bg-primary-light dark:border-primary-dark dark:bg-secondary-dark text-white">
                      <UilCalendarAlt color="red" /> Schedule
                    </div>
                  </div>
                </div>
              {/* image preview */}
             <div className="grid grid-cols-4 gap-3">
             {files && files.map((file, index) => {
               
             
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
                <Button color="primary" onPress={onClose}>
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