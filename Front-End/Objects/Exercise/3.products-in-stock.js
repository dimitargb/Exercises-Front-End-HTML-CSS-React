function productsInstock(products, orderedProducts, orderedProducts2){

    let stock = {}

    for(let i = 0; i < products.length; i += 2){

        let product = products[i];
        let quantity = Number(products[i + 1]);

        if(!stock.hasOwnProperty(product)){
            stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }
    }

    for(let i = 0; i < orderedProducts.length; i += 2){

        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);

        if(!stock.hasOwnProperty(product)){
            stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }
    }

    for(let i = 0; i < orderedProducts2.length; i += 2){

        let product = orderedProducts2[i];
        let quantity = Number(orderedProducts2[i + 1]);

        if(!stock.hasOwnProperty(product)){
            stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }
    }

    
    for (const productName in stock) {
        console.log(`${productName} -> ${stock[productName]}`);
    }
}
productsInstock([
    'Chips', '1', 'CocaCola', '2', 'Bananas', '1', 'Pasta', '1', 'Beer', '1'
    ],
    [
    'Flour', '1', 'Oil', '2', 'Pasta', '1', 'Tomatoes', '2', 'Bananas', '1'
    ],
    [
    'Chips', '1', 'CocaCola', '2', 'Bananas', '1', 'Pasta', '1', 'Beer', '1'
        ],
    );