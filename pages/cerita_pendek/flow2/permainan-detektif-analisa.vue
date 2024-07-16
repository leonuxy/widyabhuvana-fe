<template>
  <div class="game-container">
    <header>
      <button @click="goBack" class="back-button">←</button>
      <h1>Permainan Detektif</h1>
      <button @click="search" class="search-button">🔍</button>
    </header>
    <div class="story-selection">
      <div class="story-row">
        <button class="story-button" v-for="story in stories.slice(0, 2)" :key="story">{{ story }}</button>
      </div>
      <div class="story-row">
        <button class="story-button" v-for="story in stories.slice(2, 4)" :key="story">{{ story }}</button>
      </div>
      <div class="story-row">
        <button class="story-button" v-for="story in stories.slice(4, 5)" :key="story">{{ story }}</button>
      </div>
    </div>
    <div class="instruction-container">
      <div class="instruction">
        <p>Sebelum menganalisis, detektif perlu memahami ceritanya. Maka, pilihlah satu cerita dan perhatikan
          unsur-unsur pembangunnya ya!</p>
      </div>
      <img src="../../assets/gambar/detektif-analisa.png" alt="Gambar Ilustrasi" class="instruction-image">
    </div>

    <button class="next-button">Selanjutnya</button>

    <footer>
      <NavBottom/>
    </footer>
  </div>
</template>

<script>
import NavBottom from "../../components/NavBottom.vue";

export default {
  components: {NavBottom},
  data() {
    return {
      stories: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    goBack() {
      // Implementasi untuk kembali ke halaman sebelumnya
    },
    search() {
      // Implementasi untuk melakukan pencarian
    }
  }
};
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #e0f0ff;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.back-button, .search-button {
  background: none;
  border: none;
  font-size: 24px;
}

.story-selection {
  display: flex;
  flex-direction: column; /* Atur tombol dalam kolom */
  gap: 10px;
}

.story-row {
  display: flex;
  gap: 10px;
}

.story-button {
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  width: 60px;
  height: 60px;
}

.instruction-container {
  display: flex;
  align-items: center; /* Ratakan vertikal */
  width: 100%;
  gap: 20px; /* Beri jarak antara teks dan gambar */
}

.instruction {
  text-align: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1; /* Membuat elemen ini fleksibel */
}

.instruction-image {
  max-width: 200px; /* Batasi lebar gambar */
}

footer {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
}

.next-button {
  background-color: #FFA228;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  margin-left: 20px;
}


.footer-button {
  background: none;
  border: none;
  font-size: 24px;
}

</style>