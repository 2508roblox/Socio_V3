import { Badge, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import avatar from "../assets/imgs/avatar.avif";
import { useGetByIdMutation } from '../services/slices/userApiSlice';
import { useSelector } from 'react-redux';

const ChatRoom = ({room}) => {
  const [getUser, { isLoading: getUserLoading, error: getUserError }] = useGetByIdMutation();
  const roomData = useSelector(state => state.chat.chat)

  const [ userData, setUserData] = useState(null)
  const auth_id = useSelector((state) => state.auth.userInfo.user._id)

  useEffect(() => {
    const getUserData = async () => {
      if (room.user_id || room.participants.length == 2 ) {
        let other_id = room.user_id || room.participants.filter(user_id => user_id != auth_id  )
        console.log(other_id, '>>>')
        await getUser(other_id).unwrap()
          .then((response) => {
            setUserData(response.user)
          })
      } else  {
         return false 
      }
    
    }
    getUserData()

  }, [roomData])
  return (
    <div className="flex justify-between w-full items-center">
              <div className="flex gap-2 items-center">
                <Badge
                  content=""
                  color="success"
                  shape="circle"
                  placement="bottom-right"
                >
                  <Image
                    isZoomed
                    className=" rounded-full border-[2px] border-white shadow-md h-[50px]"
                    alt="NextUI hero Image"
                    width={50}
                    height={50}
                    src={room?.cover_image || userData?.avatar || avatar}
                  />
                </Badge>
                <div className="">
                  <h1 className="font-semibold">{room?.title || userData?.username }</h1>
                  <p className="text-medium text-text-gray">
                   {room?.user_id ? 'Start new conversation!' : 'Typing...'}
                  </p>
                </div>
              </div>
              <Badge
                content="5"
                size="lg"
                color="primary"
                className="mr-5"
              ></Badge>
            </div>
  )
}

export default ChatRoom