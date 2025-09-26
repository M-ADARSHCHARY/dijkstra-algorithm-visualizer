import React,{useState} from 'react'
import isEdgeInPath from '../utils/isEdgeInPath';

const Graph = ({ nodes, edges, showGraph, setShowGraph, shortestPaths }) => {
  const[selectedDestination, setSelectedDestination] = useState(shortestPaths.length > 0 ? shortestPaths[shortestPaths?.length - 1].to : null);

  return (
    <div>
      {nodes.length > 0 && edges.length > 0 && (
          <div className="bg-transparent  px-4 rounded-xl shadow-md w-full max-w-4xl flex flex-col items-center">
          <div className="flex items-center">
            <button
            onClick={() => setShowGraph(true)}
            className="mb-4 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg"
          >
            Show Graph
          </button>

          { shortestPaths && (
            <div className="ml-4">
              <h4>Destination</h4>
              <select name="select-destination" id="" value={selectedDestination}   onChange={(e) => setSelectedDestination(e.target.value)}>
                      <option value="destination" className="bg-black">Select destination</option>
                      {nodes.map((n) => (
                        <option className= "bg-blue-400 text-center" key={n} value={n}>{n}</option>                  
                      ))}
              </select>
           </div>
          )}

          </div>
          {showGraph && (
            <svg width="600" height="400" className="bg-gray-700 rounded">
  {edges.map((e, i) => {
    const fromIdx = nodes.indexOf(e.from);
    const toIdx = nodes.indexOf(e.to);
    const angleFrom = (fromIdx / nodes.length) * 2 * Math.PI;
    const angleTo = (toIdx / nodes.length) * 2 * Math.PI;

    const cx = 300,
      cy = 200,
      r = 150;
    const x1 = cx + r * Math.cos(angleFrom);
    const y1 = cy + r * Math.sin(angleFrom);
    const x2 = cx + r * Math.cos(angleTo);
    const y2 = cy + r * Math.sin(angleTo);

    
     const highlight = shortestPaths.length > 0 && isEdgeInPath(e.from, e.to, shortestPaths[selectedDestination - 1]?.path);

    return (
      <g key={i}>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={highlight ? "green" : "white"}
          strokeWidth={highlight ? 4 : 2}
        />
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2}
          fill={highlight ? "yellow" : "white"}
          fontSize="12"
        >
          {e.weight}
        </text>
      </g>
    );
  })}

  {/* Draw nodes */}
  {nodes.map((n, i) => {
    const angle = (i / nodes.length) * 2 * Math.PI;
    const cx = 300 + 150 * Math.cos(angle);
    const cy = 200 + 150 * Math.sin(angle);
    return (
      <g key={n}>
        <circle cx={cx} cy={cy} r="20" fill="blue" />
        <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="14">
          {n}
        </text>
      </g>
    );
  })}
</svg>

          )}
        </div>
      )}
    </div>
  )
}

export default Graph
