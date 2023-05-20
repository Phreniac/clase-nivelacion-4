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

function calculateTotalSales(ventas) {
  let totalVentas = 0;
  
  for (let i = 0; i < ventas.length; i++) {
    totalVentas += ventas[i].valor;
  }
  
  return totalVentas;
}

calculateTotalSales(ventas)

function calculateAverageSale(ventas) {
  let totalVentas = 0;
  
  for (let i = 0; i < ventas.length; i++) {
    totalVentas += ventas[i].valor;
  }
  
  const promedioVentas = totalVentas / ventas.length;
  
  return promedioVentas;
}

console.log(calculateAverageSale(ventas))

function findMaxSale(ventas) {
  let maxVenta = ventas[0].valor;
  
  for (let i = 1; i < ventas.length; i++) {
    if (ventas[i].valor > maxVenta) {
      maxVenta = ventas[i].valor;
    }
  }
  
  return maxVenta;
}

findMaxSale(ventas)
