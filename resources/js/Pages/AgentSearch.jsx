import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { EnvelopeIcon, PhoneIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

import Ad from "../../../public/images/Ad.jpg"

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);

    const [typesList, setTypesList] = useState([]);
    const [type, setType] = useState([]);

    const [showPropertyTypes, setShowPropertyTypes] = useState(false);
    const propertyTypesRef = useRef();

    useEffect(() => {
        let profiles = [];

        for (let i = 0; i < 30; i++) {
            profiles.push({
                id: i,
                fullName: "Nguyễn Văn A",
                address: "123 ABC, Hà Nội",
                phone: "0123456789",
                email: "abc@gmail.com",
                created_at: "2021-01-01 00:00:00",
            })
        }

        setSearchResults(profiles);
    }, []);

    return (
        <>
            <Header />
            <div className="border-y mt-6 py-2 hidden md:block">
                <div className="grid lg:grid-cols-9 grid-cols-5 mx-24 text-sm font-semibold">
                    <div className="col-span-3 border-r px-4 py-2">
                        <p className="mb-2">Tìm kiếm chuyên gia</p>
                        <input
                            type="text"
                            className="w-full border rounded h-8"
                        />
                    </div>
                    <div className="col-span-1 border-r px-4 py-2">
                        <p>Loại nhà đất</p>
                        {showPropertyTypes ? (
                            <div
                                className="absolute top-20 z-50 w-44 bg-white rounded divide-gray-100 shadow"
                                ref={propertyTypesRef}
                            >
                                <ul
                                    className="py-1 text-sm text-neutral-900"
                                    aria-labelledby="dropdown-button"
                                >
                                    {typesList ? (
                                        typesList.map((typeItem, index) => {
                                            return (
                                                <li
                                                    className="w-full rounded-t-lg border-b border-gray-200"
                                                    key={index}
                                                >
                                                    <div className="flex items-center pl-3">
                                                        <input
                                                            id="house-checkbox"
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                            onClick={(e) => {
                                                                if (
                                                                    e.target
                                                                        .checked
                                                                ) {
                                                                    setType([
                                                                        ...type,
                                                                        typeItem.id,
                                                                    ]);
                                                                } else {
                                                                    setType(
                                                                        type.filter(
                                                                            (
                                                                                item
                                                                            ) =>
                                                                                item !=
                                                                                typeItem.id
                                                                        )
                                                                    );
                                                                }
                                                            }}
                                                            checked={type.includes(
                                                                typeItem.id
                                                            )}
                                                        />
                                                        <label
                                                            htmlFor="house-checkbox"
                                                            className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
                                                        >
                                                            {typeItem.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-20">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                                                ></path>
                                            </svg>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        ) : (
                            <p className="mt-4 font-normal">Tất cả</p>
                        )}
                    </div>
                    <div className="col-span-2 border-r px-4 py-2">
                        <p>Tỉnh/Thành phố</p>
                        <p className="mt-4 font-normal">Tất cả</p>
                    </div>
                    <div className="col-span-2 border-r px-4 py-2">
                        <p>Quận/Huyện</p>
                        <p className="mt-4 font-normal">Tất cả</p>
                    </div>
                    <div className="col-span-1 px-4 py-2 flex items-center justify-center">
                        <button className="flex items-center justify-center w-full h-10 bg-amber-400 rounded text-white font-semibold">
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10 mx-56 mb-16 flex justify-between gap-x-10">
                <div className="w-3/4 h-full">
                    <p className="font-semibold mb-10">
                        Hiện có {searchResults?.length} chuyên gia được lọc
                    </p>
                    {searchResults
                        ? searchResults.map((item, index) => {
                              return (
                                  <div className="mb-10 shadow-lg" key={index}>
                                      <div className="flex items-center gap-x-4">
                                          <div>
                                              <a href={`/thong-tin/${item.id}`}>
                                                    <img
                                                        src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${index}.jpg`}
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
                                              <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                                                  {item.address}
                                              </p>
                                              <div className="mb-2 text-sm font-semibold text-neutral-900 flex items-center">

                                              </div>

                                                <div className="flex gap-x-3">
                                                    <button
                                                        className="flex items-center justify-center w-32 h-10 bg-white rounded text-black border hover:bg-gray-200 font-semibold"
                                                    >
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
                          })
                        : null}
                </div>
                <div className="w-1/4">
                    <img src={Ad} alt="" className="" />
                </div>
            </div>

            <Footer />
        </>
    );
}
