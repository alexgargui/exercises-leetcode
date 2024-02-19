/**
 * Problem: Path with maximum probability
 * Link to problem: https://leetcode.com/problems/path-with-maximum-probability
 * Coder: alexgargui
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
const createGraph = (connections, weights) => {
    const graph = {};
    connections.forEach((connection, i) => {
        const [node1, node2] = connection;
        if (!graph[node1]) {
            graph[node1] = {};
        }
        if (!graph[node2]) {
            graph[node2] = {};
        }
        graph[node1][node2] = weights[i];
        graph[node2][node1] = weights[i];
    });
    return graph;
};

const dijkstraAlgorithm = (graph, start, end) => {
    let distances = {};
    let visited = new Set();
    let index = 0;
    let nodes = [start];

    distances[start] = 1;

    while (nodes.length) {
        let lastProb = 0;
        let closestNode;
        for (let i = 0; i < nodes.length; i++) {
            if (distances[nodes[i]] > lastProb) {
                closestNode = nodes[i];
                index = i;
                lastProb = distances[nodes[i]];
            }
        }
        nodes.splice(index, 1);
        

        visited.add(closestNode.toString());

        for (let neighbor in graph[closestNode]) {
            if (!visited.has(neighbor)) {
                if (!nodes.includes(neighbor)) {
                    distances[neighbor] = 0; distances[neighbor] = 0;
                    nodes.push(neighbor);
                }
                let newDistance = distances[closestNode] * graph[closestNode][neighbor];
                if (newDistance > distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
            }
        }
    }
    if (visited.has(end.toString()))
        return distances[end];
    else return 0;
};

const maxProbability = (n, edges, succProb, start_node, end_node) => {
    const graph = createGraph(edges, succProb);
    return dijkstraAlgorithm(graph, start_node, end_node, n);
};