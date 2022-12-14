import React, { useState } from "react";
import Notifications from "react-notifications-menu";

export default function NotificationMenu() {
    const data = [
        {
            image: "https://i.pravatar.cc/150?img=5",
            message: "Ngoc Anh đã thích bài viết của bạn",
            detailPage: "/",
            receivedTime: "12 phút trước",
        },
        {
            image: "https://i.pravatar.cc/150?img=2",
            message: "Le Linh đã bình luận bài viết của bạn",
            detailPage: "/",
            receivedTime: "1 tiếng trước",
        },
    ];

    return (
        <Notifications
            data={data}
            header={{
                title: "Notifications",
                option: {
                    text: "View All",
                    onClick: () => console.log("Clicked"),
                },
            }}
            markAsRead={(data) => {
                console.log(data);
            }}
            icon={"https://cdn-icons-png.flaticon.com/512/384/384664.png"}
        />
    );
}
