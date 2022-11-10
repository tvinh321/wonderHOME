import React, { useState, useEffect } from "react";
import axios from "axios";
import PasswordInputStrengthMeter from "./PasswordInputWithStrengthMeter";

export default function RegisterForm({ setIsLoginForm }) {
    const [registerStep, setRegisterStep] = useState(1);
    const [citiesList, setCitiesList] = useState([]);
    const [districtsList, setDistrictsList] = useState([]);
    const [wardsList, setWardsList] = useState([]);

    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
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
        city &&
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
        district &&
            axios
                .get("/api/wards/" + district)
                .then((res) => {
                    setWardsList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [district]);

    return (
        <div>
            <h3 className="pt-4 text-md text-center text-neutral-500">
                Xin chào bạn mới!
            </h3>
            <h3 className="pt-1 text-center text-2xl">Đăng ký để tiếp tục</h3>
            <div className="text-center my-2">
                <div className="inline-block text-sm text-neutral-700 align-baselin">
                    Đã có tài khoản?{" "}
                    <a
                        onClick={() => {
                            setIsLoginForm(true);
                        }}
                        className="underline text-amber-400 hover:text-amber-800 cursor-pointer"
                    >
                        Đăng nhập
                    </a>
                </div>
            </div>
            <div className="px-8 pt-6 pb-8 mb-4 rounded w-3/4 mx-auto">
                <div className="border-b-2 py-4">
                    <div className="uppercase tracking-wide text-xs font-bold text-neutral-500 mb-1 leading-tight">
                        Bước {registerStep} / {lastStep}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-initial w-3/4">
                            {registerStep == 1 ? (
                                <div>
                                    <div className="text-md font-bold text-neutral-700 leading-tight">
                                        Thông tin cá nhân
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="text-md font-bold text-neutral-700 leading-tight">
                                        Tài khoản
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
                    {registerStep == 1 ? (
                        <div>
                            <div className="mb-5 grid md:grid-cols-2 gap-2 items-center justify-between gap-x-4">
                                <div>
                                    <label
                                        for="lastname"
                                        className="block mb-2 text-sm font-bold text-neutral-700"
                                    >
                                        Họ
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="firstname"
                                        className="block mb-2 text-sm font-bold text-neutral-700"
                                    >
                                        Tên
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label
                                    for="gender"
                                    className="block mb-2 text-sm font-bold text-neutral-700"
                                >
                                    Giới tính
                                </label>
                                <div className="flex">
                                    <label className="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-3 shadow-sm mr-4">
                                        <div className="text-amber-600 mr-3">
                                            <input
                                                type="radio"
                                                x-model="gender"
                                                value="Male"
                                                className="form-radio focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="select-none text-neutral-700">
                                            Nam
                                        </div>
                                    </label>

                                    <label className="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-3 shadow-sm">
                                        <div className="text-amber-600 mr-3">
                                            <input
                                                type="radio"
                                                x-model="gender"
                                                value="Female"
                                                className="form-radio focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="select-none text-neutral-700">
                                            Nữ
                                        </div>
                                    </label>

                                    <label className="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-3 shadow-sm">
                                        <div className="text-amber-600 mr-3">
                                            <input
                                                type="radio"
                                                x-model="gender"
                                                value="Other"
                                                className="form-radio focus:outline-none focus:shadow-outline"
                                            />
                                        </div>
                                        <div className="select-none text-neutral-700">
                                            Khác
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label
                                    for="dob"
                                    className="block mb-2 text-sm font-bold text-neutral-700"
                                >
                                    Sinh nhật
                                </label>
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-neutral-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        datepicker
                                        datepicker-autohide
                                        type="text"
                                        className="w-full px-3 pl-10 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder="dd/MM/YYYY"
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-bold text-neutral-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    for="phone"
                                    className="block mb-2 text-sm font-bold text-neutral-700"
                                >
                                    Số điện thoại
                                </label>
                                <input
                                    type="phone"
                                    className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    for="address"
                                    className="block mb-2 text-sm font-bold text-neutral-700"
                                >
                                    Địa chỉ
                                </label>
                                <input
                                    type="adress"
                                    className="mb-4 w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""
                                />
                                <div className="grid md:grid-cols-3 gap-2 items-center justify-between">
                                    <div className="w-full">
                                        <select
                                            defaultValue={0}
                                            id="city"
                                            className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                            onChange={(e) => {
                                                setCity(e.target.value);
                                            }}
                                        >
                                            <option value={0} disabled>
                                                Tỉnh/Thành
                                            </option>
                                            {citiesList &&
                                                citiesList.map((city) => (
                                                    <option
                                                        value={city.id}
                                                        key={city.id}
                                                    >
                                                        {city.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className="w-full">
                                        <select
                                            defaultValue={0}
                                            id="district"
                                            className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                            onChange={(e) => {
                                                setDistrict(e.target.value);
                                            }}
                                        >
                                            <option value={0} disabled>
                                                Quận/Huyện
                                            </option>
                                            {districtsList &&
                                                districtsList.map(
                                                    (district) => (
                                                        <option
                                                            value={district.id}
                                                            key={district.id}
                                                        >
                                                            {district.name}
                                                        </option>
                                                    )
                                                )}
                                        </select>
                                    </div>

                                    <div className="w-full">
                                        <select
                                            defaultValue={0}
                                            id="ward"
                                            className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                            onChange={(e) => {
                                                setWard(e.target.value);
                                            }}
                                        >
                                            <option value={0} disabled>
                                                Phường/Xã
                                            </option>
                                            {wardsList &&
                                                wardsList.map((ward) => (
                                                    <option
                                                        value={ward.id}
                                                        key={ward.id}
                                                    >
                                                        {ward.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : registerStep === 2 ? (
                        <div>
                            <div className="mb-5">
                                <label
                                    for="username"
                                    className="block mb-2 text-sm font-bold text-neutral-700"
                                >
                                    Tên đăng nhập
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""
                                />
                            </div>
                            <PasswordInputStrengthMeter />
                        </div>
                    ) : (
                        <div className="p-10 flex items-center shadow justify-between">
                            <div>
                                <svg
                                    className="mb-4 h-20 w-20 text-green-500 mx-auto"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h2 className="text-xl mb-4 text-neutral-800 text-center font-bold">
                                    Đăng ký thành công
                                </h2>
                                <div className="text-neutral-600 mb-8">
                                    Cám ơn bạn đã trở thành thành viên của
                                    wonderHOME.com. Chúng tôi vừa gửi mail xác
                                    nhận qua tài khoản email bạn cung cấp. Vui
                                    lòng bấm vào đường link để kích hoạt tài
                                    khoản.
                                </div>
                                <button
                                    className="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-neutral-600 hover:bg-neutral-100 font-medium border"
                                    onClick={() => {
                                        setIsLoginForm(true);
                                        setRegisterStep(1);
                                    }}
                                >
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-between">
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
                                Hoàn thành
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
