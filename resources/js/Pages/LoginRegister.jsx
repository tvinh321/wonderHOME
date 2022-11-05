import React, { useState, useEffect } from "react";
import LoginForm from "../Components/LoginRegister/LoginForm";
import axios from "axios";
import RegisterForm from "../Components/LoginRegister/RegisterForm";

export default function LoginRegister() {
    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <div className="px-6 my-12">
            {isLoginForm ? (
                <LoginForm setIsLoginForm={setIsLoginForm} />
            ) : (
                <RegisterForm setIsLoginForm={setIsLoginForm} />
            )}
        </div>
    );
}
