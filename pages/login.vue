<template>
  <div class="container mx-auto p-4">
    <NuxtLink to="/">
      <img alt="" src="/img/svg/arrow_left_alt.svg">
    </NuxtLink>
    <div class="grid content-center">
      <img alt="" class="w-28 mx-auto mb-10 mt-6" src="/img/logo.png">
      <h3 class="font-bold text-3xl">Masuk</h3>
      <p class="text-sm italic">Masuk untuk mulai belajar di sini.</p>

      <div class="grid gap-6 mt-4">
        <FormsInput
            id="surat-elektronik"
            v-model="email"
            label="Surat Elektronik"
            placeholder="Tuliskan Surat Elektronik"
            type="email"
        />

        <FormsInput
            id="kata-sandi"
            v-model="password"
            label="Kata Sandi"
            placeholder="Tuliskan Kata Sandi"
            type="password"
        />
      </div>
      <a class="block w-full text-right text-sc m pr-2 mt-2 text-secondaryBlue" href="">Lupa kata sandi</a>
      <button class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4"
              @click="login">Masuk
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useFirebase} from '../composables/firebase';

const router = useRouter();
const {auth} = useFirebase(); // Asumsikan Anda memiliki composable untuk Firebase

const email = ref('');
const password = ref('');
const error = ref(null);

const login = async () => {
  try {
    await auth.signInWithEmailAndPassword(email.value, password.value);
    router.push('/dashboard'); // Redirect ke dashboard setelah login
  } catch (error) {
    console.error('Login error:', error);
    error.value = error.message;
  }
};
</script>