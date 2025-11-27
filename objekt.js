const person = {
    firstName: 'John',
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}
console.log(person)
console.log(person.firstName)

person.gender = 'Male'
console.log(person)

let klass = []
let p1 = {namn: 'Sven', age: 17, gender: 'M'}
let p2 = {namn: 'Sten', age: 18, gender: 'M'}
let p3 = {namn: 'Anna', age: 16, gender: 'K'}
let p4 = {namn: 'Lisa', age: 19, gender: 'K'}
klass.push(p1, p2, p3, p4)

klass=klass.map(p =>{
    p.born=2025-p.age
    return p
})
console.log(klass)

klass.sort((a,b) =>{
    return a.age>b.age ? 1 : -1
})
console.log(klass)

let hitta=klass.find(item => {
    return item.namn==='Per'
})
console.log(hitta)

hitta=klass.find(item => {
    return item.namn==='Anna'
})
console.log(hitta)