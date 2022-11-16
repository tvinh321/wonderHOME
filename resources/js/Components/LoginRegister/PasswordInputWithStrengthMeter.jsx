import React, { useEffect, useState } from "react";

export default function PasswordInputWithStrengMeter({ password, setPassword }) {
    const minLength = 8;
    const digitReg = new RegExp("[0-9]+"); // should contain at least one digit
    const lowerCaseReg = new RegExp("[a-z]+"); // should contain at least one lower case
    const upperCaseReg = new RegExp("[A-Z]+"); // should contain at least one upper case
    const specialCharReg = new RegExp('[!@#$%^&*(),.?":{}|<>]+'); // should contain at least one special character

    const [passwordValue, setPasswordValue] = useState({
        password: "",
        strength: 0,
        strengthText: "",
        strengthColor: "white",
        strengthLength: 0,
        strengthCharsValid: [false, false, false, false], // digit, lower case, upper case, special char
    });

    const [showPasswordField, setShowPasswordField] = useState(false);
    const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);

    useEffect(() => {
        setPassword(passwordValue.password);
    }, [passwordValue]);

    const validatePasswordStrong = (value) => {
        if (!value) {
            setPasswordValue({
                password: "",
                strength: 0,
                strengthText: "",
                strengthColor: "white",
                strengthCharsValid: [false, false, false, false],
            });
            return;
        }

        const digitCheck = digitReg.test(value);
        const lowerCaseCheck = lowerCaseReg.test(value);
        const upperCaseCheck = upperCaseReg.test(value);
        const specialCharCheck = specialCharReg.test(value);

        if (value.length < minLength)
            setPasswordValue({
                password: value,
                strength: 1,
                strengthText: "Mật khẩu quá yếu",
                strengthColor: "red",
                strengthCharsValid: [
                    digitCheck,
                    lowerCaseCheck,
                    upperCaseCheck,
                    specialCharCheck,
                ],
            });
        else {
            if (
                (digitCheck || lowerCaseCheck || upperCaseCheck) &&
                !(digitCheck && lowerCaseCheck && upperCaseCheck)
            ) {
                setPasswordValue({
                    password: value,
                    strength: 2,
                    strengthText: "Mật khẩu yếu",
                    strengthColor: "orange",
                    strengthCharsValid: [
                        digitCheck,
                        lowerCaseCheck,
                        upperCaseCheck,
                        specialCharCheck,
                    ],
                });
            } else if (
                digitCheck &&
                lowerCaseCheck &&
                upperCaseCheck &&
                specialCharCheck
            ) {
                setPasswordValue({
                    password: value,
                    strength: 4,
                    strengthText: "Mật khẩu mạnh",
                    strengthColor: "green",
                    strengthCharsValid: [
                        digitCheck,
                        lowerCaseCheck,
                        upperCaseCheck,
                        specialCharCheck,
                    ],
                });
            } else if (
                digitCheck &&
                lowerCaseCheck &&
                upperCaseCheck &&
                specialCharCheck
            ) {
                setPasswordValue({
                    password: value,
                    strength: 4,
                    strengthText: "Mật khẩu mạnh",
                    strengthColor: "green",
                    strengthCharsValid: [
                        digitCheck,
                        lowerCaseCheck,
                        upperCaseCheck,
                        specialCharCheck,
                    ],
                });
            } else {
                setPasswordValue({
                    password: value,
                    strength: 3,
                    strengthText: "Mật khẩu trung bình",
                    strengthColor: "yellow",
                    strengthCharsValid: [
                        digitCheck,
                        lowerCaseCheck,
                        upperCaseCheck,
                        specialCharCheck,
                    ],
                });
            }
        }
    };

    return (
        <>
            <div className="mb-5"></div>
            <label
                for="password"
                className="block mb-2 text-sm font-bold text-neutral-700"
            >
                Thiết lập mật khẩu
            </label>
            <div className="text-neutral-600 mt-2 mb-4 text-sm font-semibold">
                Vui lòng tạo mật khẩu bao gồm các ký tự sau:
                <ul className="list-disc text-sm ml-4 mt-2">
                    <li
                        style={{
                            color: `${
                                passwordValue.strengthCharsValid[1]
                                    ? "green"
                                    : "red"
                            }`,
                        }}
                    >
                        chữ thường
                    </li>
                    <li
                        style={{
                            color: `${
                                passwordValue.strengthCharsValid[2]
                                    ? "green"
                                    : "red"
                            }`,
                        }}
                    >
                        chữ in hoa
                    </li>
                    <li
                        style={{
                            color: `${
                                passwordValue.strengthCharsValid[0]
                                    ? "green"
                                    : "red"
                            }`,
                        }}
                    >
                        số
                    </li>
                    <li
                        style={{
                            color: `${
                                passwordValue.strengthCharsValid[3]
                                    ? "green"
                                    : "red"
                            }`,
                        }}
                    >
                        ký tự đặc biệt
                    </li>
                </ul>
            </div>
            <div className="relative mb-2">
                <input
                    type={showPasswordField ? "text" : "password"}
                    id="password"
                    required
                    className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder=""
                    onChange={(e) => {
                        validatePasswordStrong(e.target.value);
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
            <div className="flex justify-between items-center">
                <div className="flex gap-x-1 items-center h-1 w-3/4">
                    {[0, 1, 2, 3, 4].map((index) => {
                        return (
                            <div
                                className="w-full px-1 h-1 pl-6 rounded-xl"
                                style={{
                                    background: ` ${
                                        index < passwordValue.strength
                                            ? passwordValue.strengthColor
                                            : "white"
                                    }`,
                                }}
                            ></div>
                        );
                    })}
                </div>

                <p style={{ color: `${passwordValue.strengthColor}` }}>
                    {passwordValue.strengthText}
                </p>
            </div>
            <div className="mb-5">
                <label
                    for="password"
                    className="block mb-2 text-sm font-bold text-neutral-700"
                >
                    Xác nhận mật khẩu
                </label>
                <input
                    type="password"
                    className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder=""
                    required
                    onChange={(e) => {
                        if (e.target.value === passwordValue.password) {
                            setIsConfirmedPassword(true);
                        } else setIsConfirmedPassword(false);
                    }}
                />
                <p
                    className="mt-2 text-right"
                    style={{
                        color: `${isConfirmedPassword ? "green" : "red"}`,
                    }}
                >
                    {passwordValue.password
                        ? isConfirmedPassword
                            ? "Mật khẩu khớp"
                            : "Mật khẩu không khớp"
                        : ""}
                </p>
            </div>
        </>
    );
}
