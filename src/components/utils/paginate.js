import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  const startingIndex = (pageNumber - 1) * pageSize;
  // const lastIndex = pageNumber * pageSize;

  return _(items).slice(startingIndex).take(pageSize).value();

  // return _.slice(items, startingIndex, lastIndex);
};
