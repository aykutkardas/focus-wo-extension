<template>
  <div class="word-group">
    <WordSearch :onChange="onChange" />
    <Word v-for="[word, count] in filteredWords" :key="word" :word="word" :count="count" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import WordSearch from "./WordSearch.vue";
import Word from "./Word.vue";

export default {
  name: 'WordGroup',
  components: {
    WordSearch,
    Word
  },
  props: {
    words: Array
  },
  setup(props) {
    const state = reactive({
      searchKey: ''
    });

    const onChange = ({ target }) => {
      state.searchKey = target.value;
    };

    const filteredWords = computed(() => {
      return props.words.filter(([word]) => word.toLowerCase().includes(state.searchKey.toLowerCase()));
		});

    return {
      filteredWords,
      onChange
    };
  }
}
</script>

<style scoped>
.word-group {
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>