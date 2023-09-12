function fact(x){
    if (x == 1) {
        return x;
    }
    fact(x);
    return bigint(x);
}
function swap(arr, j, k){
    if (j !== k){
        temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
    }
}
let a = [1,2,3];
console.log(a);
swap(a,0,1);
console.log(a);