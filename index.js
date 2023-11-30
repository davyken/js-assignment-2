function isEven(num) {
    if ((num % 2) == 0) {
        return "even"
    } else {
        return "odd"

    }

} console.log(isEven(9))
isEven()//1



function countBs(s) {

    var count = 0;
    for (var i = 0; i < s.length; i += 1) {
        if (s.charAt(i) === "B")
            count += 1;
    }
    return count;

}
console.log(countBs("BBBBB"))//2



function countChar(s, c) {
    var count = 0;
    for (var i = 0; i < s.length; i += 1) {
        if (s.charAt(i) === c)
            count += 1;
    }
    return count;
} console.log(countChar("kkkkjghhk", "k"))//3

function number(number) {
    let n1 = 0
    let n2 = 1
    for (let i = 0; i <= number; i++)
        let num = (n1 + n2) +=
} console.log(number(15))//4


function num(start, end) {
    var count = []
}//5

function sumNumber(n) {
    var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 1; i <= 10; i++)
        n = n + 1

} console.log(sumNumber(10))//6



const sum = [1, 2, 3].reduce(add, 0);

function add(result, a) {
    return result + a;
}

console.log(sum);//8

const average = array => array.reduce((a, b) => a + b) / array.length;
console.log(average([1, 2, 3, 4, 5]));//9