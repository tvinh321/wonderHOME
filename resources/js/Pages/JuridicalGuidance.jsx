import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PostCard from "../Components/PostCard";

import Ad from "../../../public/images/Ad.jpg";

const JuridicalPosts = [
    {
        id: 1,
        title: "Mua bán nhà đất được hiểu như thế nào?",
        rating: 5,
        img: "https://cdn.thuvienphapluat.vn/images/logo_xuan.png",
        description:
            "Hợp đồng mua bán nhà là một văn bản rất quan trọng – vì nhà cửa luôn là tài sản lớn của cả một đời người. Ngoài việc phải tuân thủ các qui định mang tính bắt buộc như : phải được lập thành văn bản, công chứng, làm thủ tục sang tên … tất cả mọi chi tiết khác có liên quan đều phải được các bên trao đổi và ghi nhận cụ thể, chính xác trong hợp đồng.",
        link: "https://thuvienphapluat.vn/phap-luat/cum-tu-mua-ban-nha-dat-duoc-hieu-nhu-the-nao-dieu-kien-de-mua-ban-nha-dat-doi-voi-ca-ben-mua-va-ben-135.html",
        author: "Lê Trần Quang Nhật - Thư viện Pháp luật",
        date: "",
    },

    {
        id: 2,
        title: "NHỮNG ĐIỀU CẦN BIẾT TRƯỚC KHI KÝ HỢP ĐỒNG MUA BÁN ĐẤT ĐAI",
        rating: 4.5,
        img: "data:image/jpeg;base64,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",
        description:
            "Giao dịch về đất ngày càng phổ biến nên nhu cầu tìm hiểu những quy định pháp lý liên quan cũng vì thế mà tăng lên.",
        link: "https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/mau-hop-dong-mua-ban-nha-dat-viet-tay-thong-dung-hien-nay.html",
        author: "Thạc Sĩ - Luật Sư Phan Mạnh Thăng",
        date: "01/08/2022",
    },
    {
        id: 3,
        title: "Hướng dẫn thủ tục mua bán đất đai mới nhất năm 2022",
        rating: 5,
        img: "https://image.luatvietnam.vn/uploaded/665twebp/images/original/2021/04/14/hop-dong-mua-ban-nha_1404145949.png",
        description:
            "Việc mua bán, chuyển nhượng đất đai phải được thực hiện theo đúng quy trình mà pháp luật đã quy định để đảm bảo tính hợp pháp và tránh được những tranh chấp pháp lý trong tương lai, luật sư hướng dẫn cụ thể:",
        link: "https://luatminhkhue.vn/huong-dan-quy-trinh--thu-tuc-mua-ban-dat-dai-.aspx",
        author: "Luật sư Lê Minh Trường",
        date: "07/07/2022",
    },
];

export default function JuridicalGuidance() {
    return (
        <>
            <Header />
            <body>
                <div className="mt-10 mx-36 mb-16">
                    <h1 className="font-bold text-2xl mt-4 mb-8">
                        Tư vấn pháp lý
                    </h1>
                    <div className="flex justify-between gap-x-10">
                        <div className="w-3/4 h-full">
                            {JuridicalPosts.map((item) => (
                                <PostCard post={item} />
                            ))}
                        </div>
                        <div className="w-1/4">
                            <img src={Ad} alt="" className="" />
                        </div>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
}
