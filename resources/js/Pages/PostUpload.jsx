import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UploadForm from "../Components/PostUpload/UploadForm";

export default function PostUpload() {
    return (
        <>
            <Header />
            <body>
                <UploadForm />
            </body>
            <Footer />
        </>
    );
}
