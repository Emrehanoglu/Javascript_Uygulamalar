//Functıon 1
function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof (c) !== 'undefined') {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
}
//Functıon 2
function getAverage2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
}
console.log(getAverage(10, 20));
console.log(getAverage(10, 20, 30));
console.log(getAverage2(10, 20, 30, 40));
