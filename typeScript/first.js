function add(id, x) {
    return id + x;
}
var arr = new Array("hi", "how", "are", "you", "doing", "fine", "cool");
//console.log(arr);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
var min = arr[0];
var large2 = arr[0];
for (var i in arr) {
    if (min > arr[i])
        min = arr[i];
}
function minOfTwo(x, y) {
    if (x < y)
        return x;
    else
        return y;
}
function maxOfThree(x, y, z) {
    if (x > y && x > z)
        return x;
    else if (y > x && y > z)
        return y;
    else
        return z;
}
var max = arr[0];
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var i = arr_2[_a];
    if (max < i)
        max = i;
}
for (var _b = 0, arr_3 = arr; _b < arr_3.length; _b++) {
    var i = arr_3[_b];
    if (large2 < i && i < max)
        large2 = i;
}
//console.log("minimun of two numbers 6,5 = "+minOfTwo(6,6.5));
//console.log(" max of three -1 ,4.0,7.5 ="+maxOfThree(-1,4.0,7.5))
//console.log("minimum element : "+min);
//console.log("second largest from array : "+large2);
