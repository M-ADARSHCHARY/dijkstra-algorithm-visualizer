# 🗺️ Dijkstra Algorithm Visualizer

A modern, interactive web application for visualizing Dijkstra's shortest path algorithm with real-time graph manipulation and pathfinding visualization.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

## 🎯 Overview

This project provides an interactive platform for learning and visualizing Dijkstra's shortest path algorithm. Users can create custom graphs by adding nodes and weighted edges, then watch as the algorithm finds the optimal paths between any two nodes.

**Perfect for:** Computer Science students, algorithm enthusiasts, and educators teaching graph theory.

## ✨ Features

### 🎨 **Interactive Graph Builder**
- Dynamic node creations
- Edge creation between nodes
- Custom weight assignment for each edge

### 🧭 **Algorithm Visualization**
- Step-by-step Dijkstra algorithm execution
- Visual highlighting of shortest paths
- Real-time distance calculations
- Priority queue implementation with optimal complexity

### 💻 **Modern UI/UX**
- Responsive design with Tailwind CSS
- Professional glassmorphism interface
- Interactive graph canvas with zoom/pan
- Live statistics and connection tracking

### 🔧 **Technical Excellence**
- RESTful API backend with Express.js
- Optimized algorithm implementation (O(V + E log V))
- Error handling and input validation
- Clean component architecture

## 🚀 Tech Stack

### **Frontend**
```json
{
  "framework": "React 19.1.1",
  "styling": "Tailwind CSS 4.1.13", 
  "visualization": "@xyflow/react",
  "build-tool": "Vite",
  "http-client": "Axios"
}
```

### **Backend**
```json
{
  "runtime": "Node.js",
  "framework": "Express.js 5.1.0",
  "cors": "CORS enabled",
  "algorithm": "Priority Queue Dijkstra"
}
```

## 📋 Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- Modern web browser with ES6+ support

## ⚡ Quick Start

### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/yourusername/dijkstra-algorithm-visualizer.git
cd dijkstra-algorithm-visualizer
```

### 2️⃣ **Backend Setup**
```bash
cd server
npm install
npm run dev
```
*Server runs on http://localhost:5000*

### 3️⃣ **Frontend Setup**
```bash
cd ../client
npm install
npm run dev
```
*Client runs on http://localhost:5173*

### 4️⃣ **Access Application**
Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
dijkstra-algorithm-visualizer/
├── 📁 client/                    # React Frontend
│   ├── 📁 public/               # Static assets
│   ├── 📁 src/
│   │   ├── 📄 App.jsx           # Main application component
│   │   ├── 📄 App.css           # Global styles
│   │   ├── 📄 main.jsx          # React entry point
│   │   └── 📄 index.css         # Tailwind imports
│   ├── 📄 package.json          # Frontend dependencies
│   ├── 📄 vite.config.js        # Vite configuration
│   └── 📄 tailwind.config.js    # Tailwind configuration
├── 📁 server/                   # Node.js Backend
│   ├── 📁 src/
│   │   └── 📄 server.js         # Express server & Dijkstra logic
│   └── 📄 package.json          # Backend dependencies
└── 📄 README.md                 # Project documentation
```

## 🔌 API Reference

### **POST** `/dijkstra`
Calculates shortest paths using Dijkstra's algorithm.

**Request Body:**
```json
{
  "nodes": ["1", "2", "3", "4"],
  "edges": [
    { "from": "1", "to": "2", "weight": 4 },
    { "from": "1", "to": "3", "weight": 2 },
    { "from": "2", "to": "4", "weight": 1 },
    { "from": "3", "to": "4", "weight": 5 }
  ]
}
```

**Response:**
```json
{
  distances: { '1': 0, '2': 8, '3': 5 },
  prev: { '1': null, '2': '3', '3': '1' },
  allPaths: [
    { from: '1', to: '1', path: [Array] },
    { from: '1', to: '2', path: [Array] },
    { from: '1', to: '3', path: [Array] }
  ]
}
```

## 🛠️ Development

### **Available Scripts**

**Client:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

**Server:**
```bash
npm run dev          # Start with nodemon
npm start            # Start production server
```

### **Code Standards**
- ES6+ JavaScript with modern React patterns
- Functional components with React Hooks
- RESTful API design principles
- Responsive-first CSS with Tailwind

## 🧪 Algorithm Details

### **Implementation Highlights:**
- **Time Complexity**: O((V + E) log V) using priority queue
- **Space Complexity**: O(V) for distance and prev tracking
- **Data Structure**: Min-heap priority queue for optimal performance

### **Key Features:**
- Priority queue implementation for efficient node selection
- Comprehensive path reconstruction
- Distance tracking with infinity initialization

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Adarsh Chary**
- GitHub: [@M-ADARSHCHARY](https://github.com/M-ADARSHCHARY)
- LinkedIn: [Connect with me](https://linkedin.com/in/m-adarsh-chary)

## ⭐ Support

If this project helped you learn or build something awesome, please consider giving it a star! ⭐

---

**Made with ❤️ for the algorithms community**
