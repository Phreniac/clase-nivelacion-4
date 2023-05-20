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
    let totalVentas = 0;
    ventas.forEach((venta) => {
      totalVentas += venta.valor;
    });
    console.log(totalVentas);
  };
  calculateTotalSales(ventas);
  
  const calculateAverageSale = (ventas) => {
    let totalVentas = 0;
    ventas.forEach((venta) => {
      totalVentas += venta.valor;
    });
    let promedioVentas = totalVentas / ventas.length;
  
    console.log(promedioVentas);
  };
  calculateAverageSale(ventas)