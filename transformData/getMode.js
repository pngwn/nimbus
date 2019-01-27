export default array => {
  let modeCount = {};
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
