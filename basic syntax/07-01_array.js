// 일반적인 배열과 비교했을 때 구조적인 단점을 보완하기 위해 대부분의 modern Javascript Engine은
// 배열을 일반 객체와 구별하여 보다 배열처럼 동작하도록 최적화하였다.

//배열 동작 성능 테스트
const arr = [];
console.time('Array Performance Test');
for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}
console.timeEnd('Array Performance Test');
// 약 340ms

//일반 객체 성능 테스트
const obj = {};
console.time('Object Performance Test');
for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}
console.timeEnd('Object Performance Test');
// 약 600ms

//일반적인 삽입 연산에서 약 2배의 성능차이가 기대된다!