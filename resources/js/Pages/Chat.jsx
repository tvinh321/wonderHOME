import Pusher from 'pusher-js/with-encryption';
import Echo from 'laravel-echo';
import axios from 'axios';

import React, { useState, useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import {
    PhotoIcon,
} from "@heroicons/react/24/outline";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [chatRoom, setChatRoom] = useState({});
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        axios.get('/api/chatRoom').then(response => {
            setChatRooms(response.data.chatRooms);
        });
    }, []);

    useEffect(() => {
        if (chatRoom.id) {
            axios.post('/api/messages', { chatRoomId: chatRoom.id }).then(response => {
                setMessages(response.data.messages);
            });

            const echo = new Echo({
                broadcaster: 'pusher',
                key: '8f966224916b5906d1f6',
                cluster: 'ap1',
                forceTLS: true,
                encrypted: true,
            });

            const channel = echo.channel('chat-room.' + chatRoom.id);

            channel.listen('.message.sent', e => {
                setMessages(messages => [...messages, e]);
            });

            return () => {
                echo.leave('chat-room.' + chatRoom.id);
                echo.disconnect();
            };
        }
    }, [chatRoom]);

    const sendMessage = (e) => {
        e.preventDefault();
        axios.post('/api/send', {
            userId: user,
            message,
            chatRoomId: chatRoom.id
        }).then(() => {
            setMessage('');
        });
    };

    useEffect(() => {
        const chatBox = document.getElementById('chat-box');
        chatBox.scrollTop = chatBox.scrollHeight;
    }, [messages]);

    return (
        <>
            <Header />
            <div className="flex pt-4">
                <div className="w-1/4 border-r">
                    <div className="flex px-3 py-4 items-center cursor-default border-b h-16">
                        <h1 className="text-lg font-semibold text-gray-800 w-full text-center">
                            Tin nhắn
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        {chatRooms.map((user, index) => (
                            <div
                                key={index}
                                className={`flex items-center px-3 py-4 cursor-pointer hover:bg-gray-100 ${
                                    chatRoom.id === user.id ? "bg-gray-100" : ""
                                }`}
                                onClick={() => setChatRoom(user)}
                            >
                                <img
                                    src={
                                        user.otherUser.avatar ||
                                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                    }
                                    className="w-14 h-14 rounded-full"
                                />
                                <div className="flex flex-col ml-3">
                                    <h1 className="font-semibold text-gray-800">
                                        {user.otherUser.email}
                                    </h1>
                                    <p className="text-sm text-gray-600">
                                        Tin nhắn mới
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="flex flex-col h-screen">
                        <div className="flex items-center px-6 h-16 border-b">
                            {chatRoomId && (
                                <img
                                    src={
                                        userChatList.find(
                                            (user) => user.id === select
                                        ).avatar
                                            ? userChatList.find(
                                                  (user) => user.id === select
                                              ).avatar
                                            : "https://i.pravatar.cc/150?img=1"
                                    }
                                    className="w-14 h-14 rounded-full"
                                />
                            )}
                            <div className="flex flex-col ml-3">
                                <h1 className="font-semibold text-gray-800">
                                    {select &&
                                        userChatList.find(
                                            (user) => user.id === select
                                        ).name}
                                </h1>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center px-6 py-4 ${
                                        message.user === 1 ? "justify-end" : ""
                                    }`}
                                >
                                    <div
                                        className={`flex flex-col ${
                                            message.user === 1
                                                ? "items-end"
                                                : "items-start"
                                        }`}
                                    >
                                        <div
                                            className={`flex items-center ${
                                                message.user === 1
                                                    ? "flex-row-reverse"
                                                    : ""
                                            }`}
                                        >
                                            <p
                                                className={`text-sm px-4 py-2 rounded-lg ${
                                                    message.user === 1
                                                        ? "bg-[#ffb803] text-gray-100"
                                                        : "bg-gray-200 text-gray-800"
                                                }`}
                                            >
                                                {message.message}
                                            </p>
                                            <p className="text-xs text-gray-500 mx-2">
                                                {message.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center px-3 py-4 border-t">
                            <input
                                type="text"
                                className="w-full border rounded-full px-3 py-2"
                            />
                            <PhotoIcon className="w-6 h-6 text-amber-400 ml-3 cursor-pointer" />
                            <button className="bg-amber-400 text-white px-3 py-2 rounded-full ml-3">
                                Gửi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
