let namn=['Kalle', 'Pelle', "Olle"]

console.log(namn, namn.length)
console.log(namn.at(1))
console.log(namn[1])

namn[2]='Lisa' // Byt element 2 till Lisa
console.log(namn, namn.length)

namn.push('Kjell') // Lägg till ett element sist i arrayen
console.log(namn.shift(),namn) // Shift returnerar och tar bort första elementet

let third=namn.splice(2,1)
// splice tar bort ett antal element från arrayen och returnerar
// dem som en ny array
console.log(namn, third)

namn.reverse() // reverse byter ordning på arrayen
console.log(namn)
namn.sort() // sorterar arrayen i bokstavsordning
console.log(namn)

console.log(namn.includes('Sven'))