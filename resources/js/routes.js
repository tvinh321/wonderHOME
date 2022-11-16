import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import LoginRegister from "./Pages/LoginRegister";
import PostUpload from "./Pages/PostUpload";
import Chat from "./Pages/Chat";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dang-nhap" element={<LoginRegister />} />
                <Route path="/thong-tin/:id" element={<Details />} />
                <Route path="/dang-tin" element={<PostUpload />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
}
