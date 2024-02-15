import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  User,
  Link,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { UilSearchAlt } from "@iconscout/react-unicons";
const SearchModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme } = useSelector((state) => state.theme);

  return (
    <>
      <input
        className="w-4/5 px-2 py-2 rounded-lg shadow-md"
        type="text"
        placeholder="#Explore..."
        onClick={onOpen}
      />

      <Modal
        className={` ${theme} dark:bg-secondary-dark   `}
        size="5xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        hideCloseButton={true}
      >
        <ModalContent className=" dark:bg-secondary-dark">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row  items-center gap-1 dark:bg-secondary-dark   dark:text-white justify-between  ">
                <Input
                  placeholder="Seach for people, posts, story,..."
                  labelPlacement="outside"
                  size="lg"
                  startContent={
                    <UilSearchAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <div className="border font-thin text-xs p-1 rounded-sm opacity-50">
                  ⌘⇧D
                </div>
              </ModalHeader>
              <hr />
              <ModalBody className="flex flex-col dark:bg-secondary-dark dark:text-white justify-start">
                <p className="opacity-50 text-sm    ">Last search 3</p>
                <div className="flex flex-col items-start gap-2">
                <div className="flex flex-row items-center justify-between gap-2">
                <User
                    
                    className="text-lg"
                    avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                  />
                  <p className="text-md">Junior Garcia</p>
                  <p className="text-md opacity-40">json.dev@gmail.com</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                <User
                    
                    className="text-lg"
                    avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                  />
                  <p className="text-md">Junior Garcia</p>
                  <p className="text-md opacity-40">json.dev@gmail.com</p>
                </div>
                <div className="flex flex-row items-center justify-between gap-2">
                <User
                    
                    className="text-lg"
                    avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                  />
                  <p className="text-md">Junior Garcia</p>
                  <p className="text-md opacity-40">json.dev@gmail.com</p>
                </div>
                 
                </div>
              </ModalBody>

              <ModalFooter className="dark:bg-secondary-dark">
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
