let items  = [250, 655,300,50];
let i = 0;
 
for(let val of items){

   console.log(val);

   let offer = val/10;

   items[i] = items[i]-offer;

   console.log(`valoue ofter offer=${items[i]}`);

   i++;

}