
'use client';
import assessment from '@/lib/data/assessment.json';
import { useState } from 'react';
export default function Page(){
  const [answers, setAnswers] = useState<Record<string, Record<string, number>>>({});
  const sections = (assessment as any).sections;
  const setValue = (dimId:string, qId:string, val:number)=>{
    setAnswers(prev=> ({...prev, [dimId]: { ...(prev[dimId]||{}), [qId]: val }}));
  };
  const submit = async()=>{
    const answersByDimension: Record<string, number[]> = {};
    for (const section of sections){
      const dim = section.id;
      answersByDimension[dim] = Object.values(answers[dim]||{});
    }
    const res = await fetch('/api/assess', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ answersByDimension }) });
    const data = await res.json();
    alert(`Score global: ${data?.scores?.overall} | Nível: ${data?.maturity}`);
  };
  return (
    <div>
      <h1>Assessment de Maturidade – Varejo</h1>
      <p>Escala: 1 a 5.</p>
      {sections.map((section:any)=> (
        <div key={section.id} style={{ border:'1px solid #eee', padding:12, marginBottom:12 }}>
          <h3>{section.title} <small style={{ color:'#666' }}>peso {(section.weight*100).toFixed(0)}%</small></h3>
          {section.questions.map((q:any)=> (
            <div key={q.id} style={{ marginBottom:8 }}>
              <label><strong>{q.text}</strong></label><br/>
              <select value={answers[section.id]?.[q.id]||''} onChange={e=> setValue(section.id, q.id, Number(e.target.value))}>
                <option value=''>Selecione…</option>
                {[1,2,3,4,5].map(v=> <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          ))}
        </div>
      ))}
      <button onClick={submit} style={{ padding:'8px 12px' }}>Calcular e Salvar</button>
    </div>
  );
}
