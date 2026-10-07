const fs=require('fs');const path=require('path');
function parse(file){let category='',level='A1',items=[];for(let row of fs.readFileSync(file,'utf8').trim().split('\n')){if(row[0]==='@'){[category,level='A1']=row.slice(1).split('|');continue;}const [sk,ru]=row.split('|');if(!sk||!ru)throw Error(row);items.push({id:items.length+1,sk,ru,category,level});}return items;}
let words=parse(path.join(__dirname,'../src/data/lexicon.txt')),phrases=parse(path.join(__dirname,'../src/data/phrases.txt'));
const nounCategories=['Семья и люди','Дом и жильё','Еда и напитки','Покупки и ресторан','Город и транспорт','Тело и здоровье','Одежда и личные вещи','Учёба и вуз','Вуз: академическая лексика','Документы, работа и техника'];
const fem=new Set(['vec','pomoc','noc','dlaň','kosť','krv','myš','posteľ','sieť','tvár','pani','jar','jeseň','loď','skriňa']);
const neu=new Set(['dievča','dieťa','bábätko','kurča','vajce','srdce','more','pole']);
const mas=new Set(['kolega','hrdina','predseda','deň','týždeň','mesiac','rok','čas','január','február','marec','apríl','máj','jún','júl','august','september','október','november','december']);
const plural=new Set(['ľudia','dvere','schody','potraviny','cestoviny','raňajky','nohavice','rifle','šortky','pančuchy','plavky','tenisky','okuliare','hodinky','prázdniny','prijímačky','peniaze']);
for(let w of words){if(!nounCategories.includes(w.category)||w.sk.endsWith('ť')||w.sk.endsWith(' sa'))continue;if(plural.has(w.sk)){w.gender='мн. ч.';continue;}let n=w.sk.split(' ').at(-1);w.gender=neu.has(n)||/o$|ie$/.test(n)?'ср.':fem.has(n)||/a$|osť$|eň$/.test(n)?'ж.':mas.has(n)?'м.':/e$/.test(n)?'ср.':'м.';if(n==='zdravotné')delete w.gender;}
if(words.length!==1000||new Set(words.map(w=>w.sk)).size!==1000)throw Error('Dictionary must have 1000 unique entries');
fs.writeFileSync(path.join(__dirname,'../src/data/compiled.js'),'export const words='+JSON.stringify(words)+';\nexport const phrases='+JSON.stringify(phrases)+';');console.log('Dictionary:',words.length,'Phrases:',phrases.length);
