import { transcribe } from '../data/phonetics.ts';
export default function Transcription({text}:{text:string}){
  if(!/[a-záčďľňšťž]/i.test(text)||text==='___')return null;
  return <span className="block text-sm text-brand-300 ipa mt-1">[{transcribe(text)}]</span>;
}
