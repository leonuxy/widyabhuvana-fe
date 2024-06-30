<template>
    <div class="container mx-auto p-4">
        <NuxtLink to="/">
            <img src="/img/svg/arrow_left_alt.svg" alt="">
        </NuxtLink>

        <form @submit.prevent="login">
            <div class="grid content-center">
                <img src="/img/logo.png" alt="" class="w-28 mx-auto mb-10 mt-6">
                <h3 class="font-bold text-3xl">Masuk</h3>
                <p class="text-sm italic">Masuk untuk mulai belajar di sini.</p>
        
                <div class="grid gap-6 mt-4">
                    <FormsInput
                        label="Surat Elektronik"
                        type="email"
                        placeholder="Tuliskan Surat Elektronik"
                        id="surat-elektronik"
                        v-model:text="form.email"
                    />

                    <FormsInput
                        label="Kata Sandi"
                        type="password"
                        placeholder="Tuliskan Kata Sandi"
                        id="kata-sandi"
                        v-model:text="form.password"
                    />
                </div>
                <a href="" class="block w-full text-right text-sc m pr-2 mt-2 text-secondaryBlue">Lupa kata sandi</a>
                <button :disabled="isDisabled" type="submit" class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4">Masuk</button>
                <p class="text-sm italic text-red-600">{{ error }}</p>
            </div>
        </form>
    </div>
</template>

<script setup>
    const error = useState('error', () => "")
    const isDisabled = useState('is_disabled', () => false)
    
</script>

<script>
import { useFetch } from '~/utils/fetch';
import {LOGIN_API_URL} from '~/constant/config'
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        }
    },
    methods: {
        async login() {
            const error = useState('error')
            const isDisabled = useState('is_disabled')

            isDisabled.value = true
            const { statusCode, response } = await useFetch(LOGIN_API_URL).post({
                'email': this.form.email, 
                'password': this.form.password
            })

            isDisabled.value = false
            const resp = await response.value.json()
            if ((statusCode.value == 400 &&  resp.detail.password) || (statusCode.value == 404 && resp.detail.user))   {
                error.value = "Password atau email salah"
            } else if (statusCode.value == 200) {
                localStorage.setItem('Authorization', resp.token);
                navigateTo('/dashboard')
            } else {
                error.value = "Oops... terjadi sesuatu yang tidak terduga"
            }
        },
    },
  }
</script>