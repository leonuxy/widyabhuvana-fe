<template>
    <div class="container mx-auto px-4 py-20">
        <div class="flex justify-between place-content-evenly">
                <img src="/img/svg/arrow_left_alt.svg" @click="goBack" alt="Back Icon" width="24" height="24">
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Belajar
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    50 Poin
                </div>
            </div>
        </div>

        <div class="mt-6 text-center text-balance relative">
            <div class="progress-container">
                <div class="progress-bar-text-small bg-amber-400 py-1 px-3 text-xs text-white font-bold">3 dari 5</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" :style="{ width: '60%' }"></div>
                </div>
            </div>
            <h3 class="font-bold text-2xl text-secondaryBlue mt-4">Definisi</h3>
            <h1 class="font-bold text-3xl mb-3 text-secondaryBlue">Cerita Pendek</h1>
            <div class="text-content mb-6">
                Lengkapi definisi cerita pendek dengan pilihan yang tersedia!
            </div>
        </div>

        <div class="content mx-auto">
            <div class="definition-text text-center italic">
                Menurut (Lado et al., 2016) Cerpen adalah sebuah cerita pendek yang bersifat
                <span class="underline">_____</span> sehingga termasuk dalam bentuk prosa naratif fiktif.
            </div>
        </div>

        <div class="underline-text">
            <p><span class="underline">_____________________________________________</span></p>
            <p><span class="underline">_____________________________________________</span></p>
            <p><span class="underline">_____________________________________________</span></p>
        </div>

        <div class="button-group">
            <NuxtLink to="/flow/game_quiz">
                <button class="option-button option-button-blue">Anonim</button>
            </NuxtLink>
            <NuxtLink to="/flow/game_quiz">
                <button class="option-button option-button-blue">Khayal</button>
            </NuxtLink>
            <NuxtLink to="/flow/game_quiz">
                <button class="option-button option-button-blue">Fakta</button>
            </NuxtLink>
        </div>
        
    </div>
    <NavBottom />
</template>

<!-- <script>
export default {
    name: 'DefinisiCeritaPendekPage',
    methods: {
        selectOption(option) {
            // Tambahkan logika untuk menangani opsi yang dipilih
            console.log('Selected option:', option);
        }
    }
};
</script> -->

<script>
export default {
  name: 'Game',
  methods: {
    goBack() {
      // Logic untuk kembali ke halaman sebelumnya
      this.$router.go(-1); // Gunakan $router.go untuk kembali ke halaman sebelumnya
    }
  }
};
</script>
<style>
.progress-container {
    display: flex;
    align-items: flex-start;
    position: relative;
    height: 30px; /* Sesuaikan dengan tinggi kontainer */
}

.progress-bar-text-small {
    color: #0b0b0c;
    font-size: 12px;
    margin-left: 1px;
    font-weight: bold;
    background-color: #ffa228;
    border-radius: 5px 5px 0 0;
    position: absolute;
    top: -15px; /* Sesuaikan dengan posisi yang diinginkan */
    left: 0;
    padding: 5px 10px;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background-color: #EEEEEE;
    border-radius: 0 5px 5px 0; /* Hanya sudut kanan yang dibulatkan */
    display: flex;
    align-items: center;
    margin-top: 10px; /* Sesuaikan dengan posisi yang diinginkan */
}

.progress-bar-fill {
    background-color: #f1d020;
    height: 100%;
    border-radius: 5px 0 0 5px;
}

.content {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

.text-content {
    font-size: 16px;
    color: #242F3E;
    margin-bottom: 20px;
}

.definition-text {
    font-size: 16px;
    color: #000000;
    margin-bottom: 20px;
}

.underline-text {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
.icon-container {
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.option-button {
    background-color: #ffa228;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 5px;
}
</style>

<style scoped>
.option-button {
    background-color: #ffa228;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 5px;
}

.option-button-blue {
    background-color: #1a435b;
}

.option-button-blue:hover {
    background-color: #1A365D;
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>
