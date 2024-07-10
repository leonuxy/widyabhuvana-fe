<template>
  <div class="container">
    <div class="header">
      <button class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </button>
      <div class="progress">
        <div class="progress-bar" :style="{ width: '20%' }"></div>
      </div>
      <div class="point">
        <div class="point-text">Bermain</div>
        <div class="point-number">50 Poin</div>
      </div>
    </div>
    <div class="content">
      <div class="title">Unsur-Unsur Pembangun Cerpen</div>
      <div class="instruction">Pilih jawaban dengan baik!</div>
      <div class="question">Siapa tokoh yang berperan dalam cerita 'Senja Yang Kesepian'?</div>
      <div class="options">
        <button class="option" @click="selectAnswer('Shani')">Shani</button>
        <button class="option" @click="selectAnswer('Gracia')">Gracia</button>
        <button class="option" @click="selectAnswer('Zee')">Zee</button>
        <button class="option" @click="selectAnswer('Mutiara')">Mutiara</button>
        <button class="option" @click="selectAnswer('Tejo')">Tejo</button>
        <button class="option" @click="selectAnswer('Pak Heru')">Pak Heru</button>
      </div>
    </div>
    <div class="footer">
      <button class="footer-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <button class="footer-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle"
             viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path
              d="M5.25 6.57a.25.25 0 0 1 .41-.1c.25.25.5.45.81.59.23.13.5.18.76.18.26 0 .5-.05.76-.18.31-.14.56-.34.81-.59.25-.24.41-.51.41-.87 0-.36-.16-.72-.41-.87zm1.53-.7a.25.25 0 0 1 .41.1c.25-.25.5-.45.81-.59.23-.13.5-.18.76-.18.26 0 .5.05.76.18.31.14.56.34.81.59.25.24.41.51.41.87 0 .36-.16.72-.41.87zm1.53 1.17a.25.25 0 0 1-.41.1c-.25-.25-.5-.45-.81-.59-.23-.13-.5-.18-.76-.18-.26 0-.5.05-.76.18-.31.14-.56.34-.81.59-.25.24-.41.51-.41.87 0 .36.16.72.41.87zm1.53 2.3a.25.25 0 0 1-.41-.1c-.25.25-.5.45-.81.59-.23.13-.5.18-.76.18-.26 0-.5-.05-.76-.18-.31-.14-.56-.34-.81-.59-.25-.24-.41-.51-.41-.87 0-.36.16-.72.41-.87z"/>
        </svg>
      </button>
      <button class="footer-button active">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door"
             viewBox="0 0 16 16">
          <path
              d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.293l-6-6zm5.646 9.354a.5.5 0 0 1 .708 0l6-6V1.5a.5.5 0 0 1 .5-.5h-9a.5.5 0 0 1-.5.5V11.293l6 6z"/>
          <path d="M14 6.5a.5.5 0 0 1-.5.5v2a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h11z"/>
        </svg>
      </button>
      <button class="footer-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book"
             viewBox="0 0 16 16">
          <path
              d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893l-.718.718c-.38.38-.866.583-1.414.583-.548 0-1.034-.203-1.414-.583L1 2.828zm15 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h15zm-1.414 4.586l-.718.718A.5.5 0 0 1 10.586 13H13a.5.5 0 0 1 .5.5v-2a.5.5 0 0 1-.5-.5H10.586l.718-.718A.5.5 0 0 1 13 10.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2z"/>
        </svg>
      </button>
      <button class="footer-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person"
             viewBox="0 0 16 16">
          <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.87 9.768 10 9.002c-.86-.766-1.588-.986-2.158-1.004-.57-.018-.983.158-1.428.544-.446.385-.832 1.04-.834 1.664-.002.246.154.986.834 1.664C6.484 13.32 7.126 14.232 8 15c.874-.768 1.59-.986 2.16-1.004.57-.018.982.158 1.428.545.446.385.832 1.04.834 1.664.002.246-.154.986-.832 1.664C11.516 15.32 10.87 16.232 10 16.998c-.86.766-1.589.986-2.159 1.004-.57.018-.984-.158-1.428-.545C2.154 14.232 1.484 13.32 1 12.998c-.001-.246.154-.986.834-1.664C3.516 10.68 4.158 9.768 5 9.002c.86-.766 1.588-.986 2.158-1.004.57-.018.983.158 1.428.544.446.385.832 1.04.834 1.664z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAnswer: null,
    };
  },
  methods: {
    selectAnswer(answer) {
      this.selectedAnswer = answer;
      // Tambahkan logika untuk melanjutkan ke pertanyaan berikutnya atau menunjukkan hasil
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
}

.progress {
  background-color: #ddd;
  height: 5px;
  width: 80%;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  background-color: orange;
  height: 100%;
  border-radius: 10px;
}

.point {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.point-text {
  font-weight: bold;
  font-size: 16px;
}

.point-number {
  font-size: 12px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.instruction {
  font-size: 14px;
  color: #666;
}

.question {
  font-size: 16px;
  font-weight: bold;
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.option {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.option:hover {
  background-color: #555;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.footer-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

.footer-button.active {
  color: blue;
}
</style>