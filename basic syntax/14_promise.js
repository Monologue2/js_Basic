#!/usr/bin/env node

//콜백 함수 대신 사용할 수 있는 Promise.
//Callback hell 현상을 극복하였단 평가가 있다.

const condition = true; // true -> resolve , false -> reject

//먼저 Promise 객체를 생성한다.
const promise = new Promise((resolve, reject) =>{ // resolve 와 reject를 매개변수로 갖는 callback 함수 생성
    if (condition){
        resolve('성공');
    }else{
        reject('실패');
    }
}); // 즉시 실행됨.

//이 행엔 다른 코드가 들어갈 수 있다.

promise // promise 변수에 then , catch, fianally method를 호출 할 수 있다.
    .then((message) => {
        console.log(message); // 성공시 실행. then method
    })
    .catch((error) => {
        console.log(error); // 실패시 실행. catch method
    })
    .finally(() => {
        console.log('finally'); // 반드시 실행. finally method
    })


//Promise는 실행을 바로 하되 결과값을 나중에 받는 객체
//결과값은 실행을 완료한 뒤 then, catch를 통해 받음