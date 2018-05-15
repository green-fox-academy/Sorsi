export {}

'use strict';

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(value: any): any {
  let newShopItems: any = shopItems.splice(1, 1, 'Croissant');
  shopItems.splice(3, 1, 'Ice Cream')
return shopItems;
}


console.log(sweets(shopItems))