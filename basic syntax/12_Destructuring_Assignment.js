#!/usr/bin/env node
var candyMachine = {
    status : {
        count : 5
    },
    getCandy : function() {
        candyMachine.status.count--;
        console.log(candyMachine);
        return candyMachine.status.count;
    }
};

// Javascript의 구조 분해
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

const {getCandy, status:{count}} = candyMachine;

getCandy();
console.log(count);

const array = ['nodejs', {}, 10, true];

// var node = array[0];
// var object = array[1];
// var bool = array[3];

const [node, obj, , bool] = array;