#!/usr/bin/env node

//클래스 문법으로 바뀌었으나, 프로토타입 기반으로 동작한다.
class Human{
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human){ //클래스 함수
        //instanceof 연산자 --> 프로토타입 체인 어딘가에 존재하는지 판별함
        return human instanceof Human;
    }

    breathe(){//메소드
        alert ('호아암');
    }
}

class Zero extends Human {
    constructor(type, firstName, secondName){
        super(type);//상속하는 부분
        this.firstName = firstName;
        this.secondName = secondName;
    }

    sayName(){
        super.breathe();//메소드 오버로딩
        alert(`${this.firstName} ${this.secondName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'choi');
console.log(Human.isHuman(newZero));