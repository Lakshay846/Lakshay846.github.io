//DATA LAYER
// window.adobeDataLayer = window.adobeDataLayer || [];

var pagename = document.title;
var url = document.URL;
var host = window.location.host;
var d1 = new Date(); 
var currDate = d1.toISOString().slice(0, 10);
var currTime = d1.toLocaleTimeString();
var currDevice = "";
if(screen.width <= 421)
	currDevice = "Mobile";
else if (screen.width > 421 && screen.width <= 1023)
	currDevice = "Tablet";
else
	currDevice = "Desktop";

setInterval(() => {
	d1 = new Date()
	currTime = d1.toLocaleTimeString()
}, 1000);

// window.adobeDataLayer.push({
// 	"event": "pageload",
// 	"data":{
// 		page: {
// 			pageName: pagename,
// 			pageURL : url,
// 			deviceType: currDevice,
// 			page_level: 3,
// 			loggedin: isLoggedIn,
// 		},
// 		category: {
// 			primaryCategory: "",
// 			subCategory1: "",
// 			subCategory2: "",
// 			subCategory3: "",

// 		},
// 		attributes: {
// 			country: "IN",
// 			date: currDate,
// 			time: currTime,
// 			domain: host
// 		},
// 		user:{
// 			userID : "lakshay846"
// 		},
// 		product : []
// }})



window.digitalData = {
		page: {
			pageName: pagename,
			pageURL : url,
			deviceType: currDevice,
			page_level: 3,
			loggedin: JSON.parse(sessionStorage.getItem('isLoggedIn')),
		},
		category: {
			primaryCategory: "",
			subCategory1: "",
			subCategory2: "",
			subCategory3: "",

		},
		attributes: {
			country: "IN",
			date: currDate,
			time: currTime,
			domain: host
		},
		user:{
			userID : sessionStorage.getItem('userid')
		},
		product : [],
		prodView: {
			id: JSON.parse(localStorage.getItem('prodId')),
			prodName: JSON.parse(localStorage.getItem("productViewed")) 
		},
}

let prod = document.getElementsByClassName('minicart-item');
for(let i = 0; i < prod.length; i++) {
	var prodName = prod[i].children[0].children[0].innerText;
	var prodPrice = prod[i].children[3].children[0].innerText.slice(1);
	var qty = prod[i].children[1].children[0].getAttribute('value');

	var productObj = {
		name: prodName,
		qty: qty,
		price: prodPrice
	}
	
	digitalData.product.push(productObj);
}

if(prod.length >= 1) {
	localStorage.setItem("PRODUCTS", JSON.stringify(digitalData.product));
}

// let addToCartBtn = document.getElementById('addtocart');

// if(addToCartBtn !== undefined) {
// 	addToCartBtn.addEventListener('click', () => {
// 		let prod = document.getElementsByClassName('minicart-item');
// 		digitalData.product = []
// 		for(let i = 0; i < prod.length; i++) {
// 			var prodName = prod[i].children[0].children[0].innerText;
// 			var prodPrice = prod[i].children[3].children[0].innerText.slice(1);
// 			var qty = prod[i].children[1].children[0].getAttribute('value');
	
// 			var productObj = {
// 				name: prodName,
// 				qty: qty,
// 				price: prodPrice
// 			}
			
// 			digitalData.product.push(productObj);
// 		}
// 	})
// }

//Prod View
var productViewWrappers = document.getElementsByClassName('snipcart-thumb');

for(var i = 0; i < productViewWrappers.length; i++) {
	var prodViewWrapper = productViewWrappers[i];
	prodViewWrapper.addEventListener('click', getProdDesc);
}

function getProdDesc(event) {
	localStorage.setItem("prodId", JSON.stringify(`EC` + Math.floor(1000 + Math.random() * 9000)))
	localStorage.setItem("productViewed",JSON.stringify(event.target.parentElement.nextElementSibling.innerText));
}

//Primary Category
var breadcrumb = $('div.products-breadcrumb').find('ul>li').eq(1).text();
digitalData.category.primaryCategory = breadcrumb;