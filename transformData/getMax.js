import _ from "lodash";

export default array => {
  let maxValue = _.reduce(array, (sum, n) => {
    return n > sum ? n : sum;
  });
  return Math.round(maxValue);
};
