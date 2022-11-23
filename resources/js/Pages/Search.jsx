import React, { useEffect } from "react";

export default function Search() {
    const searchParams = new URLSearchParams(window.location.search);
    const title = searchParams.get("title");
    const ward = searchParams.get("ward");
    const district = searchParams.get("district");
    const city = searchParams.get("city");
    const price = searchParams.get("price") ? searchParams.get("price").split('-') : null;
    const area = searchParams.get("area") ? searchParams.get("area").split('-') : null;
    const type = searchParams.get("type") ? searchParams.get("type").split(',') : null;
    const bedroom = searchParams.get("bedroom");

    useEffect(() => {
        console.log(title, ward, district, city, price, area, type, bedroom);
    }, []);

    return (
        <>
            <h1>Search</h1>
        </>
    );
}