const groupAnagrams = (arr) => {
    if(arr == undefined) return null;

    let mapArr = arr.map((string) => {
        return {
            original: string,
            sorted: string.split('').sort().join('')
        }
    });

    mapArr.sort((a, b) => {
        console.log(a, b)
        return a.sorted < b.sorted ? 1 : -1;
    });

    const answer = mapArr.map((string) => {
        return string.original;
    });
    return answer;
}
