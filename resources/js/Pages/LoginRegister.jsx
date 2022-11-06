import React, { useState, useEffect } from "react";
import LoginForm from "../Components/LoginRegister/LoginForm";
import axios from "axios";
import RegisterForm from "../Components/LoginRegister/RegisterForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function LoginRegister() {
    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <>
            <Header />
            <div className="px-6 my-12">
                {isLoginForm ? (
                    <LoginForm setIsLoginForm={setIsLoginForm} />
                ) : (
                    <RegisterForm setIsLoginForm={setIsLoginForm} />
                )}
            </div>

            <Footer />
        </>
    );
}
