const bubbleSort = (array) => {
    var n = array.length;
    for (var i = 0; i < n-1; i++){
        for (var j = 0; j < n-i-1; j++){
            if (array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const arrayConcat = (...arrays) => {
    const saida = [];
    arrays.forEach(array => {
        array.forEach(element => {
            saida.push(element);
        });
    });
    return saida;
}

const arrayConcatSorted = (sortMethod,...arrays) => {
    saida = arrayConcat(...arrays);
    return sortMethod(saida);
}

array1 = [1, 2, 3, 4];
array2 = [5, 6, 7, 8];
array3 = [9, 10, 11, 12];

console.log(arrayConcatSorted(bubbleSort, array3, array2, array1)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]