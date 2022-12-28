// Your code here
Array.prototype.isEqual = function (array) {
    for (i = 0; i < array.length; i++) {
      if (this[i] !== array[i]) {
        return false;
      }
    }

  return true;
};
