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
                            <div className="w-full flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-4 text-md font-medium text-center text-neutral-900 border border-gray-300">
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

                            <div className="mb-4">
                                <p className="block mb-2 font-medium text-neutral-900">Thời gian</p>
                                <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="grid-state"
                            >
                                <option>9h-10h</option>
                                <option>10h-11h</option>
                                <option>11h-12h</option>
                                <option>12h-13h</option>
                                <option>13h-14h</option>
                                <option>14h-15h</option>
                                <option>15h-16h</option>
                                <option>16h-17h</option>
                            </select>
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
                                className="mt-2 text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg w-full px-5 py-2.5 text-center mb-6"
                            >
                                Đặt lịch
                            </button>
                        </form>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="w-full flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-4 text-md font-medium text-center text-neutral-900 border border-gray-300">
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
                    <AccordionItemPanel>
                        <div className="flex items-center justify-center gap-x-10 my-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                width="20"
                                height="20"
                            >
                                <rect width="20" height="20" fill="none" />
                                <path d="M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z" />
                                <path d="M157.4,47.7a72.6,72.6,0,0,1,50.9,50.9,8,8,0,0,0,7.7,6,7.6,7.6,0,0,0,2.1-.3,7.9,7.9,0,0,0,5.6-9.8,88,88,0,0,0-62.2-62.2,8,8,0,1,0-4.1,15.4Z" />
                                <path d="M149.1,78.6a40.4,40.4,0,0,1,28.3,28.3,7.9,7.9,0,0,0,7.7,6,6.4,6.4,0,0,0,2-.3,7.9,7.9,0,0,0,5.7-9.8,55.8,55.8,0,0,0-39.6-39.6,8,8,0,1,0-4.1,15.4Z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-messenger"
                                viewBox="0 0 16 16"
                            >
                                {" "}
                                <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />{" "}
                            </svg>

                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                            >
                                <title>Zalo</title>
                                <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
                            </svg>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="w-full flex-shrink-0 z-10 inline-flex items-center justify-between py-2.5 px-4 text-md font-medium text-center text-neutral-900 border border-gray-300">
                                Yêu cầu liên hệ
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
                        <form className="border-gray-500 p-6">
                            <div className="mb-6">
                                <div className="mb-4">
                                    <label
                                        for="name"
                                        className="block mb-1 font-medium text-neutral-900"
                                    >
                                        Tên
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
                                        for="time"
                                        className="block mb-1 font-medium text-neutral-900"
                                    >
                                        Khoảng thời gian liên lạc
                                    </label>
                                    <input
                                        type="text"
                                        id="time"
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
                                Gửi yêu cầu
                            </button>
                        </form>
                    </AccordionItemPanel>
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
