<?php
    $login = isset($_SESSION["username"]);
?>

<header>
<nav>
  <div class="mx-auto max-w-7xl pt-4 px-2 md:px-4 lg:px-8">
    <div class="relative flex h-16 items-center justify-center">
      <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="hidden md:ml-6 md:block">
          <div class="flex space-x-4">
            <?php 
              foreach ($NAVLINK_VIE as &$value) 
              echo "<a href='$value[1]' class='text-neutral-900 hover:bg-neutral-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>$value[0]</a>";
            ?>  
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <a href="">
          <img class="inline-block w-[200px]" src="assets/images/logo.png" alt="wonderHOME">
        </a>  
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-4 md:pr-0">
        <button type="button" class="hidden md:inline rounded-full p-1 mr-4 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
        </button>
        

        <button class="hidden md:flex group mr-4 text-amber-300 border border-amber-300 hover:border-transparent hover:bg-amber-300 font-bold py-2 px-4 rounded inline-flex items-center">
          <span class="text-sm group-hover:text-white mr-1">Đăng tin</span>
          <svg class="fill-amber-300 group-hover:fill-white xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"/><path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"/><rect height="2" width="8" x="7" y="9"/><polygon points="7,12 7,14 15,14 15,12 12,12"/><rect height="2" width="8" x="7" y="15"/></svg>
        </button>

        <?php  if ($login) { ?>
          <div class="relative ml-3">
          <div>
            <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Cá nhân</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Cài đặt</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Thoát</a>
          </div>
        </div>
      <?php } else { ?>
        <button class="group mr-4 bg-amber-300 text-neutral-900 hover:bg-amber-300 font-bold py-2 px-4 rounded inline-flex items-center">
          <span class="hidden md:inline text-sm group-hover:text-white mr-1">Đăng ký / Đăng nhập</span>
          <svg class="fill-neutral-900 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/> </g> </svg>  
        </button>
      <?php } ?>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="md:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
      <?php 
        foreach ($NAVLINK_VIE as &$value) 
          echo "<a href='' class='text-neutral-900 hover:bg-neutral-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>$value[0]</a>";
      ?>     
    </div>
  </div>
</nav>
</header>
