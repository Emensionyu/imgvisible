/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @problem 细胞生命
 */
var gameOfLife = function (board) {
    let m = board.length + 2,
        n = board[0].length + 2,
        newBoard=new Array()
    for (let i = 0; i < m; i++) {
        newBoard[i]=new Array(n)
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                newBoard[i][j]=0
            }else{
            newBoard[i][j] = board[i-1][j-1]
            }
        }
    }
    // 扩充 边界得到新数组
    console.log(newBoard)
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let sum = test(i, j, newBoard)
            if (newBoard[i][j] == 1) {
                if (sum < 2 || sum > 3) {
                    board[i - 1][j - 1] = 0
                }
            } else if (sum == 3) {
                board[i - 1][j - 1] = 1
            }
        }
    }
    return board
};
// js版卷积
function test(i, j, newBoard) {
    console.log('newBoard=',newBoard)
    let sum=(newBoard[i - 1][j - 1])*1+
    (newBoard[i - 1][j])*1+
    (newBoard[i - 1][j + 1])*1 +
    (newBoard[i][j - 1])*1 + 
    (newBoard[i][j + 1])*1 +
    (newBoard[i + 1][j - 1])*1 +
    (newBoard[i + 1][j])*1 + 
    (newBoard[i + 1][j + 1])*1
    console.log('sum'+i+":"+j+"=",sum)
    return sum
}
console.log(gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]))