import React, { useState } from "react";
import axios from "axios";

export default function LoginForm({ setIsLoginForm }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const digitReg = new RegExp("[0-9]+"); // should contain at least one digit
    const lowerCaseReg = new RegExp("[a-z]+"); // should contain at least one lower case
    const upperCaseReg = new RegExp("[A-Z]+"); // should contain at least one upper case
    const specialCharReg = new RegExp('[!@#$%^&*(),.?":{}|<>]+'); // should contain at least one special character

    const handleLogin = async (event) => {
        event.preventDefault();
        setMessage("");

        if (password.length < 8) {
            setMessage("Mật khẩu phải có ít nhất 8 ký tự");
            return;
        }

        const digitCheck = { key: "chữ số", value: digitReg.test(password) };
        const lowerCaseCheck = {
            key: "chữ thường",
            value: lowerCaseReg.test(password),
        };
        const upperCaseCheck = {
            key: "chữ hoa",
            value: upperCaseReg.test(password),
        };
        const specialCharCheck = {
            key: "ký tự đặc biệt",
            value: specialCharReg.test(password),
        };
        if (
            !lowerCaseCheck.value ||
            !upperCaseCheck.value ||
            !digitCheck.value ||
            !specialCharCheck.value
        ) {
            setMessage(
                `Mật khẩu của bạn còn thiếu ${[
                    lowerCaseCheck,
                    upperCaseCheck,
                    digitCheck,
                    specialCharCheck,
                ]
                    .map((i) => (i.value ? null : i.key))
                    .filter((i) => i !== null)
                    .join(", ")}`
            );
            return;
        }
        let response = null;
        try {
            response = await axios.post("/api/login", { username, password });
        } catch (e) {
            response = e.response;
        } finally {
            if (response.data.status === "success") {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                window.location.href = "/";
            } else {
                console.log(response.data.message);
                setMessage(response.data.message || "Có lỗi xảy ra");
            }
        }
        setPassword("");
    };

    return (
        <div className="px-6 my-12 flex justify-center">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center items-center">
                <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                    <img src="/assets/images/login.png" />
                </div>
                <div
                    id="form-container"
                    className="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none"
                >
                    <h3 className="pt-4 text-md text-center text-neutral-500">
                        Rất vui được gặp lại bạn!
                    </h3>
                    <h3 className="pt-1 text-center text-2xl">
                        Đăng nhập để tiếp tục
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
                        className="px-8 pt-6 pb-8 mb-4  rounded"
                        onSubmit={handleLogin}
                    >
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold text-neutral-700"
                                htmlFor="username"
                            >
                                Tên đăng nhập
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                required
                                placeholder=""
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700"
                                htmlFor="password"
                            >
                                Mật khẩu
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                required
                                placeholder=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="checkbox_id"
                            />
                            <label className="text-sm" htmlFor="checkbox_id">
                                Ghi nhớ đăng nhập
                            </label>
                        </div>

                        <div className="mb-6 text-center">
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-amber-500 rounded-full hover:bg-amber-700 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Đăng nhập
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="text-center mb-2">
                            <div className="inline-block text-sm text-neutral-700 align-baselin">
                                Chưa có tài khoản?{" "}
                                <a
                                    onClick={() => setIsLoginForm(false)}
                                    className="underline text-amber-400 hover:text-amber-800 cursor-pointer"
                                >
                                    Tạo ngay
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <a className="inline-block text-sm text-amber-500 align-baseline hover:text-amber-800 cursor-pointer">
                                Quên mật khẩu
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
