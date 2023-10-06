const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let result = [];
    for (let i = 0; i < num; i++) {
      result.push(str);
    }
    return result.join("");
  }
};

// Do not edit below this line
module.exports = repeatString;
