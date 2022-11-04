import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/react" element={<Home />} />
                <Route path="/react/about" element={<About />} />
            </Routes>
        </Router>
    );
};