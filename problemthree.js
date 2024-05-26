// Your task to is to make a function that can take any non-negative
//integer as an argument and return it with its digits in descending
// order. essentially rearrange the digits to create to the highest possible number.

function descendingOrder(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}
console.log(descendingOrder(738251));