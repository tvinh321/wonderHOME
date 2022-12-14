import React, { useState } from "react";
import ChatBox, { ChatFrame } from "react-chat-plugin";

function ChatBubble({ messages, secondUser, index }) {
    const [attr, setAttr] = useState({
        showChatbox: false,
        showIcon: true,
        messages: messages,
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
                    activeAuthor={secondUser}
                    style={{ margin: "0 0 65px 0" }}
                />
            }
            icon={
                <img
                    src={secondUser.avatarUrl}
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
                margin: "0 0 65px 0",
            }}
        ></ChatFrame>
    );
}

export default ChatBubble;
