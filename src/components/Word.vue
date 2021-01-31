<template>
  <div :class="className">
    {{ word }} <span class="word-count">{{ count }}</span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: 'Word',
  props: {
    word: String,
    count: Number
  },
  setup(props) {
    const className = computed(() => {
      const status = props.count < 10 ? "low" : props.count < 20 ? "medium" : "high";
      return `word ${status} animate__animated animate__bounceIn`;
    });

    return {
      className
    };
  }
}
</script>

<style scoped>
.word {
  display: inline-flex;
  align-items: baseline;
  padding: 5px 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 2px;
  font-size: 15px;
  background-color: white;
}

.word.low .word-count {
  background-color: tomato;
}
.word.medium .word-count {
  background-color: orange;
}
.word.high .word-count {
  background-color: seagreen;
}

.word .word-count {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #eee;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 10px;
}
</style>