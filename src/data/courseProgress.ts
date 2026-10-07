const KEY='lingua_slovak_original_lessons';
export function getCompletedLessons():number[]{try{const x=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(x)?x.filter(n=>Number.isInteger(n)&&n>=1&&n<=25):[];}catch{return [];}}
export function markLessonCompleted(id:number){localStorage.setItem(KEY,JSON.stringify([...new Set([...getCompletedLessons(),id])]));}
