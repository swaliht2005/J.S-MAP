const duble = a.map (value => value*2)
console.log(duble)

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let b = [];


for (let i = 0; i < a.length; i++) {
  if (a[i] > 4) {
    b.push(a[i]);
  }
}

console.log(b); 