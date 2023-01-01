import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PostCard from "../Components/PostCard";

import Ad from "../../../public/images/Ad.jpg";

const ContractPosts = [
    {
        id: 1,
        title: "HỢP ĐỒNG MÔI GIỚI MUA BÁN BẤT ĐỘNG SẢN",
        rating: 5,
        img: "https://cdn.thuvienphapluat.vn/images/logo_xuan.png",
        description:
            "Hợp đồng mua bán nhà là một văn bản rất quan trọng – vì nhà cửa luôn là tài sản lớn của cả một đời người. Ngoài việc phải tuân thủ các qui định mang tính bắt buộc như : phải được lập thành văn bản, công chứng, làm thủ tục sang tên … tất cả mọi chi tiết khác có liên quan đều phải được các bên trao đổi và ghi nhận cụ thể, chính xác trong hợp đồng.",
        link: "https://thuvienphapluat.vn/hopdong/87/HOP-DONG-MOI-GIOI-MUA-BAN-BAT-DONG-SAN",
        author: "Thư viện Pháp luật",
        date: "",
    },
    {
        id: 2,
        title: "Mẫu hợp đồng mua bán nhà đất mới nhất năm 2022",
        rating: 5,
        img: "https://image.luatvietnam.vn/uploaded/665twebp/images/original/2021/04/14/hop-dong-mua-ban-nha_1404145949.png",
        description:
            "Hợp đồng mua bán nhà là một văn bản rất quan trọng – vì nhà cửa luôn là tài sản lớn của cả một đời người. Ngoài việc phải tuân thủ các qui định mang tính bắt buộc như : phải được lập thành văn bản, công chứng, làm thủ tục sang tên … tất cả mọi chi tiết khác có liên quan đều phải được các bên trao đổi và ghi nhận cụ thể, chính xác trong hợp đồng.",
        link: "https://luatminhkhue.vn/hop-dong-mua-ban-nha.aspx#1-mau-hop-dong-mua-ban-nha-moi-nhat",
        author: "Luật sư Lê Minh Trường",
        date: "22/06/2022",
    },
    {
        id: 3,
        title: "Mẫu hợp đồng mua bán nhà đất viết tay thông dụng hiện nay",
        rating: 4.5,
        img: "https://sudospaces.com/ketoanleanh/2020/10/hop-dong-mua-ban-nha-dat.png",
        description:
            "Một hợp đồng mua bán nhà đất được viết như thế nào? Tham khảo trước các mẫu hợp đồng mua bán nhà đất dưới đây sẽ giúp các bạn nắm được những quy định của một hợp đồng mua bán nhà đất trên thực tế, từ đó có thể nắm được quyền lợi, trách nhiệm và nghĩa vụ của 2 bên ký kết hợp đồng.",
        link: "https://ketoanleanh.edu.vn/kinh-nghiem-ke-toan/mau-hop-dong-mua-ban-nha-dat-viet-tay-thong-dung-hien-nay.html",
        author: "Th.S Lê Thị Ánh - CEO Trung tâm Lê Ánh",
        date: "13/12/2021",
    },
];

export default function ContractGuidance() {
    return (
        <>
            <Header />
            <body>
                <div className="mt-10 mx-36 mb-16">
                    <h1 className="font-bold text-2xl mt-4 mb-8">
                        Mẫu hợp đồng
                    </h1>
                    <div className="flex justify-between gap-x-10">
                        <div className="w-3/4 h-full">
                            {ContractPosts.map((item) => (
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
