<div class="flex flex-col lg:flex-row lg:h-[700px]">
    <div class="w-full lg:w-1/2">
        <img class="object-cover w-full lg:h-full" src="assets/images/family.jpg" alt="Sunset in the mountains">
    </div>
    <div class="w-full lg:w-1/2 px-12 flex py-24 flex-col">
        <div class="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700 pt-1"></div>
        <h1 class="font-bold mt-4 text-2xl">wonder<span class="text-amber-400">HOME</span></h1>
        <h1 class="font-bold mt-4 text-3xl leading-relaxed">Những ngôi nhà chất lượng cho khách hàng</h1>              
        <div id="aboutTabContainer" class="flex items-center justify-center max-w-screen-sm mx-auto"></div>
    </div>
</div>

<script type="text/babel">
    const AboutTab = () => {
        const [tab, setTab] = React.useState(1);
        return (
            <div class="container mx-auto flex flex-col justify-center items-stretch py-2 sm:py-8">
                <div class="flex justify-start -space-x-px z-10">
                    <a onClick={() => setTab(1)} className={`${tab === 1 ? "bg-amber-500 text-white" : " focus:outline-none focus:shadow-outline text-neutral-900"} block align-middle px-6 py-4 text-sm font-semibold leading-none rounded-tl-lg border border-b-0 border-gray-400 outline-none shadow-none transition-all duration-300`}>Giới thiệu</a>
                    <a onClick={() => setTab(2)} className={`${tab === 2 ? "bg-amber-500 text-white" : " focus:outline-none focus:shadow-outline text-neutral-900"} block align-middle px-6 py-4 text-sm font-semibold leading-none border border-b-0 border-gray-400 outline-none shadow-none transition-all duration-300`}>Nhiệm vụ</a>
                    <a onClick={() => setTab(3)} className={`${tab === 3 ? "bg-amber-500 text-white" : " focus:outline-none focus:shadow-outline text-neutral-900"} block align-middle px-6 py-4 text-sm font-semibold leading-none rounded-tr-lg border border-b-0 border-gray-400 outline-none shadow-none transition-all duration-300`}>Cam kết</a>
                </div>

                <div className="transition-all duration-300">
                    <div className={`${tab === 1 ? "block" : "hidden"} z-0 -mt-px px-6 py-8 border border-neutral-400 rounded-md rounded-tl-none bg-gradient-to-b from-white via-gray-100 to-gray-200 transition-all duration-300`}>
                        <h1 class="text-amber-500 text-2xl font-bold leading-tighter">Về chúng tôi - wonderHOME</h1>
                        <p class="mt-4 text-base leading-relaxed">
                            wonderHOME là công ty Dịch vụ bất động sản hoạt động trên nền tảng công nghệ hiện đại giúp người dùng trải nghiệm giao dịch bất động sản tốt nhất. wonderHOME chuẩn hóa quy trình giao dịch và cung cấp giải pháp tối ưu giúp cho giao dịch mua bán nhà đất và bất động sản an toàn, hiệu quả và tiết kiệm thời gian.
                        </p>
                    </div>
                    <div className={`${tab === 2 ? "block" : "hidden"} z-0 -mt-px px-6 py-8 border border-neutral-400 rounded-md rounded-tl-none bg-gradient-to-b from-white via-gray-100 to-gray-200 transition-all duration-300`}>
                        <h1 class="text-amber-500 text-2xl font-bold leading-tighter">Mang đến bất động sản "thật" cho bạn</h1>
                        <p class="mt-4 text-base leading-snug">Lorem ipsum dolor sit maiores ipsum illum enim repudiandae quaerat tenetur sunt dolore, voluptatem blanditiis quo doloremque commodi illo? Fugiat reiciendis aliquam omnis aperiam beatae? Officia, quas consequuntur numquam laboriosam dolorem totam est, vitae at nam iste autem inventore eveniet amet ex minima in asperiores debitis repudiandae eligendi. Sint esse dolorem est aperiam. Delectus!</p>
                    </div>
                    <div className={`${tab === 3 ? "block" : "hidden"} z-0 -mt-px px-6 py-8 border border-neutral-400 rounded-md rounded-tl-none bg-gradient-to-b from-white via-gray-100 to-gray-200 transition-all duration-300`}>
                        <h1 class="text-amber-500 text-2xl font-bold leading-tighter">Đảm bảo an toàn cho bạn</h1>
                        <p class="mt-4 text-base leading-snug">Lorem ipsum dolor sit amet consectet officia maiores ipsum illum enim repudiandae quaerat tenetur sunt dolore, voluptatem blanditiis quo doloremque commodi illo? Fugiat reiciendis aliquam omnis aperiam beatae? Officia, quas consequuntur numquam laboriosam dolorem totam est, vitae at nam iste autem inventore eveniet amet ex minima in asperiores debitis repudiandae eligendi. Sint esse dolorem est aperiam. Delectus!</p>
                    </div>
                </div>
            </div>
        );
    }
    ReactDOM.render(<AboutTab />, document.getElementById('aboutTabContainer'));
</script>