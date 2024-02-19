/**
 * Problem: Network delay time
 * Link to problem: https://leetcode.com/problems/network-delay-time
 * Coder: alexgargui
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
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
    });
    return graph;
});

const dijkstraAlgorithm = ((graph, start, size) => {
    let distances = new Array(size).fill(Infinity);
    let visited = new Set();
    let nodes = Object.keys(graph);
    
    distances[start] = 0;

    while (nodes.length) {
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        if (distances[closestNode] === Infinity) break;

        visited.add(closestNode);

        for (let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];
                
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
            }
        }
    }
    if (visited.size === size) {
        return Math.max(...distances.slice(1));
    } else {
        return -1;
    }
});

const networkDelayTime = ((times, n, k) => {
    const graph = createGraph(times);
    return dijkstraAlgorithm(graph, k, n);
});