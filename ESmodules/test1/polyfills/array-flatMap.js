// здесь никакие экспорты не нужны

console.log('polyfill for flatMap');

// eslint-disable-next-line no-extend-native
Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function flatMap() {
    // ... implementation for older browsers
  };
