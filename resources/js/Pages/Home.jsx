import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../css/home.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Home() {
    const [tab, setTab] = useState(1);

    const [citiesList, setCitiesList] = useState();
    const [districtsList, setDistrictsList] = useState();
    const [wardsList, setWardsList] = useState();
    const [typesList, setTypesList] = useState();

    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [price, setPrice] = useState([]);
    const [area, setArea] = useState([]);
    const [type, setType] = useState([]);
    const [bedroom, setBedroom] = useState("");
    const [direction, setDirection] = useState();

    const [showFilters, setShowFilters] = useState(false);
    const [showPropertyTypes, setShowPropertyTypes] = useState(false);
    const [showLocation, setShowLocation] = useState(false);

    const propertyTypesRef = useRef();
    const locationRef = useRef();

    const [houseList, setHouseList] = React.useState();

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          // Add ref and handler to effect dependencies
          // It's worth noting that because the passed-in handler is a new ...
          // ... function on every render that will cause this effect ...
          // ... callback/cleanup to run every render. It's not a big deal ...
          // ... but to optimize you can wrap handler in useCallback before ...
          // ... passing it into this hook.
          [ref, handler]
        );
      }

    useOnClickOutside(propertyTypesRef, () => setShowPropertyTypes(false));
    useOnClickOutside(locationRef, () => setShowLocation(false));

    useEffect(() => {
        axios
            .get("/api/properties/highest-priority")
            .then((res) => {
                setHouseList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get("/api/cities")
            .then((res) => {
                setCitiesList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get("/api/types")
            .then((res) => {
                setTypesList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (city)
            axios
                .get("/api/districts/" + city)
                .then((res) => {
                    setDistrictsList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [city]);

    useEffect(() => {
        if (district)
            axios
                .get("/api/wards/" + district)
                .then((res) => {
                    setWardsList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [district]);

    const handleSearch = () => {
        let url = "/search?";

        if (title != "") {
            url += "title=" + title + "&";
        }

        if (city != "") {
            url += "city=" + city + "&";
        }

        if (district != "") {
            url += "district=" + district + "&";
        }

        if (ward != "") {
            url += "ward=" + ward + "&";
        }

        if (price[0] != undefined) {
            url += "price_min=" + price[0] + "&";
        }

        if (price[1] != undefined) {
            url += "price_max=" + price[1] + "&";
        }

        if (area[0] != undefined) {
            url += "area_min=" + area[0] + "&";
        }

        if (area[1] != undefined) {
            url += "area_max=" + area[1] + "&";
        }

        if (type.length != 0) {
            url += "type=" + type + "&";
        }

        if (bedroom != "") {
            url += "bedroom=" + bedroom + "&";
        }

        if (direction) {
            url += "direction=" + direction + "&";
        }

        window.location.href = url;
    };

    return (
        <div>
            <Header />

            <div>
                <div
                    className="mt-5 bg-center bg-cover bg-no-repeat body-div"
                    style={{
                        height: "32rem",
                        backgroundImage: "url('assets/images/Landing.jpg')",
                    }}
                >
                    <div className="h-full lg:w-3/5 justify-center items-center flex flex-col text-gray-100">
                        <div className="w-10/12">
                            <h1 className="font-bold text-3xl md:text-4xl leading-loose md:leading-relaxed">
                                LỰA CHỌN TỔ ẤM CỦA RIÊNG BẠN
                            </h1>
                            <h3 className="mt-10 leading-loose">
                                Những ngôi nhà trong mơ đang chờ bạn sở hữu! Ở
                                wonderHOME, nhà đẹp của bạn, thành công của
                                chúng tôi.
                            </h3>
                        </div>
                    </div>
                </div>

                {/* <!-- Top Screen Search Bar for Mobile --> */}
                <div className="fixed top-0 w-full bg-white py-2 md:hidden z-[1000]">
                    <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-row justify-center items-center bg-white rounded-full w-11/12 h-12">
                            <div className="flex flex-row justify-center items-center w-1/12">
                                <i className="fas fa-search text-gray-400"></i>
                            </div>
                            <div className="flex flex-row justify-center items-center w-11/12">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent focus:outline-none"
                                    placeholder="Tìm kiếm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Search Bar --> */}
                <div className="md:flex justify-center items-center hidden">
                    <div className="z-50 absolute p-5 w-11/12 md:w-4/5 shadow-lg rounded-xl bg-white">
                        <div className="relative" id="search-bar"></div>

                        {/* First Script */}
                        <div className="flex items-center justify-between gap-5">
                            <form className="w-11/12 my-0">
                                <div className="flex">
                                    <label
                                        htmlFor="search-dropdown"
                                        className="text-sm font-medium text-neutral-500 sr-only"
                                    >
                                        Loại nhà
                                    </label>
                                    <button
                                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                                        type="button"
                                        onClick={() =>
                                            setShowPropertyTypes(
                                                (prev) => !prev
                                            )
                                        }
                                    >
                                        Loại nhà đất{" "}
                                        <svg
                                            aria-hidden="true"
                                            className="ml-1 w-4 h-4"
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
                                    </button>
                                    {showPropertyTypes && (
                                        <div className="absolute top-20 z-50 w-44 bg-white rounded divide-gray-100 shadow" ref={propertyTypesRef}>
                                            <ul
                                                className="py-1 text-sm text-neutral-900"
                                                aria-labelledby="dropdown-button"
                                            >
                                                {typesList ? (
                                                    typesList.map(
                                                        (typeItem, index) => {
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
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                if (
                                                                                    e
                                                                                        .target
                                                                                        .checked
                                                                                ) {
                                                                                    setType(
                                                                                        [
                                                                                            ...type,
                                                                                            typeItem.name,
                                                                                        ]
                                                                                    );
                                                                                } else {
                                                                                    setType(
                                                                                        type.filter(
                                                                                            (
                                                                                                item
                                                                                            ) =>
                                                                                                item !=
                                                                                                typeItem.name
                                                                                        )
                                                                                    );
                                                                                }
                                                                            }}
                                                                        />
                                                                        <label
                                                                            htmlFor="house-checkbox"
                                                                            className="py-3 ml-2 w-full text-sm font-medium text-gray-900"
                                                                        >
                                                                            {
                                                                                typeItem.name
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                            );
                                                        }
                                                    )
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
                                    )}

                                    <div className="relative w-full">
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            type="search"
                                            id="search-dropdown"
                                            className="block p-4 pl-10 w-full z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-50 border-l-2 border border-neutral-300"
                                            placeholder="Tìm nhà cho bạn..."
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="text-white absolute right-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                                        >
                                            Tìm
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <button className="flex items-center justify-center gap-2 w-fit text-right">
                                <svg
                                    style={{ color: "rgb(255, 191, 36)" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-filter"
                                    viewBox="0 0 16 16"
                                >
                                    {" "}
                                    <path
                                        d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                        fill="#ffbf24"
                                    ></path>{" "}
                                </svg>
                                <span
                                    onClick={() =>
                                        setShowFilters((prev) => !prev)
                                    }
                                    className="text-amber-500 underline w-12 text-sm"
                                >
                                    Bộ lọc
                                </span>
                            </button>
                        </div>

                        {showFilters && (
                            <div id="filterFields">
                                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                                    <div
                                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                        onClick={() =>
                                            setShowLocation((prev) => !prev)
                                        }
                                    >
                                        Địa điểm
                                    </div>
                                    {showLocation && (
                                        // Pick 1 city and 1 district and 1 ward
                                        <div className="absolute top-[140px] z-50 w-64 bg-white rounded divide-gray-100 shadow" ref={locationRef}>
                                            <select
                                                onChange={(e) => {
                                                    setCity(e.target.value);
                                                    setDistrict("");
                                                    setWard("");
                                                }}
                                                className="w-full p-2 text-sm text-gray-900 bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                            >
                                                <option value="">
                                                    Tỉnh/Thành phố
                                                </option>
                                                {citiesList ? (
                                                    citiesList.map(
                                                        (cityItem, index) => {
                                                            return (
                                                                <option
                                                                    value={
                                                                        cityItem.id
                                                                    }
                                                                >
                                                                    {
                                                                        cityItem.name
                                                                    }
                                                                </option>
                                                            );
                                                        }
                                                    )
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
                                            </select>
                                            <select
                                                onChange={(e) => {
                                                    setDistrict(e.target.value);
                                                    setWard("");
                                                }}
                                                className="w-full p-2 text-sm text-gray-900 bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                            >
                                                <option value="">
                                                    Quận/Huyện
                                                </option>
                                                {districtsList ? (
                                                    districtsList.map(
                                                        (
                                                            districtItem,
                                                            index
                                                        ) => {
                                                            return (
                                                                <option
                                                                    value={
                                                                        districtItem.id
                                                                    }
                                                                >
                                                                    {
                                                                        districtItem.name
                                                                    }
                                                                </option>
                                                            );
                                                        }
                                                    )
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
                                            </select>
                                            <select
                                                onChange={(e) => {
                                                    setWard(e.target.value);
                                                }}
                                                className="w-full p-2 text-sm text-gray-900 bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                            >
                                                <option value="">
                                                    Phường/Xã
                                                </option>
                                                {wardsList ? (
                                                    wardsList.map(
                                                        (wardItem, index) => {
                                                            return (
                                                                <option
                                                                    value={
                                                                        wardItem.id
                                                                    }
                                                                >
                                                                    {
                                                                        wardItem.name
                                                                    }
                                                                </option>
                                                            );
                                                        }
                                                    )
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
                                            </select>
                                        </div>
                                    )}

                                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                        <option value="" selected disabled>
                                            Mức giá
                                        </option>
                                        <option value="1">Dưới 1 tỷ</option>
                                        <option value="2">1 tỷ - 2 tỷ</option>
                                        <option value="3">2 tỷ - 3 tỷ</option>
                                        <option value="4">3 tỷ - 5 tỷ</option>
                                        <option value="5">5 tỷ - 7 tỷ</option>
                                        <option value="6">7 tỷ - 10 tỷ</option>
                                        <option value="7">Trên 10 tỷ</option>
                                    </select>

                                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                        <option value="" selected disabled>
                                            Diện tích
                                        </option>
                                        <option value="1">Dưới 30m2</option>
                                        <option value="2">30m2 - 50m2</option>
                                        <option value="3">50m2 - 80m2</option>
                                        <option value="4">80m2 - 100m2</option>
                                        <option value="5">100m2 - 150m2</option>
                                        <option value="6">Trên 150m2</option>
                                    </select>

                                    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                        <option value="">Số phòng ngủ</option>
                                        <option value="1">1 phòng</option>
                                        <option value="2">2 phòng</option>
                                        <option value="3">3 phòng</option>
                                        <option value="4">4 phòng</option>
                                        <option value="5">5 phòng</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* <!-- Grid 3 Content --> */}
                <div className="md:relative flex justify-center items-center w-10/12 lg:w-8/12 mx-auto mt-32 md:h-40 lg:h-44 4xl:h-80">
                    <div className="md:absolute md:-bottom-48 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150 cursor-pointer">
                            <img
                                className="w-full h-44 object-cover"
                                src="/assets/images/buy-a-home.jpg"
                                alt="Buy a home"
                            />
                            <div className="p-6 pb-12">
                                <div className="font-bold text-xl mb-2">
                                    Mua Nhà
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Không chỉ là ngôi nhà, chúng tôi giúp bạn
                                    tìm được tổ ấm hoàn hảo cho bạn và gia đình.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150 cursor-pointer">
                            <img
                                className="w-full h-44 object-cover"
                                src="/assets/images/sell-a-home.jpg"
                                alt="Sell your home"
                            />
                            <div className="p-6 pb-12">
                                <div className="font-bold text-xl mb-2">
                                    Bán Nhà
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Chúng tôi kết nối bạn với nhiều khách hàng
                                    hơn và điều hướng việc bán nhà của bạn đến
                                    thành công.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150 cursor-pointer">
                            <img
                                className="w-full h-44 object-cover"
                                src="/assets/images/house-agent.jpg"
                                alt="Find an expert"
                            />
                            <div className="p-6 pb-12">
                                <div className="font-bold text-xl mb-2">
                                    Tìm Chuyên Gia
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Chúng tôi giúp bạn kết nối với những chuyên
                                    gia để đáp ứng yêu cầu của bạn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Advanced House Search --> */}
                <div className="lg:px-48 px-8 lg:pt-72 lg:pb-36 md:mt-64 mb-0 lg:my-0 my-24 py-24 bg-gray-100 w-full">
                    {/* <!-- A line w-32 with gradient from amber to purple --> */}
                    <div className="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                    <h1 className="font-bold text-3xl mt-4">
                        Bất động sản dành cho bạn
                    </h1>

                    {/* <!-- House Selection with Grids 3 columns, 2 rows --> */}
                    <div className="mx-auto mt-16">
                        <div id="priority-house"></div>

                        {/* Second Script */}
                        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8">
                            {houseList ? (
                                houseList.map((house, index) => {
                                    return (
                                        <a
                                            href={`/thong-tin/${house.id}`}
                                            key={index}
                                        >
                                            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-150 border border-gray-300 relative h-[380px] bg-white">
                                                <div className="h-48">
                                                    <img
                                                        className="object-cover h-full w-full"
                                                        src={`assets/images/Room${
                                                            index + 1
                                                        }.jpg`}
                                                        alt="Sunset in the mountains"
                                                    />
                                                </div>
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-lg leading-relaxed mt-2">
                                                        {house.title}
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        {(
                                                            house.price /
                                                            1000000000
                                                        ).toFixed(1)}{" "}
                                                        tỷ - {house.area} m
                                                        <sup>2</sup>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-3 h-10 absolute bottom-0 w-full">
                                                    <div className="border border-gray-200 flex justify-center items-center">
                                                        <svg
                                                            className="mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <title>
                                                                ionicons-v5-g
                                                            </title>
                                                            <path
                                                                d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z"
                                                                style={{
                                                                    fill: "none",
                                                                    stroke: "#000",
                                                                    strokeLinecap:
                                                                        "round",
                                                                    strokeLinejoin:
                                                                        "round",
                                                                    strokeWidth:
                                                                        "32px",
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
                                                                    strokeWidth:
                                                                        "32px",
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
                                                                    strokeWidth:
                                                                        "32px",
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
                                                                    strokeWidth:
                                                                        "32px",
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
                                                                    strokeWidth:
                                                                        "32px",
                                                                }}
                                                            />
                                                        </svg>
                                                        <p className="font-bold">
                                                            {
                                                                house.num_of_bedrooms
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="border border-gray-200 flex justify-center items-center">
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
                                                        <p className="font-bold">
                                                            {
                                                                house.num_of_toilets
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="border border-gray-200 flex justify-center items-center">
                                                        <svg
                                                            className="mr-2"
                                                            width="16"
                                                            height="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z" />
                                                        </svg>
                                                        <p className="font-bold">
                                                            4
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })
                            ) : (
                                // Loading Spinner
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
                                    <p className="text-gray-900">Đang tải...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* <!-- Giới thiệu --> */}
                <div className="flex flex-col lg:flex-row lg:h-[700px]">
                    <div className="w-full h-[400px] md:h-auto lg:w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src="/assets/images/family.jpg"
                            alt="Sunset in the mountains"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-12 flex py-24 flex-col">
                        <div className="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700 pt-1"></div>
                        <h1 className="font-bold mt-4 text-2xl">
                            wonder<span className="text-amber-400">HOME</span>
                        </h1>
                        <h1 className="font-bold mt-4 text-2xl leading-relaxed">
                            Những ngôi nhà chất lượng cho khách hàng
                        </h1>
                        <div
                            id="aboutTabContainer"
                            className="flex items-center justify-center max-w-screen-sm mx-auto"
                        >
                            <div className="container mx-auto flex flex-col justify-center items-stretch py-2 sm:py-8">
                                <div className="flex justify-start -space-x-px z-10">
                                    <a
                                        onClick={() => setTab(1)}
                                        className={`${
                                            tab === 1
                                                ? "bg-amber-500 text-white"
                                                : " focus:outline-none focus:shadow-outline text-neutral-900"
                                        } block align-middle px-6 py-4 text-sm font-semibold leading-none rounded-tl-lg border border-b-0 border-gray-400 outline-none shadow-none transition-all duration-300 cursor-pointer`}
                                    >
                                        Giới thiệu
                                    </a>
                                    <a
                                        onClick={() => setTab(2)}
                                        className={`${
                                            tab === 2
                                                ? "bg-amber-500 text-white"
                                                : " focus:outline-none focus:shadow-outline text-neutral-900"
                                        } block align-middle px-6 py-4 text-sm font-semibold leading-none border border-b-0 border-gray-400 outline-none shadow-none transition-all duration-300 cursor-pointer`}
                                    >
                                        Nhiệm vụ
                                    </a>
                                    <a
                                        onClick={() => setTab(3)}
                                        className={`${
                                            tab === 3
                                                ? "bg-amber-500 text-white"
                                                : " focus:outline-none focus:shadow-outline text-neutral-900"
                                        } block align-middle px-6 py-4 text-sm font-semibold leading-none rounded-tr-lg border border-b-0 border-gray-400 outline-none shadow-none transition-all duration-300 cursor-pointer`}
                                    >
                                        Cam kết
                                    </a>
                                </div>

                                <div className="transition-all duration-300">
                                    <div
                                        className={`${
                                            tab === 1 ? "block" : "hidden"
                                        } z-0 -mt-px px-6 py-8 border border-neutral-400 rounded-md rounded-tl-none bg-gradient-to-b from-white via-gray-100 to-gray-200 transition-all duration-300`}
                                    >
                                        <h1 className="text-amber-500 text-xl font-bold leading-tighter">
                                            Về chúng tôi - wonderHOME
                                        </h1>
                                        <p className="mt-4 text-sm leading-relaxed">
                                            wonderHOME là công ty Dịch vụ bất
                                            động sản hoạt động trên nền tảng
                                            công nghệ hiện đại giúp người dùng
                                            trải nghiệm giao dịch bất động sản
                                            tốt nhất. wonderHOME chuẩn hóa quy
                                            trình giao dịch và cung cấp giải
                                            pháp tối ưu giúp cho giao dịch mua
                                            bán nhà đất và bất động sản an toàn,
                                            hiệu quả và tiết kiệm thời gian.
                                        </p>
                                    </div>
                                    <div
                                        className={`${
                                            tab === 2 ? "block" : "hidden"
                                        } z-0 -mt-px px-6 py-8 border border-neutral-400 rounded-md rounded-tl-none bg-gradient-to-b from-white via-gray-100 to-gray-200 transition-all duration-300`}
                                    >
                                        <h1 className="text-amber-500 text-xl font-bold leading-tighter">
                                            Mang đến bất động sản "thật" cho bạn
                                        </h1>
                                        <p className="mt-4 text-sm leading-relaxed">
                                            Lorem ipsum dolor sit maiores ipsum
                                            illum enim repudiandae quaerat
                                            tenetur sunt dolore, voluptatem
                                            blanditiis quo doloremque commodi
                                            illo? Fugiat reiciendis aliquam
                                            omnis aperiam beatae? Officia, quas
                                            consequuntur numquam laboriosam
                                            dolorem totam est, vitae at nam iste
                                            autem inventore eveniet amet ex
                                            minima in asperiores debitis
                                            repudiandae eligendi. Sint esse
                                            dolorem est aperiam. Delectus!
                                        </p>
                                    </div>
                                    <div
                                        className={`${
                                            tab === 3 ? "block" : "hidden"
                                        } z-0 -mt-px px-6 py-8 border border-neutral-400 rounded-md rounded-tl-none bg-gradient-to-b from-white via-gray-100 to-gray-200 transition-all duration-300`}
                                    >
                                        <h1 className="text-amber-500 text-xl font-bold leading-tighter">
                                            Đảm bảo an toàn cho bạn
                                        </h1>
                                        <p className="mt-4 text-sm leading-relaxed">
                                            Lorem ipsum dolor sit amet consectet
                                            officia maiores ipsum illum enim
                                            repudiandae quaerat tenetur sunt
                                            dolore, voluptatem blanditiis quo
                                            doloremque commodi illo? Fugiat
                                            reiciendis aliquam omnis aperiam
                                            beatae? Officia, quas consequuntur
                                            numquam laboriosam dolorem totam
                                            est, vitae at nam iste autem
                                            inventore eveniet amet ex minima in
                                            asperiores debitis repudiandae
                                            eligendi. Sint esse dolorem est
                                            aperiam. Delectus!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black flex flex-col justify-center items-center py-16">
                    <div className="px-8 xl:w-1/3 flex flex-col justify-center items-center">
                        <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-black"></div>
                        <h1
                            className="font-bold mt-4 text-gray-100 text-center"
                            style={{ fontSize: "28px" }}
                        >
                            Cần hỗ trợ trong việc mua bán nhà ?
                        </h1>
                        <p className="mt-4 leading-relaxed text-gray-400 font-light text-center">
                            wonderHOME có đội ngũ những chuyên gia trong lĩnh
                            vực sẵn sàng hỗ trợ bạn trong tư vấn, mua bán và
                            những vấn đề pháp lý. Hãy liên hệ ngay với chúng
                            tôi!
                        </p>
                        <button className="flex items-center justify-center mt-8 bg-amber-400 px-8 py-4 text-neutral-900 rounded-tr-xl w-fit hover:bg-amber-300 transition-all duration-150">
                            <p className="font-bold text-sm">Tìm hiểu</p>
                        </button>
                    </div>
                </div>

                {/* <!-- 3 grid --> */}
                <div className="flex flex-col justify-center items-center w-10/12 md:w-4/5 mx-auto mt-16 mb-24">
                    <div className="w-64 h-1 bg-gradient-to-r from-amber-300 to-purple-700 mb-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-12 xs:gap-5 w-full mt-24">
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                            <div className="h-56">
                                <p className="text-lg p-4 h-1/2 font-semibold text-center align-middle">
                                    "Dễ xài"
                                </p>
                                <div className="flex justify-center items-center gap-x-1">
                                    <svg
                                        style={{ color: "rgb(255, 191, 36)" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                </div>
                            </div>

                            <div className="px-4 py-8 bg-neutral-100">
                                {/* <!-- Avatar and name --> */}
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="/assets/images/Avatar Image.png"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                    <div className="text-sm">
                                        <p className="text-neutral-900 leading-none">
                                            Nguyễn Thị Thuý Loan
                                        </p>
                                        <p className="text-gray-600">
                                            12/1/2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                            <div className="h-56">
                                <p className="text-lg p-4 h-1/2 font-semibold text-center align-middle">
                                    "Đội ngũ hỗ trợ rất chuyên nghiệp"
                                </p>
                                <div className="flex justify-center items-center gap-x-1">
                                    <svg
                                        style={{ color: "rgb(255, 191, 36)" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                </div>
                            </div>
                            <div className="px-4 py-8 bg-black">
                                {/* <!-- Avatar and name --> */}
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="/assets/images/Avatar Image.png"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                    <div className="text-sm">
                                        <p className="text-gray-100 leading-none">
                                            Nguyễn Thị Thuý Loan
                                        </p>
                                        <p className="text-gray-400">
                                            12/1/2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                            <div className="h-56">
                                <p className="text-lg p-4 h-1/2 font-semibold text-center align-middle">
                                    "Giúp tôi chọn được ngôi nhà phù hợp"
                                </p>
                                <div className="flex justify-center items-center gap-x-1">
                                    <svg
                                        style={{ color: "rgb(255, 191, 36)" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                        width="16"
                                        height="16"
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
                                </div>
                            </div>
                            <div className="px-4 py-8 bg-white">
                                {/* <!-- Avatar and name --> */}
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src="/assets/images/Avatar Image.png"
                                        alt="Avatar of Jonathan Reinink"
                                    />
                                    <div className="text-sm">
                                        <p className="text-neutral-900 leading-none">
                                            Nguyễn Thị Thuý Loan
                                        </p>
                                        <p className="text-gray-600">
                                            12/1/2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
