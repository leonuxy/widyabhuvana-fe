<template>
  <div class="page-container">
    <header>
      <button @click="goBack" class="back-button">←</button>
      <h1>Permainan Detektif</h1>
      <button class="search-button">🔍</button>
    </header>
    <main>
      <div class="image-container">
        <img src="../../assets/gambar/detektif-video.png" alt="Gambar ilustrasi">
      </div>
      <div class="video-container">
        <button class="play-button">▶</button>
      </div>

      <p class="video-title">Video 1 - Permainan Detektif</p>

      <button class="next-button" @click="nextPage">Selanjutnya</button>
    </main>
    <footer>
      <NavBottom/>
    </footer>
  </div>
</template>

<script>
import NavBottom from "../../components/NavBottom.vue";

export default {
  components: {NavBottom},
  methods: {
    goBack() {
      // Logika untuk tombol kembali
      window.history.back();
    },

    nextPage() {
      this.$router.push({
        path: '/flow/what-is-question',
        query: {
          fromPage: "permainan-detektif-video"
        }
      })
    }
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4e6fb;
  height: 100vh;
  margin: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #d4e6fb;
}

.back-button, .search-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

h1 {
  margin: 0;
  font-size: 24px;
  color: #375a7f;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
}

/* Style untuk gambar */
.image-container {
  width: 300px; /* Sesuaikan lebar sesuai kebutuhan */
  margin-bottom: 10px; /* Buat spasi antara gambar dan video */
}

.image-container img {
  width: 100%; /* Gambar akan mengisi lebar kontainer */
  height: auto; /* Tinggi gambar akan menyesuaikan lebar */
  border-radius: 10px; /* Opsional: Buat gambar sedikit membulat */
}

.video-container {
  background-color: white;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column; /* Atur tombol dalam kolom */
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.play-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/* Style untuk tombol "Selanjutnya" */
.next-button {
  background-color: #FFA228; /* Warna background */
  color: white; /* Warna teks */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px; /* Spasi atas */
}

.video-title {
  font-size: 16px;
  color: #375a7f;
  margin-top: 10px;
}

footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
  background-color: #d4e6fb;
}

.nav-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>