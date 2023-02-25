//엄연히 말하면 Javascript엔 클래스란 개념이 존재하지 않는다.
//기존의 객체를 "복사"하여 새로운 객체를 생성하는 프로토타입 기반의 언어다.
//객체 원형인 프로토타입을 복사하여 새로운 객체를 만들고, 이 새로운 객체는 역시 다른 객체의 원형이 될 수 있다.
//즉 전혀 상관없는 타입으로도 바꿀 수 있거나, 부모/자식 관계가 존재하지 않는다.

//클래스 선언
class TestClass{
    constructor (para1, para2, name, value){
        this.para1 = para1;
        this.para2 = para2;
        this.name = name;
        this.value = value;
    }
}

//클래스를 이용하여 객체 선언

let instance1 = new TestClass("하나", "둘", "이름", "값");
console.log(instance1.value);