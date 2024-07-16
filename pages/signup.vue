<template>
  <div class="container mx-auto p-4">
    <NuxtLink to="/">
      <img alt="" src="/img/svg/arrow_left_alt.svg">
    </NuxtLink>
    <div class="grid content-center">
      <img alt="" class="w-28 mx-auto mb-10 mt-6" src="/img/logo.png">
      <h3 class="font-bold text-3xl">Mendaftar</h3>
      <p class="text-sm italic">Masukkan informasi pribadi untuk mendaftar.</p>

      <form @submit.prevent="register">
        <div class="grid gap-6 mt-4">
          <FormsInput
              id="surat-elektronik"
              v-model="email"
              label="Surat Elektronik"
              placeholder="Tuliskan Surat Elektronik"
              type="email"
              @input="updateEmail"
          />

          <FormsInput
              id="kata-sandi"
              v-model="password"
              label="Kata Sandi"
              placeholder="Tuliskan Kata Sandi"
              type="password"
              @input="updatePassword"
          />

          <FormsInput
              id="konfirmasi-kata-sandi"
              v-model="cPassword"
              label="Konfirmasi Kata Sandi"
              placeholder="Konfirmasi Kata Sandi"
              type="password"
              @input="updateRepeatPassword"
          />
        </div>
        <button :disabled="isLoading"
                class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4"
                type="submit">Mendaftar
        </button>
        <p v-if="error" class="text-sm italic text-red-600">{{ error }}</p> <!-- Display error message -->
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useFirebase} from '../composables/firebase';

const router = useRouter();
const {auth, createUserWithEmailAndPassword} = useFirebase();

const email = ref('');
const password = ref('');
const cPassword = ref('');
const error = ref(null);
const isLoading = ref(false);

const updateEmail = (event) => {
  email.value = event.target.value;
};

const updatePassword = (event) => {
  password.value = event.target.value;
};

const updateRepeatPassword = (event) => {
  cPassword.value = event.target.value;
};

const register = async () => {
  try {
    isLoading.value = true;

    if (password.value !== cPassword.value) {
      error.value = "Konfirmasi kata sandi harus sama dengan kata sandi.";
      return;
    }

    // Use the imported function
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user; // Get the user object

    // Redirect to dashboard after registration
    await router.push('/dashboard');
  } catch (error) {
    // Handle specific Firebase errors

    console.error('Registration error:', error);

    console.error('Registration error code:', error.code);

    if (error.code === 'auth/weak-password') {
      error.value = "Kata sandi terlalu lemah. Gunakan kombinasi huruf, angka, dan simbol.";
    } else if (error.code === 'auth/invalid-email') {
      error.value = "Format email tidak valid. Pastikan email Anda benar.";
    } else if (error.code === 'auth/email-already-in-use') {
      error.value = "Email ini sudah digunakan. Silakan gunakan email yang berbeda.";
    } else {
      // Default error message for other cases
      error.value = "Terjadi kesalahan saat mendaftar. Silakan coba lagi nanti.";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>