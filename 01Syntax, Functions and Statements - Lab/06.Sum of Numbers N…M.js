function solve(one, two) {
    let begin = Number(one);
    let end = Number(two);
    let result = 0;
    for (let i = begin; i <= end; i++) {
        result += i;
    }
    console.log(result);
}

solve('1', '5' );