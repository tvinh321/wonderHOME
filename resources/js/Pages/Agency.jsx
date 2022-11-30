import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import {
    EnvelopeIcon,
    PhoneIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

import Ad from "../../../public/images/Ad.jpg";
import SearchAndFilter from "../Components/SearchAndFilter";

export default function Agency() {
    const [searchResults, setSearchResults] = useState(undefined);

    const [typesList, setTypesList] = useState([]);
    const [type, setType] = useState([]);

    const [showPropertyTypes, setShowPropertyTypes] = useState(false);
    const propertyTypesRef = useRef();

    const agentList = () => {
        let profiles = [];

        for (let i = 0; i < 30; i++) {
            profiles.push({
                id: i,
                fullName: "Nguyễn Văn A",
                address: "123 ABC, Hà Nội",
                phone: "0123456789",
                email: "abc@gmail.com",
                created_at: "2021-01-01 00:00:00",
            });
        }
        return profiles;
    };

    const handleSearchAgent = () => {
        let profiles = agentList().slice(0, 3);
        setSearchResults(profiles);
    };

    return (
        <>
            <Header />
            <SearchAndFilter
                searchType={"chuyên gia"}
                handleSearch={handleSearchAgent}
            />

            <div className="mt-10 mx-36 mb-16 flex justify-between gap-x-10">
                <div className="w-3/4 h-full">
                    <p className="font-semibold mb-10">
                        {searchResults
                            ? `Hiện có ${searchResults.length} chuyên gia được lọc`
                            : "Danh sách chuyên gia môi giới"}
                    </p>
                    {(searchResults || agentList()).map((item, index) => {
                        return (
                            <div className="mb-10 shadow-lg" key={index}>
                                <div className="flex items-center gap-x-4">
                                    <div>
                                        <a href={`/thong-tin/${item.id}`}>
                                            <img
                                                src={`https://randomuser.me/api/portraits/${
                                                    Math.random() > 0.5
                                                        ? "men"
                                                        : "women"
                                                }/${index}.jpg`}
                                                alt=""
                                                className="w-48 h-36 object-cover"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-full pr-4">
                                        <a href={`/thong-tin/${item.id}`}>
                                            <p className="text-md text-blue-900 font-semibold mb-1 line-clamp-2">
                                                {item.fullName}
                                            </p>
                                        </a>
                                        <div className="flex items-center gap-x-1 my-1">
                                            <svg
                                                style={{
                                                    color: "rgb(255, 191, 36)",
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                {" "}
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                    fill="#ffbf24"
                                                ></path>{" "}
                                            </svg>
                                            <svg
                                                style={{
                                                    color: "rgb(255, 191, 36)",
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                {" "}
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                    fill="#ffbf24"
                                                ></path>{" "}
                                            </svg>
                                            <svg
                                                style={{
                                                    color: "rgb(255, 191, 36)",
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                {" "}
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                    fill="#ffbf24"
                                                ></path>{" "}
                                            </svg>
                                            <svg
                                                style={{
                                                    color: "rgb(255, 191, 36)",
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="12"
                                                height="12"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                {" "}
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                                    fill="#ffbf24"
                                                ></path>{" "}
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                                            {item.address}
                                        </p>
                                        <div className="mb-2 text-sm font-semibold text-neutral-900 flex items-center"></div>

                                        <div className="flex gap-x-3">
                                            <button className="flex items-center justify-center w-32 h-10 bg-white rounded text-black border hover:bg-gray-200 font-semibold">
                                                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 mr-2" />
                                                Chat
                                            </button>

                                            <button
                                                className="flex items-center justify-center w-32 h-10 bg-white rounded text-black border hover:bg-gray-200 font-semibold"
                                                onClick={() => {
                                                    window.open(
                                                        `mailto:${item.email}`
                                                    );
                                                }}
                                            >
                                                <EnvelopeIcon className="w-5 h-5 mr-2" />
                                                Gửi Email
                                            </button>

                                            <button
                                                className="flex items-center justify-center w-32 h-10 bg-white rounded text-black border hover:bg-gray-200 font-semibold"
                                                onClick={() => {
                                                    window.open(
                                                        `tel:${item.phone}`
                                                    );
                                                }}
                                            >
                                                <PhoneIcon className="w-5 h-5 mr-2" />
                                                Gọi ĐT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-1/4">
                    <img src={Ad} alt="" className="" />
                </div>
            </div>

            <Footer />
        </>
    );
}
