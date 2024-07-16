<template>
  <div class="main-container">
    <div class="header">
      <button class="back-arrow" @click="router.go(-1)">&#8592;</button>
      <h1>Permainan Detektif</h1>
      <span/>
    </div>
    <div class="content">
      <div class="description">
        <p>
          Kamu adalah seorang detektif dan kini kamu mempunyai misi untuk membantu Nadia menyelesaikan tugasnya. Nadia
          adalah seorang anak SMA yang kini memiliki tugas Bahasa Indonesia. Ia ditugaskan untuk menganalisis
          unsur-unsur pembangun dari sebuah cerita. Mari kita bantu Nadia menyelesaikan tugasnya!
        </p>
      </div>
      <div class="image-container">
        <img src="../../assets/gambar/detektif.png" alt="Gambar Detektif">
      </div>
    </div>
    <div class="button-and-footer" @click="handleNext">
      <button class="start-button">MULAI</button>
    </div>

    <nav-bottom/>
  </div>
</template>

<script>
import NavBottom from "../../components/NavBottom.vue";

export default {
  name: 'MainPage',
  components: {NavBottom},
  methods: {
    handleNext() {
      this.$router.push("/flow2/permainan-detektif-misi"); // Arahkan ke halaman permainan-detektif.vue
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dbeafe;
  height: 100vh;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.back-arrow {
  font-size: 24px;
  text-decoration: none;
  color: #000;
}

.search-icon {
  font-size: 24px;
}

h1 {
  font-size: 36px;
  color: #1d4ed8;
  margin: 0;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.description {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1; /* Mengambil ruang yang tersisa */
  margin-right: 20px; /* Jarak antara gambar dan teks */
}

.description p {
  margin: 0;
  font-size: 18px;
  color: #000;
}

.image-container {
  flex: 1; /* Mengambil ruang yang tersisa */
  text-align: center; /* Untuk mengatur gambar di tengah */
}

.start-button {
  background-color: #f59e0b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.button-and-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute; /* Tambahkan ini! */
  bottom: 65px; /* Sesuaikan dengan kebutuhan */
  z-index: 1; /* Pastikan di atas footer */
}

nav-bottom {
  width: 100%;
  margin-top: 10px;
}

</style>