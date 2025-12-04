const primes=[]
for(let i=2;i<1000;i++) {
    let delbart=false
    for(let j=2;j<Math.sqrt(i);j++) {
        if( i % j ===0) {
            delbart=true
            break
        }
    }
    if(!delbart) {
        primes.push(i)
    }
}
console.log(primes)

const countries=[]
countries.push({namn:"Sverige", valuta:"SEK"})
countries.push({
    namn:"Danmark",
    valuta: "DKK",
    regioner:["Färöarna", "Grönland"]
})
countries.push({namn: "Finland", valuta:"EUR",
regioner: ["Åland"]})

for (let land of countries) {
    for (let prop in land) {
        if(Array.isArray(land[prop])) {
            for (const itm of land[prop]) {
                console.log(`\t${prop}: ${itm}`)
            }
        } else {
            console.log(`${prop}: ${land[prop]}`)
        }
    }
    console.log("")
}