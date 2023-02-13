<script setup></script>

<template>
  <div class="w-screen h-screen bg-cover bg-center bg-[url('./assets/welcome_bg.png')]">
    <div class="px-4 py-4 w-screen border-b border-gray-900 w-[99rem] mx-auto">
      <img src="../assets/redberry.png" alt="Logo" />
    </div>
    <div class="text-white flex items-center justify-center h-5/6">
      <RouterLink to="/personal" class="bg-gray-900 absolute px-24 py-2 rounded-md">რეზიუმეს დამატება</RouterLink>
      <div class="ml-32 mt-32">
        <img src="../assets/agency.png" class="w-60 h-60 ml-64" alt="logo" />
      </div>
    </div>
  </div>
</template>
