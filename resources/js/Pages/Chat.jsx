import Pusher from 'pusher-js/with-encryption';
import Echo from 'laravel-echo';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [channel, setChannel] = useState('');
    const [chatRoomId, setChatRoomId] = useState('');
    const [chatRooms, setChatRooms] = useState([]);
    const [users, setUsers] = useState([]);

    const [usersImage, setUsersImage] = useState([
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
    ]);

    useEffect(() => {
        axios.get('/api/chatRoom').then(response => {
            setChatRooms(response.data.chatRooms);
        });
    }, []);

    useEffect(() => {
        if (chatRoomId) {
            setUsers(chatRooms.find(chatRoom => chatRoom.id === chatRoomId).users);

            axios.post('/api/messages', { chatRoomId }).then(response => {
                setMessages(response.data.messages);
            });

            const echo = new Echo({
                broadcaster: 'pusher',
                key: '8f966224916b5906d1f6',
                cluster: 'ap1',
                forceTLS: true,
                encrypted: true,
            });

            const channel = echo.channel('chat-room.' + chatRoomId);
            setChannel(channel);

            channel.listen('.message.sent', e => {
                setMessages(messages => [...messages, e]);
            });

            return () => {
                echo.leave('chat-room.' + chatRoomId);
                echo.disconnect();
            };
        }
    }, [chatRoomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        axios.post('/api/send', {
            userId: user,
            message,
            chatRoomId
        }).then(() => {
            setMessage('');
        });
    };

    useEffect(() => {
        const chatBox = document.getElementById('chat-box');
        chatBox.scrollTop = chatBox.scrollHeight;
    }, [messages]);

    return (
        <div className="px-4 py-4">
            {/* Select Chat Room */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chatRoomId">
                    Chat Room
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="chatRoomId"
                        value={chatRoomId}
                        onChange={(e) => setChatRoomId(e.target.value)}
                    >
                        <option value="">Select Chat Room</option>
                        {chatRooms.map(chatRoom => (
                            <option key={chatRoom.id} value={chatRoom.id}>{chatRoom.id}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Select User */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                    User
                </label>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        id="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    >
                        <option value="">Select User</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.username}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Chat Room with Input */}
            <div className="mb-4">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                    <div className="overflow-y-scroll" style={{ height: '300px' }} id={"chat-box"}>
                        {messages.map(message => (
                            <div key={message.id} className="mb-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={usersImage[users.findIndex(item => item.id === message.users_id)]} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm leading-5 font-medium text-gray-900">
                                            {users.find(user => user.id === message.users_id).username}
                                        </p>
                                        <div className="text-sm leading-5 text-gray-500">
                                            {message.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <form onSubmit={sendMessage}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    type="text"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;