function maxTwoDimArray(matrix) {
  if (matrix.length === 0) return false;

  let highestNum = 0;

  matrix.forEach((element) => {
    element.forEach((number) => {
      if (number > highestNum) {
        highestNum = number;
      }
    });
  });

  return highestNum;
}
