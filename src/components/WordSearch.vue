<template>
  <div class="word-search">
    <input
      @keyup="onChange"
      class="word-search-input"
      placeholder="Search word..."
      type="text"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  onChange: Function,
});
</script>

<style scoped>
.word-search {
  display: flex;
  width: 100%;
}

.word-search-input {
  display: flex;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 8px;
  height: 30px;
  padding: 5px 10px;
  color: #777;
  margin-bottom: 5px;
}

.word-search-input:focus {
  outline-color: skyblue;
}

.word-search-input::placeholder {
  color: #ccc;
}
</style>