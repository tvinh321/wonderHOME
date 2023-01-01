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
                        <p className="text-gray-700 text-base line-clamp-2">
                            {post.description}
                        </p>
                    </div>

                    <div className="text-sm">
                        <p className="text-gray-900 leading-none font-semibold">
                            {post.author}
                        </p>
                        <p className="text-gray-600">{post.date}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
