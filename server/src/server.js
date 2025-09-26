import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Simple Priority Queue using array (min-heap behavior)
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.values.sort((a, b) => a.priority - b.priority); // simple min-heap
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

function getPathTo(node, prev) {
  const path = [];
  let current = node;
  while (current) {
    path.unshift(current);
    current = prev[current];
  }
  return path;
}

// Dijkstra with PriorityQueue
function dijkstraPQ(nodes, edges, source) {
  const distances = {};
  const prev = {};
  const adj = {};

  // Initialize
  nodes.forEach((n) => {
    distances[n] = Infinity;
    prev[n] = null;
    adj[n] = [];
  });
  distances[source] = 0;
  

  // Build adjacency list
  edges.forEach(({ from, to, weight }) => {
    adj[from].push({ node: to, weight });
    // For undirected graph uncomment:
     adj[to].push({ node: from, weight });
  });

  const pq = new PriorityQueue();
  pq.enqueue(source, 0);

  while (!pq.isEmpty()) {
    const { node: current } = pq.dequeue(); // pop node from queue

    // Explore neighbors

    adj[current].forEach(({ node: neighbor, weight }) => {
      const newDist = distances[current] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        prev[neighbor] = current;
        pq.enqueue(neighbor, newDist);
      }
    });
  }

  const allPaths = nodes.map((n) => {return {from: "1", to: n, path: getPathTo(n, prev)};});
  
  return { distances, prev, allPaths };
}

// API endpoint
app.post("/api/dijkstra", (req, res) => {
  const { nodes, edges } = req.body;
  if (!nodes || !edges ) {
    return res.status(400).json({ error: "nodes and edges required" });
  }

  const result = dijkstraPQ(nodes, edges, "1");

  console.log("result", result);

  res.status(200).json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
