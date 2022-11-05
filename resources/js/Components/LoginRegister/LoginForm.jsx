import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoginForm({ setIsLoginForm }) {
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
                    <form className="px-8 pt-6 pb-8 mb-4  rounded">
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
                                placeholder=""
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
                                placeholder=""
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
                                type="button"
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
