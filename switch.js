let dag=new Date(), feeling

switch (dag.getDay()) { // Returnera dagens nummer i veckan
    case 0:
        feeling="Sunday's my funday"
        break;
    case 5:
        feeling="TGIF!"
        break
    case 6:
        feeling="Sleeepin' in"
        break
    default:
        feeling="Hey, ho, let's go!"
}

console.log(dag.toLocaleDateString(), feeling)