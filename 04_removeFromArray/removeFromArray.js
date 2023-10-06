const removeFromArray = function (arr, a = "", b = "", c = "", d = "") {
  let i = arr.indexOf(a);
  if (i != -1) {
    arr.splice(i, 1);
  }
  let j = arr.indexOf(b);
  if (j != -1) {
    arr.splice(j, 1);
  }
  let k = arr.indexOf(c);
  if (k != -1) {
    arr.splice(k, 1);
  }
  let l = arr.indexOf(d);
  if (l != -1) {
    arr.splice(l, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
