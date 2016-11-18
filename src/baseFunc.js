function baseSort(a, b, key) {
    var a_orderNo = a[key];
    var b_orderNo = b[key];

    if (a_orderNo > b_orderNo) {
        return 1;
    } else if (a_orderNo < b_orderNo) {
        return -1;
    } else {
        return 0;
    }
}

export default {
    baseSort: baseSort
};