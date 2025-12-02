let flip=Math.random();
console.log(flip>0.5 ? 'krona' : 'klave')

let tal1=Math.random()
console.log(tal1, Math.floor(tal1)) // Math.floor avrundar neråt
console.log(Math.ceil(tal1)) // Math.ceil avrundar uppåt

// SLumpa tärningskast
let tarning=Math.ceil(Math.random()*6)
console.log(tarning)

// Slumpa lotto
let lotto=Math.floor(Math.random()*40)+1
console.log(lotto)