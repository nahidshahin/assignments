"use strict";

let isPrime = (n) => {
    return new Promise( (resolve) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) 
            if (n % i === 0) return resolve({prime: false}); 
        return resolve({prime: n > 1});
    }); 
}

console.log('start');
(async () => {
    try {
        const res = await isPrime(7);
        console.log(res);
    }catch (e) {
        console.error(e);
    }
})();
console.log('end'); 

// start 
// end 
// { prime: true } 
