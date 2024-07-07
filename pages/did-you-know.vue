<template>
  <div class="help-don">
    <div class="help-don__header">
      <h1 class="help-don__title">Tahukah Kamu?</h1>
    </div>
    <div class="help-don__content">
<!--      <img class="help-don__image" src="/assets/gambar/man-thinking.png" alt="Gambar Orang Bingung"/>-->
      <ul class="help-don__list">
        <li class="help-don__item">
          <strong>Cerpen terpanjang di dunia</strong> adalah "The Master of Caerbont" oleh E.R. Eddison, yang memiliki
          panjang lebih dari 2 juta kata.
        </li>
        <li class="help-don__item">
          <strong>Cerpen terpendek di dunia</strong> adalah "A Very Short Story" oleh Lynette Roberts, yang hanya
          memiliki 55 kata.
        </li>
        <li class="help-don__item">
          <strong>Cerpen pertama</strong> yang diterbitkan di Indonesia adalah "Cerita Nenek" oleh Siti Mariah yang
          dimuat di majalah Soeloeh Pandji pada tahun 1927.
        </li>
        <li class="help-don__item">
          <strong>Hadiah Nobel Sastra</strong> pertama kali dianugerahkan untuk cerpen pada tahun 1905 kepada Sully
          Prudhomme dari Prancis.
        </li>
        <li class="help-don__item">
          Banyak cerpen yang telah diadaptasi menjadi film, televisi, dan drama.
        </li>
      </ul>
    </div>
  </div>

  <NavBottom class="z-10"/>
</template>

<script>
import NavBottom from '@/components/NavBottom.vue';

export default {
  components: {
    NavBottom,
  },
  // ...
};
</script>

<style scoped>
.help-don {
  padding: 20px; /*  Atur padding jika ingin memberi spasi pada konten */
  background-color: #d3e3fb; /*  Warna background  */
  position: absolute; /* Untuk menampung gambar yang melayang */
  top: 20%;

@media (min-width: 768px) {
  padding:

20px

; /*  Atur padding jika ingin memberi spasi pada konten */
  background-color: #d3e3fb

; /*  Warna background  */
  position: absolute

; /*  Ubah ke absolute untuk kontrol posisi  */
  top:

50%;
  left:

50%;
  transform:

translate(-50%, -50%); /*  Menyesuaikan ke tengah  */
  width: fit-content

;
  /*  Atur width jika perlu */
  margin: auto

; /*  Untuk menata div di tengah secara horizontal  */
}

}

.help-don__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.help-don__title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #1A435B; /* Tambahkan atribut color di sini */
}

.help-don__content {
  background-color: #FFA228;
  border-radius: 8px;
  padding: 20px; /* Atur padding agar konten tidak menempel ke tepi */
  position: relative; /* Untuk menampung gambar yang melayang */
  margin-bottom: 20px; /*  Memberikan spasi antara konten dan footer */
}

.help-don__image {
  width: 50%; /*  Gambar akan memenuhi 80% lebar container */
  max-width: 400px; /*  Batasan lebar maksimum gambar */
  float: right; /*  Gambar akan melayang ke kanan */
  margin: 10px; /*  Memberikan spasi antara gambar dan teks */
}

.help-don__list {
  list-style-type: disc;
  margin-left: 20px;
  text-align: left; /* Menyelaraskan teks ke kiri */
  margin-top: 20px; /* Memberikan spasi antara gambar dan teks */
}

.help-don__item {
  margin-bottom: 10px;
}
</style>