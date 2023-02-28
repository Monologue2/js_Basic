#!/usr/bin/env node

var relationship1 = {
    name : 'zero',
    friends : ['zero', 'hero', 'xero'],
    logFriends : function() {
        //각자 다른 함수 스코프를 가지므로 that 변수를 활용하여 relationship1 객체에 간접적으로 접근한다.
        var that = this;
        this.friends.forEach(function (friend){
            //relationship1 객체를 that으로서 전달하였다.
            console.log(that.name, friend);
        })
    }
}

relationship1.logFriends();



var relationship2 = {
    name : 'zero',
    friends : ['zero', 'hero', 'xero'],
    logFriends() {
        //logFriends 의 this -> relationship2 의 객체
        this.friends.forEach(friend => {
            //화살표 함수로 전달할 시 this -> relationship2 객체 그대로
            //상위 스코프의 this 를 그대로 전달받는다
            //화살표 함수를 그냥 선언시 this 가 undefined 가 되는 이유.
            console.log(this.name, friend)
        })
    }
}

relationship2.logFriends();