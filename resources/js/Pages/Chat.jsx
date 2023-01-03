import Pusher from "pusher-js/with-encryption";
import Echo from "laravel-echo";
import axios from "axios";

import React, { useState, useEffect } from "react";

import Header from "../Components/Header";

import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";

import moment from "moment";

export default function Chat() {
    const token = localStorage.getItem("wonderHome-token");
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const user = JSON.parse(window.atob(base64)).sub;

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [chatRoom, setChatRoom] = useState();
    const [chatRooms, setChatRooms] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [image, setImage] = useState(null);

    const handleSeen = () => {
        axios
            .get(`/api/seen/${chatRoom.chat_rooms_id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });

        setChatRooms((chatRooms) => {
            const index = chatRooms.findIndex((i) => i.chat_rooms_id === chatRoom.chat_rooms_id);
            if (chatRooms[index].lastMessage) chatRooms[index].lastMessage.read = true;

            return chatRooms;
        });
    }

    useEffect(() => {
        axios.get("/api/chatRoom", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            setChatRooms(response.data.chatRooms);
        });
    }, []);

    useEffect(() => {
        if (chatRoom) {
            axios
                .post("/api/messages", { chatRoomId: chatRoom.chat_rooms_id })
                .then((response) => {
                    setMessages(response.data.messages.map((i) => {
                        i.created_at = moment(i.created_at).add(7, "hours").format("YYYY-MM-DD HH:mm:ss");
                        return i;
                    }));

                    handleSeen();
                });

            const echo = new Echo({
                broadcaster: "pusher",
                key: "8f966224916b5906d1f6",
                cluster: "ap1",
                forceTLS: true,
                encrypted: true,
            });

            const channel = echo.channel("chat-room." + chatRoom.chat_rooms_id);

            channel.listen(".message.sent", (e) => {
                setMessages((messages) => [...messages, {
                    ...e,
                    created_at: moment(e.created_at).format("YYYY-MM-DD HH:mm:ss"),
                }]);

                handleSeen();

                setChatRooms((chatRooms) => {
                    const index = chatRooms.findIndex((i) => i.chat_rooms_id === chatRoom.chat_rooms_id);
                    chatRooms[index].lastMessage = e;

                    return chatRooms;
                })
            });

            console.log(user);
            console.log(chatRoom);

            return () => {
                echo.leave("chat-room." + chatRoom.chat_rooms_id);
                echo.disconnect();
            };
        }
    }, [chatRoom]);

    const sendMessage = (e) => {
        e.preventDefault();

        axios
            .post("/api/send", {
                userId: user.id,
                message,
                chatRoomId: chatRoom.chat_rooms_id,
            })
            .then(() => {
                setMessage("");
            });
    };

    const handleFiles = (e) => {
        const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            axios
                .post("/api/chat/uploadFiles", {
                    chatId: chatRoom.chat_rooms_id,
                    file: files[i],
                }, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    }
                })
        }
    };

    useEffect(() => {
        const chatBox = document.getElementById("chat-box");
        chatBox.scrollTop = chatBox.scrollHeight;
    }, [messages]);

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-grow pt-4">
                <div className="w-1/4 border-r h-full">
                    <div className="flex px-3 py-4 items-center cursor-default border-b h-16">
                        <h1 className="text-lg font-semibold text-gray-800 w-full text-center">
                            Tin nhắn
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        {chatRooms.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center px-3 py-4 cursor-pointer hover:bg-gray-100 ${
                                    (chatRoom && chatRoom.id === item.id) ? "bg-gray-100" : ""
                                }`}
                                onClick={() => setChatRoom(item)}
                            >
                                <img
                                    src={
                                        item.otherUser.avatar
                                        ? `/api/avatar/${item.otherUser.avatar}`
                                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                    }
                                    className="w-14 h-14 rounded-full"
                                />
                                <div className="flex flex-col ml-3">
                                    <h1 className="font-semibold text-gray-800">
                                        {item.otherUser.email}
                                    </h1>
                                    <p className={"text-sm text-gray-600 " + ((item.lastMessage?.users_id == user.id || item.lastMessage?.read) ? "" : "font-bold")}>
                                        {item.lastMessage?.content 
                                        ? (item.lastMessage.content.includes("[[file")
                                            ? "Đã gửi một tệp tin"
                                            : item.lastMessage.content) 
                                        : "Hãy bắt đầu cuộc trò chuyện"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 h-full">
                    <div className="flex items-center px-6 h-16 border-b">
                        {chatRoom && (
                            <img
                                src={
                                        chatRoom?.otherUser?.avatar
                                        ? `/api/avatar/${chatRoom.otherUser.avatar}`
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                }
                                className="w-14 h-14 rounded-full object-fill"
                            />
                        )}
                        <div className="flex flex-col ml-3">
                            <h1 className="font-semibold text-gray-800">
                                {chatRoom?.otherUser?.email}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-grow flex-col">
                        <div className="overflow-y-scroll h-[68vh]" id="chat-box">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center px-6 py-4 ${
                                        message.users_id === user.id ? "justify-end" : ""
                                    }`}
                                >
                                    <div
                                        className={`flex flex-col ${
                                            message.users_id === user.id
                                                ? "items-end"
                                                : "items-start"
                                        }`}
                                    >
                                        <div
                                            className={`flex items-center ${
                                                message.users_id === user.id
                                                    ? "flex-row-reverse"
                                                    : ""
                                            }`}
                                        >
                                            <p
                                                className={`text-sm px-4 py-2 rounded-lg ${
                                                    message.users_id === user.id
                                                        ? "bg-[#ffb803] text-gray-100"
                                                        : "bg-gray-200 text-gray-800"
                                                }`}
                                            >
                                                {
                                                    // If content has this form "[[file]]", it's an image
                                                    message.content.includes("[[file")
                                                    ? (
                                                        <img
                                                            src={`/api/chat/downloadFile/${chatRoom.chat_rooms_id}/${message.content.split("file:")[1].split("]]")[0]}`}
                                                            className="w-32 h-32 rounded-lg object-cover cursor-pointer"
                                                            onClick={(e) => {
                                                                setImage(e.target.src);
                                                                setViewModal(true);
                                                            }}
                                                        />
                                                    )
                                                    : message.content
                                                }
                                            </p>
                                            <p className="text-xs text-gray-500 mx-2">
                                                {message.created_at}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {
                            chatRoom && (
                                <div className="flex items-center px-3 py-4 border-t">
                                    <input
                                        type="text"
                                        className="w-full border rounded-full px-3 py-2"
                                        placeholder="Nhập tin nhắn"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="file"
                                        onChange={(e) => handleFiles(e)}
                                        multiple
                                        accept="image/*"
                                    />
                                    <label htmlFor="file" className="cursor-pointer">
                                        <PhotoIcon className="h-6 w-6 text-amber-400 ml-4" />
                                    </label>
                                    <button className="bg-amber-400 text-white px-3 py-2 rounded-full ml-3" onClick={(e) => sendMessage(e)}>
                                        Gửi
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                viewModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <button className="absolute top-12 right-12" onClick={() => setViewModal(false)}>
                                <XMarkIcon className="h-12 w-12 text-gray-200" />
                            </button>
                            <img
                                src={image}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
}
