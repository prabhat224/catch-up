<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loginview from './views/loginView.vue'
import signupView from './views/signupView.vue';
import logoutView from './views/logoutView.vue';
import homeView from './views/homeView.vue';
</script>

<template>
  <div class="bg-purple-500 pl-10 pr-10 pt-3 pb-3 justify-between items-center flex">
    <RouterLink to="/">  <div class="text-white text-3xl font-bold">Logo</div>
</RouterLink>
    <div class="justify-between flex ">
       <RouterLink to="logout"><div class="cursor-pointer pl-7 pr-7 text-white rounded hover:underline">Friends</div></RouterLink>
       <RouterLink to="logout">      <div class="cursor-pointer hover:underline rounded ease-in-out pl-7 pr-7 text-white ">Community</div>
</RouterLink>
    </div>
    <!-- <div class="bg-purple-300 cursor-pointer rounded-full p-2"><img class="w-7 h-7 rounded-full"
                src="./assets/icons8-user-96.png" alt="">-->
    <div class="group inline-block">
      <button class="outline-none focus:outline-none  px-3 py-1 bg-none  rounded-sm flex items-center min-w-20">
        <span class="pr-1 font-semibold flex-1">
          <div class="bg-purple-300 cursor-pointer rounded-full p-2"><img class="w-7 h-7 rounded-full"
              src="./assets/icons8-user-96.png" alt=""></div>
        </span>
        <span>
          <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180
              transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul class="bg-purple-400 z-50 border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32">
        <RouterLink to="profile">
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Profile</li></RouterLink>
        <RouterLink to="settings"><li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Settings</li></RouterLink>
        <RouterLink to="logout"><li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Log Out</li></RouterLink>
        <RouterLink to="locations"><li class="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">Add Location</li></RouterLink>
      </ul>
    </div>

  </div>
  <RouterView />
</template>

<style scoped>
li>ul {
  transform: translatex(100%) scale(0)
}

li:hover>ul {
  transform: translatex(101%) scale(1)
}

li>button svg {
  transform: rotate(-90deg)
}

li:hover>button svg {
  transform: rotate(-270deg)
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1)
}

.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg)
}

.scale-0 {
  transform: scale(0)
}

.min-w-32 {
  min-width: 8rem
}
</style>
