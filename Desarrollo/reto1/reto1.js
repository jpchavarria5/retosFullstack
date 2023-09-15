let vector1 = [];
let vector2 = [];
let lista = [];
let suma = 0;

const n = prompt('¿Cuantos números desea ingresar?');

if (!isNaN(n) && n >= 1 && n <= 15) {
  //alert('melo')
  for (let i = 1; i <= n; i++) {
    let numV1 = parseInt(prompt(`Ingrese el número ${i} del primer vector:`));
    let numV2 = parseInt(prompt(`Ingrese el número ${i} del segundo vector:`));

    if (!isNaN(numV1) && !isNaN(numV2) && numV1 >= 1 && numV2 >= 1 && numV1 <= 30 && numV2 <= 30) {
      vector1.push(numV1);
      vector2.push(numV2);
    }
    else {
      alert(`Por favor ingresse un valor valido. Vuelve a ingrear los números ${i}`);
      i--;
    }
  }

  vector1.sort(function (a, b) {
    return a - b;
  });
  vector2.sort(function (a, b) {
    return a - b;
  });

  alert(`VECTOR 1: ${vector1}\nVECTOR 2: ${vector2}`);

  for (let v = 0; v < n; v++) {
    suma = vector1[v] + vector2[v];
    lista.push(suma);
    alert(`Posicion ${v + 1}:\n${vector1[v]} + ${vector2[v]} = ${suma}`);
  }
  alert('Lista de resultado: ' + lista);
}
else {
  alert('Por favor ingrese un dato valido');
}






