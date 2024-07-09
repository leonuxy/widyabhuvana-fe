<template>
  <div class="container mx-auto px-4 py-20 grid content-center">
    <div class="flex justify-between place-content-evenly">
            <NuxtLink to="/learning">
                <img src="/img/svg/arrow_left_alt.svg" alt="">
            </NuxtLink>
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Berlatih
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    50 Poin
                </div>
            </div>
        </div>
    <h1 class="font-bold text-cyan-800 text-center block text-3xl">{{ $route.query.activity }}</h1>
    <div class="w-full min-h-80 shadow-md rounded-lg bg-chocolateMain content-center">
      <div class="grid content-center py-5"> <!-- Mengurangi padding pada elemen ini -->
      </div>
      <div class="flex justify-center">
        <iframe :src="`https://www.youtube.com/embed/${video}`" width="560" height="315" frameborder="0"
          allowfullscreen class="mt-2"></iframe> <!-- Mengurangi margin-top pada elemen ini -->
      </div>
    </div>
    <div class="mt-8"> <!-- Tambahkan kelas margin-top -->
      <h6 class="text-black text-2xl"> {{ inTextKegiatan }}</h6>
    </div>
  </div>

  <NavBottom />
</template>

<script>
export default {
  name: 'WhatIsAudio',
  data() {
    return {
      activity: '',
      description: '',
      video: '',
      kegiatanSelection: 0,
      inTextKegiatan: "",
    };
  },
  mounted() {
    this.activity = this.$route.query.activity || 'Default Activity';
    this.description = this.$route.query.description || 'Default Description';
    this.video = this.$route.query.video || 'defaultVideoId';
    this.kegiatanSelection = parseInt(this.$route.query.kegiatanSelection) || 0;

    switch (this.kegiatanSelection) {
      case 1 :
        this.inTextKegiatan = "Cerpen adalah sebuah cerita pendek yang bersifat khayal sehingga termasuk dalam bentuk prosa naratif fiktif (Lado, 2016). (Mansyur, 2018) menambahkan bahwa cerpen yang berbentuk prosa itu  menggambarkan persoalan hidup manusia tentang kehidupan. Sependapat dengan hal tersebut (Mutia et al., 2022) pun berpendapat bahwa cerpen merupakan karya sastra naratif fiktif atau khayal dan tak nyata dan ceritanya terinspirasi dari kisah hidup seorang manusia. Tidak hanya menceritakan tentang persoalan manusia, cerpen juga menceritakan tentang bagaimana solusi dari permasalahan yang dihadapi (Februona Anding et al., 2021). Dalam kepenulisannya pun cerpen kurang dari 10.000 kata dan kurang dari 10 halaman serta ceritanya berfokus pada satu konflik pokok yang dialami oleh seorang tokoh (Rifky Fadilah et al., 2024). Maka, dapat disimpulkan bahwa cerita pendek adalah salah satu jenis karya sastra berbentuk prosa fiksi yang menceritakan tentang kisah hidup seorang manusia sehubungan dengan permasalahan serta cara menyelesaikannya.";

        break;

      case 2:
        this.inTextKegiatan = "Setiap karya sastra mempunyai unsur pembangun. Begitu pula cerpen yang merupakan salah satu jenis prosa fiksi dan memiliki unsur pembangun. Unsur pembangun dalam cerpen dapat memudahkan pembaca dalam memahami nilai-nilai kehidupan yang terkandung di dalam cerpen.  Menurut Nurgiyantoro cerpen atau cerita pendekk mempunyai dua unsur pembangun karya prosa fiksi yakni unsur ekstrinsik dan unsur instrinsik. Unsur intrinsik adalah unsur yang membangun cerpen dari dalam, sedangkan unsur ekstrinsik adalah unsur yang membangun cerpen dari luar. \n" +
            "\n" +
            "Unsur Intrinsik adalah unsur yang membangun cerpen dari dalam.Unsur instriksik dalam cerpen meliputi plot, penokohan, tema, amanat, sudut pandang, latar, gaya bahasa, peristiwa atau alur";

        break;

      case 3:
        this.inTextKegiatan = "Cerpen bukan hanya sekadar cerita yang menghibur, tetapi juga dapat menjadi sumber pembelajaran dan pengembangan diri bagi pembacanya. Dengan membaca cerpen dan mengetahui persoalan serta solusi dari permasalahan yang ada, pembaca dapat memahami nilai-nilai yang terkandung dalam cerpen. Kemudian, pembaca dapat menjadi pribadi yang lebih baik dan bermanfaat bagi orang lain. Nilai-nilai yang terkandung dalam cerpen dapat berupa pesan moral, sosial, budaya, religius, dan kemanusiaan yang ingin disampaikan oleh penulis kepada pembacanya melalui cerita yang diciptakannya. Nilai-nilai ini dapat ditemukan dalam berbagai aspek cerita, seperti perilaku tokoh, dialog antar tokoh, latar cerita, dan alur cerita."

        break;

      case 4:
        this.inTextKegiatan = "Menulis cerpen adalah kegiatan yang menyenangkan dan kreatif. Kegiatan menulis cerpen dapat mengeksplorasi ide-ide baru, membangun dunia imajinatif, dan berbagi cerita dengan orang lain. Berikut adalah langkah-langkah dalam menulis sebuah cerpen:"

        break;
    }
  },
  created() {

  }
};
</script>

<style scoped>
.bg-chocolateMain {
  background-color: #523a3a;
}

.bg-secondaryBlue {
  background-color: #3f6ac7;
}

.bg-amber-400 {
    background-color: #ffa228;
  }
.mt-2 {
  margin-top: 0.5rem; /* Sesuaikan nilai margin-top sesuai kebutuhan */
}

.mt-8 {
  margin-top: 2rem;
  /* Sesuaikan nilai margin-top sesuai kebutuhan */
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  /* Sesuaikan nilai padding sesuai kebutuhan */
}
</style>
