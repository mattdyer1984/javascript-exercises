const palindromes = function (str) {
    str = str.toLowerCase(); // Convert the string to lowercase
    let regex = /[a-z0-9]/g;
    let answer = true;
    let matches = str.match(regex);
    for (let i = 0; i < Math.floor(matches.length / 2); i++) {
        if (matches[i] !== matches[matches.length - i - 1]) {
            answer = false;
            break;
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = palindromes;
