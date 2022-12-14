import React, { useMemo } from "react";
import ChatBox, { ChatFrame } from "react-chat-plugin";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

function NewChatBubble() {
    const isLoggedIn = useMemo(
        () => !!localStorage.getItem("wonderHome-token"),
        [localStorage.getItem("wonderHome-token")]
    );
    return (
        <ChatFrame
            icon={
                <ChatBubbleBottomCenterTextIcon
                    width={"20px"}
                    height={"20px"}
                    style={{ margin: "auto" }}
                />
            }
            clickIcon={() => {
                const path = isLoggedIn ? "/chat" : "/dang-nhap";
                window.location.href = path;
            }}
            showIcon={true}
            iconStyle={{
                background: "#fde68a",
                color: "#171717",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                margin: 0,
                textAlign: "center",
            }}
        ></ChatFrame>
    );
}

export default NewChatBubble;
