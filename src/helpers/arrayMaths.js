export const mode = array => {
  const modeCount = {};
  let maxCount = 1;
  let maxEl = array[0];

  for (const item of array) {
    if (!modeCount[item]) {
      modeCount[item] = 1;
    } else {
      modeCount[item] += 1;
    }

    if (modeCount[item] > maxCount) {
      maxCount = modeCount[item];
      maxEl = item;
    }
  }
  return maxEl;
};

export const min = array => {
  const minValue = array.reduce((sum, n) => {
    return n < sum ? n : sum;
  });
  return Math.round(minValue);
};

export const mean = array => {
  const mean = array.reduce((sum, n) => sum + n) / array.length;
  return Math.round(mean * 100);
};

export const max = array => {
  const maxValue = array.reduce((sum, n) => {
    return n > sum ? n : sum;
  });
  return Math.round(maxValue);
};
