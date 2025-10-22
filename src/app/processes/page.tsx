
'use client';
import processMap from '@/lib/data/process_map_as_is.json';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
export default function Processes(){
  const nodes = (processMap as any).nodes;
  const edges = (processMap as any).edges;
  return (
    <div style={{ height:'80vh' }}>
      <h1>Mapa de Processos (As‑Is)</h1>
      <ReactFlow nodes={nodes as any} edges={edges as any} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
