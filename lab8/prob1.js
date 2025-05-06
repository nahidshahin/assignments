"use strict";

class Meditation {
    constructor(count) {
        this.count = count;
    }

    start() {
        let timerId = setInterval(() => {
            console.log(this.count != 0 ? this.count : "hello Guru")
            this.count--;
            if (this.count < 0) {
                clearInterval(timerId);
            }
        }, 100);
    } 
}

const morning_meditation = new Meditation(5); 
morning_meditation.start(); 
console.log(`Start meditation`); 
