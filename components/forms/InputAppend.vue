<template>

  <div class="flex items-center rounded-full overflow-hidden">
      <!-- Prepend Icon -->
      <!-- <div class="p-2 bg-gray-100">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 4H8m6-8H8m8-4H8"></path>
          </svg>
      </div> -->
      <!-- Input -->
      <input type="text" 
      class="flex-grow p-2 focus:outline-none" :placeholder="placeholder">
      <!-- Append Icon -->
      <div class="p-2 rounded-br-full rounded-tr-full bg-white">
          <!-- <svg class="w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path src="/img/svg/arrow_left_alt.svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg> -->
          <svg class="w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
      </div>
  </div>

</template>

<script>
export default {
props: {
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  }
}
}
</script>
