import {inventory} from "../constants/inventory.js";

let inStockCounter = 0;
function inStockTv (inventory){
    for (let i = 0; i < inventory.originalStock.length; i++) {
        inStockCounter = inStockCounter + inventory.originalStock[i];
    }
    return inStockCounter;
}