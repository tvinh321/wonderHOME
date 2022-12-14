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
                                        <div className="flex items-center justify-between">
                                            <a href={`/thong-tin/${item.id}`}>
                                                <p className="text-md text-amber-900 font-semibold mb-1 line-clamp-2">
                                                    {item.fullName}
                                                </p>
                                            </a>
                                            <div className="flex items-center gap-x-1 my-1">
                                                <svg
                                                    style={{
                                                        color: "rgb(255, 191, 36)",
                                                    }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="11"
                                                    height="11"
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
                                                    width="11"
                                                    height="11"
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
                                                    width="11"
                                                    height="11"
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
                                                    width="11"
                                                    height="11"
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
                                        </div>

                                        <div className="text-sm flex items-center gap-x-1 text-gray-500 mb-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                width="14"
                                                height="14"
                                            >
                                                {" "}
                                                <path
                                                    fill="var(--ci-primary-color, currentColor)"
                                                    d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
                                                    class="ci-primary"
                                                />{" "}
                                                <path
                                                    fill="var(--ci-primary-color, currentColor)"
                                                    d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
                                                    class="ci-primary"
                                                />{" "}
                                            </svg>
                                            <p>{item.address}</p>
                                        </div>
                                        <div className="text-sm flex items-center gap-x-1 text-gray-500 mb-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                fill="currentColor"
                                                class="bi bi-phone"
                                                viewBox="0 0 16 16"
                                            >
                                                {" "}
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />{" "}
                                            </svg>
                                            <p>{item.phone}</p>
                                        </div>
                                        <div className="mb-2 text-sm font-semibold text-neutral-900 flex items-center"></div>

                                        <div className="flex gap-x-3">
                                            <button className="flex items-center justify-center px-6 py-2 bg-white rounded text-black border hover:bg-gray-200 font-semibold">
                                                <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 mr-2" />
                                                Chat
                                            </button>

                                            <button
                                                className="flex items-center justify-center px-6 py-2 bg-white rounded text-black border hover:bg-gray-200 font-semibold"
                                                onClick={() => {
                                                    window.open(
                                                        `mailto:${item.email}`
                                                    );
                                                }}
                                            >
                                                <EnvelopeIcon className="w-4 h-4 mr-2" />
                                                Gửi Email
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
