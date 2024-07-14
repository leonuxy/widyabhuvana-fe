<template>
  <div class="container mx-auto px-4 py-10 grid content-center">
    <div class="flex justify-center place-content-center">
      <div class="w-full text-center">
        <h2 class="card-title font-bold text-cyan-800 text-2xl content-center">Informasi</h2>
      </div> 
    </div>

    <div>
      <div class="Active">
        <NuxtLink to="developer-profile">
          <button
              type="button"
              class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Apa itu
            Profil Pengembang
          </button>
        </NuxtLink>
      </div>

      <div class="Active">
        <NuxtLink to="">

        </NuxtLink>
        <button
            type="button"
            class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Unsur
          Daftar Pustaka
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
