//Input: matrix = [[1,2,3],[4,5,6]]
//Output: [[1,4],[2,5],[3,6]]

class Matrix {
    constructor(matrix = []) {
        this.matrix = matrix;
    }
    output() {
        const output = [];
        for (let i = 0; i < this.matrix.length; i++) {
            const element = this.matrix[i];
                element.forEach((numb, index) => { // 1
                    if (!output[index]) {
                        output[index] = new Array();
                        output[index].push(numb);
                    } else {
                        output[index].push(numb);
                    }
                });
            
        }
        return output;
    }
    //Big O Notation

}
const matrix = [[1, 2, 3], [4, 5, 6]];
const Instance = new Matrix(matrix);
Instance.output();







