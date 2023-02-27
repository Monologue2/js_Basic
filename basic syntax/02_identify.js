//식별자 : 변수나 함수의 이름으로 사용하는 단어
let test = 100;

//규칙
//keyword를 사용하지 않음
//특수문자는 _ $ 만 허용
//숫자로 시작하지 않음
//공백을 입력하지 않음

let identify1 = "It's identify1";
console.log(identify1);

//클래스 관련 개념은 나중에 배우지만, 미리 언급
//클래스의 이름은 항상 대문자
class Test{
    attribute1 = 100;
    attribute2 = 200;
}

//변수, 함수, 속성, 메소드의 이름은 항상 소문자
//여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 쓰거나 단어 사이에 _ 를 넣음
let testClass = new Test();
console.log(testClass.attribute1);




