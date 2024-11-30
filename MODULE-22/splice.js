// splice er khettre
// VarName.splice(startindex, dlt-itm-num, add-items,add-iteams);

// kono ekti array theke ekti ongso kete niya asa splice er kaj
// tobe splice dara original array change hoy
// er sahajje notun iteam array te insert kora jay

const friend = [12,35,15,15,38,16,33,66,64,18,48,55,26];
console.log('Original array before splie:',friend);
const partial = friend.splice(2, 5 ,66,52,14); 
console.log('Splie Part:',partial);
console.log('Current Array after splie:',friend);

