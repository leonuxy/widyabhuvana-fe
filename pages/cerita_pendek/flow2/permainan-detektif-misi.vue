<template>
  <div id="app" class="home-page">
    <header>
      <button class="back-button" @click="router.go(-1)">&#8592;</button>
      <h1>Permainan Detektif</h1>
    </header>
    <main>
      <div class="mission-label">MISI</div>
      <div class="mission-container">
        <div class="mission-card">
          <div class="mission-title">Menganalisis Unsur-Unsur Pembangun Cerpen</div>
        </div>
      </div>
      <img src="../../assets/gambar/detektif-misi.png" alt="Gambar Misi" class="mission-image">
    </main>
    <button class="next-button">Selanjutnya!</button>
    <nav-bottom/>
  </div>
</template>

<script>
import NavBottom from "../../components/NavBottom.vue";

export default {
  name: 'App',
  components: {NavBottom}
}
</script>

<style>
.home-page {
  text-align: center;
  background-color: #e0ecfc;
  /* height: 100vh; */ /* Hapus ini */
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px); /* Atur min-height */
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #e0ecfc;
  font-size: 24px;
  color: #3a5d7d;
}

.back-button, .search-button {
  background: none;
  border: none;
  font-size: 24px;
}

main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Untuk menampung tombol next-button */
}

.mission-container {
  display: flex;
  flex-direction: column; /* Atur vertikal */
  align-items: center; /* Buat mission-card di tengah */
}

.mission-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative; /* Untuk absolute positioning gambar */
}

.mission-label {
  background: #ffa500;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
  position: fixed; /* Atur posisi label sebagai fixed */
  top: 41%; /* Atur posisi vertikal tepat di atas */
  left: 50%; /* Atur posisi horizontal */
  transform: translateX(-50%); /* Tengahkan label secara horizontal */
}

.mission-title {
  font-size: 18px;
  margin-bottom: 20px;
}

.next-button {
  background: #ffa500;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  position: absolute; /* Atur posisi absolut */
  bottom: 60px; /* Atur posisi ke bawah, sesuaikan dengan tinggi footer */
  right: 20px; /* Atur posisi ke kanan */
  margin-bottom: 20px;
}

.mission-image {
  position: absolute;
  bottom: 10px;
  left: 10px; /* Atur posisi ke kiri */
  /*width: 50px;*/
  height: 30%;
}

.bottom-navigation {
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-item img {
  width: 24px;
  height: 24px;
}

/* Style for NavBottom */
.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1; /* Pastikan z-index lebih tinggi dari next-button */
}
</style>