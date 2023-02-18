console.group("level 1")
console.log(1000)
console.warn(2000)
console.group("level 2")
console.log(3000)
console.log(4000)
console.groupEnd()
console.groupEnd()

// console.assert(1===1,"1确实等于1")
// console.assert(2===1,"2不等于1")
// console.assert(2===1,"2不等于1",1000,2000)
// console.assert(2===1,"%d不等于%d",2,1)

// console.table(["a","b","c"])
// console.table({a:1,b:2})
// console.table([[1,2],[3,4]])

// // console.log("hello","js")
// console.log("hello %s","js")
// /*
//     %o object
//     %d decimal
//     %s string
//     %f float
// */ 
// console.log("hello num:%d",100)
// console.log("hello obj:%o",{a:1})
// console.log("hello float:%f",3.1)
// // console.warn()
// // console.error()
// // console.info()
// // console.debug()