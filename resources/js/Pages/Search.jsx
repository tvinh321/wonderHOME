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
    const [searchResults, setSearchResults] = useState(undefined);
    const [loading, setLoading] = useState(true);

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

    // useEffect(() => {
    //     setLoading(true);

    //     let postForm = {
    //         title: title,
    //         price: price,
    //         area: area,
    //         type: type,
    //         bedroom: bedroom,
    //     }

    //     if (ward) {
    //         postForm.ward = ward;
    //     } else if (district) {
    //         postForm.district = district;
    //     } else if (city) {
    //         postForm.city = city;
    //     }

    //     axios.post('/api/properties', postForm)
    //         .then(response => {
    //             setSearchResults(response.data.properties);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setLoading(false);
    //         })
    // }, []);

    const itemList = [
        {
            id: "69d402d6-d23e-4f38-893b-c7b38911e147",
            title: "Bán căn hộ 2.2 tỷ 150m2",
            created_at: "2022-11-12 04:07:19",
            location:
                "234 Nguyễn Trãi, Xã An Đạo, Huyện Phù Ninh, Tỉnh Phú Thọ",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 5,
            direction: 3,
            price: 2220000000,
            priority: 4,
            facade: "49",
            area: "150",
            expire_date: "2023-01-29 04:07:19",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "59d864d6-5774-4ee3-8789-254126daf959",
            title: "Bán căn hộ 1.4 tỷ 140m2",
            created_at: "2022-11-12 04:07:21",
            location:
                "19 Nguyễn Văn Linh, Thị trấn Sóc Sơn, Huyện Hòn Đất, Tỉnh Kiên Giang",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 5,
            direction: 14,
            price: 1400000000,
            priority: 5,
            facade: "37",
            area: "140",
            expire_date: "2023-01-04 04:07:21",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "15e7aa5b-0784-4cc4-b470-801555e4bdc9",
            title: "Bán nhà 2.0 tỷ 110m2",
            created_at: "2022-11-12 04:07:23",
            location:
                "65 Nguyễn Văn Cừ, Xã Tân Hội Trung, Huyện Cao Lãnh, Tỉnh Đồng Tháp",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 3,
            direction: 7,
            price: 2000000000,
            priority: 3,
            facade: "20",
            area: "110",
            expire_date: "2023-01-17 04:07:23",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "663407a8-d2bb-4013-886f-4cd6be7d9c48",
            title: "Bán căn hộ chung cư 2.0 tỷ 60m2",
            created_at: "2022-11-12 04:07:24",
            location:
                "98 Nguyễn Văn Huyên, Xã Phấn Mễ, Huyện Phú Lương, Tỉnh Thái Nguyên",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 4,
            direction: 8,
            price: 2000000000,
            priority: 4,
            facade: "97",
            area: "60",
            expire_date: "2023-01-17 04:07:24",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "c5e3cbc7-136a-4ff3-a3a4-1fbc00c3cd90",
            title: "Bán căn hộ 2.0 tỷ 200m2",
            created_at: "2022-11-12 04:07:26",
            location:
                "234 Nguyễn Trãi, Phường Kỳ Phương, Thị xã Kỳ Anh, Tỉnh Hà Tĩnh",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 5,
            direction: 1,
            price: 2000000000,
            priority: 3,
            facade: "65",
            area: "200",
            expire_date: "2023-02-20 04:07:26",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "b3e368e6-d2d9-4be6-8f63-db57fdef99eb",
            title: "Bán nhà 2.0 tỷ 190m2",
            created_at: "2022-11-12 04:07:28",
            location:
                "19 Nguyễn Văn Linh, Xã Tân Minh, Huyện Tràng Định, Tỉnh Lạng Sơn",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 5,
            direction: 16,
            price: 2000000000,
            priority: 4,
            facade: "82",
            area: "190",
            expire_date: "2023-01-28 04:07:28",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "43954059-251a-4bcf-9dd5-eb4c55fdd02d",
            title: "Bán nhà 2.0 tỷ 140m2",
            created_at: "2022-11-12 04:07:30",
            location:
                "65 Nguyễn Văn Cừ, Xã Kim Thượng, Huyện Tân Sơn, Tỉnh Phú Thọ",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 2,
            direction: 10,
            price: 2000000000,
            priority: 5,
            facade: "44",
            area: "140",
            expire_date: "2023-01-03 04:07:30",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "f392f229-043c-4fc5-8caf-ba6452c2e8b8",
            title: "Bán căn hộ 4.0 tỷ 50m2",
            created_at: "2022-11-12 04:07:32",
            location:
                "3 Nguyễn Văn Linh, Xã Trung Tú, Huyện Ứng Hòa, Thành phố Hà Nội",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 1,
            direction: 5,
            price: 4000000000,
            priority: 1,
            facade: "97",
            area: "50",
            expire_date: "2023-01-10 04:07:32",
            juridical_status: -1,
            furniture: 1,
        },
        {
            id: "4c5120b9-ee86-446a-ab42-9c03e4a10a20",
            title: "Bán căn hộ chung cư 2.2 tỷ 140m2",
            created_at: "2022-11-12 04:07:34",
            location:
                "234 Nguyễn Trãi, Phường 12, Thành phố Vũng Tàu, Tỉnh Bà Rịa - Vũng Tàu",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 4,
            direction: 7,
            price: 2220000000,
            priority: 2,
            facade: "58",
            area: "140",
            expire_date: "2023-01-09 04:07:34",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "f0fbebc3-9554-49d9-9f99-4c0d5404813c",
            title: "Bán nhà 2.0 tỷ 170m2",
            created_at: "2022-11-12 04:07:35",
            location:
                "12 Nguyễn Trãi, Phường Phổ Quang, Thị xã Đức Phổ, Tỉnh Quảng Ngãi",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 2,
            direction: 15,
            price: 2000000000,
            priority: 2,
            facade: "74",
            area: "170",
            expire_date: "2023-02-04 04:07:35",
            juridical_status: -1,
            furniture: 1,
        },
        {
            id: "2a5af0dd-d688-4421-9a27-6971612a0423",
            title: "Bán căn hộ chung cư 4.0 tỷ 110m2",
            created_at: "2022-11-12 04:07:37",
            location:
                "3 Nguyễn Văn Linh, Phường 11, Quận 11, Thành phố Hồ Chí Minh",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 2,
            direction: 10,
            price: 4000000000,
            priority: 3,
            facade: "86",
            area: "110",
            expire_date: "2023-01-15 04:07:37",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "a1319dae-2284-414f-9d00-0b92de3ea421",
            title: "Bán nhà mặt tiền 4.0 tỷ 80m2",
            created_at: "2022-11-12 04:07:39",
            location:
                "767 Nguyễn Văn Cừ, Xã Tân Phú, Huyện Châu Thành, Tỉnh Tây Ninh",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 4,
            direction: 13,
            price: 4000000000,
            priority: 4,
            facade: "41",
            area: "80",
            expire_date: "2023-01-28 04:07:39",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "6ab080d0-7aad-4dac-8ea0-38f9002a2a54",
            title: "Bán nhà 1.4 tỷ 150m2",
            created_at: "2022-11-12 04:07:41",
            location:
                "234 Nguyễn Trãi, Xã Vĩnh Thanh, Huyện Nhơn Trạch, Tỉnh Đồng Nai",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 2,
            direction: 10,
            price: 1400000000,
            priority: 3,
            facade: "76",
            area: "150",
            expire_date: "2023-01-12 04:07:41",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "6e39055c-397c-4b01-b6fd-ea5ebfc096b7",
            title: "Bán nhà mặt tiền 5.0 tỷ 170m2",
            created_at: "2022-11-12 04:07:43",
            location:
                "767 Nguyễn Văn Cừ, Xã Nam Giang, Huyện Thọ Xuân, Tỉnh Thanh Hóa",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 1,
            direction: 3,
            price: 5000000000,
            priority: 3,
            facade: "77",
            area: "170",
            expire_date: "2023-01-17 04:07:43",
            juridical_status: -1,
            furniture: 1,
        },
        {
            id: "5bdb7b92-b4a1-47b1-b93e-c27ec0fabac7",
            title: "Bán căn hộ 2.0 tỷ 160m2",
            created_at: "2022-11-12 04:07:45",
            location:
                "3 Nguyễn Văn Linh, Xã Ngũ Thái, Huyện Thuận Thành, Tỉnh Bắc Ninh",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 1,
            direction: 7,
            price: 2000000000,
            priority: 1,
            facade: "75",
            area: "160",
            expire_date: "2023-01-23 04:07:45",
            juridical_status: 0,
            furniture: 1,
        },
        {
            id: "91cdc628-0ced-4e60-a50a-4824f1f26c45",
            title: "Bán nhà mặt tiền 2.0 tỷ 70m2",
            created_at: "2022-11-12 04:07:47",
            location:
                "767 Nguyễn Văn Cừ, Xã Hoàng Nông, Huyện Đại Từ, Tỉnh Thái Nguyên",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 4,
            direction: 3,
            price: 2000000000,
            priority: 3,
            facade: "47",
            area: "70",
            expire_date: "2023-01-19 04:07:47",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "a526a70b-5879-436b-84b3-4571441c64df",
            title: "Bán căn hộ 1.4 tỷ 130m2",
            created_at: "2022-11-12 04:07:49",
            location:
                "98 Nguyễn Văn Huyên, Xã Nà Tấu, Thành phố Điện Biên Phủ, Tỉnh Điện Biên",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 5,
            direction: 1,
            price: 1400000000,
            priority: 2,
            facade: "95",
            area: "130",
            expire_date: "2023-01-24 04:07:49",
            juridical_status: 0,
            furniture: 1,
        },
        {
            id: "219b4b06-1934-4589-8371-b4b4bd5409ab",
            title: "Bán căn hộ chung cư 2.0 tỷ 150m2",
            created_at: "2022-11-12 04:07:50",
            location:
                "3 Nguyễn Văn Linh, Thị trấn Lấp Vò, Huyện Lấp Vò, Tỉnh Đồng Tháp",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 1,
            direction: 7,
            price: 2000000000,
            priority: 1,
            facade: "57",
            area: "150",
            expire_date: "2023-01-14 04:07:50",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "a97c333c-8274-49e6-a91d-234c9b8e2f99",
            title: "Bán căn hộ chung cư 4.0 tỷ 70m2",
            created_at: "2022-11-12 04:07:52",
            location:
                "65 Nguyễn Văn Cừ, Phường Tam Thanh, Thành phố Lạng Sơn, Tỉnh Lạng Sơn",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 4,
            direction: 8,
            price: 4000000000,
            priority: 5,
            facade: "78",
            area: "70",
            expire_date: "2023-01-09 04:07:52",
            juridical_status: 0,
            furniture: 1,
        },
        {
            id: "6a613d16-c338-40fd-b794-ba2e084f8071",
            title: "Bán căn hộ chung cư 2.2 tỷ 120m2",
            created_at: "2022-11-12 04:07:54",
            location:
                "98 Nguyễn Văn Huyên, Xã Nghĩa Lợi, Huyện Nghĩa Đàn, Tỉnh Nghệ An",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 3,
            direction: 14,
            price: 2220000000,
            priority: 2,
            facade: "88",
            area: "120",
            expire_date: "2023-02-12 04:07:54",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "cc04d5ac-5f8e-4fa6-a742-b965d2e12338",
            title: "Bán nhà mặt tiền 4.0 tỷ 200m2",
            created_at: "2022-11-12 04:07:56",
            location:
                "65 Nguyễn Văn Cừ, Xã Diên Phước, Huyện Diên Khánh, Tỉnh Khánh Hòa",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 1,
            direction: 13,
            price: 4000000000,
            priority: 4,
            facade: "48",
            area: "200",
            expire_date: "2023-01-28 04:07:56",
            juridical_status: -1,
            furniture: 1,
        },
        {
            id: "6a0b2e1e-a33a-4a80-b77f-b07b4b0d303f",
            title: "Bán nhà 1.4 tỷ 150m2",
            created_at: "2022-11-12 04:07:58",
            location:
                "19 Nguyễn Văn Linh, Xã Trà Hiệp, Huyện Trà Bồng, Tỉnh Quảng Ngãi",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 5,
            direction: 9,
            price: 1400000000,
            priority: 1,
            facade: "90",
            area: "150",
            expire_date: "2023-02-18 04:07:58",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "f0814e3d-a30e-4f50-b9b4-472206e494a6",
            title: "Bán căn hộ 2.0 tỷ 120m2",
            created_at: "2022-11-12 04:08:00",
            location:
                "767 Nguyễn Văn Cừ, Xã Hải Quế, Huyện Hải Lăng, Tỉnh Quảng Trị",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 1,
            direction: 15,
            price: 2000000000,
            priority: 1,
            facade: "27",
            area: "120",
            expire_date: "2023-01-30 04:08:00",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "1d6c041f-2d6e-4a91-90f4-abf1005ecdd0",
            title: "Bán căn hộ 2.2 tỷ 70m2",
            created_at: "2022-11-12 04:08:01",
            location:
                "54 Nguyễn Văn Huyên, Phường Cẩm Tây, Thành phố Cẩm Phả, Tỉnh Quảng Ninh",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 3,
            direction: 16,
            price: 2220000000,
            priority: 2,
            facade: "70",
            area: "70",
            expire_date: "2023-01-30 04:08:01",
            juridical_status: 0,
            furniture: 1,
        },
        {
            id: "45ac4b22-a1c7-44ac-ba3f-5ed4f7340ac2",
            title: "Bán nhà 4.0 tỷ 70m2",
            created_at: "2022-11-12 04:08:04",
            location:
                "767 Nguyễn Văn Cừ, Xã Thanh Sơn, Huyện Định Quán, Tỉnh Đồng Nai",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 3,
            direction: 15,
            price: 4000000000,
            priority: 2,
            facade: "53",
            area: "70",
            expire_date: "2023-02-19 04:08:04",
            juridical_status: -1,
            furniture: 1,
        },
        {
            id: "1a6a6374-abc3-45a8-b167-cd9c42859020",
            title: "Bán nhà 5.0 tỷ 160m2",
            created_at: "2022-11-12 04:08:06",
            location:
                "12 Nguyễn Trãi, Xã Cẩm Hoàng, Huyện Cẩm Giàng, Tỉnh Hải Dương",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 4,
            direction: 1,
            price: 5000000000,
            priority: 2,
            facade: "97",
            area: "160",
            expire_date: "2023-01-27 04:08:06",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "5ea826fd-3ff4-4976-9c1d-59654dc97974",
            title: "Bán nhà mặt tiền 2.0 tỷ 90m2",
            created_at: "2022-11-12 04:08:07",
            location:
                "65 Nguyễn Văn Cừ, Xã Phong Thạnh Tây B, Huyện Phước Long, Tỉnh Bạc Liêu",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 4,
            direction: 8,
            price: 2000000000,
            priority: 2,
            facade: "40",
            area: "90",
            expire_date: "2023-02-03 04:08:07",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "aaff7fbd-5e18-436d-8041-fc21cb8c8210",
            title: "Bán căn hộ chung cư 4.0 tỷ 60m2",
            created_at: "2022-11-12 04:08:10",
            location:
                "234 Nguyễn Trãi, Thị trấn Phú Thiện, Huyện Phú Thiện, Tỉnh Gia Lai",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 5,
            direction: 9,
            price: 4000000000,
            priority: 4,
            facade: "46",
            area: "60",
            expire_date: "2023-01-26 04:08:10",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "02ae0f87-f889-4dbb-9ad9-ddd6c2f6bae0",
            title: "Bán căn hộ 4.0 tỷ 200m2",
            created_at: "2022-11-12 04:08:12",
            location:
                "3 Nguyễn Văn Linh, Xã Việt Tiến, Huyện Bảo Yên, Tỉnh Lào Cai",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 2,
            direction: 12,
            price: 4000000000,
            priority: 3,
            facade: "57",
            area: "200",
            expire_date: "2023-02-11 04:08:12",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "e25ed5c3-53f9-41ba-b585-47e27aec7462",
            title: "Bán nhà 2.0 tỷ 160m2",
            created_at: "2022-11-12 04:08:14",
            location:
                "54 Nguyễn Văn Huyên, Xã Thành Công, Thị xã Phổ Yên, Tỉnh Thái Nguyên",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 4,
            direction: 3,
            price: 2000000000,
            priority: 1,
            facade: "56",
            area: "160",
            expire_date: "2023-01-07 04:08:14",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "9b5d7d06-06a2-47f6-b596-823687b55ee1",
            title: "Bán nhà 1.4 tỷ 60m2",
            created_at: "2022-11-12 04:08:15",
            location:
                "98 Nguyễn Văn Huyên, Xã Hữu Kiên, Huyện Chi Lăng, Tỉnh Lạng Sơn",
            description: "Đây là mô tả",
            num_of_bedrooms: 4,
            num_of_toilets: 4,
            direction: 6,
            price: 1400000000,
            priority: 3,
            facade: "82",
            area: "60",
            expire_date: "2023-01-22 04:08:15",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "c56665ec-3697-426c-9ca6-bf951383e044",
            title: "Bán căn hộ chung cư 4.0 tỷ 200m2",
            created_at: "2022-11-12 04:08:17",
            location:
                "767 Nguyễn Văn Cừ, Xã Đức Hòa Hạ, Huyện Đức Hòa, Tỉnh Long An",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 5,
            direction: 13,
            price: 4000000000,
            priority: 4,
            facade: "78",
            area: "200",
            expire_date: "2023-01-15 04:08:17",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "7c5015a7-b905-42a5-b46c-b08aec60e682",
            title: "Bán nhà 2.0 tỷ 100m2",
            created_at: "2022-11-12 04:08:19",
            location:
                "12 Nguyễn Trãi, Xã Ba Cụm Nam, Huyện Khánh Sơn, Tỉnh Khánh Hòa",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 3,
            direction: 2,
            price: 2000000000,
            priority: 4,
            facade: "37",
            area: "100",
            expire_date: "2023-01-09 04:08:19",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "8ea80fc4-a55b-4582-b1f2-cc8d7bcb98ff",
            title: "Bán căn hộ chung cư 2.0 tỷ 150m2",
            created_at: "2022-11-12 04:08:21",
            location:
                "19 Nguyễn Văn Linh, Xã Tam Lư, Huyện Quan Sơn, Tỉnh Thanh Hóa",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 2,
            direction: 15,
            price: 2000000000,
            priority: 4,
            facade: "53",
            area: "150",
            expire_date: "2023-02-03 04:08:21",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "1d572909-6734-4f12-898e-4546fb33e052",
            title: "Bán nhà 2.2 tỷ 90m2",
            created_at: "2022-11-12 04:08:23",
            location:
                "767 Nguyễn Văn Cừ, Xã Định Thủy, Huyện Mỏ Cày Nam, Tỉnh Bến Tre",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 5,
            direction: 5,
            price: 2220000000,
            priority: 1,
            facade: "84",
            area: "90",
            expire_date: "2023-01-14 04:08:23",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "f8664358-d06f-415e-b32b-430b141a3b75",
            title: "Bán căn hộ 1.4 tỷ 140m2",
            created_at: "2022-11-12 04:08:25",
            location:
                "767 Nguyễn Văn Cừ, Xã Long Thuận, Huyện Hồng Ngự, Tỉnh Đồng Tháp",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 1,
            direction: 1,
            price: 1400000000,
            priority: 4,
            facade: "29",
            area: "140",
            expire_date: "2023-01-18 04:08:25",
            juridical_status: 0,
            furniture: 1,
        },
        {
            id: "034b5f0d-fc6a-4a10-9275-8c0d35679df8",
            title: "Bán căn hộ 1.4 tỷ 50m2",
            created_at: "2022-11-12 04:08:27",
            location:
                "12 Nguyễn Trãi, Xã Giao Hương, Huyện Giao Thủy, Tỉnh Nam Định",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 2,
            direction: 12,
            price: 1400000000,
            priority: 4,
            facade: "60",
            area: "50",
            expire_date: "2023-01-19 04:08:27",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "53506b5c-409a-404d-a67b-7180621c5afa",
            title: "Bán nhà 2.0 tỷ 130m2",
            created_at: "2022-11-12 04:08:29",
            location:
                "234 Nguyễn Trãi, Xã Hiệp Mỹ Đông, Huyện Cầu Ngang, Tỉnh Trà Vinh",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 5,
            direction: 2,
            price: 2000000000,
            priority: 1,
            facade: "41",
            area: "130",
            expire_date: "2023-01-22 04:08:29",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "7bc692ff-1ca9-4627-b98e-f9f198a68474",
            title: "Bán căn hộ 1.4 tỷ 130m2",
            created_at: "2022-11-12 04:08:30",
            location:
                "19 Nguyễn Văn Linh, Phường Thượng Đình, Quận Thanh Xuân, Thành phố Hà Nội",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 4,
            direction: 1,
            price: 1400000000,
            priority: 1,
            facade: "94",
            area: "130",
            expire_date: "2023-01-22 04:08:30",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "8697edde-f315-45bd-804c-1205344bc3c4",
            title: "Bán căn hộ 5.0 tỷ 180m2",
            created_at: "2022-11-12 04:08:32",
            location:
                "65 Nguyễn Văn Cừ, Xã Mai Sơn, Huyện Yên Mô, Tỉnh Ninh Bình",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 3,
            direction: 2,
            price: 5000000000,
            priority: 1,
            facade: "72",
            area: "180",
            expire_date: "2023-02-11 04:08:32",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "57abb928-5ef8-4b86-8e52-5b4be78c0be1",
            title: "Bán nhà mặt tiền 5.0 tỷ 200m2",
            created_at: "2022-11-12 04:08:34",
            location:
                "3 Nguyễn Văn Linh, Xã Lâm Tân, Huyện Thạnh Trị, Tỉnh Sóc Trăng",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 5,
            direction: 3,
            price: 5000000000,
            priority: 5,
            facade: "96",
            area: "200",
            expire_date: "2023-01-03 04:08:34",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "7c409498-22c6-412c-97bf-64ea6742f135",
            title: "Bán nhà mặt tiền 1.4 tỷ 130m2",
            created_at: "2022-11-12 04:08:36",
            location:
                "3 Nguyễn Văn Linh, Xã Bình An, Huyện Bắc Bình, Tỉnh Bình Thuận",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 2,
            direction: 11,
            price: 1400000000,
            priority: 3,
            facade: "26",
            area: "130",
            expire_date: "2023-01-13 04:08:36",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "810b7c87-4ad1-419d-ad9c-f16a52465315",
            title: "Bán căn hộ chung cư 1.4 tỷ 90m2",
            created_at: "2022-11-12 04:08:38",
            location:
                "12 Nguyễn Trãi, Xã Yên Bài, Huyện Ba Vì, Thành phố Hà Nội",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 5,
            direction: 13,
            price: 1400000000,
            priority: 2,
            facade: "72",
            area: "90",
            expire_date: "2023-02-09 04:08:38",
            juridical_status: 0,
            furniture: 1,
        },
        {
            id: "4872aef7-5637-48b7-aaf3-070dc4bb21b3",
            title: "Bán căn hộ chung cư 2.0 tỷ 90m2",
            created_at: "2022-11-12 04:08:40",
            location:
                "19 Nguyễn Văn Linh, Xã Lê Lai, Huyện Thạch An, Tỉnh Cao Bằng",
            description: "Đây là mô tả",
            num_of_bedrooms: 2,
            num_of_toilets: 3,
            direction: 16,
            price: 2000000000,
            priority: 4,
            facade: "96",
            area: "90",
            expire_date: "2023-01-11 04:08:40",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "9481235a-48a0-4465-9cc0-a0dc24600f26",
            title: "Bán căn hộ 1.4 tỷ 130m2",
            created_at: "2022-11-12 04:08:42",
            location:
                "98 Nguyễn Văn Huyên, Xã Tà Đảnh, Huyện Tri Tôn, Tỉnh An Giang",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 4,
            direction: 8,
            price: 1400000000,
            priority: 2,
            facade: "70",
            area: "130",
            expire_date: "2023-01-23 04:08:42",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "582d7631-de70-4c1b-b2ab-b2038c7d5e98",
            title: "Bán nhà mặt tiền 2.0 tỷ 180m2",
            created_at: "2022-11-12 04:08:43",
            location:
                "12 Nguyễn Trãi, Xã Phúc Hòa, Huyện Tân Yên, Tỉnh Bắc Giang",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 3,
            direction: 7,
            price: 2000000000,
            priority: 2,
            facade: "87",
            area: "180",
            expire_date: "2023-02-10 04:08:43",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "29034657-7c7f-45b8-9904-5efd2138187b",
            title: "Bán căn hộ 1.4 tỷ 60m2",
            created_at: "2022-11-12 04:08:45",
            location:
                "767 Nguyễn Văn Cừ, Xã Cát Hưng, Huyện Phù Cát, Tỉnh Bình Định",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 4,
            direction: 1,
            price: 1400000000,
            priority: 4,
            facade: "54",
            area: "60",
            expire_date: "2023-01-16 04:08:45",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "33356b82-4238-488e-b6be-911bedece5b4",
            title: "Bán căn hộ 5.0 tỷ 200m2",
            created_at: "2022-11-12 04:08:47",
            location:
                "98 Nguyễn Văn Huyên, Xã Muổi Nọi, Huyện Thuận Châu, Tỉnh Sơn La",
            description: "Đây là mô tả",
            num_of_bedrooms: 5,
            num_of_toilets: 5,
            direction: 3,
            price: 5000000000,
            priority: 3,
            facade: "44",
            area: "200",
            expire_date: "2023-02-04 04:08:47",
            juridical_status: 1,
            furniture: 2,
        },
        {
            id: "d375b5e6-6ffd-42f9-baa2-c5ac264a51b2",
            title: "Bán căn hộ chung cư 5.0 tỷ 120m2",
            created_at: "2022-11-12 04:08:49",
            location:
                "12 Nguyễn Trãi, Thị trấn Long Hồ, Huyện Long Hồ, Tỉnh Vĩnh Long",
            description: "Đây là mô tả",
            num_of_bedrooms: 1,
            num_of_toilets: 3,
            direction: 10,
            price: 5000000000,
            priority: 4,
            facade: "56",
            area: "120",
            expire_date: "2023-01-22 04:08:49",
            juridical_status: -1,
            furniture: 2,
        },
        {
            id: "eecdad68-4ffa-4ae2-87f6-35d7c50ae117",
            title: "Bán nhà mặt tiền 1.4 tỷ 150m2",
            created_at: "2022-11-12 04:08:51",
            location:
                "234 Nguyễn Trãi, Xã Mỹ Hiệp, Huyện Cao Lãnh, Tỉnh Đồng Tháp",
            description: "Đây là mô tả",
            num_of_bedrooms: 3,
            num_of_toilets: 5,
            direction: 6,
            price: 1400000000,
            priority: 2,
            facade: "56",
            area: "150",
            expire_date: "2023-01-19 04:08:51",
            juridical_status: 0,
            furniture: 2,
        },
        {
            id: "b6500117-12f4-4d8c-a7af-e6a2ee426932",
            title: "fsdfsdfsd",
            created_at: "2022-11-12 07:30:56",
            location: "fsdfsdfsd",
            description: "fsdfsdfsdfs",
            num_of_bedrooms: 1,
            num_of_toilets: 1,
            direction: 2,
            price: 100000000,
            priority: 2,
            facade: "12",
            area: "60",
            expire_date: "2022-06-23 00:00:00",
            juridical_status: 1,
            furniture: 1,
        },
        {
            id: "5769f50f-d93b-4e32-b95d-84432bcdafd0",
            title: "fsdfsdfsd",
            created_at: "2022-11-12 07:32:57",
            location: "fsdfsdfsd",
            description: "fsdfsdfsdfs",
            num_of_bedrooms: 1,
            num_of_toilets: 1,
            direction: 2,
            price: 100000000,
            priority: 2,
            facade: "12",
            area: "60",
            expire_date: "2022-06-23 00:00:00",
            juridical_status: 1,
            furniture: 1,
        },
    ];

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
