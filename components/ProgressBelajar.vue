<template>
  <div class="container-progress-belajar">
    <div class="content" :style="{ backgroundColor: contentBackgroundColor }">
      <img src="../assets/gambar/cerita_pendek.png" alt="Icon Paket Belajar" class="illustration"/>
      <div class="text">
        <h2 :style="{ color: textColor }">Cerita Pendek</h2>
        <p :style="{ color: textColor }">Kegiatan 2 | Unsur-Unsur Pembangun</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressWidth }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sourcePage: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      progressWidth: '20%', // Sesuaikan dengan persentase progres yang diinginkan
    };
  },
  computed: {
    contentBackgroundColor() {
      if (this.sourcePage === 'dashboard') {
        return '#3B57BA';
      } else if (this.sourcePage === 'profile') {
        return '#FFF';
      } else {
        return '#fff'; // Default color if sourcePage is not defined
      }
    },
    textColor() {
      if (this.sourcePage === 'dashboard') {
        return '#FFF';
      } else {
        return '#000'; // Default color if sourcePage is not defined
      }
    }
  }
};
</script>

<style scoped>
.container-progress-belajar {
  width: 100%; /* Mengatur lebar menjadi 100% dari parent */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Tambahkan padding agar konten tidak terlalu dekat dengan tepi */
}

.content {
  width: 100%; /* Mengatur lebar menjadi 100% dari parent */
  display: flex;
  flex-direction: row; /* Mengubah dari column ke row */
  align-items: center;
  padding: 10px; /* Tambahkan padding untuk mengurangi ukuran keseluruhan */
  border-radius: 8px; /* Kurangi border radius untuk tampilan yang lebih kecil */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.illustration {
  width: 120px; /* Mengurangi ukuran gambar */
  height: 120px; /* Mengurangi ukuran gambar */
  margin-right: 10px; /* Tambahkan margin kanan untuk memberikan jarak dengan teks */
}

.text {
  text-align: left; /* Rata kiri untuk teks */
  width: calc(100% - 10px - 10px)
}

.text h2 {
  font-size: 18px; /* Mengurangi ukuran font judul */
  font-weight: bold;
  margin-bottom: 8px; /* Mengurangi margin bottom */
}

.text p {
  font-size: 14px; /* Mengurangi ukuran font teks */
  color: #666;
  margin-bottom: 12px; /* Mengurangi margin bottom */
}

.progress-bar {
  width: calc(100% - 10px - 10px); /* Mengatur lebar progress bar */
  height: 8px; /* Mengurangi tinggi progress bar */
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #ffc107;
  border-radius: 4px;
}
</style>
