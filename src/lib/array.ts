export const groupBy = (cb) => (arr) =>
  arr.reduce((agg, item) => {
    const key = cb(item);
    if (!agg[key]) {
      agg[key] = [];
    }
    agg[key].push(item);
    return agg;
  }, {});
