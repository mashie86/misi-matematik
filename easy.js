export const EASY_BANK=[];
for(let year=1;year<=3;year++){
 const max=year===1?20:year===2?50:100;
 const add=(operation,a,b,result,text,explanation,visual='',type='kiraan')=>EASY_BANK.push({id:`E-${year}-${operation}-${EASY_BANK.length}`,year,topic:'nombor',skill:operation,type,text,answer:String(result),explanation,unit:'',visual,level:'Mudah',operands:[a,b],operation,easy:true});
 const dots=n=>`<span class="object-group" aria-label="${n} objek">${'● '.repeat(n).trim()}</span>`;
 for(let a=1;a<=10;a++)for(let b=1;b<=10;b++){
  if(a+b<=max){add('Tambah',a,b,a+b,`${a} + ${b} = ?`,`Mula dengan ${a}, kemudian bilang ${b} lagi. ${a} + ${b} = ${a+b}.`,a+b<=20?dots(a)+'<span>+</span>'+dots(b):'');
  add('Tolak',a+b,b,a,`${a+b} − ${b} = ?`,`Daripada ${a+b}, keluarkan ${b}. Bakinya ${a}. ${a+b} − ${b} = ${a}.`);}
 }
 const factors=year===1?[2,3]:year===2?[2,5,10]:[2,3,4,5,6,7,8,9,10];
 for(const a of factors)for(let b=1;b<=(year===1?5:10);b++){
  const visual=a*b<=20?Array.from({length:a},()=>dots(b)).join(''):'';
  add('Darab',a,b,a*b,year===1?`Ada ${a} kumpulan. Setiap kumpulan ada ${b} biji guli. Berapa jumlah guli?`:`${a} × ${b} = ?`,`${Array(a).fill(b).join(' + ')} = ${a*b}. Jadi, ${a} × ${b} = ${a*b}.`,visual,year===1?'berayat':'kiraan');
  add('Bahagi',a*b,a,b,year===1?`${a*b} biji guli dikongsi sama rata antara ${a} orang. Berapa biji guli seorang dapat?`:`${a*b} ÷ ${a} = ?`,`Bahagikan ${a*b} kepada ${a} kumpulan sama banyak. Setiap kumpulan mendapat ${b}. ${a*b} ÷ ${a} = ${b}.`,'',year===1?'berayat':'kiraan');
 }
 for(let a=1;a<=10;a++){
  const b=year===1?2:5;
  add('Tambah',a,b,a+b,`Aina ada ${a} biji epal. Ibu beri ${b} biji lagi. Berapa jumlah epal Aina?`,`${a} + ${b} = ${a+b} biji epal.`,'','berayat');
  add('Tolak',a+b,b,a,`Ravi ada ${a+b} keping pelekat. Dia beri ${b} keping kepada rakannya. Berapa keping yang tinggal?`,`${a+b} − ${b} = ${a} keping pelekat.`,'','berayat');
 }
}
