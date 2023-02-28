#!/usr/bin/env node

function longRunningTask() {
    //오래 걸리는 작업
    console.log("Done");
}

console.log("Task start");
longRunningTask();
console.log("Next Task");


console.log("---------");

console.log("Task start 2");
//None Blocking 기법 중 하나, 노드에서는 setImediate 를 사용
setTimeout(longRunningTask, 0);
console.log("Next task 2");
