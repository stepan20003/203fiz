import React, { useState, useRef, useEffect } from 'react';
import { Play, Save, Plus, MousePointer, Info, X, Zap, Mail, MessageSquare, Code, Table } from 'lucide-react';

interface Node {
  id: string;
  type: string;
  name: string;
  x: number;
  y: number;
  config: any;
}

interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
}

const WorkflowEditor = () => {
  const [nodes, setNodes] = useState<Node[]>([
    { id: '1', type: 'webhook', name: 'Գործարկիչ (Webhook)', x: 100, y: 100, config: {} },
    { id: '2', type: 'email', name: 'Էլ. հասցե', x: 400, y: 150, config: {} },
  ]);
  const [connections, setConnections] = useState<Connection[]>([
    { id: 'c1', sourceId: '1', targetId: '2' }
  ]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isAddingNode, setIsAddingNode] = useState(false);
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [connectingSource, setConnectingSource] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const nodeTypes = [
    { type: 'webhook', name: 'Webhook', icon: <Zap className="h-5 w-5 text-blue-500" /> },
    { type: 'email', name: 'Էլ. հասցե', icon: <Mail className="h-5 w-5 text-red-500" /> },
    { type: 'telegram', name: 'Telegram', icon: <MessageSquare className="h-5 w-5 text-sky-500" /> },
    { type: 'http', name: 'HTTP Հարցում', icon: <Code className="h-5 w-5 text-slate-500" /> },
    { type: 'gsheets', name: 'Google Sheets', icon: <Table className="h-5 w-5 text-green-500" /> },
  ];

  const addNode = (type: string, name: string) => {
    const newNode: Node = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      name,
      x: 100 - canvasOffset.x,
      y: 100 - canvasOffset.y,
      config: {}
    };
    setNodes([...nodes, newNode]);
    setIsAddingNode(false);
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setIsDragging(true);
    setDraggedNode(id);
    const node = nodes.find(n => n.id === id);
    if (node) setSelectedNode(node);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && draggedNode) {
      setNodes(nodes.map(n =>
        n.id === draggedNode
          ? { ...n, x: n.x + e.movementX, y: n.y + e.movementY }
          : n
      ));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedNode(null);
    setConnectingSource(null);
  };

  const startConnection = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setConnectingSource(id);
  };

  const completeConnection = (e: React.MouseEvent, targetId: string) => {
    e.stopPropagation();
    if (connectingSource && connectingSource !== targetId) {
      // Check if connection already exists
      const exists = connections.find(c => c.sourceId === connectingSource && c.targetId === targetId);
      if (!exists) {
        const newConn: Connection = {
          id: `c-${Date.now()}`,
          sourceId: connectingSource,
          targetId: targetId
        };
        setConnections([...connections, newConn]);
      }
    }
    setConnectingSource(null);
  };

  const deleteNode = (id: string) => {
    setNodes(nodes.filter(n => n.id !== id));
    setConnections(connections.filter(c => c.sourceId !== id && c.targetId !== id));
    if (selectedNode?.id === id) setSelectedNode(null);
  };

  return (
    <div className="h-full flex flex-col -m-8 relative overflow-hidden bg-slate-50">
      {/* Editor Toolbar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="font-bold text-slate-800">Նոր աշխատանքային հոսք</h2>
          <span className="text-slate-300">|</span>
          <div className="flex space-x-2">
             <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600" title="Ընտրել"><MousePointer className="h-5 w-5" /></button>
             <button
               className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 flex items-center space-x-2"
               onClick={() => setIsAddingNode(true)}
             >
                <Plus className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-medium">Ավելացնել մոդուլ</span>
             </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
            <Save className="h-4 w-4" />
            <span>Պահպանել</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 rounded-lg text-sm font-bold text-white hover:bg-primary-700 transition-colors shadow-md">
            <Play className="h-4 w-4 fill-current" />
            <span>Գործարկել</span>
          </button>
        </div>
      </div>

      {/* Editor Canvas Area */}
      <div
        ref={canvasRef}
        className="flex-grow relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* SVG Grid Background */}
        <div className="absolute inset-0 z-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Connections Layer (SVG) */}
        <svg className="absolute inset-0 pointer-events-none z-0 h-full w-full">
           {connections.map(conn => {
              const source = nodes.find(n => n.id === conn.sourceId);
              const target = nodes.find(n => n.id === conn.targetId);
              if (!source || !target) return null;

              // Simple straight lines for now
              const startX = source.x + 180;
              const startY = source.y + 40;
              const endX = target.x;
              const endY = target.y + 40;

              const dx = endX - startX;
              const curve = Math.abs(dx) * 0.5;

              return (
                <path
                  key={conn.id}
                  d={`M ${startX} ${startY} C ${startX + curve} ${startY}, ${endX - curve} ${endY}, ${endX} ${endY}`}
                  stroke="#cbd5e1"
                  strokeWidth="3"
                  fill="none"
                />
              );
           })}
        </svg>

        {/* Nodes Layer */}
        {nodes.map(node => (
          <div
            key={node.id}
            className={`absolute z-10 w-48 bg-white border-2 rounded-xl shadow-sm cursor-move transition-shadow ${
              selectedNode?.id === node.id ? 'border-primary-500 shadow-md ring-4 ring-primary-500 ring-opacity-10' : 'border-slate-200 hover:border-slate-300'
            }`}
            style={{ left: node.x, top: node.y }}
            onMouseDown={(e) => handleMouseDown(e, node.id)}
          >
            <div className="p-3 flex items-center border-b border-slate-100">
               <div className="mr-3 bg-slate-50 p-1.5 rounded-lg">
                  {nodeTypes.find(t => t.type === node.type)?.icon}
               </div>
               <div className="overflow-hidden">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{node.type}</p>
                  <p className="text-xs font-bold text-slate-800 truncate">{node.name}</p>
               </div>
            </div>
            <div className="p-2 flex justify-between bg-slate-50/50 rounded-b-xl">
               <div
                 className="w-3 h-3 rounded-full bg-slate-300 self-center -ml-3.5 border-2 border-white cursor-pointer hover:bg-primary-400"
                 onMouseUp={(e) => completeConnection(e, node.id)}
                 title="Մուտք"
               ></div>
               <div
                 className="w-3 h-3 rounded-full bg-slate-300 self-center -mr-3.5 border-2 border-white cursor-pointer hover:bg-primary-400"
                 onMouseDown={(e) => startConnection(e, node.id)}
                 title="Ելք"
               ></div>
            </div>

            {/* Delete button (small) */}
            <button
              className="absolute -top-2 -right-2 bg-white border border-slate-200 rounded-full p-1 shadow-sm text-slate-400 hover:text-red-500 transition-colors"
              onClick={(e) => { e.stopPropagation(); deleteNode(node.id); }}
            >
               <X className="h-3 w-3" />
            </button>
          </div>
        ))}

        {/* Node Library Sidebar */}
        {isAddingNode && (
          <div className="absolute top-4 left-4 z-20 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-900">Ավելացնել մոդուլ</h3>
               <button onClick={() => setIsAddingNode(false)}><X className="h-5 w-5 text-slate-400" /></button>
            </div>
            <div className="space-y-2">
               {nodeTypes.map(type => (
                 <button
                   key={type.type}
                   className="w-full flex items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 text-left"
                   onClick={() => addNode(type.type, type.name)}
                 >
                    <div className="mr-4 p-2 bg-slate-50 rounded-lg">{type.icon}</div>
                    <span className="font-bold text-slate-700 text-sm">{type.name}</span>
                 </button>
               ))}
            </div>
          </div>
        )}

        {/* Node Settings Sidebar (Right) */}
        {selectedNode && (
          <div className="absolute top-0 right-0 z-20 w-80 h-full bg-white border-l border-slate-200 shadow-xl p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center">
                  <div className="mr-3 p-2 bg-slate-50 rounded-lg">
                    {nodeTypes.find(t => t.type === selectedNode.type)?.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">{selectedNode.type}</h3>
               </div>
               <button onClick={() => setSelectedNode(null)}><X className="h-5 w-5 text-slate-400" /></button>
            </div>

            <div className="flex-grow space-y-6">
               <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Մոդուլի անվանում</label>
                  <input
                    type="text"
                    value={selectedNode.name}
                    onChange={(e) => setNodes(nodes.map(n => n.id === selectedNode.id ? { ...n, name: e.target.value } : n))}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-slate-700"
                  />
               </div>

               {selectedNode.type === 'webhook' && (
                  <div className="space-y-4">
                     <p className="text-xs text-slate-500">Այս մոդուլը ստանում է տվյալներ արտաքին աղբյուրից:</p>
                     <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Webhook URL</label>
                        <div className="bg-slate-100 p-3 rounded-lg text-[10px] break-all font-mono text-slate-600 border border-slate-200">
                           https://api.avtomat.am/v1/webhook/{selectedNode.id}
                        </div>
                     </div>
                  </div>
               )}

               {selectedNode.type === 'email' && (
                  <div className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Ում</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm" placeholder="example@mail.com" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Թեմա</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm" placeholder="Նամակի թեման" />
                     </div>
                  </div>
               )}

               {selectedNode.type === 'telegram' && (
                  <div className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Chat ID</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm" placeholder="@my_channel" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Հաղորդագրություն</label>
                        <textarea className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm" rows={3}></textarea>
                     </div>
                  </div>
               )}

               {!['webhook', 'email', 'telegram'].includes(selectedNode.type) && (
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                     <p className="text-sm text-slate-500 italic">Այս մոդուլի կարգավորումները հասանելի կլինեն շուտով:</p>
                  </div>
               )}
            </div>

            <button
              className="mt-auto w-full py-4 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors flex items-center justify-center"
              onClick={() => deleteNode(selectedNode.id)}
            >
               Ջնջել մոդուլը
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowEditor;
