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
        <meta name="viewport" content="width=device-width, initial-scale=0.9">
        <?php require_once("../public/imports.php"); ?>
    </head>

    <body>
        <?php
            // header
            require("includes/header.php");
        ?>

        <div class="body">
          <!-- Container -->
          <div class="container mx-auto" x-data="{ showSignin: true }" >
            <div class="px-6 my-12 flex justify-center">
              <!-- Row -->
              <div class="w-full xl:w-3/4 lg:w-11/12 flex justify-center items-center">
                <!-- Col -->
                <div
                  class="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                >
                  <img src="/assets/images/login.png"/> 
                </div>
                <!-- Col -->
                <div id="form-container" class="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none"></div>

                <script type="text/babel">
                  const LoginForm = ({setIsSignin}) => {
                    return (<div>
                        <h3 className="pt-4 text-md text-center text-neutral-500">Rất vui được gặp lại bạn!</h3>
                        <h3 className="pt-1 text-center text-2xl">Đăng nhập để tiếp tục</h3>
                        <form className="px-8 pt-6 pb-8 mb-4  rounded">
                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-neutral-700" htmlFor="username">
                              Tên đăng nhập
                            </label>
                            <input
                              className="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="username"
                              type="text"
                              placeholder=""
                            />
                          </div>

                          <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                              Mật khẩu
                            </label>
                            <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="password"
                              type="password"
                              placeholder=""
                            />
                          </div>
                          
                          <div className="mb-4">
                            <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                            <label className="text-sm" htmlFor="checkbox_id">
                              Ghi nhớ đăng nhập
                            </label>
                          </div>
                          <div className="mb-6 text-center">
                            <button
                              className="w-full px-4 py-2 font-bold text-white bg-amber-500 rounded-full hover:bg-amber-700 focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={() => {
                                axios.post("/api/login", {
                                  username: document.getElementById("username").value,
                                  password: document.getElementById("password").value
                                }).then((response) => {
                                  if (response.data.status == "success") {
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("user", response.data.user);
                                    window.location.href = "/";
                                  } else {
                                    alert("Sai tài khoản hoặc mật khẩu");
                                  }
                                });
                              }}
                            >
                              Đăng nhập
                            </button>
                          </div>
                          <hr className="mb-6 border-t" />
                          <div className="text-center mb-2">
                            <div
                              className="inline-block text-sm text-neutral-700 align-baselin"
                            >
                              Chưa có tài khoản? <a onClick={() => setIsSignin(false)} className="underline text-amber-400 hover:text-amber-800 cursor-pointer">Tạo ngay</a>
                            </div>
                          </div>
                          <div className="text-center">
                            <a
                              className="inline-block text-sm text-amber-500 align-baseline hover:text-amber-800 cursor-pointer"
                            >
                              Quên mật khẩu
                            </a>
                          </div>
                        </form>
                      </div>)
                  }

                  const FormRender = () => {
                    const [isSignin, setIsSignin] = React.useState(true);
                    const [registerStep, setRegisterStep] = React.useState(1);

                    const [citiesList, setCitiesList] = React.useState();
                    const [districtsList, setDistrictsList] = React.useState();
                    const [wardsList, setWardsList] = React.useState();

                    const [city, setCity] = React.useState("");
                    const [district, setDistrict] = React.useState("");
                    const [ward, setWard] = React.useState("");

                    const lastStep = 3

                    React.useEffect(() => {
                      axios.get("/api/cities")
                          .then(res => {
                              setCitiesList(res.data);
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

                    return (
                      <div>
                        {isSignin ? <LoginForm setIsSignin={setIsSignin}/> :  <div>
                        <h3 class="pt-4 text-md text-center text-neutral-500">Xin chào bạn mới!</h3>
                        <h3 class="pt-1 text-center text-2xl">Đăng ký để tiếp tục</h3>
                        <div class="text-center my-2">
                        <div
                          class="inline-block text-sm text-neutral-700 align-baselin"
                        >
                          Đã có tài khoản? <a onClick={() => {setIsSignin(true)}} class="underline text-amber-400 hover:text-amber-800 cursor-pointer">Đăng nhập</a>
                        </div>
                      </div>
                      <div class="px-8 pt-6 pb-8 mb-4 rounded">
                          <div>	
                            <div class="border-b-2 py-4">
                              <div class="uppercase tracking-wide text-xs font-bold text-neutral-500 mb-1 leading-tight" x-text="`Bước: ${step}/3`"></div>
                              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div class="flex-initial w-3/4">
                                  {
                                    registerStep == 2
                                    ? <div>
                                    <div class="text-md font-bold text-neutral-700 leading-tight">Tài khoản</div>
                                  </div>
                                  : <div>
                                    <div class="text-md font-bold text-neutral-700 leading-tight">Thông tin cá nhân</div>
                                  </div>
                                  }
                                </div>

                                <div class="flex items-center md:w-64">
                                  <div class="w-full rounded-full mr-2">
                                    <div class="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"></div>
                                  </div>
                                  <div class="text-xs w-10 text-neutral-600" x-text="parseInt(step / 3 * 100) +'%'"></div>
                                </div>
                              </div>
                            </div>

                            <div class="py-10">	
                              {
                                registerStep == 1 ? 
                              <div>
                                <div class="mb-5 grid md:grid-cols-2 gap-2 items-center justify-between gap-x-4">
                                  <div>
                                    <label for="lastname" class="block mb-2 text-sm font-bold text-neutral-700" >Họ</label>
                                    <input type="text"
                                      class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      placeholder=""/>
                                  </div>
                                  <div>
                                    <label for="firstname" class="block mb-2 text-sm font-bold text-neutral-700">Tên</label>
                                    <input type="text"
                                      class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      placeholder=""/>
                                  </div>
                                </div>
                    
                                <div class="mb-5">
                                  <label for="gender" class="block mb-2 text-sm font-bold text-neutral-700" >Giới tính</label>                           
                                  <div class="flex">
                                    <label
                                      class="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-3 shadow-sm mr-4">
                                      <div class="text-amber-600 mr-3">
                                        <input type="radio" x-model="gender" value="Male" class="form-radio focus:outline-none focus:shadow-outline" />
                                      </div>
                                      <div class="select-none text-neutral-700">Nam</div>
                                    </label>

                                    <label
                                      class="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-3 shadow-sm">
                                      <div class="text-amber-600 mr-3">
                                        <input type="radio" x-model="gender" value="Female" class="form-radio focus:outline-none focus:shadow-outline" />
                                      </div>
                                      <div class="select-none text-neutral-700">Nữ</div>
                                    </label>

                                    <label
                                      class="flex justify-start items-center text-truncate rounded-lg  pl-4 pr-6 py-3 shadow-sm">
                                      <div class="text-amber-600 mr-3">
                                        <input type="radio" x-model="gender" value="Other" class="form-radio focus:outline-none focus:shadow-outline" />
                                      </div>
                                      <div class="select-none text-neutral-700">Khác</div>
                                    </label>
                                  </div>
                                </div>

                                <div class="mb-5">
                                  <label for="dob" class="block mb-2 text-sm font-bold text-neutral-700">Sinh nhật</label>
                                  <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                      <svg aria-hidden="true" class="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input datepicker datepicker-autohide type="text" class="w-full px-3 pl-10 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="dd/MM/YYYY"/>
                                  </div>
                                </div>

                                <div class="mb-5">
                                  <label for="email" class="block mb-2 text-sm font-bold text-neutral-700">Email</label>
                                  <input type="email"
                                    class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""/>
                                </div>

                                <div class="mb-5">
                                  <label for="phone" class="block mb-2 text-sm font-bold text-neutral-700">Số điện thoại</label>
                                  <input type="phone"
                                    class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""/>
                                </div>

                                <div class="mb-5">
                                  <label for="address" class="block mb-2 text-sm font-bold text-neutral-700">Địa chỉ</label>
                                  <input type="adress"
                                    class="mb-4 w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""/>
                                  <div class="grid md:grid-cols-3 gap-2 items-center justify-between">                             
                                    <div class="w-full">       
                                      <select id="city" class="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm" onChange={(e) => {
                                        setCity(e.target.value)
                                      }}>
                                        <option selected disabled>Tỉnh/Thành</option>
                                        {citiesList && citiesList.map((city) => (
                                          <option value={city.id}>{city.name}</option>
                                        ))}
                                      </select>
                                    </div>

                                    <div class="w-full">       
                                      <select id="district" class="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm" onChange={(e) => {
                                        setDistrict(e.target.value)
                                      }}>
                                        <option selected disabled>Quận/Huyện</option>
                                        {districtsList && districtsList.map((district) => (
                                          <option value={district.id}>{district.name}</option>
                                        ))}
                                      </select>
                                    </div>

                                    <div class="w-full">       
                                      <select id="ward" class="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-sm" onChange={(e) => {
                                        setWard(e.target.value)
                                      }}>
                                        <option selected disabled>Phường/Xã</option>
                                        {wardsList && wardsList.map((ward) => (
                                          <option value={ward.id}>{ward.name}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                : registerStep === 2 ?                            
                                <div>
                                  <div class="mb-5">
                                    <label for="username" class="block mb-2 text-sm font-bold text-neutral-700" >Tên đăng nhập</label>
                                    <input 
                                      type="text"
                                      id="username"
                                      class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      placeholder=""/>
                                  </div>
                                  <div class="mb-5">
                                    <label for="password" class="block mb-2 text-sm font-bold text-neutral-700">Thiết lập mật khẩu</label>
                                    <div class="text-neutral-600 mt-2 mb-4 text-sm font-bold">
                                      Vui lòng tạo mật khẩu bao gồm các ký tự sau:
                                      <ul class="list-disc text-sm ml-4 mt-2">
                                        <li>chữ thường</li>
                                        <li>số</li>
                                        <li>chữ in hoa</li>
                                        <li>ký tự đặc biệt</li>
                                      </ul>	
                                    </div>
                                    <input 
                                      type="password"
                                      class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      placeholder=""/>
                                  </div>
                                  <div class="mb-5">
                                    <label for="password" class="block mb-2 text-sm font-bold text-neutral-700">Xác nhận mật khẩu</label>
                                    <input type="password"
                                      class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      placeholder=""/>
                                  </div>
                              </div> :   
                              <div class="p-10 flex items-center shadow justify-between">
                                <div>
                                  <svg class="mb-4 h-20 w-20 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                                  <h2 class="text-xl mb-4 text-neutral-800 text-center font-bold">Đăng ký thành công</h2>
                                  <div class="text-neutral-600 mb-8">
                                    Cám ơn bạn đã trở thành thành viên của wonderHOME.com. Chúng tôi vừa gửi mail xác nhận qua tài khoản email bạn cung cấp. Vui lòng bấm vào đường link để kích hoạt tài khoản.
                                  </div>
                                  <button 
                                    class="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-neutral-600 hover:bg-neutral-100 font-medium border" 
                                    onClick={()=>{setIsSignin(true); setRegisterStep(1)}}
                                    >Đăng nhập</button>
                                </div>
                              </div>
                            }
                            </div>
                            </div>
                            <div class={`${registerStep === lastStep ? "hidden" : "block"} mx-auto px-4`}>
                              <div class="flex justify-between">
                                <div class="w-1/2">
                                  <button 
                                    class={`${registerStep > 1 ? "visible" : "invisible"} w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-neutral-600  hover:bg-neutral-100 font-medium border`} 
                                    onClick={() => setRegisterStep(registerStep-1)}
                                  >
                                    Trở về
                                  </button>
                                </div>

                                <div class="w-1/2 text-right">
                                  {registerStep < lastStep && 
                                    <button 
                                      class="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-amber-500 hover:bg-amber-600 font-medium" 
                                      onClick={() => setRegisterStep(registerStep+1)}
                                      >
                                      Tiếp theo
                                  </button>}

                                  {registerStep === lastStep && 
                                    <button  
                                      class="w-36 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-amber-500 hover:bg-amber-600 font-medium" 
                                      onClick={() => setRegisterStep(registerStep+1)}
                                    >
                                      Hoàn thành
                                    </button>}
                                </div>
                            </div>
                            </div>
                          </div>
                          
                        </div>}
                      </div>
                    )
                  }
                  ReactDOM.render(<FormRender />, document.getElementById('form-container'))
                </script>
              </div>
            </div>
          </div>
        </div>

        <?php
            // footer
            require("includes/footer.php");
        ?>
      <script>
          const checkPasswordStrength = () => {
                var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

                let value = this.password;

                if (strongRegex.test(value)) {
                  this.passwordStrengthText = "Mật khẩu rất mạnh";
                } else if(mediumRegex.test(value)) {
                  this.passwordStrengthText = "Mật khẩu mạnh";
                } else {
                  this.passwordStrengthText = "Mật khẩu yếu";
                }
              }
	    </script>
    </body>
</html>
