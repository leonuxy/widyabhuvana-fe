<template>
  <div class="learning-container mx-auto px-4 py-10 grid content-center">
    <div class="flex justify-between place-content-evenly">
      <div class="w-full">
        <img src="/img/learning.png" class="w-[200px] h-[200px]">
      </div>
      <div class="w-1/2">
        <h2 class="card-title font-bold text-cyan-800 text-2xl content-center place-items-center">CERITA PENDEK</h2>
      </div> 
    </div>

    <div class="mt-5">
      <div class="Active">
        <h2 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 1</h2>
        <button
            @click="routeToApp('Apa itu Cerita Pendek?', 'Pengertian Cerita Pendek', 'VvYG-SRvol8', 'https://www.youtube.com/embed/AKBt291KQs8?si=UbdcNjUcJPi86itr', 1)"
            type="button"
            class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Apa itu
          cerita Pendek?
        </button>
      </div>

      <div class="Active">
        <h6 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 2</h6>
        <button
            @click="routeToApp('Unsur Pembangun Cerpen', 'Unsur Pembangun Cerpen', 'Q0GWJOuuPQw?si=oi44HgMSmESId-hS', 'https://example.com/audio2.mp3', 2)"
            type="button"
            class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Unsur
          Pembangun Cerpen
        </button>
      </div>

      <div class="Active">
        <h6 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 3</h6>
        <button
            @click="routeToApp('Nilai-Nilai Kehidupan', 'Nilai-Nilai Kehidupan', 'dKxxOTFibGo?si=of7mngd9v_1RU60L', 'https://example.com/audio3.mp3', 3)"
            type="button"
            class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Nilai-Nilai
          Kehidupan
        </button>
      </div>

      <div class="Active">
        <h6 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 4</h6>
        <button
            @click="routeToApp('Menulis Cerita Pendek', 'Menulis Cerita Pendek', 'EQnIPikGQxE?si=s84LLed5NnQGt0Gc', 'https://example.com/audio4.mp3', 4)"
            type="button"
            class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Menulis
          Cerita Pendek
        </button>
      </div>
    </div>
  </div>
  <NavBottom />
</template>

<script>
export default {
  name: 'Learning',
  methods: {
    routeToApp(activity, description, video, audio, kegiatanSelection) {
      this.$router.push({
        path: '/app',
        query: {
          activity: activity,
          description: description,
          video: video,
          audio: audio,
          kegiatanSelection: kegiatanSelection
        }
      });
    }
  }
};
</script>

<style scoped>
.learning-container {
  display: grid;
}
.card-title {
  justify-content: center;
  align-items: center;
  width: 10px;
  margin-bottom: 100px;
  font-size: 40px;
}
.Active {
  margin-bottom: 40px;
}
</style>
