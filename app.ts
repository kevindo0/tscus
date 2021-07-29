let list = [1, "string", false];
 
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx, array);
});