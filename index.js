function map(arr, callback) {
    return arr.map(e => callback(e));
};

function reduce(arr, callback, start) {
    let s = !!start ? start : arr[0]
    let i = (!!start) ? 0 : 1

    for (; i < arr.length; i++) {
        s = callback(arr[i], s)
    }

    return s;
}