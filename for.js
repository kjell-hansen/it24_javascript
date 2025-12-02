const frukt=['äppel', 'päron', 'banan','kiwi']

// Vanligast for-loopen
for(let i=0;i<frukt.length;i++) {
    console.log(i,frukt[i])
}

// Loopa över en arrays värden
for(let f of frukt) {
    console.log(f)
}

let bil={årsmodell:2015,
    märke:'Volvo', färg:'blå'}

// Loopa över egenskaperna i objekt
for (let p in bil) {
    console.log(p,bil[p])
}