<?php
session_start();
?>
<?php
    require_once("../public/settings.php");
?>


<!DOCTYPE html>
<html>
    <head>
        <title>wonderHOME - Biến tổ ấm trong mơ thành hiện thực</title>
        <meta charset = "UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css?family=Lexend" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="assets/css/home.css">
    </head>

    <body>
        <?php
            // header
            require("includes/header.php");
        ?>

        <div class="body">
            <!-- Intro -->
            <div class="mt-5 bg-center bg-cover bg-no-repeat bg-[url('assets/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.png')] body-div" style="height:46rem;">
                <div class="h-full lg:w-3/5 justify-center items-center flex flex-col text-gray-100">
                    <div class="w-10/12">
                        <h1 class="font-bold text-4xl md:text-6xl leading-loose md:leading-relaxed">LỰA CHỌN TỔ ẤM CỦA RIÊNG BẠN</h1>
                        <h3 class="text-lg mt-10 leading-loose">Những ngôi nhà trong mơ đang chờ bạn sở hữu! Ở wonderHOME, nhà đẹp của bạn, thành công của chúng tôi.</h3>
                    </div>
                </div>
            </div>

            <!-- Search Bar -->
            <div class="h-20">
                <div class="flex justify-center items-center">
                    <div class="absolute w-10/12 md:w-3/5 shadow-lg rounded-xl">
                        <div class="flex justify-between items-center h-full">
                            <div class="flex justify-center items-center w-4/6 lg:w-10/12 h-20">
                                <input type="text" class="pl-10 w-full h-20 rounded-l-xl text-xl" placeholder="Tìm kiếm">
                            </div>
                            <div class="flex justify-center items-center w-2/6 lg:w-2/12 h-20">
                                <button class="w-full h-full bg-amber-300 text-neutral-900 rounded-r-xl text-lg font-bold">
                                <div class="flex items-center justify-center">
                                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                                        <span>Tìm kiếm</span>
                                </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grid 3 Content -->
            <div class="md:relative flex justify-center items-center w-10/12 lg:w-3/5 mx-auto mt-8 md:h-56 lg:h-52 4xl:h-96">
                <div class="md:absolute md:-bottom-48 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="w-full h-50" src="assets/images/buy-a-home.jpg" alt="Buy a home">
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2">Mua Nhà</div>
                            <p class="text-gray-700 text-base">
                                Không chỉ là ngôi nhà, chúng tôi giúp bạn tìm được tổ ấm hoàn hảo cho bạn và gia đình.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="w-full" src="assets/images/sell-a-home.jpg" alt="Sell your home">
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2">Bán Nhà</div>
                            <p class="text-gray-700 text-base">
                                Chúng tôi kết nối bạn với nhiều khách hàng hơn và điều hướng việc bán nhà của bạn đến thành công.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <img class="w-full" src="assets/images/house-agent.jpg" alt="Find an expert">
                        <div class="px-6 py-4">
                            <div class="font-bold text-2xl mb-2">Tìm Chuyên Gia</div>
                            <p class="text-gray-700 text-base">
                                Chúng tôi sẽ giúp bạn kết nối với những chuyên gia để đáp ứng tất cả yêu cầu của bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Advanced House Search -->
            <div class="lg:px-48 px-8 lg:pt-80 lg:pb-36 md:my-64 lg:my-0 my-24 py-24 bg-gray-100 w-full">
                <!-- A line w-32 with gradient from amber to purple -->
                <div class="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                <h1 class="font-bold text-4xl mt-4">Tìm nhà theo sở thích của bạn</h1>

                <!-- Advanced Search Bar -->
                <div class="flex justify-center items-center my-24 md:my-8 lg:mt-12 lg:mb-24 h-72 lg:h-48 lg:h-fit">
                    <div class="w-full">
                        <!-- Filter Select Bar with 4 criteria -->
                        <div class="grid lg:grid-cols-4 md:grid-cols-2 md:gap-4 lg:gap-0 lg:h-20 text-neutral-900 lg:shadow-xl">
                            <div class="w-full h-20 mt-4">
                                <select class="w-full h-full rounded-xl lg:rounded-sm lg:rounded-l-xl p-5 shadow-lg lg:shadow-none">
                                    <option value="0" disabled selected>Vị trí</option>
                                    <option value="1">Hà Nội</option>
                                    <option value="2">Hồ Chí Minh</option>
                                    <option value="3">Đà Nẵng</option>
                                </select>
                            </div>
                            <div class="w-full h-20 mt-4">
                                <select class="w-full h-full rounded-xl lg:rounded-sm lg:rounded-xl-none text-lg p-5 shadow-lg lg:shadow-none">
                                    <option value="0" disabled selected>Kiểu nhà</option>
                                    <option value="1">Nhà riêng</option>
                                    <option value="2">Nhà chung cư / Căn hộ</option>
                                    <option value="3">Nhà biệt thự</option>
                                </select>
                            </div>
                            <div class="w-full h-20 mt-4">
                                <select class="w-full h-full rounded-xl lg:rounded-sm text-lg p-5 shadow-lg lg:shadow-none">
                                    <option value="0" disabled selected>Mức giá</option>
                                    <option value="1">Dưới 500 triệu</option>
                                    <option value="2">500 triệu - 1 tỷ</option>
                                    <option value="3">1 tỷ - 3 tỷ</option>
                                    <option value="4">3 tỷ - 5 tỷ</option>
                                    <option value="5">5 tỷ - 10 tỷ</option>
                                    <option value="6">Trên 10 tỷ</option>
                                    <option value="7">Thỏa thuận</option>
                                </select>
                            </div>
                            <div class="w-full h-20 mt-4">
                                <select class="w-full h-full rounded-xl lg:rounded-sm lg:rounded-r-xl text-lg p-5 shadow-lg lg:shadow-none">
                                    <option value="0" disabled selected>Tiêu chí khác</option>
                                    <option value="1">Tiêu chí 1</option>
                                    <option value="2">Tiêu chí 2</option>
                                    <option value="3">Tiêu chí 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- House Selection with Grids 3 columns, 2 rows -->
                <div class="mx-auto mt-16">
                    <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img class="w-full" src="assets/images/House Example 1.png" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl mb-2 mt-2">Malto House</div>
                            </div>
                            <div class="grid grid-cols-3 h-16 mt-4">
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                    <p class="font-bold text-lg">5</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" style="color: rgb(23, 23, 23);" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"></path> </svg>
                                    <p class="font-bold text-lg">2</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>
                                    <p class="font-bold text-lg">4</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img class="w-full" src="assets/images/House Example 2.png" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl mb-2 mt-2">Malto House</div>
                            </div>
                            <div class="grid grid-cols-3 h-16 mt-4">
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                    <p class="font-bold text-lg">5</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" style="color: rgb(23, 23, 23);" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"></path> </svg>
                                    <p class="font-bold text-lg">2</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>    
                                    <p class="font-bold text-lg">4</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img class="w-full" src="assets/images/House Example 5.png" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl mb-2 mt-2">Malto House</div>
                            </div>
                            <div class="grid grid-cols-3 h-16 mt-4">
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                    <p class="font-bold text-lg">5</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" style="color: rgb(23, 23, 23);" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"></path> </svg>
                                    <p class="font-bold text-lg">2</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>
                                    <p class="font-bold text-lg">4</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img class="w-full" src="assets/images/House Example 4.png" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl mb-2 mt-2">Malto House</div>
                            </div>
                            <div class="grid grid-cols-3 h-16 mt-4">
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                    <p class="font-bold text-lg">5</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" style="color: rgb(23, 23, 23);" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"></path> </svg>
                                    <p class="font-bold text-lg">2</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>
                                    <p class="font-bold text-lg">4</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img class="w-full" src="assets/images/House Example 5.png" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl mb-2 mt-2">Malto House</div>
                            </div>
                            <div class="grid grid-cols-3 h-16 mt-4">
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                    <p class="font-bold text-lg">5</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" style="color: rgb(23, 23, 23);" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"></path> </svg>
                                    <p class="font-bold text-lg">2</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>
                                    <p class="font-bold text-lg">4</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img class="w-full" src="assets/images/House Example 1.png" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                                <div class="font-bold text-2xl mb-2 mt-2">Malto House</div>
                            </div>
                            <div class="grid grid-cols-3 h-16 mt-4">
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
                                    <p class="font-bold text-lg">5</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" style="color: rgb(23, 23, 23);" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" class="ci-primary"></path> </svg>
                                    <p class="font-bold text-lg">2</p>
                                </div>
                                <div class="border border-gray-200 flex justify-center items-center">
                                    <svg class="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>
                                    <p class="font-bold text-lg">4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Image on the left, title on the right -->
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/2">
                    <img style="height:100%;" src="assets/images/HouseLeft.jpeg" alt="Sunset in the mountains">
                </div>
                <div class="w-full lg:w-1/2 px-12 py-24 flex justify-center flex-col">
                    <div class="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                    <h1 class="font-bold mt-4" style="font-size:50px;">Tiêu đề</h1>
                    <p class="text-xl mt-4 leading-relaxed text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit voluptatem neque sed laboriosam aliquam sapiente, nam enim, cum asperiores eum fugit ea nihil? Eaque facilis placeat ipsa debitis beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit voluptatem neque sed laboriosam aliquam sapiente, nam enim, cum asperiores eum fugit ea nihil? Eaque facilis placeat ipsa debitis beatae?</p>
                    <button class="flex items-center justify-center mt-8 bg-black px-8 py-4 text-gray-200 rounded-tr-xl w-fit">
                        <p class="font-bold">Đọc tiếp</p>
                    </button>
                </div>
            </div>

            <div class="bg-black flex flex-col justify-center items-center py-24">
                <div class="px-8 xl:w-1/3 flex flex-col justify-center items-center">
                    <div class="w-32 h-1 bg-gradient-to-r from-amber-400 to-black"></div>
                    <h1 class="font-bold mt-4 text-gray-100" style="font-size:50px;">Tiêu đề</h1>
                    <p class="text-xl mt-4 leading-relaxed text-gray-400 font-light text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit voluptatem neque sed laboriosam aliquam sapiente, nam enim, cum asperiores eum fugit ea nihil? Eaque facilis placeat ipsa debitis beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit voluptatem neque sed laboriosam aliquam sapiente, nam enim, cum asperiores eum fugit ea nihil? Eaque facilis placeat ipsa debitis beatae?</p>
                    <button class="flex items-center justify-center mt-8 bg-amber-400 px-8 py-4 text-neutral-900 rounded-tr-xl w-fit">
                        <p class="font-bold">Đọc tiếp</p>
                    </button>
                </div>
            </div>

            <!-- 3 grid -->
            <div class="flex flex-col justify-center items-center w-10/12 md:w-4/5 mx-auto mt-16">
                <div class="w-64 h-1 bg-gradient-to-r from-amber-300 to-purple-700 mb-10"></div>
                <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-12 xs:gap-5 w-full mt-24">
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <p class="text-2xl font-bold h-64 text-center align-middle">"Dễ xài"</p>
                        <div class="px-6 py-12 bg-white">
                            <!-- Avatar and name -->
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="assets/images/Avatar Image.png" alt="Avatar of Jonathan Reinink">
                                <div class="text-md">
                                    <p class="text-neutral-900 leading-none">Jonathan Reinink</p>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <p class="text-2xl font-bold h-64 text-center align-middle">"Tính tương tác cao"</p>
                        <div class="px-6 py-12 bg-black">
                            <!-- Avatar and name -->
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="assets/images/Avatar Image.png" alt="Avatar of Jonathan Reinink">
                                <div class="text-md">
                                    <p class="text-gray-100 leading-none">Jonathan Reinink</p>
                                    <p class="text-gray-400">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <p class="text-2xl font-bold h-64 text-center align-middle">"Giúp tôi chọn được ngôi nhà phù hợp"</p>
                        <div class="px-6 py-12 bg-white">
                            <!-- Avatar and name -->
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="assets/images/Avatar Image.png" alt="Avatar of Jonathan Reinink">
                                <div class="text-md">
                                    <p class="text-neutral-900 leading-none">Jonathan Reinink</p>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php
            // footer
            require("includes/footer.php");
        ?>
    </body>
</html>