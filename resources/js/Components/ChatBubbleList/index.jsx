import React, { useState } from "react";
import ChatBox, { ChatFrame } from "react-chat-plugin";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import ChatBubble from "./ChatBubble";
import NewChatBubble from "./NewChatBubble";

function ChatBubbleList() {
    return (
        <>
            <ChatBubble />

            <NewChatBubble />
        </>
    );
}

export default ChatBubbleList;
