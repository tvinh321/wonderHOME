import React, { useState } from "react";
import zxcvbn from "zxcvbn";

export default function PasswordInputWithStrengMeter() {
    const minStrength = 4;
    const thresholdLength = 7;

    const [passwordValue, setPasswordValue] = useState({
        password: "",
        strength: 0,
    });

    const [showPasswordField, setShowPasswordField] = useState(false);

    const validatePasswordStrong = (value) => {
        if (value.length <= thresholdLength)
            throw new Error("Password is short");
        if (zxcvbn(value).score < minStrength)
            throw new Error("Password is weak");
    };

    const passwordScore = passwordValue.strength;

    return (
        <>
            <div className="relative mb-2">
                <input
                    type={showPasswordField ? "text" : "password"}
                    id="password"
                    className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder=""
                    onChange={(e) => {
                        setPasswordValue({
                            password: e.target.value,
                            strength: e.target.value.length,
                        });
                    }}
                />
                <button
                    className="block w-7 h-7 text-center text-xl leading-0 absolute right-2 text-gray-400 focus:outline-none hover:text-indigo-500 transition-colors"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                    onClick={() => {
                        setShowPasswordField(!showPasswordField);
                    }}
                >
                    {showPasswordField ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                        >
                            {" "}
                            <g>
                                {" "}
                                <path fill="none" d="M0 0h24v24H0z" />{" "}
                                <path d="M10.13 15.842l-.788 2.94-1.931-.518.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l.9-.165A16.923 16.923 0 0 0 12 10c3.704 0 7.131-1.185 9.924-3.196l.9.164a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 0 1-3.74 0z" />{" "}
                            </g>{" "}
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                        >
                            {" "}
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />{" "}
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />{" "}
                        </svg>
                    )}
                </button>
            </div>
            <div className="flex gap-x-1 items-center h-6 w-full">
                {[0, 1, 2, 3, 4].map((index) => {
                    return (
                        <div
                            className="w-full px-1 h-2 pl-6 rounded-xl"
                            style={
                                !passwordScore
                                    ? { background: "white" }
                                    : passwordScore <= 5
                                    ? {
                                          backgroundColor: `${
                                              index < 1 ? "red" : "white"
                                          }`,
                                      }
                                    : passwordScore <= 7
                                    ? {
                                          backgroundColor: `${
                                              index < 2 ? "red" : "white"
                                          }`,
                                      }
                                    : passwordScore <= 12
                                    ? {
                                          backgroundColor: `${
                                              index < 3 ? "yellow" : "white"
                                          }`,
                                      }
                                    : { backgroundColor: "green" }
                            }
                        ></div>
                    );
                })}
            </div>
        </>
    );
}
