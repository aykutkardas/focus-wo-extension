function wordCounter(content) {
  const result = {};

  const text = content
    .replace(/[^\w ']/gim, " ")
    .split(" ")
    .map((word) => word.trim().toLowerCase())
    .filter((word) => !!word);

  text.forEach((word) => {
    if (word && !/(\W|\d)+/.test(word)) {
      if (typeof result[word] === "number") {
        result[word] += 1;
      } else {
        result[word] = 1;
      }
    }
  });

  return result;
}

export default wordCounter;
