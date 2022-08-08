var pageName = window.location.pathname;
if(pageName === '/confirmation.html') {
    localStorage.removeItem("PPMiniCart");
    localStorage.removeItem("PRODUCTS");
    
}