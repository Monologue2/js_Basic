#!/usr/bin/env node

/**
 * Shabang, 스크립트를 실행할 프로그램의 경로를 뜻함
 * 해시 기호(#)와 느낌표(!)로 이루어진다
 * Linux, Unix 에서 지원
 */

const shell = require('shelljs');

shell.cd('~')
shell.cd('nodejs')

if(shell.exec('ls -al').code !==0){
    shell.echo('Error:command failed');
    shell.exit(1);
    //script 종료
}