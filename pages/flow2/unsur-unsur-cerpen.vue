<template>
  <div class="container">
    <div class="back-button">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
      >
        <line x1="19" y1="12" x2="5" y2="12"/>
        <polyline points="12 19 5 12 12 5"/>
      </svg>
    </div>
    <div class="header">
      <div class="title">Unsur-Unsur Pembangun Cerpen</div>
      <div class="badge">
        <div class="badge__top">
          {{ this.title }}
        </div>
        <div class="badge__bottom">
          {{ this.points }} Poin
        </div>
      </div>
    </div>
    <div class="content">
      <p>
        Setiap karya sastra mempunyai unsur pembangun. Begitu
        pula cerpen yang merupakan salah satu jenis prosa fiksi dan
        memiliki unsur pembangun. Unsur pembangun dalam cerpen
        dapat memudahkan pembaca dalam memahami nilai-nilai
        kehidupan yang terkandung di dalam cerpen. Menurut
        Nurgiyantoro cerpen atau cerita pendekk mempunyai dua
        unsur pembangun karya prosa fiksi yakni unsur ekstrinsik dan
        unsur instrinsik. Unsur intrinsik adalah unsur yang membangun
        cerpen dari dalam, sedangkan unsur ekstrinsik adalah unsur
        yang membangun cerpen dari luar.
      </p>
      <p>
        Unsur Intrinsik adalah unsur yang membangun cerpen dari
        dalam.Unsur instriksik dalam cerpen meliputi plot, penokohan,
        tema, amanat, sudut pandang, latar, gaya bahasa, peristiwa
        atau alur.
      </p>
      <div class="section">
        <div class="label">α. Tema</div>
        <p>
          Tema adalah pangkal tokoh yang dimiliki oleh pengarang
          guna mengembangkan cerita pendek. Tema berupa ide atau
          gagasan utama yang mendasari cerita tersebut. Tema dapat
          ditemukan dengan melihat pikiran-pikiran pokok dari cerpen
          tersebut. Ide dalam tema berkesinambungan dengan tujuan
          utama pembuatan cerita. (Nurgiyantoro, 2013)
        </p>
      </div>
      <div class="section">
        <div class="label">b. Alur</div>
        <p>
          Alur adalah serangkaian kejadian yang berhubungan dan
          mempunyai penekanan pada hubungan kausalitas (sebab-
          akibat). Alur cerita sering pula disebut plot.
        </p>
      </div>
    </div>
    <button class="next-button" @click="handleNext">Selanjutnya</button>

    <nav-bottom/>
  </div>
</template>

<script>
import NavBottom from "../../components/NavBottom.vue";

export default {
  name: "UnsurPembangunCerpen",
  components: {NavBottom},
  props: {
    title: {
      type: String,
      required: true,
      default: 'Belajar'
    },
    points: {
      type: Number,
      required: true,
      default: 20
    }
  },
  methods: {
    handleNext() {
      this.$router.push("/flow2/permainan-detektif"); // Arahkan ke halaman permainan-detektif.vue
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  min-height: 100vh;
}

.back-button {
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: fit-content;
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #1A435B;
  text-align: center;
}

.badge {
  color: white;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 10px;
  text-align: center;
  width: 100px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}

.badge__top {
  background-color: #ff9800;
  border-radius: 12px 12px 0 0;
  padding: 5px 0;
}

.badge__bottom {
  background-color: #4d80e2;
  border-radius: 0 0 12px 12px;
  padding: 5px 0;
}

.content {
  margin-bottom: 20px;
}

.content p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
}

.section {
  margin-bottom: 20px;
}

.section.label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.footer {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer.icon {
  margin-right: 10px;
}

.footer.icon svg {
  stroke: #666;
}

.footer.label {
  font-size: 16px;
  color: #666;
}

.next-button {
  background-color: #FFA228; /* Warna background */
  color: white; /* Warna teks */
  padding: 10px 20px; /* Padding tombol */
  border: none; /* Hilangkan border */
  border-radius: 5px; /* Sudut bulat */
  cursor: pointer; /* Tampilkan cursor pointer */
  margin-top: 20px; /* Jarak ke atas */
}
</style>