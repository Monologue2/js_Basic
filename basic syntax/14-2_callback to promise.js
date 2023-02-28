#!/usr/bin/env node

//콜백 함수
function findAndSaveUser(Users){
    Users.findOne({}, (err, user) =>{ // 첫번째 콜백
        if(err){
            return console.log.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두번째 콜백
            if(err) {
                console.log.error(err);
            }
            Users.fineOne({gender : 'm'}, (err, user) => { // 세번째 콜백
                // 생략 ...
            })
        })
    })
}

/**
 * 콜백 함수가 3번 중첩되어 있다.
 * 콜백 함수가 나올 때마다 코드가 깊이가 깊어지며,
 * 콜백 함수마다 에러를 따로 처리해줘야한다.
 * 이 코드를 Promise를 통해 개선해보자.
 */

function promise_findAndUser(Users){
    Users.fineOne({}) //fineOne, save 객체가 Promise 객체를 지원한다고 가정한다.
        .then((user) =>{
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.fineOne({gender : 'm'})
        })
        .then((user) => {
            //생략
        })
        .catch((err) =>{
            console.log.error(err);
        })
}

/**
 * 코드의 깊이가 3칸 이상 깊어지지 않으며, 에러 처리가 매우 간단해졌다.
 */