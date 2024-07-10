<template>
    <div class="bg-lightBlue-100 min-h-screen flex flex-col items-center justify-center">
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="font-bold text-4xl text-secondaryBlue mb-2">Hore!</h1>
        <p class="text-lg text-secondaryBlue mb-6">Pelajaran Telah Selesai</p>
  
        <img src="@/assets/gambar/congrats.png" alt="Congrats" class="w-48 h-48 mx-auto mb-6" />
  
        <div class="flex justify-center w-full mb-6">
          <div class="flex justify-around w-full max-w-md">
            <div class="flex flex-col items-center mx-4">
              <div class="bg-red-600 text-white p-2 w-full text-center rounded-t-lg kotak">
                <p class="text-sm font-bold">TOTAL POIN</p>
              </div>
              <div class="bg-white p-4 w-full text-center rounded-b-lg shadow-md kotak">
                <p class="text-2xl font-bold text-red-600">691</p>
              </div>
            </div>
            <div class="flex flex-col items-center mx-4">
              <div class="bg-blue-600 text-white p-2 w-full text-center rounded-t-lg kotak">
                <p class="text-sm font-bold">POIN</p>
              </div>
              <div class="bg-white p-4 w-full text-center rounded-b-lg shadow-md kotak">
                <p class="text-2xl font-bold text-blue-600">98</p>
              </div>
            </div>
            <div class="flex flex-col items-center mx-4">
              <div class="bg-green-600 text-white p-2 w-full text-center rounded-t-lg kotak">
                <p class="text-sm font-bold">PREDIKAT</p>
              </div>
              <div class="bg-white p-4 w-full text-center rounded-b-lg shadow-md kotak">
                <p class="text-2xl font-bold text-green-600">A</p>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/learning">
          <button class="bg-amber-400 text-white font-bold py-2 px-8 rounded-lg mb-6 lanjut-button">
          LANJUT
        </button>
        </NuxtLink>
      </div>
      <NavBottom/>
    </div>
  </template>
  
  <script>
  export default {
    // Tambahkan script di sini jika diperlukan
  }
  </script>
  
  <style scoped>
  .bg-lightBlue-100 {
    background-color: #E3F2FD;
  }
  
  .text-secondaryBlue {
    color: #1a435b;
  }
  
  .bg-amber-400 {
    background-color: #ffa228;
  }
  
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .bg-red-600 {
    background-color: #6c2323;
  }
  
  .bg-blue-600 {
    background-color: #304e91;
  }
  
  .bg-green-600 {
    background-color: #236c2f;
  }
  
  .kotak {
    width: 100px; /* Sesuaikan lebar kotak sesuai kebutuhan */
  }
  
  .lanjut-button {
    width: 400px; /* Sesuaikan lebar tombol agar sama dengan kotak di atas */
  }
  </style>
  