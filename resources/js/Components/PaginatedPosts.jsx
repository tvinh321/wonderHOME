import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const PaginatedPosts = ({ postList }) => {
    const itemsPerPage = 3;

    function Items({ currentItems }) {
        return (
            <div className=" w-10/12 mx-auto flex items-center justify-center gap-x-14">
                {currentItems?.map((item) => (
                    <div class="w-1/3 rounded overflow-hidden shadow-lg">
                        <img
                            class="w-full h-auto"
                            src={item.img}
                            alt={item.title}
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-lg lg:text-xl mb-2 text-amber-500">
                                {item.title}
                            </div>
                            <div className="flex items-center gap-x-1 mb-2">
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
                                {item.rating === 5 ? (
                                    <svg
                                        style={{
                                            color: "rgb(255, 191, 36)",
                                        }}
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
                                ) : item.rating === 4.5 ? (
                                    <svg
                                        style={{
                                            color: "rgb(255, 191, 36)",
                                        }}
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
                            <p class="text-gray-700 text-base hidden md:line-clamp-4">
                                {item.description}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2 mb-2">
                            <a href={item.link}>
                                <button className="flex items-center justify-center w-full border-amber-500 border md:mb-0 mb-2 h-10 bg-white rounded text-amber-500  hover:bg-amber-500 hover:text-white font-semibold">
                                    <BookOpenIcon className="w-4 h-4 mr-2" />
                                    Đọc thêm
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = postList?.slice(itemOffset, endOffset);
    console.log(currentItems);

    const pageCount = Math.ceil(postList.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % postList.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            {postList.length > itemsPerPage && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Sau >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Trước"
                    renderOnZeroPageCount={null}
                    className="flex justify-center items-center gap-x-6 mt-10 text-amber-500 font-bold"
                />
            )}
        </>
    );
};

export default PaginatedPosts;
