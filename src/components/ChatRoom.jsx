import { Badge, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import avatar from "../assets/imgs/avatar.avif";
import { useGetByIdMutation } from '../services/slices/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMessageMutation } from '../services/slices/messageApiSlice';
import { setMessage } from '../services/slices/messageSlice';
import { setCurrentRoom } from '../services/slices/chatSlice';
import { useCreateRoomMutation, useInviteMembersMutation } from '../services/slices/chatApiSlice';

const ChatRoom = ({room, getMessage}) => {
  const [getUser, { isLoading: getUserLoading, error: getUserError }] = useGetByIdMutation();
  const [createRoom, { isLoading: createRoomLoading, error: createRoomError }] = useCreateRoomMutation();
  const [inviteMembers, { isLoading: inviteMembersLoading, error: inviteMembersError }] = useInviteMembersMutation();
  const roomData = useSelector(state => state.chat.chat)

  const [ userData, setUserData] = useState(null)
  const [ isCreated, setCreated] = useState(false)
  const auth_id = useSelector((state) => state.auth.userInfo.user._id)
  const current_room = useSelector((state) => state.chat.chatData?.current)
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      if (room.user_id || room.participants.length == 2 ) {
        let other_id = room.user_id || room.participants.filter(user_id => user_id != auth_id  )
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

  const handleGetMessage = async (page) => {
    if (room.user_id) {
      
      return  !isCreated && await handleCreateConversation()
      // if group chat
    }else if (room.title && !room.participants.includes(auth_id)) {
        // join
        let data = {
          room_id: room._id,
          newMembers: [
            auth_id
          ]
        }
        await inviteMembers(data).unwrap()
        .then((response) => {
     
    })
    }
  let data = {room_id: room._id,page}
    await getMessage(data).unwrap()
    .then((response) => {
     console.log('message', response)
     dispatch(setMessage(response.result ));
     dispatch(setCurrentRoom(room._id ));

    })
  }
  const handleCreateConversation = async () => {
    setCreated(true)

    let data = {
      participants: [
        auth_id, room.user_id
      ]
    }
    await createRoom(data).unwrap()
    .then((response) => {
      console.log('check',response)
      dispatch(setMessage( []));
     dispatch(setCurrentRoom(response.result._id));


    })  
    // get mess
    let mess_data = {room_id: current_room._id, page: 1}
    await getMessage(mess_data).unwrap()
    .then((response) => {
     console.log('message', response)
     dispatch(setMessage(response.result ));
 

    })
  }
  return (
    <div onClick={  (e) =>   handleGetMessage(1)}  className="flex justify-between w-full items-center">
              <div   className="flex gap-2 items-center">
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