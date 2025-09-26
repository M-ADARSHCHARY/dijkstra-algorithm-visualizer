import React, { useState } from "react";
import Graph from "./Pages/Graph";
import axiosInstance from "./utils/axios";
import Header from "./Components/Header";

export default function App() {
  const [numNodes, setNumNodes] = useState("");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [weight, setWeight] = useState("");
  const [showGraph, setShowGraph] = useState(false);
  const [shortestPaths, setShortestPaths] = useState([]);
  const [distances, setDistances] = useState({});

  // Step 1: create nodes
  const handleCreateNodes = () => {
    if (!numNodes || numNodes < 2) return alert("Enter at least 2 nodes");
    const temp = [];
    for (let i = 1; i <= numNodes; i++) {
      temp.push(i.toString());
    }
    setNodes(temp);
    setShowGraph(false);
    setEdges([]);
    // setShortestPathToLastState([]);
  };

  // Step 2: add edges
  const handleAddEdge = () => {
    if (!from || !to || !weight) return alert("Fill all fields");
    setEdges([...edges, { from, to, weight: parseInt(weight) }]);
    setFrom("");
    setTo("");
    setWeight("");
  };

  const findShortestPath = async (nodes, edges) => {
    // Call API to find shortest path using Dijkstra's algorithm
    const res = await axiosInstance.post("/dijkstra", { nodes, edges });
    setDistances(res.data?.distances);
    setShortestPaths(res.data?.allPaths); // On doing this, the Graph component will re-render with the new path
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Controls */}
        <div className="w-1/3 p-6 space-y-6 overflow-y-auto border-r border-gray-700">
          
          {/* Step 1: Enter number of nodes */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-blue-400">Step 1: Create Nodes</h2>
            <label className="block mb-3 text-sm font-medium text-gray-300">Number of Nodes:</label>
            <input
              type="number"
              value={numNodes}
              onChange={(e) => setNumNodes(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter number of nodes"
            />
            <button
              onClick={handleCreateNodes}
              className="mt-4 w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
            >
              Create Nodes
            </button>
            
            {nodes.length > 0 && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-sm">
                  ✓ Created {nodes.length} nodes: {nodes.join(", ")}
                </p>
              </div>
            )}
          </div>

          {/* Step 2: Enter adjacency list */}
          {nodes.length > 0 && (
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 text-green-400">Step 2: Add Edges</h2>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">From</label>
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select node</option>
                    {nodes.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">To</label>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select node</option>
                    {nodes.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Weight</label>
                <input
                  type="number"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-3 bg-gray-700 rounded-lg text-white border border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleAddEdge}
                className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors"
              >
                Add Edge
              </button>

              {/* Display edge list */}
              {edges.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-300 mb-2">Edges ({edges.length}):</h3>
                  <div className="max-h-40 overflow-y-auto space-y-1">
                    {edges.map((e, i) => (
                      <div key={i} className="text-sm p-2 bg-gray-700/50 rounded text-gray-300">
                        {e.from} - {e.to} (weight: {e.weight})
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Find Shortest Path */}
          {edges.length > 0 && (
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 text-purple-400">Step 3: Execute Algorithm</h2>
              <button 
                className="w-full px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors" 
                onClick={() => {findShortestPath(nodes, edges)}}
              >
                Find Shortest Path
              </button>
              
              {shortestPaths.length > 0 && (
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-purple-400 text-sm font-medium">Shortest Paths:</p>
                  <div className="text-purple-300 text-sm mt-1">
                    {shortestPaths.map((p) => {return <div key={`${p.from}-${p.to}`}>{`${p.from} → ${p.to} (path: ${p.path.join(" → ")})  cost: ${distances[p.to]}`}</div>;})}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Panel - Graph Visualization */}
        <div className="flex-1 p-6">
          <div className="bg-gray-800 rounded-xl shadow-md h-full p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-300">Graph Visualization</h2>
            <div className="h-[calc(100%-50px)]">
              <Graph
                nodes={nodes}
                edges={edges}
                showGraph={showGraph}
                setShowGraph={setShowGraph}
                shortestPaths={shortestPaths}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}