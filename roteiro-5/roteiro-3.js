const obj1 = {
    nome: 'Lucas',
    idade: 25
}

const obj2 = {
    idade: 25,
    altura: 1.80
}

const spreadConcat = (obj1, obj2) => {
    const obj3 = {...obj1, ...obj2};
    return obj3;
}

console.log(spreadConcat(obj1, obj2)); // { nome: 'Lucas', idade: 25, altura: 1.8 }