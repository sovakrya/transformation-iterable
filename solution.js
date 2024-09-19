export const transformInArray = (obj) =>
  Object.entries(obj).map(([key, value]) => ({ name: key, value }));

export const transformInObject = (arr) =>
  Object.fromEntries(arr.map((obj) => [obj.name, obj.value]));
