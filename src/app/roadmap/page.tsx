
'use client';
import roadmap from '@/lib/data/roadmap_q_based.json';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
export default function Roadmap(){
  const nodes = (roadmap as any).nodes;
  const edges = (roadmap as any).edges;
  return (
    <div style={{ height:'80vh' }}>
      <h1>Roadmap Trimestral</h1>
      <ReactFlow nodes={nodes as any} edges={edges as any} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
