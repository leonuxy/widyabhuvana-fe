<template>
  <div>
    <div class="container mx-auto px-4 py-20 relative">
      <UserProfile
          name="Suci Lestari"
          img="display_picture.png"
          :points="120"
          :pageType="'change'"
          :editMode="isEditing"
          class="floating-profile"
          @click="EnterEditMode"
      />

      <div class="icon-container">
        <img src="../assets/icon/ic_arrow_left_alt.png" @click="goBack" alt="Back Icon" width="24" height="24">
        <img src="../assets/icon/ic_upload_photo.png" @click="handleUpload" alt="Upload Image Icon" width="24"
             height="24">
      </div>
    </div>
    <div class="form-container mx-auto px-4 py-8 mb-8">
      <div class="form-group">
        <label for="fullName" class="form-label">Nama Lengkap</label>
        <input
            type="text"
            id="fullName"
            v-model="form.fullName"
            class="form-input"
            placeholder="Masukkan nama lengkap"
            :disabled="!isEditing"
            ref="fullName"
        >
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Kata Sandi</label>
        <input
            type="password"
            id="password"
            v-model="form.password"
            class="form-input"
            placeholder="Masukkan kata sandi"
            :disabled="!isEditing"
            ref="password"
        >
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Surat Elektronik</label>
        <input
            type="email"
            id="email"
            v-model="form.email"
            class="form-input"
            placeholder="Masukkan email"
            :disabled="!isEditing"
            ref="email"
        >
      </div>
      <div class="form-group">
        <label for="birthPlace" class="form-label">Tempat Lahir</label>
        <input
            type="text"
            id="birthPlace"
            v-model="form.birthPlace"
            class="form-input"
            placeholder="Masukkan tempat lahir"
            :disabled="!isEditing"
            ref="birthPlace"
        >
      </div>
      <div class="form-group">
        <label for="birthDate" class="form-label">Tanggal Lahir</label>
        <input
            type="date"
            id="birthDate"
            v-model="form.birthDate"
            class="form-input"
            @change="formatBirthDate"
            :disabled="!isEditing"
            ref="birthDate"
        >
      </div>
    </div>

    <NavBottom class="z-10"/>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import NavBottom from '@/components/NavBottom.vue';

export default {
  components: {
    UserProfile,
    NavBottom,
  },
  data() {
    return {
      form: {
        fullName: '',
        password: '',
        email: '',
        birthPlace: '',
        birthDate: ''
      },
      formattedBirthDate: '',
      isEditing: false, //  State untuk mode edit
    };
  },
  mounted() {
    // Simulasikan mengambil data profil dari backend
    // (Ganti contoh data ini dengan data yang Anda fetched dari backend)
    this.form = {
      fullName: 'Suci Lestari',
      password: '********',
      email: 'suci.lestari@example.com',
      birthPlace: 'Jakarta',
      birthDate: '2000-01-01'
    };
    this.formatBirthDate();
  },
  methods: {
    formatBirthDate() {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      this.formattedBirthDate = new Date(this.form.birthDate).toLocaleDateString('id-ID', options);
    },
    EnterEditMode() {
      this.isEditing = !this.isEditing;

      if (this.isEditing) {
        // Jika dalam mode edit, fetch data profil dari backend
        //  this.form = this.fetchDataFromBackend();

        // Set these fields as not readonly in method
        this.$nextTick(() => {
          this.$refs.fullName.disabled = false;
          this.$refs.password.disabled = false;
          this.$refs.email.disabled = false;
          this.$refs.birthPlace.disabled = false;
          this.$refs.birthDate.disabled = false;
        });
      } else {
        // Jika keluar mode edit, simpan perubahan ke backend
        // this.saveDataToBackend();

        // Set these fields to readonly in method
        this.$nextTick(() => {
          this.$refs.fullName.disabled = true;
          this.$refs.password.disabled = true;
          this.$refs.email.disabled = true;
          this.$refs.birthPlace.disabled = true;
          this.$refs.birthDate.disabled = true;
        });
      }
    },
    goBack() {
      // Logic untuk kembali ke halaman sebelumnya
      this.$router.go(-1); // Gunakan $router.go untuk kembali ke halaman sebelumnya
    },
    handleUpload() {
      // Logic untuk menangani upload gambar
      console.log('Upload image button clicked!');
      // Implementasikan logika Anda untuk upload gambar di sini
    },
  }
}
</script>

<style scoped>
.container {
  background-image: url("../assets/gambar/background_profile.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.floating-profile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
}

.form-container {
  margin-top: 60px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.hidden-date-input {
  display: none;
}

.formatted-date {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  color: #333;
}

.btn-edit {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-edit:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.icon-container {
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}

.icon-container img {
  cursor: pointer;
}
</style>
