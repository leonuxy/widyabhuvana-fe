<template>
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-4xl font-bold text-cyan-800 mb-8">Notifikasi</h1>
      <div class="space-y-6">
        <div class="flex items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <img class="w-16 h-16 rounded-full object-cover mr-4" src="/img/svg/raisa.jpg" alt="Raisa">
          <div>
            <p class="text-lg font-semibold">Raisa menyukai pendapat anda.</p>
            <p class="text-gray-700">"Cerpen adalah cerita pendek yang terdiri dari..."</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <img class="w-16 h-16 rounded-full object-cover mr-4" src="/img/svg/afgan.jpg" alt="Afgan">
          <div>
            <p class="text-lg font-semibold">Afgan mengomentari pendapat anda.</p>
            <p class="text-gray-700">"Menurutku, nilai-nilai dalam cerpen juga..."</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <img class="w-16 h-16 rounded-full object-cover mr-4" src="/img/svg/jeon.jpg" alt="Jeon">
          <div>
            <p class="text-lg font-semibold">Jeon mengomentari ide cerpen anda.</p>
            <p class="text-gray-700">"Lebih baik jika ada peran antagonis dalam..."</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-blue-100 rounded-lg shadow-md">
          <img class="w-16 h-16 rounded-full object-cover mr-4" src="/img/svg/zee.jpg" alt="Zee">
          <div>
            <p class="text-lg font-semibold">Zee menyukai ide cerpen anda.</p>
            <p class="text-gray-700">"Matahari tenggelam dan aku masih saja..."</p>
          </div>
        </div>
      </div>
    </div>
    <NavBottom/>
  </template>
  
  <script>
  export default {
    name: 'Notifikasi',
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  .bg-blue-100 {
    background-color: #dceeff;
  }
  </style>
  