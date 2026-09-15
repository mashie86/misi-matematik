import assert from 'node:assert/strict';
const events=[];
const param={setValueAtTime:(v,t)=>events.push(['set',v,t]),linearRampToValueAtTime:(v,t)=>events.push(['ramp',v,t]),exponentialRampToValueAtTime:(v,t)=>events.push(['decay',v,t])};
class AudioContext{state='running';currentTime=0;destination={};createOscillator(){return {frequency:param,connect(){},start(t){events.push(['start',t]);},stop(t){events.push(['stop',t]);},disconnect(){}};}createGain(){return {gain:param,connect(){},disconnect(){}};}async resume(){this.state='running';}async suspend(){this.state='suspended';}}
globalThis.window={AudioContext};globalThis.localStorage={getItem(){return null;},setItem(){}};
const {playSound,setSound,soundEnabled,NOTES}=await import('./effects.js');
assert(await playSound('correct'));assert.equal(events.filter(e=>e[0]==='start').length,3);events.length=0;assert(await playSound('wrong'));assert.equal(events.filter(e=>e[0]==='start').length,2);assert(NOTES.correct[0][0]<NOTES.correct.at(-1)[0]);assert(NOTES.wrong[0][0]>NOTES.wrong.at(-1)[0]);setSound(false);events.length=0;assert.equal(await playSound('correct'),false);assert.equal(events.length,0);assert.equal(soundEnabled(),false);setSound(true);assert(await playSound('finish'));assert.equal(events.filter(e=>e[0]==='start').length,4);console.log('PASS: correct/wrong/finish tones, mute, re-enable and note scheduling.');
