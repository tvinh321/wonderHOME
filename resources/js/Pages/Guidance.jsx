import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PaginatedPosts from "../Components/PaginatedPosts";

const HotPosts = [
    {
        id: 1,
        title: "Bộ Xây dựng nói gì về việc Novaland kêu cứu khẩn cấp?",
        rating: 4,
        img: "https://cafebiz.cafebizcdn.vn/162123310254002176/2022/12/30/du-an-novaland-1672383041298628709733-1672387403832-1672387404283939595519.jpeg",
        description:
            "Thứ trưởng Bộ Xây dựng Nguyễn Văn Sinh cho biết Novaland cũng như nhiều doanh nghiệp khác trong cùng một thời điểm vừa trả nợ ngân hàng, vừa đáo hạn trái phiếu nên gặp khó.",
        link: "https://cafef.vn/bo-xay-dung-noi-gi-ve-viec-novaland-keu-cuu-khan-cap-20221230150332222.chn",
    },
];

export default function Guidance() {
    return (
        <>
            <Header />
            <body>
                <div className="lg:px-32 lg:pb-14 lg:my-0 lg:pt-14 w-full py-8 px-8">
                    <h1 className="font-bold text-2xl mt-4 mb-10">
                        Bài viết nổi bật
                    </h1>
                    <PaginatedPosts postList={HotPosts} />
                </div>
            </body>
            <Footer />
        </>
    );
}
