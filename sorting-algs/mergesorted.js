// Write a function that merges two sorted arrays, A and B, into list A in sorted order.

const mergeSorted = (A, B) => {
    if(A == undefined || B == undefined) return null;

    let pointA = 0;
    let pointB = 0;

    const moveBack = (arr, pt, end) => {
        let currPt = end;

        while(currPt > pt){
            arr[currPt] = arr[currPt - 1];
            currPt--;
        }
    };

    let end = A.length;

    while(pointB < B.length){
        
        if(pointA == end){
            A[pointA] = B[pointB];
            pointA++;
            pointB++;
            end++;
        }

        else if (A[pointA] < B[pointB]){
            pointA++;
        }

        else {
            moveBack(A, pointA, end);
            A[pointA] = B[pointB];
            pointA++;
            pointB++;
            end++;
        }
    }
    return A;
}