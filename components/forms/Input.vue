<template>
    <div class="form-group grid gap-1">
      <label :for="id" class="font-semibold">
        {{ label }}
      </label>
      <input
        :type="type"
        :placeholder="placeholder"
        :class="inputClass"
        :id="id"
        class="block bg-white w-full rounded-xl p-4"
      />
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
  