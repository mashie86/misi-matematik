let context;
let enabled=true;
try{enabled=localStorage.getItem('misi-sound')!=='off';}catch{}
export function soundEnabled(){return enabled;}
export function setSound(value){enabled=!!value;try{localStorage.setItem('misi-sound',enabled?'on':'off');}catch{}if(!enabled)for(const p of players.values()){p.pause();p.currentTime=0;}}
export const NOTES={correct:[[523.25,0,.12],[659.25,.12,.12],[783.99,.24,.2]],wrong:[[329.63,0,.16],[261.63,.18,.22]],finish:[[523.25,0,.12],[659.25,.14,.12],[783.99,.28,.12],[1046.5,.44,.35]],tap:[[659.25,0,.08]]};
const players=new Map();
export async function playSound(kind){if(!enabled)return false;try{const key=Object.hasOwn(NOTES,kind)?kind:'tap';let audio=players.get(key);if(!audio){audio=new Audio(new URL('./'+key+'.wav',import.meta.url).href);audio.preload='auto';players.set(key,audio);}for(const p of players.values()){p.pause();p.currentTime=0;}audio.volume=.85;audio.muted=false;await audio.play();return true;}catch{return false;}}
export function celebrate(host){if(!host||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const layer=document.createElement('div');layer.className='confetti';layer.setAttribute('aria-hidden','true');for(let i=0;i<18;i++){const piece=document.createElement('span');piece.textContent=['★','✦','●'][i%3];piece.style.setProperty('--x',(i*5.7)+'%');piece.style.setProperty('--delay',(i%6)*.055+'s');piece.style.setProperty('--color',['#eeae2e','#49a080','#9381d5','#ef8f92'][i%4]);layer.append(piece);}host.append(layer);setTimeout(()=>layer.remove(),1600);}

export function isDinoStreak(streak){return Number.isInteger(streak)&&streak>0&&streak%3===0;}
export function dinosaurReward(streak){if(!isDinoStreak(streak))return;document.querySelector('.dino-parade')?.remove();const parade=document.createElement('div');parade.className='dino-parade';parade.setAttribute('role','status');parade.innerHTML='<div class="dino-banner">Hebat! '+streak+' betul berturut-turut!</div><div class="dino-walker" aria-hidden="true"><span class="dino-star">✦</span><span class="dinosaur">🦖</span><span class="dino-star">★</span></div>';document.body.append(parade);setTimeout(()=>parade.remove(),4200);}
