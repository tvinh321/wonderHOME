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
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css?family=Lexend" rel="stylesheet">
    </head>

    <body>
        <?php
            // header
            require("includes/header.php");
        ?>

        <div class="body">
          <!-- Container -->
          <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
              <!-- Row -->
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div
                  class="w-full h-auto  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                  style="background-image: url('assets/images/login.png')"
                ></div>
                <!-- Col -->
                <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 class="pt-4 text-2xl text-center">Chào mừng bạn!</h3>
                  <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div class="mb-4">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                        Tên đăng nhập
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                        Mật khẩu
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder=""
                      />
                    </div>
                    <div class="mb-4">
                      <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                      <label class="text-sm" for="checkbox_id">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <div class="mb-6 text-center">
                      <button
                        class="w-full px-4 py-2 font-bold text-white bg-amber-500 rounded-full hover:bg-amber-700 focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Đăng nhập
                      </button>
                    </div>
                    <hr class="mb-6 border-t" />
                    <div class="text-center mb-2">
                      <div
                        class="inline-block text-sm text-amber-500 align-baselin"
                        href="./register.html"
                      >
                        Chưa có tài khoản? <a class="underline text-amber-400 hover:text-amber-800">Tạo ngay</a>
                      </div>
                    </div>
                    <div class="text-center">
                      <a
                        class="inline-block text-sm text-amber-500 align-baseline hover:text-amber-800"
                        href="./forgot-password.html"
                      >
                        Quên mật khẩu
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <?php
            // footer
            require("includes/footer.php");
        ?>
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"></script>
    </body>
</html>
