import React from "react";

export default function PostCard({ post }) {
    return (
        <>
            <div
                className="max-w-sm w-full lg:max-w-full lg:flex mb-12"
                onClick={() => {
                    window.open(post.link, "_blank", "noopener,noreferrer");
                }}
            >
                <div
                    className="h-40 lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{ backgroundImage: `url(${post.img})` }}
                ></div>
                <div className="px-4 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-4 ">
                        <div className="text-gray-900 font-bold text-xl mb-2">
                            {post.title}
                        </div>
                        <div className="flex posts-center gap-x-1 mb-2">
                            <svg
                                style={{ color: "rgb(255, 191, 36)" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
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
                                style={{ color: "rgb(255, 191, 36)" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
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
                                style={{ color: "rgb(255, 191, 36)" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
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
                                style={{ color: "rgb(255, 191, 36)" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
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
                            {post.rating === 5 ? (
                                <svg
                                    style={{ color: "rgb(255, 191, 36)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
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
                            ) : post.rating === 4.5 ? (
                                <svg
                                    style={{ color: "rgb(255, 191, 36)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    className="bi bi-star-half"
                                    viewBox="0 0 16 16"
                                >
                                    {" "}
                                    <path
                                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                                        fill="#ffbf24"
                                    ></path>{" "}
                                </svg>
                            ) : null}
                        </div>
                        <p className="text-gray-700 text-base line-clamp-2">
                            {post.description}
                        </p>
                    </div>

                    <div className="text-sm">
                        <p className="text-gray-900 leading-none font-semibold mb-2">
                            {post.author}
                        </p>
                        <p className="text-gray-600">{post.date}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
