'use client';
import { useEffect, useState } from 'react';
export default function Admin(){
  const [kpis,setKpis]=useState<any>({});
  const [metrics,setMetrics]=useState<any[]>([]);
  useEffect(()=>{
    fetch('/api/kpis/overview').then(r=>r.json()).then(setKpis);
    fetch('/api/integrations/audit/metrics').then(r=>r.json()).then(d=>setMetrics(d.metrics||[]));
  },[]);
  return <main style={{padding:20}}>
    <h1>Admin dashboard</h1>
    <p>Leads: {kpis.leads||0}</p>
    <h3>Integraciones</h3>
    <ul>{metrics.map((m:any,i:number)=>(<li key={i}>{m.destination}: {m.attempts}</li>))}</ul>
  </main>
}
