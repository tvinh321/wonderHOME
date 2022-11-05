import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/react" element={<Home />} />
                <Route path="/react/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
}
