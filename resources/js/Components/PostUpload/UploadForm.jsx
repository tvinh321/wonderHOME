import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

export default function UploadForm() {
    const [citiesList, setCitiesList] = useState();
    const [districtsList, setDistrictsList] = useState();
    const [wardsList, setWardsList] = useState();
    const [typesList, setTypesList] = React.useState();
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [address, setAddress] = useState("");

    const [registerStep, setRegisterStep] = useState(3);
    const lastStep = 3;

    useEffect(() => {
        axios
            .get("/api/cities")
            .then((res) => {
                setCitiesList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
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
        axios
            .get("/api/wards/" + district)
            .then((res) => {
                setWardsList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [district]);

    useEffect(() => {
        axios
            .get("/api/types")
            .then((res) => {
                setTypesList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDisplayAddress = useMemo(() => {
        console.log(citiesList?.filter((item) => item.id === city));
        const addressShow = address ? address + ", " : "";
        const wardShow = ward
            ? wardsList?.filter((item) => item.id === ward)[0].name + ", "
            : "";
        const districtShow = district
            ? districtsList?.filter((item) => item.id === district)[0].name +
              ", "
            : "";
        const cityShow = city
            ? citiesList?.filter((item) => item.id === city)[0].name
            : "";
        return addressShow + wardShow + districtShow + cityShow;
    }, [city, district, ward, address]);

    return (
        <div>
            <div className="px-8 pt-6 mb-8 rounded w-3/4 mx-auto">
                <div className="border-b-2 py-4">
                    <div className="uppercase tracking-wide text-xs font-bold text-neutral-500 mb-1 leading-tight">
                        Bước {registerStep} / {lastStep}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-initial w-3/4">
                            {registerStep === 1 ? (
                                <div>
                                    <div className="text-md font-bold text-neutral-700 leading-tight">
                                        Thông tin cơ bản
                                    </div>
                                </div>
                            ) : registerStep === 2 ? (
                                <div>
                                    <div className="text-md font-bold text-neutral-700 leading-tight">
                                        Thông tin bất động sản
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="text-md font-bold text-neutral-700 leading-tight">
                                        Hình ảnh xác thực
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center md:w-64">
                            <div className="w-full rounded-full mr-2">
                                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"></div>
                            </div>
                            <div
                                className="text-xs w-10 text-neutral-600"
                                x-text="parseInt(step / 3 * 100) +'%'"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    {registerStep === 1 ? (
                        <div className=" py-1 bg-blueGray-50">
                            <div className="w-full px-4 mx-auto mt-6">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                    <div className="flex-auto px-4 lg:px-10 py-8">
                                        <form>
                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-amber-500">
                                                Địa chỉ bất động sản
                                            </h6>
                                            <div className="flex flex-wrap mb-4">
                                                <div className="w-full lg:w-12/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Tỉnh, Thành phố
                                                        </label>
                                                        <select
                                                            onChange={(e) => {
                                                                setCity(
                                                                    e.target
                                                                        .value
                                                                );
                                                                setDistrict("");
                                                                setWard("");
                                                            }}
                                                            className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                                        >
                                                            <option value="">
                                                                Tỉnh/Thành phố
                                                            </option>
                                                            {citiesList ? (
                                                                citiesList.map(
                                                                    (
                                                                        cityItem,
                                                                        index
                                                                    ) => {
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
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Quận, Huyện
                                                        </label>
                                                        <select
                                                            onChange={(e) => {
                                                                setDistrict(
                                                                    e.target
                                                                        .value
                                                                );
                                                                setWard("");
                                                            }}
                                                            className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap mb-4">
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Phường, Xã
                                                        </label>
                                                        <select
                                                            onChange={(e) => {
                                                                setWard(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                            className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                                        >
                                                            <option value="">
                                                                Phường/Xã
                                                            </option>
                                                            {wardsList ? (
                                                                wardsList.map(
                                                                    (
                                                                        wardItem,
                                                                        index
                                                                    ) => {
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
                                                </div>
                                                <div className="w-full lg:w-4/12 px-4">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Số nhà, đường
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            placeholder="Số nhà, đường..."
                                                            onChange={(e) => {
                                                                setAddress(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative w-full mb-8 px-4">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold">
                                                    Địa chỉ hiển thị trên tin
                                                    đăng
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Số nhà, đường, phường, quận, thành phố..."
                                                    value={handleDisplayAddress}
                                                />
                                            </div>
                                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-amber-500">
                                                Tiêu đề bài đăng
                                            </h6>
                                            <div className="px-4">
                                                <textarea
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    rows="1"
                                                    placeholder="Vd: Bán căn hộ 3PN dự án COSMO CITY"
                                                />
                                            </div>

                                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-amber-500">
                                                Mô tả bài đăng
                                            </h6>
                                            <div className="px-4">
                                                <textarea
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    rows="4"
                                                    placeholder="Nhập mô tả chung về bất động sản của bạn. Ví dụ: Nhà gần công viên, trường học ..."
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : registerStep === 2 ? (
                        <div className=" py-1 bg-blueGray-50">
                            <div className="w-full px-4 mx-auto mt-6">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                    <div className="flex-auto px-4 lg:px-10 py-8">
                                        <form>
                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-amber-500">
                                                Loại bất động sản
                                            </h6>
                                            <div className="px-4">
                                                {" "}
                                                <select
                                                    defaultValue={0}
                                                    required
                                                    id="propertyType"
                                                    className="w-full py-2 px-3 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                                >
                                                    <option value={0} disabled>
                                                        Vui lòng chọn loại bất
                                                        động sản...
                                                    </option>
                                                    {typesList &&
                                                        typesList.map(
                                                            (type) => (
                                                                <option
                                                                    value={
                                                                        type.id
                                                                    }
                                                                    key={
                                                                        type.id
                                                                    }
                                                                >
                                                                    {type.name}
                                                                </option>
                                                            )
                                                        )}
                                                </select>
                                            </div>

                                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-amber-500">
                                                Thông tin chi tiết
                                            </h6>
                                            <div className="relative w-full mb-8 px-4">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Diện tích
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Nhập diện tích (m2)"
                                                />
                                            </div>
                                            <div className="relative w-full mb-8 px-4">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Mức giá
                                                </label>
                                                <input
                                                    type="text"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Nhập mức giá"
                                                />
                                            </div>
                                            <div className="relative w-full mb-8 px-4">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="house-checkbox"
                                                        className="py-3 ml-2 w-full font-medium text-sm text-neutral-900"
                                                    >
                                                        Số phòng ngủ
                                                    </label>
                                                    <input
                                                        id=""
                                                        type="number"
                                                        placeholder="0"
                                                        min="1"
                                                        max="100"
                                                        className="w-1/4 text-center border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="house-checkbox"
                                                        className="py-3 ml-2 w-full text-sm font-medium text-neutral-900"
                                                    >
                                                        Số phòng tắm
                                                    </label>
                                                    <input
                                                        id=""
                                                        type="number"
                                                        placeholder="0"
                                                        min="1"
                                                        max="100"
                                                        className="w-1/4 text-center border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="house-checkbox"
                                                        className="py-3 ml-2 w-full text-sm font-medium text-neutral-900"
                                                    >
                                                        Số tầng
                                                    </label>
                                                    <input
                                                        id=""
                                                        type="number"
                                                        placeholder="0"
                                                        min="1"
                                                        max="100"
                                                        className="w-1/4 text-center border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                                                    />
                                                </div>
                                            </div>

                                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-amber-500">
                                                Thông tin khác
                                            </h6>
                                            <div className="relative w-full mb-8 px-4">
                                                <div className="relative w-full mb-8 px-4">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Tiện ích
                                                    </label>
                                                    <div className="flex items-center space-x-6">
                                                        <div className="flex items-center">
                                                            <input
                                                                id=""
                                                                type="checkbox"
                                                                value=""
                                                                className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                            />
                                                            <label
                                                                htmlFor="house-checkbox"
                                                                className="py-3 ml-2 w-full text-neutral-900"
                                                            >
                                                                Wifi
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                id=""
                                                                type="checkbox"
                                                                value=""
                                                                className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                            />
                                                            <label
                                                                htmlFor="house-checkbox"
                                                                className="py-3 ml-2 w-full text-neutral-900"
                                                            >
                                                                Bãi đỗ xe
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                id=""
                                                                type="checkbox"
                                                                value=""
                                                                className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                            />
                                                            <label
                                                                htmlFor="house-checkbox"
                                                                className="py-3 ml-2 w-full text-neutral-900"
                                                            >
                                                                Cho phép thú
                                                                cưng
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative w-full mb-8 px-4">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Mô tả bổ sung
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className=" py-1 bg-blueGray-50">
                            <div className="w-full px-4 mx-auto mt-6">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                    <div className="flex-auto px-4 lg:px-10 py-8">
                                        <form>
                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-4 font-bold uppercase text-amber-500">
                                                Hình ảnh & Video
                                            </h6>
                                            <p className="text-neutral-500 text-sm mb-6">
                                                Hãy dùng ảnh thật, không trùng,
                                                không chèn số điện thoại. Mỗi
                                                ảnh kích thước tối thiểu100x100,
                                                tối đa 15 MB. Số lượng ảnh tối
                                                đa tuỳ theo loại tin.
                                            </p>
                                            <div className="px-4 mb-6">
                                                <input
                                                    type="file"
                                                    name="file"
                                                />
                                            </div>
                                            <div className="relative w-full mb-6 px-4">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Thêm link video
                                                </label>
                                                <input
                                                    autocomplete="off"
                                                    name="linkYoutube"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    maxlength="100"
                                                    placeholder="VD: https://www.youtube.com/watch?v=Y-Dw0NpfRug"
                                                    type="text"
                                                    value=""
                                                />
                                            </div>
                                            <div className="relative w-full mb-6 px-4">
                                                <p className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Đăng ảnh 360°
                                                </p>
                                            </div>

                                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-4 font-bold uppercase text-amber-500">
                                                Giấy tờ pháp lý
                                            </h6>
                                            <p className="text-neutral-500 text-sm mb-6">
                                                Việc cung cấp giấy tờ pháp lý sẽ
                                                làm tăng mức độ ưu tiên và đáng
                                                tin cậy của bài tin của bạn. Bạn
                                                có thể cung cấp giấy tờ pháp lý
                                                sau khi đăng tin. Hình ảnh về
                                                giấy tờ pháp lý phải rõ ràng,
                                                không bị mờ, không bị che khuất.{" "}
                                                <span className="text-amber-500">
                                                    Hình ảnh các giấy tờ pháp lý
                                                    của bạn sẽ được bảo mật hoàn
                                                    toàn cho đến khi bạn đồng ý
                                                    cung cấp cho người mua.
                                                </span>
                                            </p>
                                            <div className="relative w-full mb-8 px-4">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Trạng thái
                                                </label>
                                                <select
                                                    defaultValue={1}
                                                    id="jurisdiction"
                                                    className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                                >
                                                    <option value={1}>
                                                        Không cung cấp
                                                    </option>
                                                    <option value={2}>
                                                        Cung cấp đầy đủ
                                                    </option>
                                                    <option value={3}>
                                                        Cung cấp sau
                                                    </option>
                                                    <option value={4}>
                                                        Còn thiếu, bổ sung sau
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="relative w-full mb-8 px-4">
                                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                    Loại giấy tờ sẽ cung cấp
                                                </label>
                                                <div className="flex items-center space-x-6">
                                                    <div className="flex items-center">
                                                        <input
                                                            id=""
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                        />
                                                        <label
                                                            htmlFor="house-checkbox"
                                                            className="py-3 ml-2 w-full text-neutral-900"
                                                        >
                                                            CCCD/CMND chính chủ
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id=""
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                        />
                                                        <label
                                                            htmlFor="house-checkbox"
                                                            className="py-3 ml-2 w-full text-neutral-900"
                                                        >
                                                            Sổ đỏ
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id=""
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                        />
                                                        <label
                                                            htmlFor="house-checkbox"
                                                            className="py-3 ml-2 w-full text-neutral-900"
                                                        >
                                                            Sổ hồng
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id=""
                                                            type="checkbox"
                                                            value=""
                                                            className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2"
                                                        />
                                                        <label
                                                            htmlFor="house-checkbox"
                                                            className="py-3 ml-2 w-full text-neutral-900"
                                                        >
                                                            Hợp đồng mua bán
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="relative w-full mb-8 px-4">
                                                <label className="mb-6 block uppercase text-blueGray-600 text-xs font-bold">
                                                    Hình ảnh giấy tờ
                                                </label>
                                                <div className="mb-6">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-between mb-4">
                    <div className="w-1/2">
                        <button
                            className={`${
                                registerStep > 1 ? "visible" : "invisible"
                            } w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-neutral-600  hover:bg-neutral-100 font-medium border`}
                            onClick={() => setRegisterStep(registerStep - 1)}
                        >
                            Trở về
                        </button>
                    </div>

                    <div className="w-1/2 text-right">
                        {registerStep < lastStep && (
                            <button
                                className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-amber-500 hover:bg-amber-600 font-medium"
                                onClick={() =>
                                    setRegisterStep(registerStep + 1)
                                }
                            >
                                Tiếp theo
                            </button>
                        )}

                        {registerStep === lastStep && (
                            <button
                                className="w-36 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-amber-500 hover:bg-amber-600 font-medium"
                                onClick={() =>
                                    setRegisterStep(registerStep + 1)
                                }
                            >
                                Đăng tin
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
