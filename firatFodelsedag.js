function fodelseAr(alder, harFirat=false) {
    let fodd=(new Date()).getFullYear()-alder

    return harFirat ? fodd : fodd-1
}

let ar=fodelseAr(7, true);
console.log(`Du är född ${ar}`)

ar=fodelseAr(17)
console.log(`Du är född ${ar}`)
