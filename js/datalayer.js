//DATA LAYER-->
		var digitalData = {
			"page": {
				"pageInfo" : {
					"pageName": location.pathname
					}
				},
				product: []
		};
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