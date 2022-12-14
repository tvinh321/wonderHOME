import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Room1 from "../../../public/assets/images/Room1.jpg";
import Room2 from "../../../public/assets/images/Room2.jpg";
import Room3 from "../../../public/assets/images/Room3.jpg";
import Room4 from "../../../public/assets/images/Room4.jpg";
import Room5 from "../../../public/assets/images/Room5.jpg";
import Room6 from "../../../public/assets/images/Room6.jpg";

import Ad from "../../../public/images/Ad.jpg";
import SearchAndFilter from "../Components/SearchAndFilter";

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemList, setItemList] = useState([]);

    const [citiesList, setCitiesList] = useState();
    const [districtsList, setDistrictsList] = useState();
    const [wardsList, setWardsList] = useState();
    const [typesList, setTypesList] = useState();

    const [showPropertyTypes, setShowPropertyTypes] = useState(false);
    const [showLocation, setShowLocation] = useState(false);

    const propertyTypesRef = useRef();
    const locationRef = useRef();

    const searchParams = new URLSearchParams(window.location.search);
    const [title, setTitle] = useState(searchParams.get("title"));
    const [ward, setWard] = useState(searchParams.get("ward"));
    const [district, setDistrict] = useState(searchParams.get("district"));
    const [city, setCity] = useState(searchParams.get("city"));
    const [price, setPrice] = useState(
        searchParams.get("price") ? searchParams.get("price").split("-") : null
    );
    const [area, setArea] = useState(
        searchParams.get("area") ? searchParams.get("area").split("-") : null
    );
    const [type, setType] = useState(
        searchParams.get("type") ? searchParams.get("type").split(",") : null
    );
    const [bedroom, setBedroom] = useState(searchParams.get("bedroom"));

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoriteList = [];
        for (let i = 0; i < itemList.length; i++) {
            favoriteList.push(false);
        }
        setFavorites(favoriteList);
    }, []);

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
        setLoading(true);

        let postForm = {
            title: title,
            price: price,
            area: area,
            type: type,
            bedroom: bedroom,
        }

        if (ward) {
            postForm.ward = ward;
        } else if (district) {
            postForm.district = district;
        } else if (city) {
            postForm.city = city;
        }

        axios.post('/api/properties', postForm)
            .then(response => {
                setSearchResults(response.data.properties);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    const handleSearchItem = () => {
        setSearchResults(itemList.slice(0, 5));
    };

    return (
        <>
            <Header />
            <SearchAndFilter
                searchType={"bất động sản"}
                handleSearch={handleSearchItem}
            />

            <div className="mt-10 mx-36 mb-16 flex justify-between gap-x-10">
                <div className="w-3/4 h-full">
                    <p className="font-semibold mb-10">
                        {searchResults
                            ? ` Hiện có ${searchResults.length} bất động sản được lọc`
                            : "Danh sách bất động sản"}
                    </p>
                    {(searchResults || itemList).map((item, index) => {
                        return (
                            <div className="mb-10 shadow-lg" key={index}>
                                <div className="flex items-center gap-x-4">
                                    <div>
                                        <a href={`/thong-tin/${item.id}`}>
                                            <img
                                                src={
                                                    index % 6 === 0
                                                        ? Room1
                                                        : index % 6 === 1
                                                        ? Room2
                                                        : index % 6 === 2
                                                        ? Room3
                                                        : index % 6 === 3
                                                        ? Room4
                                                        : index % 6 === 4
                                                        ? Room5
                                                        : Room6
                                                }
                                                alt=""
                                                className="w-48 h-36 object-cover"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-full pr-4">
                                        <a href={`/thong-tin/${item.id}`}>
                                            <p className="text-md text-blue-900 font-semibold mb-1 line-clamp-2">
                                                {item.title}
                                            </p>
                                        </a>
                                        <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                                            {item.location}
                                        </p>
                                        <div className="mb-2 text-sm font-semibold text-neutral-900 flex items-center">
                                            <p>
                                                {(
                                                    item.price / 1000000000
                                                ).toFixed(1)}{" "}
                                                tỷ{" "}
                                            </p>
                                            <p className="mx-2">|</p>
                                            <p>
                                                {item.area} m<sup>2</sup>
                                            </p>
                                        </div>

                                        <p className="mb-2 text-sm line-clamp-2">
                                            {item.description}
                                        </p>

                                        <div className="mb-2 text-xs text-neutral-500 flex items-center justify-between w-full">
                                            <p>
                                                {item.created_at.split(" ")[0]}
                                            </p>

                                            <div
                                                onClick={() => {
                                                    let newFav = [...favorites];
                                                    newFav[index] =
                                                        !newFav[index];
                                                    setFavorites(newFav);
                                                }}
                                            >
                                                {favorites[index] ? (
                                                    <svg
                                                        style={{
                                                            color: "red",
                                                        }}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        class="bi bi-heart-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        {" "}
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                            fill="red"
                                                        ></path>{" "}
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        fill={"currentColor"}
                                                        className="bi bi-heart"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        {" "}
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-1/4">
                    <img src={Ad} alt="" className="" />
                </div>
            </div>

            <Footer />
        </>
    );
}
