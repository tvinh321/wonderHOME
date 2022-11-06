import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import LoginRegister from "./Pages/LoginRegister";
import PostUpload from "./Pages/PostUpload";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/react" element={<Home />} />
                <Route path="/react/dang-nhap" element={<LoginRegister />} />
                <Route path="/react/thong-tin/:id" element={<Details />} />
                <Route path="/react/dang-tin" element={<PostUpload />} />
            </Routes>
        </Router>
    );
}
