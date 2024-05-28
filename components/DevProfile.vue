<template>
    <div class="grid grid-flow-col rounded-xl content-center items-center p-3 text-white"
        :class="bgColor"
    >
        <img :src="img" :alt="name">
        <div class="description">
            <h3 class="text-sm font-bold">{{ occupation }}</h3>
            <p class="text-sm">{{ name }}</p>
            <p class="text-xs">
                {{ desc }}
            </p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        occupation: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: ''
        },
    }
  }
  </script>
  