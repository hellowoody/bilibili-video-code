/*
    Array.sort(callback)
*/
const arr = [0, 1, 10, 2, 3, 5]

arr.sort(function(backend,frontend){
    console.log(backend,frontend)
    if(backend > frontend){
        return 1
    }else if(backend < frontend){
        return -1
    }else{
        return 0
    }
})
console.log("升序：",arr)



