
'use client';
import radarOpt from '@/lib/data/charts/radar_maturity.json';
import barInvOpt from '@/lib/data/charts/bar_investment_by_category.json';
import pieOpt from '@/lib/data/charts/pie_capex_opex.json';
import stackOpt from '@/lib/data/charts/stacked_bar_by_quarter.json';
import ReactECharts from 'echarts-for-react';
export default function Dashboard(){
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        <div style={{ background:'#fff', padding:8, border:'1px solid #eee' }}>
          <ReactECharts option={(radarOpt as any).option} />
        </div>
        <div style={{ background:'#fff', padding:8, border:'1px solid #eee' }}>
          <ReactECharts option={(barInvOpt as any).option} />
        </div>
        <div style={{ background:'#fff', padding:8, border:'1px solid #eee' }}>
          <ReactECharts option={(pieOpt as any).option} />
        </div>
        <div style={{ background:'#fff', padding:8, border:'1px solid #eee' }}>
          <ReactECharts option={(stackOpt as any).option} />
        </div>
      </div>
    </div>
  );
}
