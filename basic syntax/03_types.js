#!/usr/bin/env node

//기본 자료형

//숫자 및 숫자의 연산자, javascript는 연산자 우선순위를 고려한다
10000;
12050;
console.log(1000 + 2000);
console.log(1000 * 200);
console.log(100/10); 
console.log(1241%26);
console.log(100 + 200 * 2000);

//문자열, "" 또는 '' 또는 `` 를 사용한다
"안녕하세용"
console.log('안녀엉하세용');
`Hello.`

//문자열 중 ``를 템플릿 문자열이라 명한다.
//템플릿 문자열은 ${표현식} 형태를 사용할 수 있다.
let variable1 = "테스트 문자열 입니다. 템플릿 문자열을 통해 삽입해봅시다."
let variable2 = 1130;
console.log(`${variable1} ${variable2}`)


//불, boolean. 참 혹은 거짓을 표현하기 위해 사용한다
console.log(1241 < 251) // 정답은?
console.log(124 < 22) // 정답은?

//비교연산자 ==, !=. >, <, >=, <=
console.log(100 == 100) //같은가?
console.log(100 != 100) //다른가?