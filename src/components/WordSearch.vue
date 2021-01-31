<template>
  <div class="word-search animate__animated animate__slideInDown">
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
  position: fixed;
  background: #402867;
  top: 0;
  left: 0;
  right: 0;
}

.word-search-input {
  display: flex;
  flex: 1;
  border: 1px solid #eee;
  border-radius: 8px;
  height: 30px;
  padding: 5px 10px;
  color: #777;
  margin: 10px;
}

.word-search-input:focus {
  outline-color: skyblue;
}

.word-search-input::placeholder {
  color: #ccc;
}
</style>