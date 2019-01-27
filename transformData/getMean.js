import _ from "lodash";

export default array => {
  let mean = _.reduce(array, (sum, n) => sum + n) / array.length;
  return Math.round(mean * 100);
};
