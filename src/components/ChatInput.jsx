import React, { useState } from 'react';
import { UilSmile } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateMessageMutation } from '../services/slices/messageApiSlice';
import { pushMessage } from '../services/slices/messageSlice';

const ChatInput =  ({scroll}) => {
  const [inputValue, setInputValue] = useState('');
  const [createMessage, { isLoading: gcreateMessageLoading, error: gcreateMessageError }] = useCreateMessageMutation();
  const dispatch = useDispatch();
  const messageData = useSelector(state => state.message.messageData)
  const room_id = useSelector(state => state.chat.chatData?.current)

  const auth_id = useSelector((state) => state.auth.userInfo.user._id);

    console.log('chaefkawljfawkgawe', messageData)
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi submit mặc định của form
    // Xử lý logic khi người dùng nhấn submit
    // Ví dụ: Gửi giá trị của inputValue đến server
    console.log('Input value:', room_id, messageData[0]?.conversation );
    let data = {
        sender: auth_id,
        content: inputValue,
        conversation:   room_id || messageData[0]?.conversation 
    }
    createMessage(data).unwrap()
    .then((response) => {
        dispatch(pushMessage(response.result))
        scroll.current.scrollTop = scroll.current.scrollHeight;
    })
    setInputValue(''); // Reset giá trị của input sau khi submit
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 m-5 rounded-xl border-none shadow-inner flex justify-start gap-2 items-center bg-primary-light dark:bg-primary-dark p-1">
        <UilSmile className="text-2xl text-default-400 pointer-events-none flex-shrink-0"></UilSmile>
        <input
          type="text"
          placeholder="what's new with you?"
          className="dark:bg-primary-dark text-black flex items-center mb-1 w-full outline-none dark:text-white"
          color="default"
          value={inputValue}
          onChange={handleChange}
        />
        <UilMessage type="submit"></UilMessage>
      </div>
    </form>
  );
};

export default ChatInput;