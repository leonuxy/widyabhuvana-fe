<template>
    <div class="container mx-auto p-4">
        <NuxtLink to="/">
            <img src="/img/svg/arrow_left_alt.svg" alt="">
        </NuxtLink>
        <div class="grid content-center">
            <img src="/img/logo.png" alt="" class="w-28 mx-auto mb-10 mt-6">
            <h3 class="font-bold text-3xl">Mendaftar</h3>
            <p class="text-sm italic">Masukkan informasi pribadi untuk mendaftar.</p>
    
            <div class="grid gap-6 mt-4">
                <FormsInput
                    label="Nama Pengguna"
                    type="text"
                    placeholder="Masukkan Nama Anda"
                    id="nama-penguna"
                />

                <FormsInput
                    label="Surat Elektronik"
                    type="email"
                    placeholder="Tuliskan Surat Elektronik"
                    id="surat-elektronik"
                />

                <FormsInput
                    label="Kata Sandi"
                    type="password"
                    placeholder="Tuliskan Kata Sandi"
                    id="kata-sandi"
                />
                
                <FormsInput
                    label="Konfirmasi Kata Sandi"
                    type="password"
                    placeholder="Konfirmasi Kata Sandi"
                    id="konfirmasi-kata-sandi"
                />
            </div>
            <a href="/login" class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4">Mendaftar</a>
        </div>
    </div>
</template>