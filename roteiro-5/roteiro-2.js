const checkIntra = (param1, param2) => 
    typeof param1 === typeof param2 && param1 === param2;

const check = (...parametros) => 
    parametros.some((param, index) => 
    parametros.some((outroParam, outroIndex) => 
        index !== outroIndex && checkIntra(param, outroParam)
    )
    );

  console.log(check(1, 2, 3, 4));          // false
  console.log(check(1, '1', 3, 1));        // true
  console.log(check('a', 'b', 'a'));       // true
  console.log(check(1, 2, '1', '2'));      // false
