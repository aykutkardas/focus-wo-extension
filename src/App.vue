<template>
  <WordGroup :words="state.words" />
</template>

<script setup>
import { onMounted, reactive } from "vue";
import WordGroup from "./components/WordGroup.vue";

import wordCounter from "./utils/word-counter.js";

let state = reactive({ words: [] });

chrome?.tabs?.executeScript(
  { code: "(function(){return document.body.innerText})();" },
  ([results]) => {
    const parsedWords = wordCounter(results);
    const words = Object.entries(parsedWords).sort(function (a, b) {
      return b[1] - a[1];
    });
    state.words = words;
  }
);
</script>

<style>
body {
  background: #54328a;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 400px;
  max-height: 500px;
  margin-top: 63px;
  padding-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}

#app::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

#app::-webkit-scrollbar-track {
  background: transparent; /* color of the tracking area */
}

#app::-webkit-scrollbar-thumb {
  background-color: #986fd8; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
}
</style>