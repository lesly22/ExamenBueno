exports.funciones = (capital, interes, periodo) => {
    let deposito = 0;
    let interes1 = 0;
    const resultados = [];
    interes = interes / 100;
  
    const resultadosObjetc = {
      Periodo: 1,
      Depositos: capital,
      Interes: 0,
      Saldo: capital,
    };
  
    resultados.push(resultadosObjetc);
  
    for (let i = 0; i < periodo; i++) {
      interes1 = capital * interes;
      capital += interes1;
  
      resultadosObject = {
        Periodo: i + 2,
        Depositos: deposito,
        Interes: interes1,
        Saldo: capital,
      };
  
      resultados.push(resultadosObjetc);
    }
  
    return resultados;
  };