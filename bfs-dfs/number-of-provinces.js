/**
 * Problem: Number of provinces
 * Link to problem: https://leetcode.com/problems/number-of-provinces
 * Coder: alexgargui
 * @param {number[][]} isConnected
 * @return {number}
 */
const dfs = ((isConnected, fila) => {
    console.log(fila);
    for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[fila][j] == 1) {
            isConnected[fila][j] = 0;
            dfs(isConnected, j);
        }
    }
});

const findCircleNum = (isConnected) => {
    let cont = 0;
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] == 1) {
                isConnected[i][j] = 0;
                cont++;
                dfs(isConnected, j);
            }
        }
    }
    return cont;
};