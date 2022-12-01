import React from "react";
import ChatBubble from "./ChatBubble";
import NewChatBubble from "./NewChatBubble";

function ChatBubbleList() {
    const latestChat = [
        {
            author: {
                username: "Van Huy",
                id: 1,
                avatarUrl: "https://i.pravatar.cc/150?img=7",
            },
            text: "Xin chào, tôi xin thông tin nhà quận 9",
            type: "text",
            timestamp: 1578366393250,
        },
        {
            author: {
                username: "Ngoc An",
                id: 2,
                avatarUrl: "https://i.pravatar.cc/150?img=5",
            },
            text: "Nhà chưa bán, 2 lầu, đường xe vô rộng!",
            type: "text",
            timestamp: 1578366425250,
            // buttons: [
            //     {
            //         type: "URL",
            //         title: "Yahoo",
            //         payload: "http://www.yahoo.com",
            //     },
            //     {
            //         type: "URL",
            //         title: "Example",
            //         payload: "http://www.example.com",
            //     },
            // ],
        },
        {
            author: {
                username: "Van Huy",
                id: 1,
                avatarUrl: "https://i.pravatar.cc/150?img=7",
            },
            text: "có thể xem nhà vào ngày mai không?",
            type: "text",
            timestamp: 1578366425250,
            hasError: true,
        },
    ];

    const latestChatUser = {
        username: "Ngoc An",
        id: 2,
        avatarUrl: "https://i.pravatar.cc/150?img=5",
    };

    return (
        <>
           {latestChat?.length && <ChatBubble messages={latestChat} secondUser={latestChatUser} />
}
            <NewChatBubble />
        </>
    );
}

export default ChatBubbleList;
