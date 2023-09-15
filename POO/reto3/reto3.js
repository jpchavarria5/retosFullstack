class productoModel {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
}

class clienteModel {
  constructor(nit, nombre, telefono, direccion, email) {
    this.nit = nit;
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
  }
}

class Venta {
  constructor(clientes, productos) {
    this.clientes = clientes;
    this.productos = productos;
    this.totalVenta = 0;
    this.totalVentas = [];
    this.nitCliente;
  }

  viewCustomers() {
    let view = "";
    for (let i = 0; i < this.clientes.length; i++) {
      const cliente = this.clientes[i];
      view += `Cliente ${i + 1}:\nNit: ${cliente.nit}   Nombre: ${cliente.nombre}   Teléfono: ${cliente.telefono}   Dirección: ${cliente.direccion}   Email: ${cliente.email}\n`;
    }
    alert(view);
  }

  viewProducts() {
    let view = "";
    for (let i = 0; i < this.productos.length; i++) {
      const producto = this.productos[i];
      view += `Producto ${i + 1}:\nCódigo: ${producto.codigo}   Nombre: ${producto.nombre}   Precio: ${producto.precio}\n`;
    }
    alert(view);
  }

  register() {
    let cliente = parseInt(prompt('Ingrese el nit del cliente:'));
    let estado = true;
    this.totalVenta = 0;

    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].nit == cliente) {

        this.nitCliente = this.clientes[i].nit;
        while (estado) {
          let producto = parseInt(prompt('Ingrese el código del producto o ingrese el número 0 para terminar la venta:'));

          if (producto == 0) {
            estado = false;
            break;
          }

          for (let j = 0; j < this.productos.length; j++) {
            if (this.productos[j].codigo == producto) {
              let cantidad = parseInt(prompt(`Ingrese la cantidad de ${this.productos[j].nombre}:`));
              this.totalVenta += this.productos[j].precio * cantidad;
            }
          }
        }
      }
    }
    if (this.totalVenta == 0) {
      alert('Ingrese un dato válido');
    }
    else {
      alert(`El total de la venta es: ${this.totalVenta}`);
      this.totalVentas.push({ nit: this.nitCliente, valor: this.totalVenta });
    }
  }

  report() {
    console.log(this.totalVentas);
    let contVentasMaxs = 0;
    let ventasMax5 = "";
    let sumVentaMaxs = 0;
    let promVentaMaxs = 0.0;
    let contRangeVentas = 0;
    let ventasMax2 = "";
    let sumRangeVentas = 0;
    let promRangeVentas = 0.0;
    const nitFrequencies = {};

    for (let i = 0; i < this.totalVentas.length; i++) {
      if (this.totalVentas[i].valor > 550000) {
        ventasMax5 += `Venta ${i + 1}
        Cliente: ${this.totalVentas[i].nit}   Valor: ${this.totalVentas[i].valor}\n`;
        sumVentaMaxs += this.totalVentas[i].valor;
        contVentasMaxs++;
      }
      if (this.totalVentas[i].valor >= 200000 && this.totalVentas[i].valor <= 550000) {
        sumRangeVentas += this.totalVentas[i].valor;
        contRangeVentas++;
      }
      if (this.totalVentas[i].valor > 200000) {
        ventasMax2 += `Venta ${i + 1}
        Cliente: ${this.totalVentas[i].nit}   Valor: ${this.totalVentas[i].valor}\n`;
      }
      const nit = this.totalVentas[i].nit;
      if (nit in nitFrequencies) {
        nitFrequencies[nit]++;
      } else {
        nitFrequencies[nit] = 1;
      }
    }
    // Encontrar el NIT que se repite más veces
    let nitMasRepetido = null;
    let frecuenciaMaxima = 0;

    for (const nit in nitFrequencies) {
      if (nitFrequencies[nit] > frecuenciaMaxima) {
        frecuenciaMaxima = nitFrequencies[nit];
        nitMasRepetido = nit;
      }
    }

    //console.log(`El NIT que se repite más veces es: ${nitMasRepetido}`);

    // Encontrar el NIT que se repite menos veces
    let nitMenosRepetido = null;
    let frecuenciaMinima = Number.MAX_SAFE_INTEGER;

    for (const nit in nitFrequencies) {
      if (nitFrequencies[nit] < frecuenciaMinima) {
        frecuenciaMinima = nitFrequencies[nit];
        nitMenosRepetido = nit;
      }
    }

    //console.log(`El NIT que se repite menos veces es: ${nitMenosRepetido}`);
    promVentaMaxs = sumVentaMaxs / contVentasMaxs;
    promRangeVentas = sumRangeVentas / contRangeVentas;
    alert(`Ventas mayores a 550000: ${contVentasMaxs} 
    Promedio: ${promVentaMaxs}
    \nVentas entre 200000 y 550000: ${contRangeVentas}
    Promedio: ${promRangeVentas}
    \nCuales venatas fueron mayores a 550000: 
    ${ventasMax5}\nCuales ventas fueron mayores a 200000: 
    ${ventasMax2}\nEl NIT que más se repite es: ${nitMasRepetido}
    \nEl NIT que menos se repite es: ${nitMenosRepetido}
    `
    );
  }
}

const cliente1 = new clienteModel(1, "Jhon Hérnandez", 3222222222, "Cra 22a #101-22", "Jhon@gmail.com");
const cliente2 = new clienteModel(2, "Pedro Escamilla", 3111111111, "Cra 44b #20-10", "pedro@gmail.com");
const cliente3 = new clienteModel(3, "Juan Sanchez", 3444444444, "Cll 12 #33-4", "Juan@gmail.com");
const cliente4 = new clienteModel(4, "Melissa Alvarez", 3555555555, "Cra 50b #111-5", "Melissa@gmail.com");
const cliente5 = new clienteModel(5, "Alexa Mejia", 3100000000, "Cra 23c #130-23", "Alexa@gmail.com");

const producto1 = new productoModel(101, "Play 2", 200000);
const producto2 = new productoModel(102, "Paca de arroz", 50000);
const producto3 = new productoModel(103, "TV", 500000);
const producto4 = new productoModel(104, "Par de zapatos", 120000);
const producto5 = new productoModel(105, "Camiseta", 20000);
const producto6 = new productoModel(106, "Ron de caldas", 150000);
const venta1 = new Venta([cliente1, cliente2, cliente3, cliente4, cliente5], [producto1, producto2, producto3, producto4, producto5, producto6]);
console.log(venta1);

let estado = true;
let opcion = 0;
while (estado) {
  opcion = parseInt(prompt('MENU DE OPCIONES\n1. Ver clientes\n2. Ver productos\n3. Registrar venta\n4. Ver reporte del mes\n5. Salir'));

  switch (opcion) {
    case 1:
      venta1.viewCustomers();
      break;
    case 2:
      venta1.viewProducts();
      break;
    case 3:
      venta1.register();
      break;
    case 4:
      venta1.report();
      break;
    case 5:
      alert('Gracias por usar el sistema');
      estado = false;
      break;

    default:
      alert('Opción no válida');
      break;
  }
}