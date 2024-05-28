<template>
    <div class="container mx-auto px-4 grid h-svh content-center">
        <img src="/img/login-hero.svg" alt="">
        <h3 class="font-bold text-3xl">Belajar itu<br> Menyenangkan!</h3>
        <p class="text-sm italic mt-2">Tentukan cara belajarmu sendiri<br> dan rasakan keseruan belajar sambil bermain.</p>
    
        <div class="grid grid-row gap-4 mt-4">
            <NuxtLink to="/login" class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl">
                Masuk
            </NuxtLink>
            <NuxtLink to="/signup" class="text-secondaryBlue block w-full text-center font-semibold p-4 bg-white rounded-xl text-xl">
                Mendaftar
            </NuxtLink>
        </div>
    </div>
</template>