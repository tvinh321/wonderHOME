import React, { useState, useEffect } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { Cog8ToothIcon, PencilSquareIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [select, setSelect] = useState("");
    const [roomList, setRoomList] = useState([]);

    useEffect(() => {
        const roomList = [
            {
                id: 1,
                name: "Nguyễn Văn A",
                avatar: "https://i.pravatar.cc/150?img=5",
            },
            {
                id: 2,
                name: "Nguyễn Văn B",
                avatar: "https://i.pravatar.cc/150?img=7",
            },
            {
                id: 3,
                name: "Nguyễn Văn C",
                avatar: "https://i.pravatar.cc/150?img=9",
            }
        ]

        setRoomList(roomList);
        setSelect(roomList[0].id);
    }, []);

    useEffect(() => {
        const messages = [
            {
                id: 1,
                user: 1,
                message: "Tui muốn coi căn hộ ABC",
                time: "2022-12-01 12:00:00",
            },
            {
                id: 2,
                user: 2,
                message: "Hiện tại giá hấp dẫn lắm ạ, giá 1 tỷ 200 triệu",
                time: "2022-12-01 12:00:00",
            },
            {
                id: 3,
                user: 1,
                message: "Giấy tờ hợp lệ ạ?",
                time: "2022-12-01 12:00:00",
            },
            {
                id: 4,
                user: 2,
                message: "Đã có sổ đỏ, sổ hồng",
                time: "2022-12-01 12:00:00",
            },
        ]

        setMessages(messages);
    }, [select]);

    return (
        <>
            <Header />
            <div className="flex pt-4">
                <div className="w-1/4 border-r">
                    <div className="flex px-3 py-4 items-center cursor-default border-b h-16">
                        <Cog8ToothIcon className="w-8 h-8 text-amber-400 cursor-pointer" />
                        <h1 className="text-lg font-semibold text-gray-800 w-full text-center">Tin nhắn</h1>
                        <PencilSquareIcon className="w-8 h-8 text-amber-400 cursor-pointer" />
                    </div>
                    <div className="flex flex-col">
                        {roomList.map((room, index) => (
                            <div
                                key={index}
                                className={`flex items-center px-3 py-4 cursor-pointer hover:bg-gray-100 ${select === room.id ? "bg-gray-100" : ""}`}
                                onClick={() => setSelect(room.id)}
                            >
                                <img src={room.avatar
                                    ? room.avatar
                                    : "https://i.pravatar.cc/150?img=1"
                                } className="w-14 h-14 rounded-full" />
                                <div className="flex flex-col ml-3">
                                    <h1 className="font-semibold text-gray-800">{room.name}</h1>
                                    <p className="text-sm text-gray-600">Tin nhắn mới</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="flex flex-col h-screen">
                        <div className="flex items-center px-6 h-16 border-b">
                            {select && (
                                <img src={roomList.find(room => room.id === select).avatar
                                    ? roomList.find(room => room.id === select).avatar
                                    : "https://i.pravatar.cc/150?img=1"
                                } className="w-14 h-14 rounded-full" />
                            )}
                            <div className="flex flex-col ml-3">
                                <h1 className="font-semibold text-gray-800">{select && roomList.find(room => room.id === select).name}</h1>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center px-6 py-4 ${message.user === 1 ? "justify-end" : ""}`}
                                >
                                    <div className={`flex flex-col ${message.user === 1 ? "items-end" : "items-start"}`}>
                                        <div className={`flex items-center ${message.user === 1 ? "flex-row-reverse" : ""}`}>
                                            <p className={`text-sm px-4 py-2 rounded-lg ${message.user === 1 ? "bg-[#ffb803] text-gray-100" : "bg-gray-200 text-gray-800"}`}>{message.message}</p>
                                            <p className="text-xs text-gray-500 mx-2">{message.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center px-3 py-4 border-t">
                            <input type="text" className="w-full border rounded-full px-3 py-2" />
                            <PhotoIcon className="w-6 h-6 text-amber-400 ml-3 cursor-pointer" />
                            <button className="bg-amber-400 text-white px-3 py-2 rounded-full ml-3">Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}