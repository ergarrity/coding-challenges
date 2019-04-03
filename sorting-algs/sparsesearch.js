/* Given a sorted array of strings that is interspersed with empty strings, write a
method to find the location of a given string. */

function search(strings, str){
    if(strings == null || str == null || str == ""){
        return -1;
    }

    const helper = (strings, str, first, last) => {

        if(first > last) return -1;

        let m = Math.floor((first + last) / 2);

        if(strings[m] == ""){
            let left = m - 1;
            let right = m + 1;

            while(true){
                
                if(left < first && right > last){
                    return -1;
                }

                else if (right <= last && strings[right] !== ""){
                    m = right;
                    break;
                }

                else if (left >= first && strings[left] !== ""){
                    m = left;
                    break;
                }

                right++;
                left++;
            }
        }

        if(str == strings[m]){
            return m;
        }

        else if (strings[m] > str){
            return helper(strings, str, first, m - 1);
        }

        else {
            return helper(strings, str, m + 1, last);
        }
    }
    return helper(strings, str, 0, strings.length - 1)
}