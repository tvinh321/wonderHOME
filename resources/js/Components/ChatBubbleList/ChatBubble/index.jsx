import React, { useState } from "react";
import ChatBox, { ChatFrame } from "react-chat-plugin";

function ChatBubble() {
    const [attr, setAttr] = useState({
        showChatbox: false,
        showIcon: true,
        messages: [
            {
                text: "Ngoc An has joined the conversation",
                timestamp: 1578366389250,
                type: "notification",
            },
            {
                author: {
                    username: "Van Huy",
                    id: 1,
                    avatarUrl: "https://i.pravatar.cc/150?img=7",
                },
                text: "Hi",
                type: "text",
                timestamp: 1578366393250,
            },
            {
                author: {
                    username: "Ngoc An",
                    id: 2,
                    avatarUrl: "https://i.pravatar.cc/150?img=5",
                },
                text: "Show two buttons",
                type: "text",
                timestamp: 1578366425250,
                buttons: [
                    {
                        type: "URL",
                        title: "Yahoo",
                        payload: "http://www.yahoo.com",
                    },
                    {
                        type: "URL",
                        title: "Example",
                        payload: "http://www.example.com",
                    },
                ],
            },
            {
                author: {
                    username: "Van Huy",
                    id: 1,
                    avatarUrl: "https://i.pravatar.cc/150?img=7",
                },
                text: "What's up?",
                type: "text",
                timestamp: 1578366425250,
                hasError: true,
            },
        ],
    });
    const handleClickIcon = () => {
        // toggle showChatbox and showIcon
        setAttr({
            ...attr,
            showChatbox: !attr.showChatbox,
            showIcon: !attr.showIcon,
        });
    };
    const handleOnSendMessage = (message) => {
        setAttr({
            ...attr,
            messages: attr.messages.concat({
                author: {
                    username: "Van Huy",
                    id: 1,
                    avatarUrl: "https://i.pravatar.cc/150?img=7",
                },
                text: message,
                type: "text",
                timestamp: +new Date(),
            }),
        });
    };
    return (
        <ChatFrame
            chatbox={
                <ChatBox
                    onSendMessage={handleOnSendMessage}
                    userId={1}
                    messages={attr.messages}
                    width={"300px"}
                    showTypingIndicator={true}
                    activeAuthor={{
                        username: "Ngoc An",
                        id: 2,
                        avatarUrl: "https://i.pravatar.cc/150?img=5",
                    }}
                />
            }
            icon={
                <img
                    src="https://i.pravatar.cc/150?img=5"
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                    }}
                />
            }
            clickIcon={handleClickIcon}
            showChatbox={attr.showChatbox}
            showIcon={attr.showIcon}
            iconStyle={{
                background: "transparent",
                width: "50px",
                height: "50px",
                fill: "white",
                borderRadius: "50%",
                margin: "0 0 70px 0",
            }}
        ></ChatFrame>
    );
}

export default ChatBubble;
