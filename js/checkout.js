let products = JSON.parse(localStorage.getItem("PRODUCTS"));
var total = 0;

document.getElementById('numofproducts').innerText = `${products.length} products`;

var tableHtml = '<table><tr><th>Name</th><th>Quantity</th><th>Price</th></tr>';

for(var i = 0; i < products.length; i++) {
    total += Number(products[i].price)
    tableHtml += `<tr><td>${products[i].name}</td><td>${products[i].qty}</td><td>${products[i].price}</td><tr>`
}

total = total.toPrecision(4);

tableHtml += `<tr><td></td><td>TOTAL</td><td>${total}</td></tr></table>`

document.getElementById('products').innerHTML = tableHtml;

sessionStorage.setItem('Amount', total);