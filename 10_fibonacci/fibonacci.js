function fibonacci(num) {
    num = parseInt(num, 10)
    if(num < 0 ){
        return 'OOPS'
    }
    let fibonacci = []
    for(let i = 1; i <= num; i ++){
        if(i > 2){
        fibonacci.push(fibonacci[i-3] + fibonacci[i-2])
    } else {
        fibonacci.push(1)
    }
} return fibonacci[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
