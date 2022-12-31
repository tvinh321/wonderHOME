import React, { useState, useEffect } from "react";
import axios from "axios";
import PasswordInputStrengthMeter from "./PasswordInputWithStrengthMeter";

export function BasicRegisterForm({ setIsLoginForm }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("");
        const formValue = {
            email,
            password,
        };

        axios.post("/api/register", formValue).catch((err) => {
            if (err.response) {
                if (err.response.status === 422) {
                    if (err.response.data.message === "Email already exists") {
                        setMessage("Email đã tồn tại");
                    }
                } else if (err.response.status === 400) {
                    setMessage("Vui lòng điền đầy đủ thông tin");
                } else {
                    setMessage("Đăng ký thất bại");
                }
            }
        });
    };

    return (
        <div className="px-6 my-12 flex justify-center">
            <div className="w-10/12 flex justify-center items-center">
                <div className="hidden lg:block lg:w-1/3 bg-cover rounded-l-lg">
                    <img src="/assets/images/login.png" />
                </div>
                <div
                    id="form-container"
                    className="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none"
                >
                    <h3 className="pt-4 text-md text-center text-neutral-500">
                        Xin chào bạn mới!
                    </h3>
                    <h3 className="pt-1 text-center text-2xl">
                        Đăng ký để tiếp tục
                    </h3>
                    {message && (
                        <div
                            className="w-full mt-3"
                            style={{ background: "#fed3cf" }}
                        >
                            <p
                                className="font-semibold p-4 text-center"
                                style={{ color: "#ab2830" }}
                            >
                                {message}
                            </p>
                        </div>
                    )}
                    <form
                        className="md:px-8 pt-6 pb-8 mb-4 rounded"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-bold text-neutral-700"
                            >
                                Email đăng ký
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                placeholder=""
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <PasswordInputStrengthMeter
                            password={password}
                            setPassword={setPassword}
                            hr
                        />

                        <div className="mb-6 text-center">
                            <button
                                className={
                                    "bg-amber-500 hover:bg-amber-700 w-full px-4 py-2 font-bold text-white focus:outline-none focus:shadow-outline rounded-full transition-all duration-200"
                                }
                                type="submit"
                            >
                                Đăng ký
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
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
                    </form>
                </div>
            </div>
        </div>
    );
}

export function FullyRegisterForm({ setIsLoginForm }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState(0);
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

    const handleGoNextStep = () => {
        // Check filled data
        if (registerStep === 1) {
            if (
                !firstName ||
                !lastName ||
                !gender ||
                !email ||
                !dob ||
                !phone ||
                !address ||
                !city ||
                !district ||
                !ward
            ) {
                alert("Please fill all fields");
                return;
            }
        } else if (registerStep === 2) {
            if (!username || !password) {
                alert("Please fill all fields");
                return;
            }
        }
        setRegisterStep(registerStep + 1);
    };

    const handleSubmit = () => {
        const formValue = {
            firstName,
            lastName,
            gender,
            email,
            dob,
            phone,
            location: address + ", " + ward + ", " + district + ", " + city,
            username,
            password,
        };

        axios
            .post("/api/register", formValue)
            .then(() => {
                alert("Đăng ký thành công");
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.status === 422) {
                        if (
                            err.response.data.message === "Email already exists"
                        ) {
                            alert("Email đã tồn tại");
                        } else if (
                            err.response.data.message ===
                            "Username already exists"
                        ) {
                            alert("Tên đăng nhập đã tồn tại");
                        }
                    } else if (err.response.status === 400) {
                        alert("Vui lòng điền đầy đủ thông tin");
                    } else {
                        alert("Đăng ký thất bại");
                    }
                }
            });
    };

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
            <div className="md:px-8 px-2 pt-6 pb-8 mb-4 rounded w-3/4 mx-auto">
                <div className="border-b-2 py-4">
                    <div className="uppercase tracking-wide text-xs font-bold text-neutral-500 mb-1 leading-tight">
                        Bước {registerStep} / {lastStep}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-initial md:w-3/4">
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
                        <div className="flex items-center mt-4 md:w-64 md:mt-0">
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
                    {registerStep !== lastStep ? (
                        <form>
                            {registerStep === 1 ? (
                                <div>
                                    <div className="mb-5 grid md:grid-cols-2 gap-2 items-center md:justify-between gap-x-4">
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block mb-2 text-sm font-bold text-neutral-700"
                                            >
                                                Họ
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                placeholder=""
                                                name="lastName"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block mb-2 text-sm font-bold text-neutral-700"
                                            >
                                                Tên
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                placeholder=""
                                                name="firstName"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="gender"
                                            className="block mb-2 text-sm font-bold text-neutral-700"
                                        >
                                            Giới tính
                                        </label>
                                        <div className="md:flex">
                                            <label className="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-1 md:py-3 md:shadow-sm mr-4">
                                                <div className="text-amber-600 mr-3">
                                                    <input
                                                        type="radio"
                                                        x-model="gender"
                                                        value={1}
                                                        className="form-radio focus:outline-none focus:shadow-outline"
                                                        onClick={() => {
                                                            setGender(1);
                                                        }}
                                                    />
                                                </div>
                                                <div className="select-none text-neutral-700">
                                                    Nam
                                                </div>
                                            </label>

                                            <label className="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-1 md:py-3 md:shadow-sm">
                                                <div className="text-amber-600 mr-3">
                                                    <input
                                                        type="radio"
                                                        x-model="gender"
                                                        value={0}
                                                        className="form-radio focus:outline-none focus:shadow-outline"
                                                        onClick={() => {
                                                            setGender(0);
                                                        }}
                                                    />
                                                </div>
                                                <div className="select-none text-neutral-700">
                                                    Nữ
                                                </div>
                                            </label>

                                            <label className="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-1 md:py-3 md:shadow-sm">
                                                <div className="text-amber-600 mr-3">
                                                    <input
                                                        type="radio"
                                                        x-model="gender"
                                                        value={2}
                                                        className="form-radio focus:outline-none focus:shadow-outline"
                                                        onClick={() => {
                                                            setGender(2);
                                                        }}
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
                                            htmlFor="dob"
                                            className="block mb-2 text-sm font-bold text-neutral-700"
                                        >
                                            Sinh nhật
                                        </label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="date"
                                                className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                placeholder="Nhập theo định dạng: ngày/tháng/năm"
                                                name="dob"
                                                value={dob}
                                                onChange={(e) => {
                                                    setDob(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-bold text-neutral-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            placeholder=""
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 text-sm font-bold text-neutral-700"
                                        >
                                            Số điện thoại
                                        </label>
                                        <input
                                            type="phone"
                                            required
                                            className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            placeholder=""
                                            name="phone"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="address"
                                            className="block mb-2 text-sm font-bold text-neutral-700"
                                        >
                                            Địa chỉ
                                        </label>
                                        <input
                                            type="adress"
                                            className="mb-4 w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            placeholder=""
                                            name="address"
                                            value={address}
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }}
                                        />
                                        <div className="grid md:grid-cols-3 gap-2 items-center md:justify-between">
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
                                                        citiesList.map(
                                                            (city) => (
                                                                <option
                                                                    value={
                                                                        city.id
                                                                    }
                                                                    key={
                                                                        city.id
                                                                    }
                                                                >
                                                                    {city.name}
                                                                </option>
                                                            )
                                                        )}
                                                </select>
                                            </div>

                                            <div className="w-full">
                                                <select
                                                    defaultValue={0}
                                                    id="district"
                                                    className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm"
                                                    onChange={(e) => {
                                                        setDistrict(
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    <option value={0} disabled>
                                                        Quận/Huyện
                                                    </option>
                                                    {districtsList &&
                                                        districtsList.map(
                                                            (district) => (
                                                                <option
                                                                    value={
                                                                        district.id
                                                                    }
                                                                    key={
                                                                        district.id
                                                                    }
                                                                >
                                                                    {
                                                                        district.name
                                                                    }
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
                                                        wardsList.map(
                                                            (ward) => (
                                                                <option
                                                                    value={
                                                                        ward.id
                                                                    }
                                                                    key={
                                                                        ward.id
                                                                    }
                                                                >
                                                                    {ward.name}
                                                                </option>
                                                            )
                                                        )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="username"
                                            className="block mb-2 text-sm font-bold text-neutral-700"
                                        >
                                            Tên đăng nhập
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            id="username"
                                            className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            placeholder=""
                                            name="username"
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <PasswordInputStrengthMeter
                                        password={password}
                                        setPassword={setPassword}
                                    />
                                </div>
                            )}
                            <div className="flex justify-between gap-x-4 mt-6">
                                <div className="w-1/2">
                                    <button
                                        className={`${
                                            registerStep > 1 &&
                                            registerStep < lastStep
                                                ? "visible"
                                                : "invisible"
                                        } w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-neutral-600  hover:bg-neutral-100 font-medium border`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setRegisterStep(registerStep - 1);
                                        }}
                                    >
                                        Trở về
                                    </button>
                                </div>
                                <div className="w-1/2 text-right">
                                    {registerStep === 1 && (
                                        <button
                                            className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-amber-500 hover:bg-amber-600 font-medium"
                                            type="button"
                                            onClick={handleGoNextStep}
                                        >
                                            Tiếp theo
                                        </button>
                                    )}

                                    {registerStep === 2 && (
                                        <button
                                            className="w-36 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-amber-500 hover:bg-amber-600 font-medium"
                                            onClick={() => handleSubmit()}
                                        >
                                            Hoàn thành
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
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
            </div>
        </div>
    );
}
