import React, { useEffect, useState } from "react";

const SERVICES = ["nha-dat-ban", "tim-chuyen-gia", "huong-dan"];
const NAVLINK_VIE = ["Nhà đất bán", "Tìm chuyên gia", "Hướng dẫn"];

export default function Header() {
    // Check if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // Check if the user is logged in
    useEffect(() => {
        localStorage.getItem("wonderHome-token")
            ? setIsLoggedIn(true)
            : setIsLoggedIn(false);
    }, []);

    return (
        <header>
            <nav>
                <div className="mx-auto max-w-7xl pt-4 px-2 md:px-4 lg:px-8">
                    <div className="relative flex h-16 items-center justify-center">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                        Icon when menu is closed.

                        Heroicon name: outline/bars-3

                        Menu open: "hidden", Menu closed: "block"
                        --> */}
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="hidden md:ml-6 md:block">
                                <div className="flex space-x-4">
                                    {NAVLINK_VIE.map((value, index) => {
                                        return (
                                            <a
                                                href={SERVICES[index]}
                                                className="text-neutral-900 hover:bg-neutral-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-150"
                                                key={index}
                                            >
                                                {value}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <a href="/">
                                <img
                                    className="inline-block w-[200px]"
                                    src="/assets/images/logo.png"
                                    alt="wonderHOME"
                                />
                            </a>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-4 md:pr-0">
                            <button
                                type="button"
                                className="hidden md:inline rounded-full p-1 mr-4 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-150"
                            >
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
                            </button>

                            <a href={isLoggedIn ? "/dang-tin" : "/dang-nhap"}>
                                <button className="hidden md:flex group mr-4 text-amber-300 border border-amber-300 hover:border-transparent hover:bg-amber-300 font-bold py-2 px-4 rounded items-center">
                                    <span className="text-sm group-hover:text-white mr-1 transition-all duration-150">
                                        Đăng tin
                                    </span>
                                    <svg
                                        className="transition-all duration-150 fill-amber-300 group-hover:fill-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z" />
                                        <path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z" />
                                        <rect
                                            height="2"
                                            width="8"
                                            x="7"
                                            y="9"
                                        />
                                        <polygon points="7,12 7,14 15,14 15,12 12,12" />
                                        <rect
                                            height="2"
                                            width="8"
                                            x="7"
                                            y="15"
                                        />
                                    </svg>
                                </button>
                            </a>
                            {isLoggedIn ? (
                                <div className="relative ml-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            id="user-menu-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            onClick={() => {
                                                setShowDropdown(!showDropdown);
                                            }}
                                        >
                                            <img
                                                className="h-12 w-12 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    {/* <!-- Dropdown menu, show/hide based on menu state. Entering: "transition ease-out duration-150" From: "transform opacity-0 scale-95" To: "transform opacity-100 scale-100" Leaving: "transition ease-in duration-75" From: "transform opacity-100 scale-100" To: "transform opacity-0 scale-95" --> */}
                                    <div
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        style={{
                                            display: `${
                                                showDropdown ? "block" : "none"
                                            }`,
                                        }}
                                    >
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            id="user-menu-item-0"
                                        >
                                            Cá nhân
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            id="user-menu-item-1"
                                        >
                                            Cài đặt
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            id="user-menu-item-2"
                                            onClick={() => {
                                                localStorage.removeItem("wonderHome-token");
                                                window.location.reload();
                                            }}
                                        >
                                            Thoát
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <a href="/dang-nhap">
                                    <button className="group mr-4 bg-amber-300 text-neutral-900 hover:bg-amber-300 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <span className="hidden md:inline text-sm group-hover:text-white mr-1 transition-all duration-150">
                                            Đăng ký / Đăng nhập
                                        </span>
                                        <svg
                                            className="fill-neutral-900 group-hover:fill-white transition-all duration-150"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <g>
                                                <path
                                                    fill="none"
                                                    d="M0 0h24v24H0z"
                                                />
                                                <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
                                            </g>
                                        </svg>
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {NAVLINK_VIE.map((item, index) => (
                            <a
                                href={SERVICES[index]}
                                className="text-neutral-900 hover:bg-neutral-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                key={index}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
