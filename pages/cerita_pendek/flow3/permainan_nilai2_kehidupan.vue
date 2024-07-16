<template>
    <div class="container mx-auto px-4 py-20">
        <div class="flex justify-between items-center mb-4">
            <img src="/img/svg/arrow_left_alt.svg" @click="goBack" alt="Back Icon" width="24" height="24" />
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Belajar
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    30 Poin
                </div>
            </div>
        </div>

        <div class="quiz-title">
            <span class="quiz-box">Kuis</span>
            <span class="ml-2">| Nilai-Nilai Kehidupan</span>
        </div>

        <div class="mt-6 text text-balance relative">
            <div class="progress-container">
                <div class="progress-bar-text-small bg-amber-400 py-1 px-3 text-xs text-white font-bold">2 dari 10</div>
                <div class="progresss-bar-text-small py-1 px-3 text-xs text-white font-bold">Level 2</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" :style="{ width: '30%' }"></div>
                </div>
            </div>
        </div>
        <p class="text-sm mb-2 font-bold">
            Bacalah kutipan cerpen dengan seksama, kemudian tentukan nilai yang terkandung dalam kutipan tersebut!
        </p>
        <div class="bg-red-800 text-white p-4 rounded-lg mb-4">
            <p>
                “Setiap malam, aku selalu memanjatkan doa kepada Tuhan agar diberi kekuatan dalam menjalani hidup yang
                penuh dengan rintangan ini. Aku yakin bahwa dengan keimanan dan keteguhan hati, aku dapat melewati semua
                cobaan ini.”
            </p>
        </div>
        <p class="font-bold">Apa nilai kehidupan yang terkandung dalam kutipan cerita pendek di atas?</p>

        <div class="grid grid-cols-2 gap-4 mt-4">
            <router-link to="/flow3/definisi_nilai2_kehidupan" class="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-center">
                Nilai Moral
            </router-link>
            <router-link to="/flow3/definisi_nilai2_kehidupan" class="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-600 text-center">
                Nilai Budaya
            </router-link>
            <router-link to="/flow3/definisi_nilai2_kehidupan" class="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 text-center">
                Nilai Agama
            </router-link>
            <router-link to="/flow3/definisi_nilai2_kehidupan" class="bg-green-800 text-white py-2 rounded-lg hover:bg-green-600 text-center">
                Nilai Sosial
            </router-link>
        </div>
    </div>
    <NavBottom />
</template>

<script>
export default {
  name: 'Nilai',
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

.progresss-bar-text-small {
    color: #0b0b0c;
    font-size: 12px;
    margin-left: 110px;
    font-weight: bold;
    position: absolute;
    top: -15px; /* Sesuaikan dengan posisi yang diinginkan */
    left: auto;
    right: 0;
    padding: 5px 10px;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
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

.container {
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 100px; /* Sesuaikan dengan posisi yang diinginkan */

}

.quiz-title {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.quiz-box {
    background-color: #0c0c0c;
    color: #fdac15;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
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

.option-button-blue {
    background-color: #1a435b;
}

.option-button-blue:hover {
    background-color: #1a365d;
}
</style>
