function wordCounter(content) {
  const result = {};

  const text = content
    .replace(/\W/gim, " ")
    .split(" ")
    .map((word) => word.trim().toLowerCase())
    .filter((word) => !!word);

  text.forEach((word) => {
    if (word && !/(\d)+/.test(word)) {
      if (result[word]) {
        result[word] += 1;
      } else {
        result[word] = 1;
      }
    }
  });

  return result;
}

export default wordCounter;
