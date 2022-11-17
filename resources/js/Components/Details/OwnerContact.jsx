import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

export default function OwnerContact() {
    const AccordionRender = () => {
        return (
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="w-full flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-4 text-md font-medium text-center text-neutral-900 border border-gray-300 rounded-l-lg ">
                                Đặt lịch xem nhà
                                <svg
                                    aria-hidden="true"
                                    className="m-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div
                            className="inline-flex rounded-md w-full my-6"
                            role="group"
                        >
                            <button
                                type="button"
                                className="inline-flex w-1/2 items-center py-2 px-4 font-medium text-neutral-900 bg-white rounded-l-lg border border-gray-200 hover:bg-amber-300 focus:bg-amber-400 focus:text-white"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="mr-2 w-4 h-4 fill-current"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Trực tiếp
                            </button>

                            <button
                                type="button"
                                className="inline-flex w-1/2 items-center py-2 px-4 font-medium text-neutral-900 bg-white rounded-r-lg border border-gray-200 hover:bg-amber-300 focus:bg-amber-400 focus:text-white"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="mr-2 w-4 h-4 fill-current"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Video call
                            </button>
                        </div>
                        <form>
                            <div className="flex bg-white justify-start md:justify-center rounded-lg overflow-x-scroll py-4 px-2 mb-6">
                                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-150	 cursor-pointer justify-center w-16">
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-150">
                                                {" "}
                                                Sun{" "}
                                            </p>
                                            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-150">
                                                {" "}
                                                11{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-150	 cursor-pointer justify-center w-16">
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-150">
                                                {" "}
                                                T2{" "}
                                            </p>
                                            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-150">
                                                {" "}
                                                12{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-150	 cursor-pointer justify-center w-16">
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-150">
                                                {" "}
                                                T3{" "}
                                            </p>
                                            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-150">
                                                {" "}
                                                13
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex group bg-purple-300 shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center">
                                    <span className="flex h-3 w-3 absolute -top-1 -right-1">
                                        <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                                    </span>
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-purple-900 text-sm">
                                                {" "}
                                                T4{" "}
                                            </p>
                                            <p className="text-purple-900  mt-3 font-bold">
                                                {" "}
                                                14{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-150 content-center	 cursor-pointer justify-center w-16">
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-150">
                                                {" "}
                                                T5{" "}
                                            </p>
                                            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-150">
                                                {" "}
                                                15{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-150	 cursor-pointer justify-center w-16">
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-150">
                                                {" "}
                                                T6{" "}
                                            </p>
                                            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-150">
                                                {" "}
                                                16{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-150	 cursor-pointer justify-center w-16">
                                    <div className="flex items-center px-4 py-4">
                                        <div className="text-center">
                                            <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-150">
                                                {" "}
                                                T7{" "}
                                            </p>
                                            <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-150">
                                                {" "}
                                                17{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="mb-4">
                                    <label
                                        for="full_name"
                                        className="block mb-1 font-medium text-neutral-900"
                                    >
                                        Họ tên
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        className="bg-gray-50 border text-neutral-900 text-sm rounded-lg focus:ring-amber-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        for="phone"
                                        className="block mb-1 font-medium text-neutral-900"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="bg-gray-50 border text-neutral-900 text-sm rounded-lg focus:ring-amber-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder=""
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        for="email"
                                        className="block mb-1 font-medium text-neutral-900"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-gray-50 border text-neutral-900 text-sm rounded-lg focus:ring-amber-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        for="message"
                                        className="block mb-1 font-medium text-neutral-900"
                                    >
                                        Ghi chú
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="bg-gray-50 block p-2.5 w-full text-sm text-neutral-900 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-blue-500"
                                        placeholder="Ghi chú..."
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-2 text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg w-full px-5 py-2.5 text-center"
                            >
                                Đặt lịch
                            </button>
                        </form>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="w-full flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-4 text-md font-medium text-center text-neutral-900 border border-gray-300 rounded-l-lg ">
                                Liên lạc
                                <svg
                                    aria-hidden="true"
                                    className="m-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        );
    };
    return (
        <div className="max-w-sm w-full h-auto md:pl-6">
            <div className="h-fit rounded-lg bg-white border border-gray-200 shadow-md py-8">
                <div className="flex items-center justify-center md:flex-col md:gap-0 flex-row gap-x-10 md:mb-0 mb-6">
                    <img
                        className="w-16 h-16 rounded-full"
                        src="/assets/images/Avatar Image.png"
                        alt="Avatar of Jonathan Reinink"
                    />
                    <div className="max-w-fit text-center mt-1">
                        <p className="text-neutral-500 text-sm">
                            Được đăng bởi
                        </p>
                        <h1 className="text-neutral-900 font-bold text-lg leading-none">
                            Nguyễn Thị Thuý Loan
                        </h1>
                    </div>
                </div>
                <div className="p-5">{AccordionRender()}</div>
            </div>

            <div className="mt-6 w-full rounded-lg bg-white border border-gray-200 shadow-md"></div>
        </div>
    );
}
