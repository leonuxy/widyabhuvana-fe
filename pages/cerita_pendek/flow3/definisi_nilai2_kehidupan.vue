<template>
    <div class="bg-lightBlue-100 min-h-screen flex flex-col items-center">
      <div class="container mx-auto px-4 py-20">
        <div class="flex justify-between place-content-evenly">
                <img src="/img/svg/arrow_left_alt.svg" @click="goBack" alt="Back Icon" width="24" height="24">
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Berlatih
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    50 Poin
                </div>
            </div>
        </div>
  
        <div class="mt-6 text-center">
          <h1 class="font-bold text-2xl text-secondaryBlue">Nilai-Nilai</h1>
          <h2 class="font-bold text-3xl mb-3 text-secondaryBlue">Kehidupan</h2>
        </div>
  
        <div class="w-full flex flex-col items-center mt-6">
          <div class="bg-secondaryBlue p-4 rounded-lg w-full max-w-lg text-white text-center mb-4">
            Setelah kamu belajar dan berlatih, maka apa itu nilai-nilai kehidupan dalam cerpen?          </div>
          <textarea
            class="w-full max-w-lg p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondaryBlue"
            rows="6"
            placeholder="Tulis pendapatmu..."
          ></textarea>
          <NuxtLink to="/flow3/final_score_kehidupan">
            <button class="bg-secondaryBlue text-white font-bold py-2 px-8 rounded-lg mt-4">
            Kirim
          </button>
            </NuxtLink>
        </div>
      </div>
      <NavBottom/>
    </div>
  </template>
  
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
  <style scoped>
  .bg-lightBlue-100 {
    background-color: #E3F2FD;
  }
  
  .bg-secondaryBlue {
    background-color: #476bc7;
  }
  
  .bg-amber-400 {
    background-color: #FFB300;
  }
  
  .container {
    background-color: #E3F2FD;
  }
  </style>
  