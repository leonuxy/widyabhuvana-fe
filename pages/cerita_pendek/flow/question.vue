<template>
    <div class="container mx-auto px-10 py-20">
        <div class="flex justify-between place-content-evenly">
            <NuxtLink to="/flow/game_quiz">
                <img src="/img/svg/arrow_left_alt.svg" alt="">
            </NuxtLink>
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Bermain
                </div>
                <div
                    class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    20 Poin
                </div>
            </div>
        </div>

        <div class="mt-6 text-center text-balance">
            <h1 class="font-bold text-2xl text-secondaryBlue">Permainan</h1>
            <h2 class="font-bold text-3xl mb-3 text-secondaryBlue">Mencocokan</h2>
        </div>

        <div class="columns">
            <div class="column">
                <h2>Ahli</h2>
                <button class="option-button align-center">Lado</button>
                <button class="option-button align-center">Mansyur</button>
                <button class="option-button align-center">Mutia</button>
                <button class="option-button align-center">Februona
                    Anding</button>
                <button class="option-buttons align-center">Rifky
                    Fadilah</button>
            </div>
            <div class="column">
                <h2>Definisi</h2>
                <button class="option-buttons align-right">Cerpen kurang dari 10.000 kata dan
                    kurang dari 10 halaman serta ceritanya berfokus pada satu konflik pokok yang dialami oleh seorang
                    tokoh.</button>
                <button class="option-button align-right">Cerpen menceritakan persoalan hidup
                    manusia dan solusinya.</button>
                <button class="option-button align-right">Cerpen merupakan karya sastra
                    naratif fiktif atau khayal dan tak nyata dan ceritanya terinspirasi dari kisah hidup seorang
                    manusia.</button>
                <button class="option-button align-right">Cerpen berbentuk prosa yang
                    menggambarkan persoalan hidup manusia tentang kehidupan.</button>
                <button class="option-button align-right">Cerpen adalah sebuah cerita pendek
                    yang bersifat khayal sehingga termasuk dalam bentuk prosa naratif fiktif.</button>
            </div>
        </div>
        <div class="flex flex-row-reverse">
            <!-- <div class="md:w-40"> -->
                
                <NuxtLink to="/flow/definisi">
                    <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                        Selanjutnya!
                        <!-- <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span> -->
                    </button>
                </NuxtLink>
            <!-- </div> -->
        </div>
    </div>
    <NavBottom />
</template>

<style scoped>
.columns {
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.option-button,
.option-buttons {
    background-color: #fdf9f9;
    color: #000000;
    padding: 10px 20px;
    border: none;
    justify-content: right;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px 0;
    text-align: center;
    white-space: normal;
    /* Membuat teks wrap */
    width: 100%;
    /* Memastikan tombol mengambil lebar penuh kolom */
    max-width: 80%;
    /* Batasi lebar maksimal tombol */
    font-size: 12px;
    /* Ukuran font teks */
}

.option-buttons {
    background-color: rgb(255, 193, 24);
}

.option-button:hover,
.option-buttons:hover {
    background-color: rgb(230, 127, 43);
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.wide-button {
    width: 100%;
    max-width: 800px;
    /* Anda bisa menyesuaikan nilai ini sesuai kebutuhan */
}
</style>
