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
        <?php require_once("../public/imports.php"); ?>
        <link rel="stylesheet" type="text/css" href="assets/css/home.css">
    </head>

    <body class="pt-16 md:pt-0">
        <?php
            // header
            require("includes/header.php");
        ?>

        <div class="body">
            <!-- Intro -->
            <div class="mt-5 bg-center bg-cover bg-no-repeat bg-[url('assets/images/Landing.jpg')] body-div" style="height:46rem;">
                <div class="h-full lg:w-3/5 justify-center items-center flex flex-col text-gray-100">
                    <div class="w-10/12">
                        <h1 class="font-bold text-4xl md:text-6xl leading-loose md:leading-relaxed">LỰA CHỌN TỔ ẤM CỦA RIÊNG BẠN</h1>
                        <h3 class="text-lg mt-10 leading-loose">Những ngôi nhà trong mơ đang chờ bạn sở hữu! Ở wonderHOME, nhà đẹp của bạn, thành công của chúng tôi.</h3>
                    </div>
                </div>
            </div>

            <!-- Top Screen Search Bar for Mobile -->
            <div class="fixed top-0 w-full bg-white py-2 md:hidden z-[1000]">
                <div class="flex flex-row justify-center items-center">
                    <div class="flex flex-row justify-center items-center bg-white rounded-full w-11/12 h-12">
                        <div class="flex flex-row justify-center items-center w-1/12">
                            <i class="fas fa-search text-gray-400"></i>
                        </div>
                        <div class="flex flex-row justify-center items-center w-11/12">
                            <input type="text" class="w-full h-full bg-transparent focus:outline-none" placeholder="Tìm kiếm">
                        </div>
                    </div>
                </div>
            </div>


            <!-- Search Bar -->
            <div class="md:flex justify-center items-center hidden">
                <div class="z-50 absolute p-5 w-11/12 md:w-4/5 shadow-lg rounded-xl bg-white">        
                    <div class="relative" id="search-bar"></div>
                    
                    <script type="text/babel">
                        const SearchBar = () => {
                            const [citiesList, setCitiesList] = React.useState();
                            const [districtsList, setDistrictsList] = React.useState();
                            const [wardsList, setWardsList] = React.useState();
                            const [typesList, setTypesList] = React.useState();

                            const [title, setTitle] = React.useState("");
                            const [city, setCity] = React.useState("");
                            const [district, setDistrict] = React.useState("");
                            const [ward, setWard] = React.useState("");
                            const [price, setPrice] = React.useState([]);
                            const [area, setArea] = React.useState([]);
                            const [type, setType] = React.useState([]);
                            const [bedroom, setBedroom] = React.useState("");
                            const [direction, setDirection] = React.useState(1);

                            const [showFilters, setShowFilters] = React.useState(false);
                            const [showPropertyTypes, setShowPropertyTypes] = React.useState(false);
                            const [showLocation, setShowLocation] = React.useState(false);

                            React.useEffect(() => {
                                axios.get("/api/cities")
                                    .then(res => {
                                        setCitiesList(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })

                                axios.get("/api/types")
                                    .then(res => {
                                        setTypesList(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            }, []);

                            React.useEffect(() => {
                                axios.get("/api/districts/" + city)
                                    .then(res => {
                                        setDistrictsList(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            }, [city]);

                            React.useEffect(() => {
                                axios.get("/api/wards/" + district)
                                    .then(res => {
                                        setWardsList(res.data);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            }, [district]);

                            const handleSearch = () => {
                                let url = "/search?";

                                if (title != "") {
                                    url += "title=" + title + "&";
                                }

                                if (city != "") {
                                    url += "city=" + city + "&";
                                }

                                if (district != "") {
                                    url += "district=" + district + "&";
                                }

                                if (ward != "") {
                                    url += "ward=" + ward + "&";
                                }

                                if (price[0] != undefined) {
                                    url += "price_min=" + price[0] + "&";
                                }

                                if (price[1] != undefined) {
                                    url += "price_max=" + price[1] + "&";
                                }

                                if (area[0] != undefined) {
                                    url += "area_min=" + area[0] + "&";
                                }

                                if (area[1] != undefined) {
                                    url += "area_max=" + area[1] + "&";
                                }

                                if (type.length != 0) {
                                    url += "type=" + type + "&";
                                }

                                if (bedroom != "") {
                                    url += "bedroom=" + bedroom + "&";
                                }

                                if (direction != 1) {
                                    url += "direction=" + direction + "&";
                                }

                                window.location.href = url;
                            }

                            return (
                                <div>
                                    <div className="flex items-center justify-between gap-5">                    
                                        <form className="w-11/12 my-0">
                                            <div className="flex">
                                                <label htmlFor="search-dropdown" className="text-sm font-medium text-neutral-500 sr-only">Loại nhà</label>
                                                <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button" onClick={() => setShowPropertyTypes(prev => !prev)}>Loại nhà đất <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                                {
                                                    showPropertyTypes &&
                                                    <div className="absolute top-12 z-50 w-44 bg-white rounded divide-gray-100 shadow">
                                                    <ul className="py-1 text-sm text-neutral-900" aria-labelledby="dropdown-button">
                                                        {
                                                            typesList 
                                                            ? typesList.map((typeItem, index) => {
                                                                return (<li className="w-full rounded-t-lg border-b border-gray-200">
                                                                    <div className="flex items-center pl-3">
                                                                        <input id="house-checkbox" type="checkbox" value="" className="w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-neutral-500focus:ring-2" onClick={(e) => {
                                                                            if (e.target.checked) {
                                                                                setType([...type, typeItem.name]);
                                                                            } else {
                                                                                setType(type.filter(item => item != typeItem.name));
                                                                            }

                                                                            console.log(type);
                                                                        }} />
                                                                        <label htmlFor="house-checkbox" className="py-3 ml-2 w-full text-sm font-medium text-gray-900">{typeItem.name}</label>
                                                                    </div>
                                                                </li>)})
                                                            : (
                                                                <div className="flex items-center justify-center w-full h-20">
                                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"></path>
                                                                    </svg>
                                                                </div>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                    }
                                                
                                                <div className="relative w-full">
                                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    </div>
                                                    <input type="search" id="search-dropdown" className="block p-4 pl-10 w-full z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-50 border-l-2 border border-neutral-300" placeholder="Tìm nhà cho bạn..." required/>
                                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Tìm</button>
                                                </div>                                 
                                            </div>
                                        </form>

                                        <button className="flex items-center justify-center gap-2 w-fit text-right">
                                            <svg style={{color: "rgb(255, 191, 36)"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16"> <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" fill="#ffbf24"></path> </svg>
                                            <span onClick={() => setShowFilters(prev => !prev)} className="text-amber-500 underline w-12">Bộ lọc</span>
                                        </button>
                                    </div>

                                    {
                                        showFilters &&
                                        <div id="filterFields">
                                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">         
                                                <div className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" onClick={() => setShowLocation(prev => !prev)}>
                                                    Địa điểm
                                                </div>
                                                {
                                                    showLocation && 
                                                    // Pick 1 city and 1 district and 1 ward
                                                    <div className="absolute top-[115px] z-50 w-64 bg-white rounded divide-gray-100 shadow">
                                                        <select onChange={(e) => {
                                                            setCity(e.target.value);
                                                            setDistrict("");
                                                            setWard("");
                                                        }} className="w-full p-2 text-sm text-gray-900 bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                                            <option value="">Tỉnh/Thành phố</option>
                                                            {
                                                                citiesList 
                                                                ? citiesList.map((cityItem, index) => {
                                                                    return (<option value={cityItem.id}>{cityItem.name}</option>)
                                                                })
                                                                : (
                                                                    <div className="flex items-center justify-center w-full h-20">
                                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"></path>
                                                                        </svg>
                                                                    </div>
                                                                )
                                                            }
                                                        </select>
                                                        <select onChange={(e) => {
                                                            setDistrict(e.target.value);
                                                            setWard("");
                                                        }} className="w-full p-2 text-sm text-gray-900 bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                                            <option value="">Quận/Huyện</option>
                                                            {
                                                                districtsList 
                                                                ? districtsList.map((districtItem, index) => {
                                                                    return (<option value={districtItem.id}>{districtItem.name}</option>)
                                                                })
                                                                : (
                                                                    <div className="flex items-center justify-center w-full h-20">
                                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"></path>
                                                                        </svg>
                                                                    </div>
                                                                )
                                                            }
                                                        </select>
                                                        <select onChange={(e) => {
                                                            setWard(e.target.value);
                                                        }} className="w-full p-2 text-sm text-gray-900 bg-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                                            <option value="">Phường/Xã</option>
                                                            {
                                                                wardsList 
                                                                ? wardsList.map((wardItem, index) => {
                                                                    return (<option value={wardItem.id}>{wardItem.name}</option>)
                                                                })
                                                                : (
                                                                    <div className="flex items-center justify-center w-full h-20">
                                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"></path>
                                                                        </svg>
                                                                    </div>
                                                                )
                                                            }
                                                        </select>
                                                    </div>
                                                }
                                                

                                                <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                                <option value="" selected disabled>Mức giá</option>
                                                <option value="1">Dưới 1 tỷ</option>
                                                <option value="2">1 tỷ - 2 tỷ</option>
                                                <option value="3">2 tỷ - 3 tỷ</option>
                                                <option value="4">3 tỷ - 5 tỷ</option>
                                                <option value="5">5 tỷ - 7 tỷ</option>
                                                <option value="6">7 tỷ - 10 tỷ</option>
                                                <option value="7">Trên 10 tỷ</option>
                                                </select>

                                                <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                                <option value="" selected disabled>Diện tích</option>
                                                <option value="1">Dưới 30m2</option>
                                                <option value="2">30m2 - 50m2</option>
                                                <option value="3">50m2 - 80m2</option>
                                                <option value="4">80m2 - 100m2</option>
                                                <option value="5">100m2 - 150m2</option>
                                                <option value="6">Trên 150m2</option>
                                                </select>

                                                <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                                <option value="">Số phòng ngủ</option>
                                                <option value="1">1 phòng</option>
                                                <option value="2">2 phòng</option>
                                                <option value="3">3 phòng</option>
                                                <option value="4">4 phòng</option>
                                                <option value="5">5 phòng</option>
                                                </select>                        
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        }

                        ReactDOM.render(<SearchBar />, document.getElementById("search-bar"));
                    </script>
                </div>
            </div>

            <!-- Grid 3 Content -->
            <div class="md:relative flex justify-center items-center w-10/12 lg:w-3/5 mx-auto mt-32 md:h-56 lg:h-52 4xl:h-96">
                <div class="md:absolute md:-bottom-48 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150">
                        <img class="w-full h-50" src="assets/images/buy-a-home.jpg" alt="Buy a home">
                        <div class="p-6 pb-12">
                            <div class="font-bold text-xl mb-2">Mua Nhà</div>
                            <p class="text-gray-700 text-base">
                                Không chỉ là ngôi nhà, chúng tôi giúp bạn tìm được tổ ấm hoàn hảo cho bạn và gia đình.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150">
                        <img class="w-full" src="assets/images/sell-a-home.jpg" alt="Sell your home">
                        <div class="p-6 pb-12">
                            <div class="font-bold text-xl mb-2">Bán Nhà</div>
                            <p class="text-gray-700 text-base">
                                Chúng tôi kết nối bạn với nhiều khách hàng hơn và điều hướng việc bán nhà của bạn đến thành công.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white hover:scale-110 transition-all duration-150">
                        <img class="w-full" src="assets/images/house-agent.jpg" alt="Find an expert">
                        <div class="p-6 pb-12">
                            <div class="font-bold text-xl mb-2">Tìm Chuyên Gia</div>
                            <p class="text-gray-700 text-base">
                                Chúng tôi giúp bạn kết nối với những chuyên gia để đáp ứng yêu cầu của bạn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Advanced House Search -->
            <div class="lg:px-48 px-8 lg:pt-80 lg:pb-36 md:mt-64 mb-0 lg:my-0 my-24 py-24 bg-gray-100 w-full">
                <!-- A line w-32 with gradient from amber to purple -->
                <div class="w-32 h-1 bg-gradient-to-r from-amber-300 to-purple-700"></div>
                <h1 class="font-bold text-3xl mt-4">Bất động sản dành cho bạn</h1>

                <!-- House Selection with Grids 3 columns, 2 rows -->
                <div class="mx-auto mt-16">
                    <div id="priority-house">
                        <script type="text/babel">
                            const PriorityHouse = () => {
                                const [houseList, setHouseList] = React.useState();

                                React.useEffect(() => {
                                    axios.get("/api/properties/highest-priority")
                                        .then(res => {
                                            setHouseList(res.data);
                                        })
                                        .catch(err => {
                                            console.log(err);
                                        })
                                }, []);

                                return (<div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
                                    {houseList ? houseList.map((house, index) => {
                                        return (
                                            <a href="/thong-tin">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all duration-150 h-full relative h-[450px]">
                                                    <div className="h-56">
                                                        <img className="object-cover h-full w-full" src={`assets/images/Room${index + 1}.jpg`} alt="Sunset in the mountains" />
                                                    </div>
                                                    <div className="px-6 py-4">
                                                        <div className="font-bold text-2xl mb-2 mt-2">{house.title}</div>
                                                    </div>
                                                    <div className="grid grid-cols-3 h-16 mt-4 absolute bottom-0 w-full">
                                                        <div className="border border-gray-200 flex justify-center items-center">
                                                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-g</title><path d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" style={{ fill:'none', stroke:'#000',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px' }}/><path d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" style={{ fill:'none', stroke:'#000',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px' }}/><path d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" style={{ fill:'none', stroke:'#000',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px' }}/><path d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style={{ fill:'none', stroke:'#000',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px' }}/><path d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" style={{ fill:'none', stroke:'#000',strokeLinecap:'round',strokeLinejoin:'round',strokeWidth:'32px' }}/></svg>
                                                            <p className="font-bold text-lg">{house.num_of_bedrooms}</p>
                                                        </div>
                                                        <div className="border border-gray-200 flex justify-center items-center">
                                                            <svg className="mr-2" style={{ color: 'rgb(23, 23, 23)' }} width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#171717" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" className="ci-primary"></path> </svg>
                                                            <p className="font-bold text-lg">{house.num_of_toilets}</p>
                                                        </div>
                                                        <div className="border border-gray-200 flex justify-center items-center">
                                                            <svg className="mr-2" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,7V5h-3V2h-2v3h-4V2h-2v3H7V2H5v3H2v2h3v4H2v2h3v4H2v2h3v3h2v-3h4v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2h-3V7H22z M7,7h4v4 H7V7z M7,17v-4h4v4H7z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z"/></svg>
                                                            <p className="font-bold text-lg">4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }) : (
                                        // Loading Spinner
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                            </svg>
                                            <p className="text-gray-900">Đang tải...</p>
                                        </div>
                                    )}
                                </div>)
                            }

                            ReactDOM.render(<PriorityHouse />, document.getElementById('priority-house'));
                        </script>
                    </div>
                </div>
            </div>

            <!-- Giới thiệu -->
            <?php require("components/home/GioiThieu.php"); ?>

            <div class="bg-black flex flex-col justify-center items-center py-24">
                <div class="px-8 xl:w-1/3 flex flex-col justify-center items-center">
                    <div class="w-32 h-1 bg-gradient-to-r from-amber-400 to-black"></div>
                    <h1 class="font-bold mt-4 text-gray-100 text-center" style="font-size:40px;">Cần hỗ trợ trong việc mua bán nhà ?</h1>
                    <p class="text-xl mt-4 leading-relaxed text-gray-400 font-light text-center">wonderHOME có đội ngũ những chuyên gia trong lĩnh vực sẵn sàng hỗ trợ bạn trong tư vấn, mua bán và những vấn đề pháp lý. Hãy liên hệ ngay với chúng tôi!</p>
                    <button class="flex items-center justify-center mt-8 bg-amber-400 px-8 py-4 text-neutral-900 rounded-tr-xl w-fit hover:bg-amber-300 transition-all duration-150">
                        <p class="font-bold">Đọc tiếp</p>
                    </button>
                </div>
            </div>

            <!-- 3 grid -->
            <div class="flex flex-col justify-center items-center w-10/12 md:w-4/5 mx-auto mt-16 mb-24">
                <div class="w-64 h-1 bg-gradient-to-r from-amber-300 to-purple-700 mb-10"></div>
                <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-12 xs:gap-5 w-full mt-24">
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <p class="text-2xl p-4 font-bold h-64 text-center align-middle">"Dễ xài"</p>
                        <div class="px-6 py-12 bg-white">
                            <!-- Avatar and name -->
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="assets/images/Avatar Image.png" alt="Avatar of Jonathan Reinink">
                                <div class="text-md">
                                    <p class="text-neutral-900 leading-none">Nguyễn Thị Thuý Loan</p>
                                    <p class="text-gray-600">12/1/2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <p class="text-2xl p-4 font-bold h-64 text-center align-middle">"Tính tương tác cao"</p>
                        <div class="px-6 py-12 bg-black">
                            <!-- Avatar and name -->
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="assets/images/Avatar Image.png" alt="Avatar of Jonathan Reinink">
                                <div class="text-md">
                                    <p class="text-gray-100 leading-none">Nguyễn Thị Thuý Loan</p>
                                    <p class="text-gray-400">12/1/2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg overflow-hidden shadow-lg bg-white">
                        <p class="text-2xl p-4 font-bold h-64 text-center align-middle">"Giúp tôi chọn được ngôi nhà phù hợp"</p>
                        <div class="px-6 py-12 bg-white">
                            <!-- Avatar and name -->
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="assets/images/Avatar Image.png" alt="Avatar of Jonathan Reinink">
                                <div class="text-md">
                                    <p class="text-neutral-900 leading-none">Nguyễn Thị Thuý Loan</p>
                                    <p class="text-gray-600">12/1/2021</p>
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
        <script>
            function showFilter() {
                var x = document.getElementById("filterFields");
                if (x.classList.contains("hidden")) {
                    x.classList.remove("hidden");
                    x.classList.add("inline-block");
                } else {
                    x.classList.add("hidden");
                    x.classList.remove("inline-block");
                }
                }
        </script>
    </body>
</html>