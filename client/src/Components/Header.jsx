import React from 'react'

const Header = () => {
  return (
    <div className="bg-black p-4 rounded-xl shadow-md mb-6">
      <h1 className="text-2xl font-semibold">Dijkstra Algorithm Visualizer</h1>
      <p className="text-gray-400">Find the shortest path in a graph using Dijkstra's algorithm</p>
    </div>
  )
}

export default Header
