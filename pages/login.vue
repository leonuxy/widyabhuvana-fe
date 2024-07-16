<template>
    <div class="container mx-auto p-4">
        <NuxtLink to="/">
            <img src="/img/svg/arrow_left_alt.svg" alt="">
        </NuxtLink>
        <div class="grid content-center">
            <img src="/img/logo.png" alt="" class="w-28 mx-auto mb-10 mt-6">
            <h3 class="font-bold text-3xl">Masuk</h3>
            <p class="text-sm italic">Masuk untuk mulai belajar di sini.</p>
    
            <div class="grid gap-6 mt-4">
                <FormsInput
                    label="Surat Elektronik"
                    type="email"
                    v-model="email"
                    placeholder="Tuliskan Surat Elektronik"
                    id="surat-elektronik"
                    @input="logEmail"
                />

                <FormsInput
                    label="Kata Sandi"
                    type="password"
                    placeholder="Tuliskan Kata Sandi"
                    v-model="password"
                    id="kata-sandi"
                    @input="logPassword"
                  />
            </div>
            <a href="" class="block w-full text-right text-sc m pr-2 mt-2 text-secondaryBlue">Lupa kata sandi</a>
            <a href="/dashboard" class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4">Masuk</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebase } from '../composables/firebase';

const router = useRouter();
const { auth, createUserWithEmailAndPassword } = useFirebase();

const email = ref('');
const password = ref('');
const cPassword = ref('');
const error = ref(null);
const isLoading = ref(false);

const logEmail = () => {
  console.log("isi email : " + email.value);
};

const logPassword = () => {
  console.log("isi password : " + password.value);
};

const register = async () => {
  try {
    isLoading.value = true;

    if (password.value !== cPassword.value) {
      error.value = "Konfirmasi kata sandi harus sama dengan kata sandi.";
      return;
    }

    console.log("isi email : " + email.value);
    console.log("isi password : " + password.value);

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
    } else {
      // Default error message for other cases
      error.value = "Terjadi kesalahan saat mendaftar. Silakan coba lagi nanti.";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>