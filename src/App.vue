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
}
</style>