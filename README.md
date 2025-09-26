# 🚀 Dijkstra Algorithm Visualizer

A modern, interactive web application that visualizes Dijkstra's shortest path algorithm with a beautiful React frontend and Node.js backend.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-61dafb.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Usage Guide](#usage-guide)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a comprehensive implementation of Dijkstra's shortest path algorithm with an interactive visualization. It consists of a React-based frontend that allows users to create graphs and visualize the shortest path calculations, paired with a Node.js backend that implements the actual Dijkstra algorithm.

**Perfect for:**
- Computer Science students learning graph algorithms
- Educators teaching shortest path algorithms
- Developers wanting to understand Dijkstra's algorithm
- Anyone interested in interactive algorithm visualization

## ✨ Features

### Frontend Features
- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- 🖱️ **Interactive Graph Creation** - Dynamically add nodes and weighted edges
- 📊 **Real-time Visualization** - See the shortest paths highlighted on the graph
- 🎛️ **User Controls** - Easy-to-use interface for graph manipulation
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🌙 **Dark Theme** - Modern dark-themed interface

### Backend Features
- ⚡ **High-Performance Algorithm** - Optimized Dijkstra implementation with Priority Queue
- 🔄 **RESTful API** - Clean API endpoints for algorithm execution
- 🌐 **CORS Enabled** - Cross-origin resource sharing for frontend integration
- 📈 **Scalable Architecture** - Modular design for easy expansion

### Algorithm Features
- 🎯 **Accurate Implementation** - Textbook-correct Dijkstra's algorithm
- 🔍 **All Shortest Paths** - Calculate shortest paths from source to all nodes
- 📊 **Distance Tracking** - Track and return minimum distances
- 🛣️ **Path Reconstruction** - Reconstruct and return the actual shortest paths

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Fast build tool and development server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Axios 1.12.2** - Promise-based HTTP client
- **@xyflow/react 12.8.5** - Advanced graph visualization library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 5.1.0** - Fast, minimalist web framework
- **CORS 2.8.5** - Cross-origin resource sharing middleware

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Vite** - Development server with HMR
- **Nodemon** - Development server with auto-restart

## 📁 Project Structure

```
CN-PROJECT/
├── client/                 # React Frontend Application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── Components/    # Reusable React components
│   │   │   └── Header.jsx # Application header component
│   │   ├── Pages/         # Page components
│   │   │   └── Graph.jsx  # Graph visualization component
│   │   ├── utils/         # Utility functions
│   │   │   └── axios.js   # Axios configuration
│   │   ├── assets/        # Static assets (images, icons)
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # React entry point
│   │   ├── App.css        # Application styles
│   │   └── index.css      # Global styles
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── eslint.config.js   # ESLint configuration
│   └── index.html         # HTML template
│
├── server/                # Node.js Backend Application
│   ├── src/               # Source code
│   │   └── server.js      # Express server with Dijkstra implementation
│   ├── package.json       # Backend dependencies
│   └── package-lock.json  # Dependency lock file
│
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dijkstra-visualizer.git
   cd CN-PROJECT
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the Frontend Development Server** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   The client will start on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

### Production Build

To create a production build of the frontend:
```bash
cd client
npm run build
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### POST /dijkstra
Calculate shortest paths using Dijkstra's algorithm.

**Request Body:**
```json
{
  "nodes": ["1", "2", "3", "4"],
  "edges": [
    {"from": "1", "to": "2", "weight": 5},
    {"from": "2", "to": "3", "weight": 3},
    {"from": "1", "to": "4", "weight": 2}
  ]
}
```

**Response:**
```json
{
  "distances": {
    "1": 0,
    "2": 5,
    "3": 8,
    "4": 2
  },
  "allPaths": [
    {"from": "1", "to": "2", "path": ["1", "2"], "distance": 5},
    {"from": "1", "to": "3", "path": ["1", "2", "3"], "distance": 8},
    {"from": "1", "to": "4", "path": ["1", "4"], "distance": 2}
  ]
}
```

**Error Response:**
```json
{
  "error": "Missing required fields: nodes, edges"
}
```

## 📖 Usage Guide

### Step 1: Create Nodes
1. Enter the number of nodes you want in your graph
2. Click "Create Nodes" to generate numbered nodes

### Step 2: Add Edges
1. Select the "From" node from the dropdown
2. Select the "To" node from the dropdown  
3. Enter the weight of the edge
4. Click "Add Edge" to create the connection
5. Repeat to add more edges

### Step 3: Visualize
1. Click "Show Graph" to display your created graph
2. Click "Find Shortest Path" to run Dijkstra's algorithm
3. Select different destination nodes to see various shortest paths
4. The graph will highlight the shortest path in different colors

### Example Usage
Create a graph with nodes 1, 2, 3, 4 and edges:
- 1 → 2 (weight: 5)
- 2 → 3 (weight: 3) 
- 1 → 4 (weight: 2)
- 4 → 3 (weight: 1)

The algorithm will find that the shortest path from 1 to 3 is: 1 → 4 → 3 (distance: 3)

## 🎨 Screenshots

### Main Interface
![Main Interface](screenshots/main-interface.png)

### Graph Visualization
![Graph Visualization](screenshots/graph-visualization.png)

### Shortest Path Highlight
![Shortest Path](screenshots/shortest-path.png)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 🔧 Configuration

### Frontend Configuration
- **Vite Config**: `client/vite.config.js`
- **Tailwind Config**: `client/tailwind.config.js`
- **ESLint Config**: `client/eslint.config.js`

### Backend Configuration
- **Server Port**: Default 5000 (configurable via environment variables)
- **CORS**: Enabled for all origins (configure for production)

## 🚨 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   Error: listen EADDRINUSE: address already in use :::5000
   ```
   **Solution**: Kill the process using port 5000 or change the port in `server.js`

2. **CORS Errors**
   ```bash
   Access to XMLHttpRequest blocked by CORS policy
   ```
   **Solution**: Ensure the backend server is running and CORS is properly configured

3. **Module Not Found**
   ```bash
   Cannot find module 'xyz'
   ```
   **Solution**: Run `npm install` in the respective directory

## 📈 Performance

- **Frontend**: Optimized with Vite for fast development and builds
- **Backend**: Efficient Priority Queue implementation for O((V + E) log V) complexity
- **Memory**: Optimized data structures for minimal memory usage
- **Scalability**: Can handle graphs with hundreds of nodes efficiently

## 🔒 Security

- Input validation on both frontend and backend
- CORS properly configured
- No sensitive data exposure
- Safe parsing of user inputs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Name](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js community for the robust backend framework
- Tailwind CSS for the beautiful styling system
- All contributors and supporters of this project

## 📚 Learn More

- [Dijkstra's Algorithm - Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [Graph Theory Basics](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs)
- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

## 🔗 Quick Links

- [Live Demo](#) (Add your deployed link here)
- [Report Bug](https://github.com/your-username/dijkstra-visualizer/issues)
- [Request Feature](https://github.com/your-username/dijkstra-visualizer/issues)
- [Documentation](https://github.com/your-username/dijkstra-visualizer/wiki)

---

*Made with ❤️ for the programming community*#   d i j k s t r a - a l g o r i t h m - v i s u a l i z e r  
 