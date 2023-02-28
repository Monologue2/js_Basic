#!/usr/bin/env node

//통상적인 array : 실제 메모리상에 데이터가 연속적으로 저장되고, 원소를 순서대로 나열한 집합이다.
//js 에서의 array : 일반적인 배열의 "동작"을 흉내냄. 실제 메모리상에 연속적으로 저장되진 않으나 원소가 순서대로 나열되어있다.

console.log(Object.getOwnPropertyDescriptors([1,2,3,4]));
/*
Javascript의 배열은 Index를 Property 값으로 갖는걸 확인할 수 있다.
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/

const arr1 = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [ ],
    { },
    function () {}
  ];

console.log(Object.getOwnPropertyDescriptors(arr1));
/*
Javascript에서 사용가능한 모든 값은 객체의 Property 값이 될 수 있으므로,
어떤 값이라도 배열의 요소가 될 수 있다.
{
  '0': {
    value: 'string',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': { value: 10, writable: true, enumerable: true, configurable: true },
  '2': { value: true, writable: true, enumerable: true, configurable: true },
  '3': { value: null, writable: true, enumerable: true, configurable: true },
  '4': {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '5': { value: NaN, writable: true, enumerable: true, configurable: true },
  '6': {
    value: Infinity,
    writable: true,
    enumerable: true,
    configurable: true
  },
  '7': { value: [], writable: true, enumerable: true, configurable: true },
  '8': { value: {}, writable: true, enumerable: true, configurable: true },
  '9': {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 10, writable: true, enumerable: false, configurable: false }
}
*/


//conclusion
/*
일반적인 배열은 Index를 통해 배열 요소에 바르게 접근할 수 있으나, 특정 요소를 탐색하거나 삽입, 삭제하는 경우 효율적이지 않다.
Javascript 배열은 Index를 통해 배열 요소에 접근하는 경우 일반적인 배열보다 느리나
"해시 테이블"로 구현된 객체이므로 탐색, 삽입, 삭제의 경우 일반적인 배열보다 빠르다.

또한 일반적인 배열과 비교했을 때 구조적인 단점을 보완하기 위해 대부분의 modern Javascript Engine은
배열을 일반 객체와 구별하여 보다 배열처럼 동작하도록 최적화하였다.
*/
