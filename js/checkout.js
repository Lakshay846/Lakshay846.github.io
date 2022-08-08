let products = JSON.parse(localStorage.getItem("PRODUCTS"));
let total;
console.log(products)

document.getElementById('numofproducts').innerText = `${products.length} products`;

var tableHtml = '<table><tr><th>Name</th><th>Quantity</th><th>Price</th></tr>';

for(let i = 0; i < products.length; i++) {
    total += Number(products[i].price);
    tableHtml += `<tr><td>${products[i].name}</td><td>${products[i].qty}</td><td>${products[i].price}</td><tr>`
}

console.log(total)

tableHtml += '</table>'

document.getElementById('products').innerHTML = tableHtml;