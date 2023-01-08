import React, { useEffect, useState } from "react";
import ReactPannellum from "react-pannellum";
import YouTube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShareOptions from "./ShareOptions";
import { useParams } from "react-router-dom";

export default function Gallery({
    title,
    files,
    bedNumb,
    price,
    area,
    setModalReport,
}) {
    const { id } = useParams();
    const [propertyGallery, setPropertyGallery] = useState({
        imageLinks: [],
        videoLinks: [],
        panaromaLinks: [],
    });

    useEffect(() => {
        setPropertyGallery({
            imageLinks: (files || [])
                ?.filter((item) => item.type === "image")
                .map((item) => item.content),
            videoLinks: (files || [])
                ?.filter((item) => item.type === "video")
                .map((item) => item.content),
            panaromaLinks: (files || [])
                ?.filter((item) => item.type === "pano")
                .map((item) => item.content),
        });
    }, [files]);

    const videoCode = (url) => {
        return url?.includes("watch")
            ? url?.split("v=")[1].split("&")[0]
            : url?.split("shorts/")[1];
    };
    return (
        <>
            <Carousel
                renderThumbs={(children) => {
                    // Flatten array
                    const childrenArray = Array.isArray(children)
                        ? children.reduce((acc, val) => acc.concat(val), [])
                        : children;

                    return childrenArray.map((child) => {
                        if (child.props?.videoId) {
                            return (
                                <img
                                    src={`https://img.youtube.com/vi/${child.props.videoId}/hqdefault.jpg`}
                                    alt=""
                                />
                            );
                        }

                        if (child.props?.imageSource) {
                            return <img src={child.props.imageSource} alt="" />;
                        }

                        // If child is image
                        if (child.props?.src) {
                            return <img src={child.props.src} alt="" />;
                        }
                    });
                }}
                centerMode
                // Depends on mobile or desktop
                centerSlidePercentage={window.screen.width > 768 ? 50 : 100}
                swipeable={false}
            >
                {(propertyGallery?.videoLinks).map((video, index) => {
                    return (
                        <YouTube
                            videoId={videoCode(video)}
                            className="rounded-xl h-full w-full"
                            containerClassName="embed embed-youtube"
                            onStateChange={(e) => checkElapsedTime(e)}
                            opts={{ width: "100%", height: "100%" }}
                        />
                    );
                })}

                {(propertyGallery?.panaromaLinks).map((pano, index) => {
                    return (
                        <ReactPannellum
                            id="1"
                            className="rounded-xl h-full w-full"
                            sceneId="firstScene"
                            imageSource={"/api/property/" + id + "/" + pano}
                            config={{ autoLoad: true }}
                            style={{
                                background: "#171717",
                            }}
                        />
                    );
                })}

                {(propertyGallery?.imageLinks).map((image, index) => {
                    return (
                        <img
                            className="rounded-xl px-4 object-cover h-full max-h-96"
                            src={"/api/property/" + id + "/" + image}
                            alt={`Image ${index + 1}`}
                        />
                    );
                })}
            </Carousel>
            {/* <div className="flex items-center justify-between gap-x-4">
                <div className="w-1/2">
                    <ReactPannellum
                        id="1"
                        className="rounded-xl md:h-full"
                        sceneId="firstScene"
                        imageSource={
                            panaromas
                                ? panaromas[0].url
                                : "/assets/images/panoram.jpg"
                        }
                        config={{ autoLoad: true }}
                        style={{
                            width: "100%",
                            height: "400px",
                            background: "#171717",
                        }}
                    />
                </div>
                <div className="youtubeContainer w-1/2">
                    <YouTube
                        videoId={videoCode(videoURL)}
                        className="rounded-xl md:h-full"
                        containerClassName="embed embed-youtube"
                        onStateChange={(e) => checkElapsedTime(e)}
                        opts={{ width: "100%", height: "400px" }}
                    />
                </div>
            </div>
            <div className="w-full mt-6 grid-cols-4 space-y-4 space-x-4 md:space-y-0 md:grid md:gap-2 md:grid-rows-1">
                {(images || ["", "", "", "", ""]).map((image, index) => {
                    return (
                        index < 3 && (
                            <div className="w-full rounded">
                                <img
                                    className="rounded-xl"
                                    src={
                                        image
                                            ? image
                                            : `/assets/images/Room${
                                                  index + 1
                                              }.jpg`
                                    }
                                    alt={`Room ${index + 1}`}
                                />
                            </div>
                        )
                    );
                })}
                {(images || ["", "", "", "", ""]).length - 3 > 0 && (
                    <div className="w-full rounded bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl text-neutral-600">
                            {`+ ${
                                (images || ["", "", "", "", ""]).length - 3
                            } ảnh khác`}
                        </span>
                    </div>
                )}
            </div> */}

            <div className="flex justify-between items-center">
                <div className="w-full rounded pt-2">
                    <div className="mt-4 flex justify-items-end">
                        <span className="text-sm flex py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline border-b border-t border-l border-neutral-900 rounded-l-lg justify-center items-center">
                            <svg
                                className="mr-2 fill-amber-400"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7,6A1,1,0,1,0,8,7,1,1,0,0,0,7,6Zm14.71,5.78L12.23,2.32A1,1,0,0,0,11.5,2h-6a1,1,0,0,0-.71.29L2.29,4.78A1,1,0,0,0,2,5.49v6a1.05,1.05,0,0,0,.29.71l9.49,9.5a1.05,1.05,0,0,0,.71.29,1,1,0,0,0,.71-.29l8.51-8.51a1,1,0,0,0,.29-.71A1.05,1.05,0,0,0,21.71,11.78Zm-9.22,7.81L4,11.09V5.9L5.9,4h5.18l8.5,8.49Z" />
                            </svg>
                            <span>{(price / 1000000000).toFixed(1)} tỷ</span>
                        </span>
                        <span className="text-sm flex py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline border border-neutral-900 justify-center items-center">
                            <svg
                                className="mr-2 fill-amber-400"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
                            </svg>
                            <span>
                                {area} m<sup>2</sup>
                            </span>
                        </span>
                        <span className="text-sm flex py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline border-b border-t border-r border-neutral-900 rounded-r-lg justify-center items-center">
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
                                        stroke: "#f59e0b",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "32px",
                                    }}
                                />
                                <path
                                    d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416"
                                    style={{
                                        fill: "none",
                                        stroke: "#f59e0b",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "32px",
                                    }}
                                />
                                <path
                                    d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8"
                                    style={{
                                        fill: "none",
                                        stroke: "#f59e0b",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "32px",
                                    }}
                                />
                                <path
                                    d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16"
                                    style={{
                                        fill: "none",
                                        stroke: "#f59e0b",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "32px",
                                    }}
                                />
                                <path
                                    d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16"
                                    style={{
                                        fill: "none",
                                        stroke: "#f59e0b",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "32px",
                                    }}
                                />
                            </svg>
                            <span>{bedNumb} phòng ngủ</span>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-x-6">
                    <div>
                        <ShareOptions title={title} />
                    </div>

                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            setModalReport(true);
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {" "}
                            <path
                                d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                            />{" "}
                            <path
                                d="M12 9V13"
                                stroke="currentColor"
                                stroke-linecap="round"
                            />{" "}
                            <path
                                d="M12 17.01L12.01 16.9989"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />{" "}
                        </svg>
                    </div>

                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                        >
                            {" "}
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}
