export function transformInArray(obj) {
  const res = [];

  for (let key in obj) {
    const newObj = {
      name: "",
      value: "",
    };
    newObj.name = key;
    newObj.value = obj[key];
    res.push(newObj);
  }

  return res;
}


export function transformInObject(arr) {
  const res = {};

  for (let val of arr) {
    res[val.name] = val.value
  }

  return res;
}



