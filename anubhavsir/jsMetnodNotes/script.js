
// ...arr
// toString()
// arr.length => lastme () nahi aata

var arr = [1,2,3,4,5,6]

console.log(...arr)

console.log(arr.toString())



// arr.at(2)
// arr[2]
console.log(arr.at(2))
console.log(arr[2])



//  arr.join(@)
//  arr.join(a)  => a = 32
//  arr.join('a')  => a = a
//  arr.join(|)

// console.log(arr.join(a)) // yaha a defined nahihe
console.log(arr.join('a'))
console.log(arr.join('@'))
console.log(arr.join("|"))


// arr.push(10) => lastme value add karta he 
// arr.pop(10) => lastvali value ko delet karta he
// arr.length

arr.push(10) // lastme 10 add kardiya
console.log(arr)
console.log(arr.length)
arr.pop() // pehlibar last 10 remove
arr.pop() // ab last 6 remove
console.log(arr)
arr.push(15) // lastme 15 add kardiya
console.log(arr)

// arr.shift() => first element ko remove karta he
// arr.unshift() => first element ko add karta he

arr.shift() // first aliment 1 remove ho gaya
console.log(arr)

arr.unshift(12)
console.log(arr)

console.log("kamlesh")
















