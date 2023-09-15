let semana = [];
let dia = [];
let diaProd = [];
let numsVacasSemana = [];
let numsVacasDia = [];

let litrosMax = 0.0;
let diaProdMax = 0;
let diaProdMin = 0;
let litroProdMax = 0;
let litroProdMin = 11.9;
let cont = 1;
let sumLitros = 0.0;
let litros = 0;

let numVacas = prompt('¿Cúantas vacas tiene en la hacienda?');

if (!isNaN(numVacas) && numVacas >= 3 && numVacas <= 50) {
  //alert('melo');
  for (let i = 1; i <= 7; i++) {
    dia = []
    numsVacasDia = [];
    sumLitros = 0.0;
    litrosMax = 0.0;

    for (let x = 1; x <= numVacas; x++) {
      litros = parseFloat(prompt(`PRODUCCIÓN DEL DÍA ${i}:\nVaca ${x}:`));

      if (!isNaN(litros) && litros >= 0.0 && litros <= 11.9) {
        sumLitros += litros;
        dia.push(litros);

        if (litros == litrosMax) {
          numsVacasDia.push(`Vaca ${x}`);
        }

        if (litros > litrosMax) {
          numsVacasDia = [];
          litrosMax = litros;
          numsVacasDia.push(`Vaca ${x}`);
        }

      }
      else {
        x--
        alert('Por favor, ingrese un dato valido');
      }
    }

    numsVacasSemana.push(numsVacasDia);
    diaProd.push(sumLitros);
    semana.push(dia);
    /* console.log(`VAQUITAS: ${numsVacasSemana}`)
    console.log('SUMA DE LITROS ' + i + ': ' + diaProd[i - 1])
    console.log('DÍA ' + i + ': ' + dia); */
    //alert('LITROS: ' + dia);

  }
  //alert(diaProd)

  for (let u = 0; u < 7; u++) {
    if (diaProd[u] > litroProdMax) {
      litroProdMax = diaProd[u];
      diaProdMax = cont;
    }
    if (diaProd[u] < litroProdMin) {
      litroProdMin = diaProd[u];
      diaProdMin = cont;
    }
    cont++
  }

  alert(`Producción total del hato en cada uno de los siete días:\n
  Día 1: ${diaProd[0]}
  Día 2: ${diaProd[1]}
  Día 3: ${diaProd[2]}
  Día 4: ${diaProd[3]}
  Día 5: ${diaProd[4]}
  Día 6: ${diaProd[5]}
  Día 7: ${diaProd[6]}`
  );

  alert(`Día de la semana con mayor y menor producción:\n
  Mayor producción: Día ${diaProdMax}
  Menor producción: Día ${diaProdMin}`
  );

  alert(`El número de la vaca que dio más leche en cada día.:\n
  Día 1: ${numsVacasSemana[0]}
  Día 2: ${numsVacasSemana[1]}
  Día 3: ${numsVacasSemana[2]}
  Día 4: ${numsVacasSemana[3]}
  Día 5: ${numsVacasSemana[4]}
  Día 6: ${numsVacasSemana[5]}
  Día 7: ${numsVacasSemana[6]}`
  );

  /* console.log('SEMANA: ' + semana);
  alert('SEMANA: ' + semana); */

}
else {
  alert('Por favor, ingrese un dato valido');
}