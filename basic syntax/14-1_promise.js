#!/usr/bin/env node

var condition = true;

var promise = new Promise((resolve, reject) => { //첫번째 Promise 객체.
    if(condition){
        resolve('success');
    }else{
        reject('fail');
    }
})

promise
    .then((message) => { //두번째 then, 두번째 Promise 객체의 message를 매개변수로 가진다.
        return new Promise((resolve, reject) => { // 두번째 Promise 객체.
            resolve(message);
        })
    })
    .then((message2) => { //두번째 then, 두번째 Promise 객체의 message를 매개변수로 가진다.
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2 + 3);
            console.log(message2 + 3);
        });
    })
    .then((message3) => {
        console.log(message3 + 4);
    })
    .catch((error) => {
        console.log(error);
    });