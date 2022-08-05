//DATA LAYER

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

localStorage.setItem("isLoggedIn", false);	

setInterval(() => {
	d1 = new Date()
	currTime = d1.toLocaleTimeString()
	digitalData.attributes.time = currTime;
}, 1000);

window.adobeDataLayer = window.adobeDataLayer || [];
window.adobeDataLayer.push({
	"event": "pageload",
	"data":{
		page: {
			pageName: pagename,
			pageURL : url,
			deviceType: currDevice,
			page_level: 3,
			loggedin: JSON.parse(localStorage.getItem('isLoggedIn')),
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
			userID : "lakshay846"
		},
		product : []
}})



// var digitalData = {
// 		page: {
// 			pageName: pagename,
// 			pageURL : url,
// 			deviceType: currDevice,
// 			page_level: 3,
// 			loggedin: JSON.parse(localStorage.getItem('isLoggedIn')),
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
// }


function test(){
	$(".snipcart-details").click(function(){
		var i = digitalData.product.length;
		if(i<=0) {
			var pname=jQuery(this).parents('.snipcart-item').find(".snipcart-thumb p").text();
			digitalData.product.push(pname);
		}
		else {
			digitalData.product.pop();
			var pname=jQuery(this).parents('.snipcart-item').find(".snipcart-thumb p").text();
			digitalData.product.push(pname);
		}
	});
};