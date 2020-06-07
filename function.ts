// function add(x: number, y: number, z: number = 10): number {
//   if (typeof z === 'number') {
//     return x + y + z;
//   }
//   return x + y;
// }



const add = function(x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z;
  }
  return x + y;
}

add(1, 2);

const add2: (x: number, y: number, z: number) => number = add;