let arr = new Array();
for (let i = 0; i < 10; i++) {
    var ran = Math.floor(99 + Math.random() * 900)
    arr.push(ran);
}
console.log(arr)
let temp = 0;
let num;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

}

console.log(arr)
console.log("second largest number is " + arr[arr.length - 1] + " and second smallest number is " + arr[1])