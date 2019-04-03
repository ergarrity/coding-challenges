/* You are given an array-like data structure Listy which lacks a size method.
It does, however, have an elementAt(i) method that returns the element at index
i in O(1) time. If i is beyond the bounds of the data structure, it returns -1.
For this reason, the data structure only supports positive integers. Given a
Listy which contains sorted, positive integers, find the index at which an
element x occurs. If x occurs multiple times, you may return any index. */

const search = (listy, x) => {
    let i = 1;

    while(listy.elementAt(i) !== -1 && listy.elementAt(i) < x){
        i *= 2;
    }

    const binarySearch = (listy, x, lo, hi) => {
        let m;

        while(lo <= high){
            m = Math.floor((lo + hi) / 2);
            let num = listy.elementAt(m);

            if(num > x || num == -1){
                hi = m - 1;
            } else if (num < x){
                lo = m + 1;
            } else {
                return m;
            }
        }
        return -1;
    }
    return binarySearch(listy, x, i / 2, i);
}