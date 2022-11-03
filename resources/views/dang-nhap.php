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
                  <img src="assets/images/login.png"/> 
                </div>
                <!-- Col -->
                <div id="login-register" class="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none"></div>

                <script type="text/babel">
                  const LoginRegister = () => {
                    const [screen, setScreen] = React.useState("signin");
                    const [registerScreen, setRegisterScreen] = React.useState(1);

                    const [citiesList, setCitiesList] = React.useState();
                    const [districtsList, setDistrictsList] = React.useState();
                    const [wardsList, setWardsList] = React.useState();

                    const [city, setCity] = React.useState("");
                    const [district, setDistrict] = React.useState("");
                    const [ward, setWard] = React.useState("");

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
                      {screen == "signin" && <div>
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
                          Chưa có tài khoản? <a onClick={() => setScreen('register')} className="underline text-amber-400 hover:text-amber-800 cursor-pointer">Tạo ngay</a>
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
                  </div>}
                  {screen == "register" && 
                    <div>
                  <h3 class="pt-4 text-md text-center text-neutral-500">Xin chào bạn mới!</h3>
                    <h3 class="pt-1 text-center text-2xl">Đăng ký để tiếp tục</h3>
                    <div class="text-center my-2">
                        <div
                          class="inline-block text-sm text-neutral-700 align-baselin"
                        >
                          Đã có tài khoản? <a onClick={() => {setScreen('signin')}} class="underline text-amber-400 hover:text-amber-800 cursor-pointer">Đăng nhập</a>
                        </div>
                      </div>
                    <div x-data="multiStepForm()" x-cloak class="px-8 pt-6 pb-8 mb-4 rounded">
                        <div>	
                          <div class="border-b-2 py-4">
                            <div class="uppercase tracking-wide text-xs font-bold text-neutral-500 mb-1 leading-tight" x-text="`Bước: ${step}/3`"></div>
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div class="flex-initial w-3/4">
                                {
                                  registerScreen == 2
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
                              registerScreen == 1
                              ? <div>
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
                              :                             <div>
                                <div class="mb-5">
                                  <label for="username" class="block mb-2 text-sm font-bold text-neutral-700" >Tên đăng nhập</label>
                                  <input type="text"
                                    class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder=""/>
                                </div>
                              <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-bold text-neutral-700">Thiết lập mật khẩu</label>
                                <div class="text-neutral-600 mt-2 mb-4">
                                  Vui lòng tạo mật khẩu bao gồm các ký tự sau:
                                  <ul class="list-disc text-sm ml-4 mt-2">
                                    <li>chữ thường</li>
                                    <li>số</li>
                                    <li>chữ in hoa</li>
                                    <li>ký tự đặc biệt</li>
                                  </ul>	
                                </div>
                                <input type="password"
                                  class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  placeholder=""/>
                              </div>
                              <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-bold text-neutral-700">Xác nhận mật khẩu</label>
                                <input type="password"
                                  class="w-full px-3 py-2 text-sm leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  placeholder=""/>
                              </div>
                            </div>
                            }
                          </div>
                          </div>
                        </div>
                        </div>}
                      </div>
                    )
                  }

                  ReactDOM.render(<LoginRegister />, document.getElementById('login-register'))
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
          function multiStepForm() {
            return {
              step: 1, 
              passwordStrengthText: '',
              togglePassword: false,

              image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QBCRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAkAAAAMAAAABAAAAAEABAAEAAAABAAAAAAAAAAAAAP/bAEMACwkJBwkJBwkJCQkLCQkJCQkJCwkLCwwLCwsMDRAMEQ4NDgwSGRIlGh0lHRkfHCkpFiU3NTYaKjI+LSkwGTshE//bAEMBBwgICwkLFQsLFSwdGR0sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLP/AABEIAdoB2gMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APTmZsnmk3N60N1NJTELub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lFAC7m9aNzetJRQAu5vWjc3rSUUALub1o3N60lJQA7c3rSbm9aSigBdzetG4+tJRQAZPrRuPrSUUALub1/lRub1pKSgBdzUbm9aSigBdzetG5vX+VJSUALub1/lUu5qhqXj1oAG6mkpW6mkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASiiigAooooAKSiigAooo+lACUZoooAKKKSgAo/rRSUALUlRVJz60AObqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAKKKKACiikoAKSlooASiiigA+lHpRQaACkoooATmilpPegBP/ANdS5HrUdSfL7UAObqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKSiigAooooAKKKKAEooooASij60UAFFFHpQAUmaKPxoAKSlpPWgA/wAmk/pS/Sk47dqADpUvPvUXrUn4H8qAHt1NJSt1NJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFISFBJIAHUk4FAC0VTlv4EyEBc+3C/nVSS9uX6MEHonX8zQBrEqvLEAe5A/nUTXVqvWVfwyf5VjFmY5Ykn3JP86SmBrG/tB3c/RTTf7QtvST8hWXRQBqi/te+8f8AAc09by0b/loB/vAiseigDeV43+66t9CDTq5/p04+lTJdXMfSQkej/MP1oA2qKoR6gpwJUK/7Scj8utXEkjkG5GDD2P8AMUgH0UUUAFFFJQAUUUUAFFFJQAtJRRQAUlFFABR2oo+lAB1pKKP60AFFFFACUHjNH/66KAEpaSj/APVQAc0/I9KZUufpQA5uppKVuppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACimsyopZiAo5JNZlxePLlI8rH0J/ib60AWp72KLKph3/wDHR9TWdLNNMcuxPoOij6Co6KYBRRRQAUUUUAFFFFABRRRQAUUUUAFKruhDIxUjuDikooA0IL/os4/4Gv8AUVfBVgCpBB6Ecg1gVLBcSwH5eUP3lPQ/SgDaoqOKaOZdyH/eB6qfepKQBRRRQAlFFFABSUUUAFFFFABRRSf5NABxR6e1FJQAcUUUnP6UALSf5/GjvRz+FAB06d6KT6UGgA96kyf8mo//ANdP59P1oAlbqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmu6RqzucKvJNKSACScADJJ7Csi6uDO2BkRqflHr7mgBLi5edu4QH5V/qagoopgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUUUAPjkkiYOhwR+RHoa14J0nTI4YffX0NYtPileJ1dDyOoPQj0NAG7SUyKVJkDr36juD6U+kAUhoooAKKKKACij/JpKACj/PNFFABScUelFACUdqP8mj+dABn9KMjij60d+tACf5FH5Uf59qOOlACfhUn40zmn4oAlbqaSlbqaSgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKhuJhDEz/xfdQerGgCpfXGT5CHgf6w+/8AdqhQSSSScknJPqTRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACkoooAKKKKACiiigCe2nMEnP+rbhx6e9bHoQevT3zXP1p2M+9DE33k5X/AHf/AK1AF2koNFIAoopKAFpKKPSgApPX0pf8mkoAKKTPP1paAE+lFFIT/ntQAelHAoz0oz/hQAd6T155oooAKk2+wqLPt/8AWqTj1P5GgCZuppKVuppKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArJvpd8uwH5Y+P+BHrWnK4jjkc/wAKkj69qwiSSSepJJ+ppgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSUUUAFFFFABRRSUAFFFFABT4pDFIkg/hPPuO4plFAG8CGAYchgCD7HmlqpYy74dp6xnH4HkVapALSUUUAH+NFFJQAc0f5+tHFJQAUUUepoAP/r0nP/1sUH1ozQAUnOaPwo9OlAAcd6T60tJQAHn+lSZPotR/55qTJ/yKAJm6mkpW6mkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKWoPiNE/vtk/RazKt6g2Zgv9xB+Z5qpTAKKKKACiiigAooooAKKKKA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',
              password: '',
              gender: 'Male',

              checkPasswordStrength() {
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
            }
          }
	    </script>
    </body>
</html>
