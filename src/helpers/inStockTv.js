
let inStockCounter = 0;
function inStockTv (){
    for (let i = 0; i < inventory.originalStock.length; i++) {
        inStockCounter = inStockCounter + inventory.originalStock[i];
    }
    return inStockCounter;
}

export default