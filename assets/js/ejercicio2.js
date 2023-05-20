const ventas = [
  { producto: 'Camisa verde', tipo: 'Camisa', valor: 40000 },
  { producto: 'Pantalón Gris', tipo: 'Jeans', valor: 35000 },
  { producto: 'Zapatos blancos', tipo: 'Calzado', valor: 122000 },
  { producto: 'Sombrero Rojo', tipo: 'Sombrero', valor: 11900 },
  { producto: 'Zapatos Amarillos', tipo: 'Calzado', valor: 22900 },
  { producto: 'Sombrero', tipo: 'Sombrero', valor: 12220 },
  { producto: 'Pantalón Negro', tipo: 'Jeans', valor: 11190 },
  { producto: 'Sombrero Violeta', tipo: 'Sombrero', valor: 33390 },
  { producto: 'Sombrero Pequeño', tipo: 'Sombrero', valor: 8290 },
];

/*
calculateTotalSales(ventas): Esta función debe calcular y devolver el total de ventas realizadas. Recibe el array de ventas como parámetro.
*/

function calculateTotalSales(ventas) {
  let total = 0;
  for (let venta of ventas) {
    total += venta.valor;
  }
  return total;
}

const totalSales = calculateTotalSales(ventas);
console.log(totalSales);


// =============================================================

