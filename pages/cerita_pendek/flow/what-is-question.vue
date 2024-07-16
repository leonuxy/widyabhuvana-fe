<template>
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-full mx-auto mb-10 mt-6"> -->
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-auto mx-auto bg-fixed"> -->
    <div class="container mx-auto px-4 py-20 grid content-center">
        
        <div class="flex justify-between place-content-evenly">
            <NuxtLink to="/flow/section-sub-header">
                <img src="/img/svg/arrow_left_alt.svg" alt="">
            </NuxtLink>
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Belajar
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    20 Poin
                </div>
            </div>
        </div>

        <div class="flex justify-between place-content-evenly">
            <div class="text-secondaryBlue">
                <h3 class="font-bold text-3xl">{{ this.title }}</h3>
                <p class="text-sm italic mt-4">Tentukan cara belajarmu sendiri<br> dan rasakan keseruan belajar sambil bermain.</p>
            </div>
            
        </div>

        
        <div class="mt-5 rounded-lg w-full bg-white text-pretty p-4">
            Menurut (Lado et al., 2016) Cerpen adalah sebuah cerita pendek yang bersifat ___ sehingga termasuk dalam bentuk prosa naratif fiktif.    
        </div>

        <div class="mt-5 w-full border-b-4 border-b-gray-600 p-4">
            <div class="bg-secondaryBlue mt-5 rounded-lg w-fit text-white text-pretty px-2 py-2">
                Anonim    
            </div>

        </div>
        <div class="my-3 w-full border-b-4 border-b-gray-600 p-4">
        </div>


        <div class="mt-8 flex flex-row justify-center gap-4">
            <div class="bg-secondaryBlue mt-5 rounded-lg w-fit text-white text-pretty px-2 py-2">
              Anonim
            </div>
          <div class="bg-secondaryBlue mt-5 rounded-lg w-fit text-white text-pretty px-2 py-2">
            Anonim
          </div>
          <div class="bg-secondaryBlue mt-5 rounded-lg w-fit text-white text-pretty px-2 py-2">
            Anonim
          </div>
        </div>


      <div class="flex flex-row-reverse">
        <button
            class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white"
            @click="nextPage()">
          Selanjutnya!
        </button>
      </div>

    </div>
  <NavBottom/>
</template>


<script>
export default {
  data() {
    return {
      fromPage: "",
      title: "Definisi Ceritaa",
      pertanyaan: "",
    };
  },
  mounted() {
    this.fromPage = this.$route.query.fromPage;

    if (this.fromPage === "permainan-detektif-video") {
      this.title = "Unsur-Unsur Pembangun Cerpen"
    }
  },
  methods: {
    nextPage() {
      if (this.fromPage === "permainan-detektif-video") {
        this.$router.push({
          path: '/flow/definisi',
          query: {
            fromPage: this.fromPage
          }
        })
      } else {
        this.$router.push({
          path: '/flow/what-is-match',
          query: {
            fromPage: this.fromPage
          }
        })
      }
    }
  }
}
</script>