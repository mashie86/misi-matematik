import assert from 'node:assert/strict';
import {EASY_BANK} from './easy.js';
import {options,checkAnswer} from './bank.js';
for(const q of EASY_BANK){const [a,b]=q.operands;const expected=q.operation==='Tambah'?a+b:q.operation==='Tolak'?a-b:q.operation==='Darab'?a*b:a/b;assert.equal(+q.answer,expected);assert.equal(options(q).filter(x=>checkAnswer(x,q.answer)).length,1);if(q.year===1)assert(Math.max(a,b,expected)<=20);}
for(let year=1;year<=3;year++)for(const op of ['Tambah','Tolak','Darab','Bahagi'])assert(EASY_BANK.filter(q=>q.year===year&&q.operation===op).length>=10);
console.log('PASS: '+EASY_BANK.length+' latihan mudah, empat operasi bagi setiap tahun.');
