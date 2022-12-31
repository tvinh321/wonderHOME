import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import LoginRegister from "./Pages/LoginRegister";
import PostUpload from "./Pages/PostUpload";
import Chat from "./Pages/Chat";
import Search from "./Pages/Search";
import Agency from "./Pages/Agency";
import ChatBubbleList from "./Components/ChatBubbleList";
import Guidance from "./Pages/Guidance";

export function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <ChatBubbleList />
                            </>
                        }
                    />
                    <Route
                        path="/dang-nhap"
                        element={
                            <>
                                <LoginRegister />
                                <ChatBubbleList />
                            </>
                        }
                    />
                    <Route
                        path="/thong-tin/:id"
                        element={
                            <>
                                <Details />
                                <ChatBubbleList />
                            </>
                        }
                    />
                    <Route
                        path="/dang-tin"
                        element={
                            <>
                                <PostUpload />
                                <ChatBubbleList />
                            </>
                        }
                    />
                    <Route path="/chat" element={<Chat />} />
                    <Route
                        path="/tim-kiem"
                        element={
                            <>
                                <Search />
                                <ChatBubbleList />
                            </>
                        }
                    />
                    <Route
                        path="/chuyen-gia"
                        element={
                            <>
                                <Agency />
                                <ChatBubbleList />
                            </>
                        }
                    />
                    <Route path="/huong-dan" element={<Guidance />} />
                </Routes>
            </Router>
        </>
    );
}
