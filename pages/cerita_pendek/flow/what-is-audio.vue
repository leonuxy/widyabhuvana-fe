<template>
  <div class="container mx-auto px-4 py-20 grid content-center">
    <NuxtLink to="/app">
      <img src="/img/svg/arrow_left_alt.svg" alt="">
    </NuxtLink>
    <h1 class="font-bold text-cyan-800 text-center block text-3xl">{{ activity }}</h1>
    <br>
    <br>
    <div class="mt-4 flex justify-center">
      <iframe
        :src="`https://www.youtube.com/embed/${video}`"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <p class="text-center mt-4 text-secondaryBlue">Video {{ description }}</p>
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
      video: ''
    };
  },
  created() {
    this.activity = this.$route.query.activity || 'Default Activity';
    this.description = this.$route.query.description || 'Default Description';
    this.video = this.$route.query.video || 'defaultVideoId';
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
