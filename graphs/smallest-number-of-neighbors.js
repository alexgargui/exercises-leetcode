/**
 * Problem: Find the City With the Smallest Number of Neighbors at a Threshold Distance
 * Link to problem: https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance
 * Coder: alexgargui
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
const createGraph = ((connections) => {
    const graph = {};
    connections.forEach(connection => {
        const [node1, node2, weight] = connection;
        if (!graph[node1]) {
            graph[node1] = {};
        }
        if (!graph[node2]) {
            graph[node2] = {};
        }
        graph[node1][node2] = weight;
        graph[node2][node1] = weight;
    });
    return graph;
  });
  
  const dijkstraAlgorithm = ((graph, start, distanceThreshold) => {
    let distances = {};
    let nodesConnected = 0; 
    let visited = new Set();
    let nodes = Object.keys(graph);
  
    for (let node of nodes) {
        distances[node] = Infinity;
    }
  
    distances[start] = 0;
  
    while (nodes.length) {
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();
  
        visited.add(closestNode);
  
        if (distances[closestNode] === Infinity) break;
  
        for (let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                
                if (newDistance < distances[neighbor]) {
                  distances[neighbor] = newDistance;
                }
            }
        }
    }
    for (let node in distances) {
      if (distances[node] > 0 && distances[node] <= distanceThreshold) nodesConnected++;
    }
    return nodesConnected;
  });
  
  const findTheCity = ((n, edges, distanceThreshold) => {
      const graph = createGraph(edges);
      let nodeResponse = 0;
      let lowerConnections = Infinity;
      let nodes = Object.keys(graph);
  
      for (let node of nodes) {
        let result = dijkstraAlgorithm(graph, node, distanceThreshold);
        if (result <= lowerConnections) {
          lowerConnections = result;
          if (nodeResponse < parseInt(node)) nodeResponse = node;
        }
      }
      if (nodes.length < n) {
        return n-1;
      } else {
        return nodeResponse;
      }
  });