var pageName = window.location.pathname;
if(pageName === '/confirmation.html') {
    localStorage.removeItem("PPMiniCart");
    //localStorage.removeItem("PRODUCTS");
    let orderedProducts = JSON.parse(localStorage.getItem("PRODUCTS"));
    for(let i = 0; i < orderedProducts.length; i++) {
        var prodName = orderedProducts[i].name;
        var qty = orderedProducts[i].qty;
        var prodPrice = orderedProducts[i].price;
    
        var productObj = {
            name: prodName,
            qty: qty,
            price: prodPrice
        }
        
        digitalData.product.push(productObj);
    }

    const params = new URLSearchParams(window.location.search);
    let payMethod = params.get('paymentMethod');
    digitalData.paymentMethod = payMethod;

    let orderAmount = sessionStorage.getItem('Amount');
    digitalData.orderTotal = orderAmount;
}

