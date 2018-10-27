//递归实现
function bsearch(array,target,left,right){
    var left = left || 0;
    var right = right || array.lenght-1
    if(left>right){
        return -1
    };
    var mid = Math.floor((left+right)/2);
    if(target>array[mid]){
        return bsearch(array,target,mid+1,right)
    }else if(target<array[mid]){
        return bsearch(array,target,left,mid-1)
    }else{
        return mid;
    }
}
var arr = [1,3,5,7];
console.log(bsearch(arr,3,0,3))

//非递归实现
function bsearch2(array,target,left,right){
    var left = left || 0;
    var right = right || array.lenght-1
    while(left<=right){
        var mid = Math.floor((left+right)/2)
        if(target>array[mid]){
            left = mid + 1
        }else if(target<array[mid]){
            right = mid - 1
        }else{
            return mid
        }
    }
    return -1
}
var arr = [1,3,5,7];
console.log(bsearch2(arr,3,0,3))