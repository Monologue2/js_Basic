#!/usr/bin/env node
//프로토타입 방식의 상속 방식

var Human = function(type){
    this.type = type || 'human';
};

Human.isHuman = function(human){
    //instanceof 연산자 --> 프로토타입 체인 어딘가에 존재하는지 판별함
    return human instanceof Human;
}

Human.prototype.breathe = function() {
    alert('후하');
}

//Human 을 상속받는 Zero

var Zero = function(type, firstName, secondName){
    //apply? , 상속하는 부분
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.secondName = secondName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constrictor = Zero; // 상속하는 부분
Zero.prototype.sayName = function() { 
    alert(this.firstName + ' ' + this.secondName);
};

var oldZero = new Zero('human', 'Zero', 'Cho')
console.log(Human.isHuman(oldZero)); //true