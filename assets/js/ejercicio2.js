const ventas = [
    { producto: 'Camisa verde', tipo:'Camisa', valor: 40000 },
    { producto: 'Pantalón Gris',tipo:'Jeans', valor: 35000 },
    { producto: 'Zapatos blancos',tipo:'Calzado', valor: 122000 },
    { producto: 'Sombrero Rojo',tipo:'Sombrero', valor: 11900 },
    { producto: 'Zapatos Amarillos',tipo:'Calzado', valor: 22900 },
    { producto: 'Sombrero',tipo:'Sombrero', valor: 12220 },
    { producto: 'Pantalón Negro',tipo:'Jeans', valor: 11190 },
    { producto: 'Sombrero Violeta',tipo:'Sombrero', valor: 33390 },
    { producto: 'Sombrero Pequeño',tipo:'Sombrero', valor: 8290 },
  ];

  const calculateTotalSales = (ventas) => {
    let total = 0;
    for (let venta of ventas) {
      total += venta.valor;
    }
    return total;
  };

  
  const calculateAverageSale = (ventas) => {
    if (ventas.length === 0) {
      return 0;
    }
    const total = calculateTotalSales(ventas);
    return total / ventas.length;
  };
  
  const findMaxSale = (ventas) => {
    let maxSale = null;
    for (let venta of ventas) {
      if (maxSale === null || venta.valor > maxSale.valor) {
        maxSale = venta;
      }
    }
    return maxSale;
  };
  
  const findMinSale = (ventas) => {
    let minSale = null;
    for (let venta of ventas) {
      if (minSale === null || venta.valor < minSale.valor) {
        minSale = venta;
      }
    }
    return minSale;
  };
  
  const filterSalesByProduct = (ventas, producto) => {
    return ventas.filter((venta) => venta.producto === producto);
  };
  
  // Calcular estadísticas de ventas
  const totalSales = calculateTotalSales(ventas);
  const averageSale = calculateAverageSale(ventas);
  const maxSale = findMaxSale(ventas);
  const minSale = findMinSale(ventas);
  
  // Imprimir resultados
  console.log('Total de ventas:', totalSales);
  console.log('Promedio de ventas:', Math.floor(averageSale));
  console.log('Venta de mayor valor:', maxSale);
  console.log('Venta de menor valor:', minSale);


const result = Math.floor(totalSales + averageSale + (maxSale.valor / minSale.valor));
console.log('Resultado final:', result);

//**Descripción:
//Debes implementar una serie de funciones que permitan calcular estadísticas de ventas de una tienda. 
//Se te proporcionará un array de ventas, donde cada elemento representa una venta realizada y 
//contiene el nombre del producto y el valor de la venta. 
//Tu tarea es implementar las siguientes funciones:
//calculateTotalSales(ventas): Esta función debe calcular y devolver el total de ventas realizadas. 
//Recibe el array de ventas como parámetro.
//calculateAverageSale(ventas): Esta función debe calcular y devolver el promedio de las ventas realizadas. 
//Recibe el array de ventas como parámetro.
//findMaxSale(ventas): Esta función debe encontrar y devolver la venta de mayor valor realizada. 
//Recibe el array de ventas como parámetro.
//findMinSale(ventas): Esta función debe encontrar y devolver la venta de menor valor realizada. 
//Recibe el array de ventas como parámetro.
//filterSalesByProduct(ventas, producto): Esta función debe filtrar y devolver un nuevo array de ventas que contenga solo 
//las ventas del producto especificado. Recibe el array de ventas y el nombre del producto como parámetros.
//Finalmente debes calcular el total de ventas 
//+ el promedio de ventas + la venta mas alta / la venta mas baja. Esto te permitirá continuar.