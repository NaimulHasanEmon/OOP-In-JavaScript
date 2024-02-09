const products = [
    {id: 1, name: "Xiaomi phone", price: 28000},
    {id: 2, name: "Samsung S22", price: 80000},
    {id: 3, name: "Nokia 1200", price: 12000},
    {id: 4, name: "Poco phone", price: 26000},
    {id: 5, name: "iPhone 15 pro", price: 170000},
    {id: 6, name: "OnePlus phone", price: 50000},
]

function matchedProducts(products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            // Product name and search name both should be in lowercase to get the correct result.
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, "Phone");
console.log(result);