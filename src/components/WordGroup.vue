<template>
  <div class="word-group">
    <WordSearch :onChange="onChange" />
    <span v-for="[word, count] in props.words" :key="word">
      <Word
        v-if="word?.includes(state.searchKey?.toLowerCase())"
        :word="word"
        :count="count"
      />
    </span>
  </div>
</template>

<script setup>
import Word from "./Word.vue";
import WordSearch from "./WordSearch.vue";
import { defineProps, reactive } from "vue";

const props = defineProps({
  words: Array,
});

const state = reactive({ searchKey: "", filteredWords: props.words });

const onChange = ({ target }) => {
  state.searchKey = target.value;
};
</script>

<style scoped>
.word-group {
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>