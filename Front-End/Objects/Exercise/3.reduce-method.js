function store(currentStock, deliveredStock) {
    const products = [...currentStock, ...deliveredStock];
   
    const stock = products.reduce((acc, current, index) => {
      if (index % 2 === 0) {
          if (!acc.hasOwnProperty(current)) {
              acc[current] = Number(products[index + 1]);
          } else {
              acc[current] += Number(products[index + 1])
          }
      }
   
      return acc;
    }, {});
   
    Object.keys(stock).forEach((key) => {
      console.log(`${key} -> ${stock[key]}`);
    })
  }

  store(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
])