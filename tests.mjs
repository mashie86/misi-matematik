import assert from 'node:assert/strict';
import fs from 'node:fs';
import {BANK,options,rng,checkAnswer,LIMITS} from './bank.js';
assert(BANK.length>3000);
assert.equal(new Set(BANK.map(q=>q.id)).size,BANK.length);
for(const q of BANK){assert(Number.isFinite(Number(q.answer)),q.id);assert(Number(q.answer)>=0,q.id);assert(q.explanation.length>0);const choices=options(q,rng(123));assert.equal(choices.length,4,q.id);assert.equal(new Set(choices).size,4,q.id);assert.equal(choices.filter(v=>checkAnswer(v,q.answer)).length,1,q.id);assert(checkAnswer(' '+q.answer+' ',q.answer),q.id);if(q.skill==='Tambah'){const [a,b]=q.text.match(/\d+/g).map(Number);assert.equal(+q.answer,a+b);assert(a+b<=LIMITS[q.year]);}if(q.skill==='Peratus'){const [n,p]=q.text.match(/\d+/g).map(Number);assert.equal(+q.answer,n*p/100);}if(q.skill==='Luas'){const [a,b]=q.text.match(/\d+/g).map(Number);assert.equal(+q.answer,a*b);}if(q.skill==='Jisim'){const [a,b]=q.text.match(/\d+/g).map(Number);assert.equal(+q.answer,a*1000+b);}if(q.skill==='Diskaun'){const [price,pct]=q.text.match(/\d+/g).map(Number);assert.equal(+q.answer,price-price*pct/100);}}
assert(!checkAnswer('',0));assert(!checkAnswer('2abc',2));assert(!checkAnswer('2,5',2.5));assert(checkAnswer('1,000',1000));assert(checkAnswer('RM 2.50',2.5));assert(checkAnswer('2.500',2.5));
for(let y=1;y<=6;y++){const qs=BANK.filter(q=>q.year===y);assert(qs.length>250);assert(qs.some(q=>q.type==='berayat'));assert(qs.some(q=>q.type==='kiraan'));console.log(`Tahun ${y}: ${qs.length} soalan, ${new Set(qs.map(q=>q.skill)).size} kemahiran`);}
const manifest=JSON.parse(fs.readFileSync(new URL('./manifest.webmanifest',import.meta.url)));for(const icon of manifest.icons)assert(fs.existsSync(new URL(icon.src,import.meta.url)));
for(const f of ['index.html','app.js','bank.js','style.css','sw.js','icon.svg','icon-192.png','icon-512.png'])assert(fs.statSync(new URL(f,import.meta.url)).size>0);
console.log(`PASS: ${BANK.length} soalan; pilihan unik, jawapan, semakan pengiraan dan aset PWA.`);

