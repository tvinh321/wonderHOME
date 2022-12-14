import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Gallery from "../Components/Details/Gallery";
import OwnerContact from "../Components/Details/OwnerContact";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import ReportModal from "../Components/Details/ReportModal";
import {
    Direction,
    Furniture,
    JuridicalPaper,
    JuridicalStatus,
} from "../../constants/common";

export default function Details() {
    const houseId = useParams();
    const [house, setHouse] = useState({});
    const [modalRequest, setModalRequest] = useState(false);
    const [modalReport, setModalReport] = useState(false);

    useEffect(() => {
        axios
            .get("/api/property/" + houseId.id)
            .then((response) => {
                setHouse(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log("house", house);

    return (
        <>
            <Header />

            {house ? (
                <body>
                    <div className="lg:px-32 lg:pb-14 lg:my-0 lg:pt-14 w-full py-8 px-8">
                        <div className="my-6">
                            <h1 className="font-bold text-3xl mb-2">
                                {house.title}
                            </h1>
                            <p className="text-neutral-500 text-sm">
                                {house.location}
                            </p>
                        </div>

                        {/* Image gallery */}
                        <Gallery
                            title={house.title}
                            files={house.files}
                            price={house.price}
                            bedNumb={house.num_of_bedrooms}
                            area={house.area}
                            setModalReport={setModalReport}
                        />
                    </div>

                    {/* House info  */}
                    <div className="lg:px-32 px-8 md:pb-32 xl:pb-48 py-24 bg-gray-100 w-full">
                        <div className="md:flex md:justify-between mb-4 md:gap-x-6">
                            <div className="md:w-4/5 md:px-8 w-full">
                                {/* Th??ng tin nh??  */}
                                <div className="mb-10 lg:mb-24">
                                    <div className="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                                    <h1 className="font-bold text-2xl mt-4">
                                        Th??ng tin
                                    </h1>

                                    <div className="mx-auto md:mt-6 mt-4">
                                        <p className="leading-loose whitespace-pre-wrap text-justify">
                                            {house.description}
                                        </p>
                                    </div>

                                    <div className="text-sm grid-cols-2 space-y-4 gap-y-3 md:space-y-0 md:grid md:gap-x-20 md:my-10 my-6 fill-neutral-800 text-neutral-800">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <svg
                                                    className="mr-2"
                                                    width="16"
                                                    height="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
                                                </svg>
                                                <span>Di???n t??ch</span>
                                            </div>
                                            <p>
                                                {house.area} m<sup>2</sup>
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 w-1/2">
                                                <svg
                                                    className="mr-2"
                                                    width="16"
                                                    height="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M7,6A1,1,0,1,0,8,7,1,1,0,0,0,7,6Zm14.71,5.78L12.23,2.32A1,1,0,0,0,11.5,2h-6a1,1,0,0,0-.71.29L2.29,4.78A1,1,0,0,0,2,5.49v6a1.05,1.05,0,0,0,.29.71l9.49,9.5a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l8.51-8.51a1,1,0,0,0,.29-.71A1.05,1.05,0,0,0,21.71,11.78Zm-9.22,7.81L4,11.09V5.9L5.9,4h5.18l8.5,8.49Z" />
                                                </svg>
                                                <span>M???c gi??</span>
                                            </div>
                                            <p className="w-1/2 text-right">
                                                {(
                                                    house.price / 1000000000
                                                ).toFixed(1)}{" "}
                                                t???
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 w-1/2">
                                                <svg
                                                    className="mr-2"
                                                    width="16"
                                                    height="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M10,10v2H8v-2H10z M16,12v-2h-2v2H16z M21,14v8H3v-8h1v-4c0-4.42,3.58-8,8-8s8,3.58,8,8v4H21z M7,16H5v4h2V16z M11,16H9v4h2 V16z M11,4.08C8.16,4.56,6,7.03,6,10v4h5V4.08z M13,14h5v-4c0-2.97-2.16-5.44-5-5.92V14z M15,16h-2v4h2V16z M19,16h-2v4h2V16z" />
                                                </svg>
                                                <span>S??? t???ng</span>
                                            </div>
                                            <p className="w-1/2 text-right">
                                                {house.floors}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 w-1/2">
                                                <svg
                                                    className="mr-2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <title>ionicons-v5-g</title>
                                                    <path
                                                        d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeLinecap:
                                                                "round",
                                                            strokeLinejoin:
                                                                "round",
                                                            strokeWidth: "32px",
                                                        }}
                                                    />
                                                    <path
                                                        d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeLinecap:
                                                                "round",
                                                            strokeLinejoin:
                                                                "round",
                                                            strokeWidth: "32px",
                                                        }}
                                                    />
                                                    <path
                                                        d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeLinecap:
                                                                "round",
                                                            strokeLinejoin:
                                                                "round",
                                                            strokeWidth: "32px",
                                                        }}
                                                    />
                                                    <path
                                                        d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeLinecap:
                                                                "round",
                                                            strokeLinejoin:
                                                                "round",
                                                            strokeWidth: "32px",
                                                        }}
                                                    />
                                                    <path
                                                        d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16"
                                                        style={{
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeLinecap:
                                                                "round",
                                                            strokeLinejoin:
                                                                "round",
                                                            strokeWidth: "32px",
                                                        }}
                                                    />
                                                </svg>
                                                <span>Ph??ng ng???</span>
                                            </div>
                                            <p className="w-1/2 text-right">
                                                {house.num_of_bedrooms} ph??ng
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-x-2 w-1/2">
                                                <svg
                                                    className="mr-2"
                                                    style={{
                                                        color: "rgb(23, 23, 23)",
                                                    }}
                                                    width="16"
                                                    height="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    {" "}
                                                    <path
                                                        fill="#171717"
                                                        d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z"
                                                        className="ci-primary"
                                                    ></path>{" "}
                                                </svg>
                                                <span>Ph??ng t???m</span>
                                            </div>
                                            <p className="w-1/2 text-right">
                                                {house.num_of_toilets} ph??ng
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-x-2 w-1/2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mr-2 icon icon-tabler icon-tabler-armchair-2"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    {" "}
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />{" "}
                                                    <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />{" "}
                                                    <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />{" "}
                                                    <path d="M8 12h8" />{" "}
                                                    <path d="M7 19v2" />{" "}
                                                    <path d="M17 19v2" />{" "}
                                                </svg>
                                                <span>N???i th???t</span>
                                            </div>
                                            <p className="w-1/2 text-right">
                                                {Furniture[house.furniture - 1]}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h5 className="font-bold text-lg">
                                                H??? s?? ph??p l??
                                            </h5>
                                            <span
                                                className={`text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline text-white rounded-full`}
                                                style={{
                                                    backgroundColor:
                                                        JuridicalStatus.find(
                                                            (item) =>
                                                                item.id ===
                                                                house.juridical_status
                                                        )?.color,
                                                }}
                                            >
                                                {
                                                    JuridicalStatus.find(
                                                        (item) =>
                                                            item.id ===
                                                            house.juridical_status
                                                    )?.name
                                                }
                                            </span>
                                        </div>
                                        {house.juridical_status !==
                                            undefined && (
                                            <div className="leading-7 mt-3">
                                                <p>
                                                    C??c lo???i gi???y t???{" "}
                                                    {house.juridical_status ===
                                                    2
                                                        ? "???? g???i nh??ng kh??ng y??u c???u x??c th???c"
                                                        : JuridicalStatus.find(
                                                              (item) =>
                                                                  item.id ===
                                                                  house.juridical_status
                                                          )?.name.toLowerCase()}
                                                    :
                                                </p>
                                                <ul className="list-disc pl-6">
                                                    {Object.keys(
                                                        JuridicalPaper
                                                    ).map(
                                                        (item) =>
                                                            house.juridical_type?.includes(
                                                                item
                                                            ) && (
                                                                <li>
                                                                    {
                                                                        JuridicalPaper[
                                                                            item
                                                                        ]
                                                                    }
                                                                </li>
                                                            )
                                                    )}
                                                </ul>
                                                ????? bi???t th??m th??ng tin v??? gi???y
                                                t??? ph??p l??, qu?? kh??ch c?? th???{" "}
                                                <span
                                                    className="underline text-amber-500"
                                                    onClick={() => {
                                                        setModalRequest(true);
                                                    }}
                                                >
                                                    y??u c???u cung c???p gi???y t???
                                                    ph??p l??
                                                </span>{" "}
                                                t??? ng?????i ????ng tin.
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/*  Ti???n nghi nh??   */}
                                <div className="mb-10 lg:mb-20">
                                    <div className="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                                    <h1 className="font-bold text-2xl mt-4">
                                        Ti???n nghi
                                    </h1>

                                    <div className="mx-auto mt-6">
                                        <div className="flex space-x-2 ">
                                            {house.conveniences?.includes(
                                                "doxe"
                                            ) && (
                                                <span className="w-12 h-12 flex items-center justify-center py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline border border-neutral-400 rounded-md">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        {" "}
                                                        <g>
                                                            {" "}
                                                            <path
                                                                fill="none"
                                                                d="M0 0h24v24H0z"
                                                            />{" "}
                                                            <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm4 2h3.5a3.5 3.5 0 0 1 0 7H11v3H9V7zm2 2v3h1.5a1.5 1.5 0 0 0 0-3H11z" />{" "}
                                                        </g>{" "}
                                                    </svg>
                                                </span>
                                            )}
                                            {house.conveniences?.includes(
                                                "wifi"
                                            ) && (
                                                <span className="w-12 h-12 flex items-center justify-center py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline border border-neutral-400 rounded-md">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="bi bi-wifi"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        {" "}
                                                        <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />{" "}
                                                        <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />{" "}
                                                    </svg>
                                                </span>
                                            )}
                                            {house.conveniences?.includes(
                                                "thucung"
                                            ) && (
                                                <span className="w-12 h-12 flex items-center justify-center py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline border border-neutral-400 rounded-md">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        {" "}
                                                        <path
                                                            fill="var(--ci-primary-color, currentColor)"
                                                            d="M382.825,304.576a131.562,131.562,0,0,0-253.65,0l-18.248,66.15A80,80,0,0,0,188.046,472H323.954a80,80,0,0,0,77.119-101.274Zm-20.682,116.5A47.638,47.638,0,0,1,323.954,440H188.046a48,48,0,0,1-46.272-60.765l18.248-66.149a99.563,99.563,0,0,1,191.956,0l18.248,66.149A47.636,47.636,0,0,1,362.143,421.08Z"
                                                            className="ci-primary"
                                                        />{" "}
                                                        <path
                                                            fill="var(--ci-primary-color, currentColor)"
                                                            d="M146.1,230.31c2.784-17.4-.908-36.027-10.4-52.463S111.92,148.9,95.463,142.611c-17.624-6.731-35.6-5.659-50.634,3.017C14.942,162.884,7.077,205.413,27.3,240.433c9.489,16.436,23.778,28.95,40.235,35.236a64.058,64.058,0,0,0,22.863,4.371,55.133,55.133,0,0,0,27.771-7.389C133.194,263.974,143.114,248.937,146.1,230.31Zm-31.6-5.058c-1.43,8.929-5.81,15.92-12.333,19.686S87.4,249,78.95,245.775c-9.613-3.671-18.115-11.251-23.941-21.342-11.2-19.4-8.538-42.8,5.82-51.092a23.483,23.483,0,0,1,11.847-3.058A31.951,31.951,0,0,1,84.044,172.5c9.613,3.673,18.115,11.252,23.941,21.343S116.124,215.091,114.5,225.252Z"
                                                            className="ci-primary"
                                                        />{" "}
                                                        <path
                                                            fill="var(--ci-primary-color, currentColor)"
                                                            d="M149.566,164.017c11.362,9.083,24.337,13.813,37.458,13.812a54.965,54.965,0,0,0,11.689-1.261c33.723-7.331,54.17-45.443,45.58-84.958h0c-4.03-18.546-13.828-34.817-27.588-45.818-14.735-11.78-32.189-16.239-49.147-12.551-33.722,7.33-54.169,45.442-45.58,84.957C126.009,136.745,135.807,153.016,149.566,164.017Zm24.788-99.506a22.258,22.258,0,0,1,4.732-.5c5.948,0,12.066,2.327,17.637,6.781,8.037,6.425,13.826,16.234,16.3,27.621h0c4.76,21.895-4.906,43.368-21.107,46.89-7.361,1.6-15.305-.628-22.367-6.275-8.037-6.426-13.826-16.235-16.3-27.621C148.488,89.506,158.154,68.033,174.354,64.511Z"
                                                            className="ci-primary"
                                                        />{" "}
                                                        <path
                                                            fill="var(--ci-primary-color, currentColor)"
                                                            d="M467.171,145.628c-15.028-8.676-33.013-9.748-50.634-3.017-16.457,6.287-30.746,18.8-40.235,35.236s-13.182,35.067-10.4,52.463c2.982,18.627,12.9,33.664,27.931,42.341a55.123,55.123,0,0,0,27.771,7.389,64.054,64.054,0,0,0,22.863-4.371c16.457-6.286,30.746-18.8,40.235-35.236C504.923,205.413,497.058,162.884,467.171,145.628Zm-10.18,78.805c-5.826,10.091-14.328,17.671-23.941,21.342-8.446,3.228-16.692,2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314,6.513-31.4s14.328-17.67,23.941-21.343a31.955,31.955,0,0,1,11.368-2.221,23.483,23.483,0,0,1,11.847,3.058C465.529,181.631,468.194,205.028,456.991,224.433Z"
                                                            className="ci-primary"
                                                        />{" "}
                                                        <path
                                                            fill="var(--ci-primary-color, currentColor)"
                                                            d="M313.287,176.568a54.965,54.965,0,0,0,11.689,1.261c13.12,0,26.1-4.729,37.458-13.812,13.759-11,23.557-27.272,27.588-45.818,8.589-39.515-11.858-77.627-45.58-84.957-16.957-3.686-34.412.77-49.147,12.551-13.76,11-23.558,27.272-27.588,45.817C259.117,131.125,279.564,169.237,313.287,176.568Zm-14.31-78.16h0c2.474-11.387,8.263-21.2,16.3-27.621,5.572-4.454,11.689-6.781,17.637-6.781a22.258,22.258,0,0,1,4.732.5c16.2,3.522,25.866,25,21.107,46.89-2.476,11.387-8.265,21.2-16.3,27.622-7.061,5.646-15,7.874-22.367,6.275C303.883,141.776,294.217,120.3,298.977,98.408Z"
                                                            className="ci-primary"
                                                        />{" "}
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- B???n ?????  --> */}
                                <div className="mb-10 lg:mb-24">
                                    <div className="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                                    <h1 className="font-bold text-2xl mt-4">
                                        Xem tr??n b???n ?????
                                    </h1>

                                    <div className="mx-auto md:mt-6 mt-4">
                                        {house.location && (
                                            <iframe
                                                className="w-full h-96"
                                                frameborder="0"
                                                marginheight="0"
                                                marginwidth="0"
                                                title="map"
                                                src={`https://maps.google.com/maps?width=100%&height=600&hl=vi&q=${house.location}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <OwnerContact owner={house?.owner} />
                        </div>
                    </div>
                </body>
            ) : (
                <div className="flex items-center">
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
                            d="M4 12a8 8 0 018-8v8z"
                        ></path>
                    </svg>
                    <p className="text-gray-900">??ang t???i...</p>
                </div>
            )}

            <Footer />

            <div
                className={`fixed inset-0 z-50 overflow-y-auto ${
                    modalRequest ? "block" : "hidden"
                }`}
            >
                <div className="flex items-end justify-center min-h-screen pt-8 px-8 pb-32 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                    <QuestionMarkCircleIcon
                                        className="h-6 w-6 text-amber-400"
                                        aria-hidden="true"
                                        width="20"
                                        height="20"
                                    />
                                </div>
                                <div className="mt-3  sm:mt-0 sm:ml-4 text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-headline"
                                    >
                                        G???i y??u c???u cung c???p gi???y t???
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Y??u c???u ch??? s??? h???u cung c???p gi???y t???
                                            ph??p l??
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex items-center justify-between">
                            <button
                                onClick={() => setModalRequest(false)}
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 border-amber-600 text-base font-medium text-neutral-700 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                H???y
                            </button>

                            <button
                                type="button"
                                onClick={() => setModalRequest(false)}
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-amber-500 text-base font-medium text-white hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                G???i y??u c???u
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ReportModal
                isShow={modalReport}
                setIsShow={setModalReport}
                houseId={houseId.id}
            />
        </>
    );
}
