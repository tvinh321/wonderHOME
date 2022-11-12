import React, { useState } from "react";
import ReactPannellum from "react-pannellum";

export default function Gallery({ files, bedNumb, price, area }) {
    const { images, video } = files || {};
    return (
        <>
            <div className="grid-cols-4 space-y-4 md:space-y-0 md:grid md:gap-2 md:grid-rows-2">
                <div className="w-full col-span-2 row-span-2">
                    {/* https://www.npmjs.com/package/react-pannellum */}
                    <ReactPannellum
                        id="1"
                        className="rounded-xl md:h-full"
                        sceneId="firstScene"
                        imageSource="/images/panoram.jpg"
                        config={{ autoLoad: true }}
                    />
                </div>

                {images?.map((image, index) => {
                    return index < 3 ? (
                        <div className="w-full rounded">
                            <img
                                className="rounded-xl"
                                src={
                                    image
                                        ? image
                                        : "/assets/images/Room${index + 1}.jpg"
                                }
                                alt={`Room ${index + 1}`}
                            />
                        </div>
                    ) : images.length - 3 > 0 ? (
                        <div className="w-full rounded bg-gray-200 flex items-center justify-center">
                            <span className="text-2xl text-neutral-600">
                                {`+ ${files.images.length - 3} ảnh khác`}
                            </span>
                        </div>
                    ) : null;
                })}
            </div>

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
        </>
    );
}