import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/react" element={<Home />} />
            </Routes>
        </Router>
    );
};