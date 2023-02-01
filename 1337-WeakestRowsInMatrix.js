let kWeakestRows = function(mat, k) {
    let weakest = [];
    let rows = mat
    .map( (row, index) => {
        return {
            total: row.reduce((total, position) => total + position, 0),
            index: index
        }
    })
    .sort((a, b) => a.total - b.total)
    for (let i = 0; i < k; i++) {
        weakest.push(rows[i].index);
    }
    return weakest;
};

let mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]];
let k = 3;
console.log(kWeakestRows(mat, k));