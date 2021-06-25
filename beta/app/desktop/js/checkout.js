//calculate Tax 7.77%

window.USPS = {
	updated: false,
	amount: 0.00,
	data: {
		street: '',
		city: '',
		zip: '',
		state: '',
	}
};

    var tax = 0;
	var orderTotal = 0;
	var subTotal = parseFloat($(".priceTableCol").find('span').html());
	var productSubTotal=0;
var timeInterval;


$(".halfColum").on('change keyup', '.to_zip', function (event) {
	event.preventDefault();

	var subTotal = parseFloat($(".priceTableCol").find('span').html());
	// cb.errorHandler([id.value]);
	var to_zip = $("#to_zip").val();
	var to_state = $("#shippingState").val();
	var to_city = $('input[name=shippingCity]').val();
	var to_street = $('input[name=shippingAddress1]').val();

	if (to_state == '') {
		$(".error_to_state").show();
		$(".error_to_state").html("<h5 style='color:red'>Please Provide State Name.</h5>");
	} 
	else if ( to_zip.length <= 4 ) {
		return;
	}
	else {

		$(".error_to_state").hide();
		setTimeout(function () {
			$.ajax({
				url: '/ajax-avalara.php',
				data: $("#checkout-formID").serialize(),
				type: 'post',
				dataType: "json",
				// beforeSend:function(x){
				//   $("#loading-indicator").show();
				// },
				success: function (result) {
					//$("#loading-indicator").hide();
					if (result.Errcode) {
						$(".error_to_zip").show();
						$(".error_to_zip").html("<h5 style='color:red'>Please Provide Valid Zip Code.</h5>");
						$(".purchesBtn").attr("disabled", true);
					} else {
						$(".purchesBtn").attr("disabled", false);
						$(".error_to_zip").hide();
					}

					if (result.tax) {

						tax = result.tax;

						var taxadd = parseFloat(tax).toFixed(2);
						$("#taxVal").val(taxadd);
						$(".priceTableColTax").find('label').html(parseFloat($('#taxVal').val()).toFixed(2));
						console.log(subTotal,"subTotalTax");
						orderTotal = orderTotalCal(subTotal, parseFloat(taxadd), parseFloat($('#disVal').val()),parseFloat($("#add_jerky").val()),parseFloat($("#product1_shipPrice").val()));
						var orderTotal=checkOrderTotal(orderTotal);
						$(".priceTableCol").find('strong').find('span').html(orderTotal)
						

						//updateUSPSObject(to_street, to_city, to_state, to_zip, taxadd);

					} else {

						$(".priceTableColTax").find('label').html("0.00");
						$("#taxVal").val('0');
						// cb.errorHandler([$('#disVal').val()]);
						orderTotal = orderTotalCal(parseFloat(subTotal), parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),parseFloat($("#add_jerky").val()),parseFloat($("#product1_shipPrice").val()));
						var orderTotal=checkOrderTotal(orderTotal);
						$(".priceTableCol").find('strong').find('span').html(orderTotal);
						//updateUSPSObject(to_street, to_city, to_state, to_zip, '0.00');
					}
				}
			});
		}, 500);
	}
});


function calculateTax(id) {


	// var tax = 0;
	// var orderTotal = 0;
	var subTotal = parseFloat($(".priceTableCol").find('span').html());
	// cb.errorHandler([id.value]);
	var to_state = id.value;
	$(".error_to_state").html('');
	var to_zip = $("#to_zip").val();
	if (!to_zip || to_zip == '' || to_zip.length <= 4) {
		$(".error_to_zip").show();
		// $(".error_to_zip").html("<h5 style='color:red'>Please Provide Pincode.</h5>");
	} else {
		$(".error_to_zip").hide();
		// setTimeout(function(){
		$.ajax({
			url: '/ajax-avalara.php',
			data: $("#checkout-formID").serialize(),
			type: 'post',
			dataType: "json",
			beforeSend: function (x) {
				$("#loading-indicator").show();
				$(".purchesBtn").attr("disabled", true);
			},
			success: function (result) {
				// cb.errorHandler([result.msg]);
				//cb.errorHandler([result.Errcode]);
				//cb.errorHandler([result.tax]);
				// $("#loading-indicator").hide();
				if (result.Errcode) {
					$(".error_to_zip").show();
					if (to_zip) {
						$(".error_to_zip").html("<h5 style='color:red'>Please Provide Valid Zip Code.</h5>");
					}

					$(".purchesBtn").attr("disabled", true);
				} else {
					$(".purchesBtn").attr("disabled", false);
					$(".error_to_zip").hide();
				}
				if (result.tax) {

					tax = result.tax;
					$("#taxVal").val(tax);
					var taxadd = parseFloat(tax).toFixed(2);

					$(".priceTableColTax").find('label').html(parseFloat($('#taxVal').val()).toFixed(2));

					orderTotal = orderTotalCal(subTotal, parseFloat($('#taxVal').val()), parseFloat($('#disVal').val()),parseFloat($("#add_jerky").val()),parseFloat($("#product1_shipPrice").val()));
						var orderTotal=checkOrderTotal(orderTotal);
					$(".priceTableCol").find('strong').find('span').html(orderTotal)
					

					//updateUSPSObject(to_street, to_city, to_state, to_zip, taxadd);

				} else {

					$(".priceTableColTax").find('label').html("0.00");
					$("#taxVal").val('0.00');
					// cb.errorHandler([$('#disVal').val()]);
					orderTotal = orderTotalCal(parseFloat(subTotal), parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),parseFloat($("#add_jerky").val()),parseFloat($("#product1_shipPrice").val()));
					var orderTotal=checkOrderTotal(orderTotal);
					$(".priceTableCol").find('strong').find('span').html(orderTotal);

					//updateUSPSObject(to_street, to_city, to_state, to_zip, '0.00');
				}

				$("#loading-indicator").hide();

			}

		});

		//}, 2000);

	}


}

var patrialForm;

$('input[type=submit].purchesBtn').click(function (event) {

	patrialForm = $('#checkout-formID');
	cb.beforeFormSubmitEvents.push(function(e) {
		checkUserAlreadyExsit($.trim($("input[name='email']").val()));
	
		validateAddressAndCreatePartial(patrialForm);
		//createPartial(patrialForm);
	});

	
})

function validateAddressAndCreatePartial(patrialForm) {

		
		var to_zip = $("#to_zip").val();
		var to_state = $("#shippingState").val();
		var to_city = $('input[name=shippingCity]').val();
		var to_street = $('input[name=shippingAddress1]').val();

		if (to_state == '') {
			$(".error_to_state").show();
			$(".error_to_state").html("<h5 style='color:red'>Please Provide State Name.</h5>");
		} 
		else {

			$(".error_to_state").hide();
			setTimeout(function () {
				$.ajax({
					url: '/usps.php',
					data: $("#checkout-formID").serialize(),
					type: 'post',
					dataType: "json",
					beforeSend:function(x){
					  $("#loading-indicator").show();
					},
					success: function (result) {
						//alert(result.msg);
						$( "#loading-indicator" ).hide();	

									

						if ( result.msg == '0' ) {
							$( "#loading-indicator" ).hide();
							cb.errorHandler( ["Invalid Address, Please enter a valid Address"] );
							return false;
						} 
						else if ( result.msg == '2' ) {
							$( "#loading-indicator" ).hide();
							cb.errorHandler( ["Please enter the shipable Address."] );
							return false;
						}
						// else if ( result.msg == 'S' ) {
						// 	$( "#loading-indicator" ).hide();
						// 	cb.errorHandler( ["The address you entered was found but more information is needed (such as an apartment, suite, or box number) to match to a specific address."] );
						// 	return false;
						// }
						else if ( result.msg == 'D' ) {
							$( "#loading-indicator" ).hide();
							cb.errorHandler( ["The address you entered was found but more information is needed."] );
							return false;
						}
						else {
							var addressErrors = [];
							if( result.data != 'undefined' ) {
								// var uspsAddress = result.data.Address != 'undefined' ? result.data.Address : {};
								// console.log(uspsAddress,"uspsAddress");
								// if( uspsAddress.State != 'undefined' && uspsAddress.State != to_state ) {
								// 	addressErrors.push('The shipping address, state combination is incorrect. Please check and try again');
								// }
								// if( uspsAddress.Zip5 != 'undefined' && uspsAddress.Zip5 != to_zip ) {
								// 	addressErrors.push('The shipping address, zipcode combination is incorrect. Please check and try again');
								// }
								// 	console.log(addressErrors,"uspsAddress");
							}
							 if( addressErrors.length ) {
								cb.errorHandler(addressErrors);
								return false;
							}

							else {
							if($("#upsellID").val().length){
									if($("#partialOrderID").val().length){
									patrialFormSubmit(patrialForm);
								}else{
									createPartial(patrialForm);
								}
								}
								else{
									
 								// show timer popup
								$("#loading-indicator").hide();
								timerShow();
								$("#upsell-popup").modal('show');

								// Set 30 second timmer if user dont do any thing 
								timeInterval=setInterval(function() {
									$("#upsell-popup").modal('hide');
								    if($("#partialOrderID").val().length){
										patrialFormSubmit(patrialForm);
									}else{
										createPartial(patrialForm);
									}
								}, 30000);



								}
							//updateUSPSObject(to_street, to_city, to_state, to_zip, tax);
							}
						}
					},
					complete: function(){
						// $("#loading-indicator").hide();
					}
				});
			}, 500);
		}
	
}



var partialRequest = null;
var minlength = 12;
var keyTimer;
$("input[name=phone], input[name=firstName], input[name=lastName]").on('blur', function(e){ 
	e.preventDefault();
	var phoneNumber = $("input[name=phone]").val();
	var fname = $("input[name=firstName]").val();
	var lname = $("input[name=lastName]").val();
	// var ts = Date.now();
	if(sessionStorage.getItem('has_prospectId')){
		$("#partialOrderID").val(sessionStorage.getItem('has_prospectId'));
		return false;
	}else if(fname.length && lname.length && (phoneNumber.length >= minlength)){
		// var fname = random_strings(randomNumber(4,8));
		// var FN = fname.charAt(0).toUpperCase() + fname.slice(1);
		// var lname = random_strings(randomNumber(4,8));
		// var LN = lname.charAt(0).toUpperCase() + lname.slice(1);

		var partialData = {
			phone: phoneNumber,
			firstName: fname, 
			lastName: lname,			
			shippingAddress1:'1495 Pacific Highway',
			shippingCity: 'San Diego',
			shippingState: 'CA',
			shippingZip: '92101', 
			shippingCountry: 'US',
			custom_partial_products:$("#custom_note").val(),
			campaignId: 8
		}

		if(keyTimer){
        	clearTimeout(keyTimer);
        }
        keyTimer = setTimeout(function () {

         	if (partialRequest != null) 
            partialRequest.abort();

	       	partialRequest = $.ajax({
				url: app_config.offer_path + AJAX_PATH + 'extensions/cbutilitypackage/create-partial-prospect',
				type: 'POST',
				data: partialData,
				dataType: 'json',
				beforeSend:function(x){
				  // $("#loading-indicator").show();
				},
				success: function(data) {
					console.log(data);
					// $("#loading-indicator").hide();
					if(data.prospectId){
						$("#partialOrderID").val(data.prospectId);
						sessionStorage.setItem('has_prospectId', (data.prospectId));
						// sessionStorage.setItem('has_name', (FN+" "+LN));
						// sessionStorage.setItem((FN+" "+LN), data.prospectId);
					}		
				},
				complete: function() {
					// $("#loading-indicator").hide();
				}
			});
	    }, 500);		
	
	}
});

function createPartial(patrialForm) {

	var partialData = {
		email: patrialForm.find('[name=email]').val(), 
		firstName: patrialForm.find('[name=firstName]').val(), 
		lastName: patrialForm.find('[name=lastName]').val(), 
		address1: patrialForm.find('[name=shippingAddress1]').val(), 
		address2: '',
		postalCode: patrialForm.find('[name=shippingZip]').val(), 
		city: patrialForm.find('[name=shippingCity]').val(), 
		state: patrialForm.find('[name=shippingState]').val(), 
		country: patrialForm.find('[name=shippingCountry]').val(), 
		campaignId: 8
	}
	
	$.ajax({
		url: app_config.offer_path + AJAX_PATH + 'extensions/cbutilitypackage/create-partial-prospect',
		type: 'POST',
		data: partialData,
		beforeSend:function(x){
		  $("#loading-indicator").show();
		},
		success: function(data) {
			console.log(data);
				 if ($("#confimation-box").is(":checked")) {
							 // $("#warningModal").show("hide");
							 // return true;
						}else{
							$( "#loading-indicator" ).hide();
							 $("#warningModal").modal("show");
							return false;
						}

			if(data.prospectId){
					$("#partialOrderID").val(data.prospectId);
					patrialFormSubmit(patrialForm);
				}		},
		complete: function(){
			// $("#loading-indicator").hide();
		}
	});
}
function patrialFormSubmit(patrialForm){
$("#upsellID").val("");
	if( cb.beforeFormSubmitEvents.length > 0 ) {
		cb.beforeFormSubmitEvents = [];
	
		resetTimer();
		patrialForm.submit();
	}
}

// Validate Coupon
$("form#cuponForm").on("submit", function(e){
	e.preventDefault();
});

function validate_coupon(id) {
		$(".disPlace").hide();
		showExpsuperShip();
	//console.log(pid,"pid");
	var code = $("#couponCode").val();
	var code = code.toUpperCase(code);
	var subTotal = parseFloat($(".priceTableCol").find('span').html());
	var productPriceTotal=parseFloat($("#productPriceTotal").val());


	var cbProids = $("input[name='cb-proid[]']")
		.map(function () {
			return $(this).val();
		}).get();
	var cbPrices = $("input[name='cb-price[]']")
		.map(function () {
			return $(this).val();
		}).get();


	$.ajax({
		url: app_config.offer_path + AJAX_PATH + 'validate-coupon',
		data: {
			couponCode: code,
			campaigns: {
				3: {
					id: 1 // CB Admin Campaign ID
				}
			}
		},

		type: 'POST',
		beforeSend: function (x) {
			$("#loading-indicator").show();
		},

		success: function (data) {

			$(".couponMsg").html();
			var couponCanApply = 0;
			if (data.success) {
				$(".disPlace").show();
				// $("#loading-indicator").hide();

				var subTotal = parseFloat($(".priceTableCol").find('span').html());
				if(data.couponInfo.couponCode=='BEAP30'){
                 $("#special_coup").modal();
       				 }
				// if coupon will apply for specific product
				if (data.couponInfo.campaignProductId) {
					var myarray = cbProids;
					for (var i = 0, len = myarray.length; i < len; i++) {

						if (myarray[i] == data.couponInfo.campaignProductId) {
							var couponCanApply = 1;

							if (data.couponInfo.discountPerc) {
								var couponProductprice = cbPrices[i];

								var discountPerc = (data.couponInfo.discountPerc * 100).toFixed(2);
								var discount = parseFloat((discountPerc * couponProductprice) / 100).toFixed(2);
							} else {
								var discount = data.couponInfo.discountPrice;

							}

						}
					}

				} else {
					if (data.couponInfo.discountPerc) {
						var discountPerc = (data.couponInfo.discountPerc * 100).toFixed(2);
						var discount = parseFloat((discountPerc * subTotal) / 100).toFixed(2);
						var couponFreeShip=0;
					} else {
						var discount = data.couponInfo.discountPrice;
						var couponFreeShip=1;

					}
					couponCanApply = 1;
				}
				if (couponCanApply == 1) {
					//alert(couponFreeShip);


					$("#disVal").val(discount);
					$("#disVal").val(discount);
					var orderTotal = orderTotalCal(subTotal, parseFloat($("#taxVal").val()), parseFloat($("#disVal").val()),0.00,parseFloat($("#product1_shipPrice").val()));
                   

                      var shipProfileId=$("#shipProfileId").val();
                      var subscriptPresent=$("#subscriptPresent").val();
                      var productPriceDisTotal=productPriceTotalCal(subTotal,parseFloat($("#disVal").val()));
                      
                       if(productPriceDisTotal<59 && shipProfileId=='' && subscriptPresent=='' && couponFreeShip==0){
                        changeShippingValue('6.00');
                        changeShippingMethod('6.00');
                       }else{
               
						if(productPriceDisTotal<59 && subscriptPresent=='' && couponFreeShip==0){
							
							$(".shipping-box").first().attr("shipping-data-val",'6.00').find("p strong").html("US $ "+'6.00');
						   $(".shipping-option1").attr('data-shipprofileid','5');
						}
						//If 
						if(couponFreeShip==1){
					  changeShippingValue('0.00');
                      changeShippingMethod('0.00');
                       hideExpsuperShip();
						}
				
                       }
					// cb.errorHandler([orderTotal]);

					var orderTotal = orderTotalCal(subTotal, parseFloat($("#taxVal").val()), parseFloat($("#disVal").val()),0.00,parseFloat($("#product1_shipPrice").val()));
					// var discount=checkDiscountVal(parseFloat($("#disVal").val()));
					
					  var orderTotal=checkOrderTotal(orderTotal);

				

					$(".priceTableCol").find('strong').find('span').html(orderTotal)
					$(".disPrice").html('($' + discount + ')');

					$("#couponCodeAdd").val(code);

					var actualDiscount = data.couponInfo.discountPerc ? ((data.couponInfo.discountPerc * 100) + "%") : ("$" + data.couponInfo.discountPrice);
				      if($("#subscriptPresent").val()){
				      	$(".couponMsg").html("Awesome. You saved "+actualDiscount+" off of your first month!");
				      }else{
				      	$(".couponMsg").html("Awesome. You saved "+actualDiscount+"!");
				      }
					
					// $("#loading-indicator").hide();
				} else {

					$("#couponCodeAdd").val('');
					$("#disVal").val('0.00');
					$(".disPrice").html('($' + $("#disVal").val() + ')');
					var orderTotal = orderTotalCal(parseFloat($(".priceTableCol").find('span').html()), parseFloat($("#taxVal").val()), parseFloat($("#disVal").val()),0.00,parseFloat($("#product1_shipPrice").val()));
					$(".priceTableCol").find('strong').find('span').html(orderTotal)
					$(".couponMsg").html("<span style='color:red;'>Invalid Coupon!</span>");

					var shipProfileId=$("#shipProfileId").val();
					var subscriptPresent=$("#subscriptPresent").val();
					var productPriceDisTotal=productPriceTotalCal(parseFloat($(".priceTableCol").find('span').html()),parseFloat($("#disVal").val()));
					  if(productPriceDisTotal>59 && shipProfileId=='' && subscriptPresent==''){
                      changeShippingValue('0.00');
                      changeShippingMethod('0.00');
                       }else{
                       	if(productPriceDisTotal>59 && subscriptPresent==''){
						$(".shipping-box").first().attr("shipping-data-val", '0.00').find("p strong").html("<label style='color:green'>FREE</label>");
		      		    $(".shipping-option1").attr('data-shipprofileid','');
				        }

                       }
					// $("#loading-indicator").hide();
				}


			} else {
					$(".couponMsg").html();
					$("#disVal").val('0.00');
					var orderTotal = orderTotalCal(parseFloat($(".priceTableCol").find('span').html()), parseFloat($("#taxVal").val()), parseFloat($("#disVal").val()),0.00,parseFloat($("#product1_shipPrice").val()));
					$(".priceTableCol").find('strong').find('span').html(orderTotal);
					$(".disPrice").html('($' + $("#disVal").val() + ')');
				    // $("#loading-indicator").hide();

				if (couponCanApply == '0') {
					var productPriceDisTotal=productPriceTotalCal(parseFloat($(".priceTableCol").find('span').html()),parseFloat($("#disVal").val()));
					 if($("#shipProfileId").val()=='5' && productPriceDisTotal>=59){
					 	resetShippingPrice();
					 }
					$("#couponCodeAdd").val('');
					$(".couponMsg").html("<span style='color:red;'>Invalid Coupon!</span>");
					var shipProfileId=$("#shipProfileId").val();
					var subscriptPresent=$("#subscriptPresent").val();
					console.log(subscriptPresent,'subscriptPresent');
					var orderTotal = orderTotalCal(parseFloat($(".priceTableCol").find('span').html()), parseFloat($("#taxVal").val()), parseFloat($("#disVal").val()),0.00,parseFloat($("#product1_shipPrice").val()));
					var productPriceDisTotal=productPriceTotalCal(parseFloat($(".priceTableCol").find('span').html()),parseFloat($("#disVal").val()));
					 if(productPriceDisTotal>59 && shipProfileId=='' && subscriptPresent==''){
                      changeShippingValue('0.00');
                      changeShippingMethod('0.00');
                       }
                       	if(productPriceDisTotal>59 && subscriptPresent==''){
					$(".shipping-box").first().attr("shipping-data-val", '0.00').find("p strong").html("<label style='color:green'>FREE</label>");
				   $(".shipping-option1").attr('data-shipprofileid','');
				        }
				}
				// $("#loading-indicator").hide();

			}
calculateTax(1);
$("#loading-indicator").hide();

		}
	});

}



function addBillingAndShippName() {
	// cb.errorHandler(["ddd"]);
	// Do something interesting here
	var shippingStart = $('[name="billingSameAsShipping"]:checked').attr('shipping-val');
	if (shippingStart == 'no') {
		var firstName = $('#firstName').val();
		//cb.errorHandler([firstName]);
		$("#billingFirstNameChange").val(firstName);
		var lastName = $('#lastName').val();
		$("#billingLastNameChange").val(lastName);
	} else {
		$("#billingFirstNameChange").val('');
		$("#billingLastNameChange").val('');
	}
}

function updateUSPSObject(street, city, state, zip, amount) {

	street = street || '';
	city = city || '';
	state = state || '';
	zip = zip || '';
	amount = amount || 0.00;

	if (typeof window.USPS == 'undefined') {
		window.USPS = {
			updated: false,
			amount: 0.00,
			data: {
				street: '',
				city: '',
				zip: '',
				state: '',
			}
		};
	}

	window.USPS.updated = true;
	window.USPS.amount = amount;
	window.USPS.data.street = street;
	window.USPS.data.city = city;
	window.USPS.data.zip = zip;
	window.USPS.data.state = state;
}
//Unicorn Product

 $('.custom-chk-bx-jerky input[type=checkbox]').change(function() {
 	$(".couponMsg").hide();
 	$(".reedem-reward-tag").hide();
 	$("#add_jerky").attr("disabled", true);
	var subTotal = parseFloat($(".priceTableCol").find('span').html());
    //var reward_point = parseInt($(".reedem-reward-tag strong").html());
   // console.log(reward_point,"reward_point");
	var productIds = $("input[name=productIds]").val();
	var productQty = $("input[name=productQty]").val();
	var productIdsArray = productIds.split(",");
	var productQtyArray = productQty.split(",");
	
	var upsellPrice=parseFloat($(".checkoutAddon").attr('product-price'));
	var codebaseCampId=$(".checkoutAddon").attr('codebase-camp-id');
	var crmProId=$(".checkoutAddon").attr('crm-pro-id');
	var dataImagePro=$(".checkoutAddon").attr('data-image-pro');
	// alert(productIds.indexOf("165"));
if(this.checked) {
	     $(".addedcampIds-"+codebaseCampId).remove();
         $("#add_jerky").val('0.00');
    	//var final_reward_point = reward_point + 5000;
      	//$(".reedem-reward-tag").html('GET <strong>'+final_reward_point+'</strong> REWARDS POINTS WITH PURCHASE!');
        var count=$(".UnicornProduct").attr('data-count');
          if(codebaseCampId==53){
        	$(".UnicornProduct").html('<span class="addedcampIds-'+codebaseCampId+'"><input type="hidden"  name="campaigns['+count+'][quantity]" value="1"  autocomplete="disabled"><input type="hidden" name="campaigns['+count+'][id]" value="'+codebaseCampId+'"  autocomplete="disabled"></span>');
        }else{
        	var procount=$(".hatAddonProduct").attr('data-count');
        
        	$(".hatAddonProduct").html('<span class="addedcampIds-'+codebaseCampId+'"><input type="hidden"  name="campaigns['+procount+'][quantity]" value="1"  autocomplete="disabled"><input type="hidden" name="campaigns['+procount+'][id]" value="'+codebaseCampId+'"  autocomplete="disabled"></span>');
        }

        $("input[name=productIds]").val(crmProId+"," + productIds);
        $("input[name=productQty]").val("1," + productQty);
        	// Calculate Product Subtotal
        	console.log(upsellPrice,"upsellPrice");
        	productSubTotal=productSubTotalCal(subTotal,upsellPrice,'add');
             //Price Total Show
			$(".subProVal").html('$'+productSubTotal);
			$(".priceTableCol").find('span').html(productSubTotal);
			$("#productPriceTotal").val(productSubTotal);
			// Calculate Order Total
        	orderTotal = orderTotalCal(subTotal, parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),0.00,parseFloat($("#product1_shipPrice").val()));
        	
        	
        	console.log(orderTotal,"orderTotalprfff");
			$(".priceTableCol").find('strong').find('span').html(orderTotal);

		 if($("#subscriptPresent").val()>0){

        	$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}

        }else{
        	if((orderTotal - parseFloat($("#product1_shipPrice").val())) < 59){
				$(".shipping-box").first().attr("shipping-data-val", "6.00").find("p strong").html("US $6.00");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}
			}
        }

			if( $("#productPriceTotal").val() >= 59){
				$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}
			}

			addUnicornToCart(codebaseCampId);
			 if($("#couponCode").val()){
			 	validate_coupon(1);
			 }
			
			
			unicornProSession('checked',codebaseCampId);
			var upselcampaignId=parseInt(count)+1;
			$(".upsellProduct").attr('data-count',upselcampaignId);

    }else{
    	$("#add_jerky").val('0.00');
    	//var final_reward_point = reward_point - 5000;
      	//$(".reedem-reward-tag").html('GET <strong>'+final_reward_point+'</strong> REWARDS POINTS WITH PURCHASE!');
    
      

    	productSubTotal=productSubTotalCal(subTotal,upsellPrice,'remove');
    	console.log(productSubTotal,"productSubTotal");
			$(".subProVal").html('$'+productSubTotal);
			$(".priceTableCol").find('span').html(productSubTotal);
				$("#productPriceTotal").val(productSubTotal);

		var indexInProductArray = $.inArray(crmProId,productIdsArray);
		productIdsArray.splice(indexInProductArray, 1).join(",");
		productQtyArray.splice(indexInProductArray, 1).join(",");

        $("input[name=productIds]").val(productIdsArray);
        $("input[name=productQty]").val(productQtyArray);
         console.log($("#productPriceTotal").val(),"productPriceTotal");
    	orderTotal = orderTotalCal(parseFloat($("#productPriceTotal").val()), parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),parseFloat($("#add_jerky").val()),parseFloat($("#product1_shipPrice").val()));
			$(".priceTableCol").find('strong').find('span').html(orderTotal);

        if($("#subscriptPresent").val()>0){

        	$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}

        }else{
        	if((orderTotal - parseFloat($("#product1_shipPrice").val())) < 59){
				$(".shipping-box").first().attr("shipping-data-val", "6.00").find("p strong").html("US $6.00");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}
			}
        }
			

      $(".UnicornProduct").html('');

      delte_UniCornCart(codebaseCampId);
			
	  if($("#couponCode").val() !== ''){
			 	validate_coupon(1);
			 }

      unicornProSession('unChecked',codebaseCampId);
      $(".upsellProduct").attr('data-count',parseInt($(".UnicornProduct").attr('data-count')));

    }
    if($(".to_zip").val()){
    	   setTimeout(function(){
		calculateTax(1);
    }, 1000);
    }
 
	
    setTimeout(function(){
 		$("#add_jerky").attr("disabled", false);
    	$(".couponMsg").html('').show();
		//$(".reedem-reward-tag").html('GET <strong>'+final_reward_point+'</strong> REWARDS POINTS WITH PURCHASE!').show();
		$("#loading-indicator").hide();
		// clearInterval(ival);
    }, 4000);
});

// calculate shipping Method
$(".shipping-box").on("click", function(){
	var subTotal = parseFloat($(".priceTableCol").find('span').html());
  var shippingPrice=$(this).attr('shipping-data-val');
  $("#product1_shipPrice").val(shippingPrice);
	$(".shipping-box").removeClass("border-green");
    $(this).addClass("border-green");
//data-shipProfileId
	$("#shipProfileId").val($(this).attr('data-shipProfileId'));
	//console.log($(this).attr('data-shipProfileId'),"hjjjjjjjjjj");
// Calculate Order Total
orderTotal = orderTotalCal(subTotal, parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),parseFloat($("#add_jerky").val()),parseFloat($("#product1_shipPrice").val()),parseFloat($("#product1_shipPrice").val()));
$(".priceTableCol").find('strong').find('span').html(orderTotal);

 if($("#product1_shipPrice").val()=='0.00'){
     var shipVal="<label style='color:green'>FREE</label>";
     $("#shipProfileId").val('');

 }
 else{
 	var shipVal='$'+$("#product1_shipPrice").val()+'';
 }
$(".shipPrice").html(shipVal);

});


//show popup on confirmation of 18 years age
$("#confimation-box:checkbox").on("click", function(){
	if(!$(this).is(":checked")){
		$("#warningModal").modal("show");
	}
});

//Update Shipping Method
function changeShippingMethod(shippingPrice){

  $("#product1_shipPrice").val(shippingPrice);
	
    
if($("#product1_shipPrice").val()=='0.00'){
$("#shipProfileId").val('');
$(".shipping-box").first().attr("shipping-data-val", shippingPrice).find("p strong").html("<label style='color:green'>FREE</label>");
}else{
	$("#shipProfileId").val(5);
	$(".shipping-box shipping-option1").addClass("border-green");
	$(".shipping-box").first().attr("shipping-data-val", shippingPrice).find("p strong").html("US $ "+shippingPrice);
}				

}

function hideExpsuperShip(){
  $(".shipping-option2").hide();
  $(".shipping-option3").hide();
}
function showExpsuperShip(){
  $(".shipping-option2").show();
  $(".shipping-option3").show();
}



//Update shipping val

function changeShippingValue(shippvalu){
	
	$("#product1_shipPrice").val(shippvalu);
	
               	
  if($("#product1_shipPrice").val()=='0.00'){
     var shipVal="<label style='color:green'>FREE</label>";
    }
	 else{
	 	var shipVal='$'+$("#product1_shipPrice").val()+'';
	 }

		$(".shipPrice").html(shipVal);
      }




 function orderTotalCal(subTotal, tax, discount,upsell,shippingCharge) {
 	console.log(shippingCharge,"shippingCharge");
 	console.log(subTotal,"subTotal");
 	console.log(upsell,"upsell");


	var orderTotal = 0;

	return orderTotal = parseFloat(subTotal + shippingCharge + tax + upsell - discount).toFixed(2);

}

function productPriceTotalCal(subTotal,discount){
    var productPriceTotal=0;
return productPriceTotal = parseFloat(subTotal-discount).toFixed(2);
}



function productSubTotalCal(subTotal,upsell,method){
	var productSubTotal = 0;
  if(method=='add'){
  	return orderTotal = parseFloat(subTotal + upsell).toFixed(2);
  }else{
  	return orderTotal = parseFloat(subTotal - upsell).toFixed(2);
  }
	
}

function unicornProSession(productStatus,codebaseCampId){
	$.ajax({
					url: '/ajax-session-unicorn.php',
					data:  {status: productStatus,codebaseCampId:codebaseCampId},
					type: 'post',
					dataType: "json",
					beforeSend:function(x){
					 // $("#loading-indicator").show();
					},
					success: function (result) {
					
					},
					complete: function(){
						// $("#loading-indicator").hide();
					}
				});
}


function addUnicornToCart(codebaseCampId){

	
				$.ajax({

                    url: '/ajax-cart.php',
                    data: {
                       "productId": codebaseCampId,"from":'checkout'
                    },
                    type: 'post',
                    dataType: "json",
                     beforeSend:function(x){
                   		// $("#loading-indicator").show();
                     },

                    success: function(result) {
                     	// $("#loading-indicator").hide();

		                if (result.msg == 'success') {
		                    $("ul.selecrPackList").prepend($("li.product.cartId_"+codebaseCampId));
		                    $("li.product.cartId_"+codebaseCampId).show();

		                } else {

		                }

                    }
                });
}

   function delte_UniCornCart(codebaseCampId) {
       
        $.ajax({
            url: '/ajax-cart-delete.php',
            data: {
                "productId": codebaseCampId,"proIdentity":'addon-Stocking'
            },
            type: 'post',
            dataType: "json",
            beforeSend:function(x){
                   // $("#loading-indicator").show();
                     },
            success: function(result) {
              // $("#loading-indicator").hide();

                if (result.msg == 'success') {
                	$(".addedcampIds-"+codebaseCampId).remove();
                    $("li.product.cartId_"+codebaseCampId).hide();

                } else {

                }
             

            }
        });

    }

    function checkUserAlreadyExsit(email){
    	//alert(email);
    	 $.ajax({
            url: '/ajax_check_new_user_ajax.php',
            data: {
                "emailId": email
            },
            type: 'post',
            dataType: "json",
            beforeSend:function(x){
                   $("#loading-indicator").show();
                     },
            success: function(result) {
              $("#loading-indicator").hide();

                if (result.msg == 'sucesss') {
                    

                } else {

                }
             

            }
        });

    }

     function resetShippingPrice(){
    	$("#shipProfileId").val('');
    	$("#product1_shipPrice").val('0.00');

    }
    function checkDiscountVal(discount){
    	var ordrTotal=$("#productPriceTotal").val();
    	// alert(ordrTotal);
    	// alert(discount);
	
	 if(ordrTotal<discount){
    	 	return discount=ordrTotal;
    	 }else{
    	 	return discount=discount;
    	 }
}

    function checkOrderTotal(orderTotal){
           //alert(orderTotal);
    	 if(orderTotal<1){
    	 	return orderTotal='0.00';
    	 }else{
    	 	return orderTotal=orderTotal;
    	 }

    }

  function onClickClaimNow(){
      	var patrialForm = $('#checkout-formID');
   		var count=$(".upsellProduct").attr('data-count');
   		var subscriptPresent=$("#subscriptPresent").val();
   		var shipProfileId=$("#shipProfileId").val();
   		
   		var productPriceTotal=$("#productPriceTotal").val();
   		var discount=$("#disVal").val();
   		var total=parseInt(productPriceTotal)-parseInt(discount);
   		var totalplusUpsell=parseInt(total)+parseInt(49);
   		console.log(totalplusUpsell,'totalplusUpsell');
   		
   		if(subscriptPresent!=1 && totalplusUpsell>=59 && shipProfileId=='5' ){
   			//$(".shipProfileIdSpan").html('');
   			 $("#shipProfileId").val('15');
   			// $("#product1_shipPrice").val('0.00');
   		}

   		$("#upsellID").val("upselladded");
   		$("#upsell-popup").modal('hide');
   				//alert(count);
        //        if($("#couponCode").val()){
   				 // var upsellCustomPrice=	createpriceForUpsell($("#couponCode").val());
   				 // }

           $(".upsellProduct").html('<input type="hidden" name="campaigns['+count+'][quantity]" value="1"  autocomplete="disabled"><input type="hidden" name="campaigns['+count+'][price]" value="125"  autocomplete="disabled"><input type="hidden" name="campaigns['+count+'][id]" value="125"  autocomplete="disabled">');
         	if($("#partialOrderID").val().length){
									patrialFormSubmit(patrialForm);
								}else{
									createPartial(patrialForm);
								}

			//resetTimer();						
          }


// function  createpriceForUpsell(coupon){

//      	 if(coupon=='CYBERMONDAY'){
//      	 	return 112;
//      	 }
//      	 if(coupon=='CYBERMONDAY25'){
//      	 	return 113;
//      	 }

//      }

  
          function onClickNothanks(){
          	var patrialForm = $('#checkout-formID');
   		   // resetTimer();
   		  $("#upsellID").val("");
   		   $("#upsell-popup").modal('hide');
   				//alert(count);
           $(".upsellProduct").html('');

           arrangeShipping();
         	if($("#partialOrderID").val().length){
				patrialFormSubmit(patrialForm);
				}else{
				createPartial(patrialForm);
				}


          }

            var interval;
   function timerShow(){
     var timer2 = "0:30";
    interval = setInterval(function() {
        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
       seconds = (seconds < 0) ? 00 : seconds;
     seconds = (seconds < 10) ? '0' + seconds : seconds;
     minutes = (minutes < 0) ?  0 : 00;
        $('.countdown').html('<span class="minutes">' + minutes + '</span>:<span class="seconds">' + seconds + '</span>');
        timer2 = minutes + ':' + seconds;
    }, 1000);
   }



function resetTimer() {
  
    clearInterval(interval);
    clearInterval(timeInterval);
    
}

function arrangeShipping(){
	       var subscriptPresent=$("#subscriptPresent").val();
   		   var shipProfileId=$("#shipProfileId").val();
   		   var orderTotal=parseInt($(".orderTotal").text());
   		 
           if(subscriptPresent!=1 && orderTotal<59 && shipProfileId=='15' ){
   			
   			 $("#shipProfileId").val('5');
   			
   		    }
}

function addAddonToCart(id){


 	$(".couponMsg").hide();
 	//$(".reedem-reward-tag").hide();
 	$("#add_jerky").attr("disabled", true);
	var subTotal = parseFloat($(".priceTableCol").find('span').html());
   // var reward_point = parseInt($(".reedem-reward-tag strong").html());
   // console.log(reward_point,"reward_point");
	var productIds = $("input[name=productIds]").val();
	var productQty = $("input[name=productQty]").val();
	var productIdsArray = productIds.split(",");
	var productQtyArray = productQty.split(",");
	
	var upsellPrice=parseFloat($(".checkoutAddon-"+id).attr('product-price'));
	var codebaseCampId=$(".checkoutAddon-"+id).attr('codebase-camp-id');
	var crmProId=$(".checkoutAddon-"+id).attr('crm-pro-id');
	var dataImagePro=$(".checkoutAddon-"+id).attr('data-image-pro');
	// alert(productIds.indexOf("165"));

	     $(".addedcampIds-"+codebaseCampId).remove();
         $("#add_jerky").val('0.00');
    	//var final_reward_point = reward_point + 5000;
      	//$(".reedem-reward-tag").html('GET <strong>'+final_reward_point+'</strong> REWARDS POINTS WITH PURCHASE!');
        var count=$(".UnicornProduct").attr('data-count');
          if(codebaseCampId==53){
        	$(".UnicornProduct").html('<span class="addedcampIds-'+codebaseCampId+'"><input type="hidden"  name="campaigns['+count+'][quantity]" value="1"  autocomplete="disabled"><input type="hidden" name="campaigns['+count+'][id]" value="'+codebaseCampId+'"  autocomplete="disabled"></span>');
        }else{
        	var procount=$(".hatAddonProduct").attr('data-count');
        
        	$(".hatAddonProduct").html('<span class="addedcampIds-'+codebaseCampId+'"><input type="hidden"  name="campaigns['+procount+'][quantity]" value="1"  autocomplete="disabled"><input type="hidden" name="campaigns['+procount+'][id]" value="'+codebaseCampId+'"  autocomplete="disabled"></span>');
        }

        $("input[name=productIds]").val(crmProId+"," + productIds);
        $("input[name=productQty]").val("1," + productQty);
        	// Calculate Product Subtotal
        	console.log(upsellPrice,"upsellPrice");
        	productSubTotal=productSubTotalCal(subTotal,upsellPrice,'add');
             //Price Total Show
			$(".subProVal").html('$'+productSubTotal);
			$(".priceTableCol").find('span').html(productSubTotal);
			$("#productPriceTotal").val(productSubTotal);
			// Calculate Order Total
        	orderTotal = orderTotalCal(subTotal, parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),0.00,parseFloat($("#product1_shipPrice").val()));
        	
        	
        	console.log(orderTotal,"orderTotalprfff");
			$(".priceTableCol").find('strong').find('span').html(orderTotal);

		 if($("#subscriptPresent").val()>0){

        	$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}

        }else{
        	if((orderTotal - parseFloat($("#product1_shipPrice").val())) < 59){
				$(".shipping-box").first().attr("shipping-data-val", "6.00").find("p strong").html("US $6.00");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}
			}
        }

			if( $("#productPriceTotal").val() >= 59){
				$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
				if($(".shipping-box").first().hasClass('border-green')){
					$(".shipping-box").first().click();
				}
			}

			addUnicornToCart(codebaseCampId);
			 if($("#couponCode").val()){
			 	validate_coupon(1);
			 }
			
			
			unicornProSession('checked',codebaseCampId);
			var upselcampaignId=parseInt(count)+1;
			$(".hatAddonProduct").attr('data-count',upselcampaignId);
			var upselnewcampaignId=parseInt(upselcampaignId)+1;
			$(".upsellProduct").attr('data-count',upselnewcampaignId);


    if($(".to_zip").val()){
    	   setTimeout(function(){
		calculateTax(1);
    }, 1000);
    }
 
	
    setTimeout(function(){
 		$("#add_jerky").attr("disabled", false);
    	$(".couponMsg").html('').show();
		//$(".reedem-reward-tag").html('GET <strong>'+final_reward_point+'</strong> REWARDS POINTS WITH PURCHASE!').show();
		$("#loading-indicator").hide();
		// clearInterval(ival);
    }, 4000);

addonTocheckOut(id);

}

function addonTocheckOut(id){
	$(".addonTocheckOut-"+id).hide('slow');

  if(id==112){
  	if($(".addonTocheckOut-53").length) {
  		$(".addonTocheckOut-53").show().animate({ opacity: 1 });
  	} else {
  		$(".addonTocheckOut-106").show().animate({ opacity: 1 });
  	}
  }
  if(id==53){
  	$(".addonTocheckOut-106").show().animate({ opacity: 1 });
  }
	

}

//Change product to subscription
$('input.someSwitchOptionPrimary').on('change', function() {
	var $this = $(this);
	var productId = $this.val();
	var subscritionId = $this.data('subscriptionid');
	var pagename = $this.data('pagename');
	var productName = $this.closest('.product').find('h4').text();
	var productOneTimePrice = parseFloat($this.data('onetimeprice'));
	var productSubscriptionPrice = parseFloat($this.data('subprice'));
	var onetimeTaxProduct = $this.data('onetimetaxproduct');
	var subscriptionTaxProduct = $this.data('subscriptiontaxproduct');
	var subTotal = parseFloat($("#productPriceTotal").val());
	var isSubscription = $this.is(':checked');
	var allTaxProductIds = $('input[name=productIds]').val();
	var allTaxArray = allTaxProductIds.split(',');

	console.table({
		"productId":productId,
		"subscritionId":subscritionId,
		"pagename":pagename,
		"productName":productName,
		"productOneTimePrice":productOneTimePrice,
		"productSubscriptionPrice":productSubscriptionPrice,
		"subTotal":subTotal,
		"isSubscription":isSubscription,
		"onetimeTaxProduct":onetimeTaxProduct,
		"subscriptionTaxProduct":subscriptionTaxProduct,
	});

	var cartProductId = isSubscription ? subscritionId : productId;

	$.ajax({
		url: '/ajax-cart.php',
		data: {
		    "productId": cartProductId,"productPageName":pagename
		},
		type: 'post',
		dataType: "json",
		beforeSend:function(x){
			$("#loading-indicator").show();
		},
		success: function(result) {
			$("#loading-indicator").hide();

			/* Change CB Campaign Id */
			$("#campaign_"+pagename.replace('.php', '')).val(cartProductId);

			/* Change CRM Product ID for tax calculation */
			if(isSubscription) {
				var oneTimeIndex = allTaxArray.indexOf(''+onetimeTaxProduct);
				allTaxArray[oneTimeIndex] = subscriptionTaxProduct;
			} else {
				var subscriptionIndex = allTaxArray.indexOf(''+subscriptionTaxProduct);
				allTaxArray[subscriptionIndex] = onetimeTaxProduct;
			}
			$('input[name=productIds]').val(allTaxArray.join(','));

			/* Change product display name */
			var productNewName = isSubscription ? productName +' <span class="product-subscription">Subscription</span>' : productName.replace(' Subscription', '');
			$this.closest('.product').find('h4').html(productNewName);

			/* Change subscription status */
			var hasSub = isSubscription;
			if(!hasSub) {
				$('.main-sec').each(function(i,e) {
					var productName = $(e).find('h4').text();
					if(productName.includes('Subscription')) {
						hasSub = true;
						return false;
					}
				});
			}
			var subExists = (isSubscription || hasSub);
			$("#subscriptPresent").val(subExists ? 1 : 0);

			if(subExists) {
				$('.freeship_toggle').show();
				hideExpsuperShip();
				window.$selectedShipping = $('.shipping-box.border-green');
				window.shipVal = $("#shipProfileId").val();
				$('.shipping-option1').click();
				$("#shipProfileId").val('');
				if(window.showshipMethod) {
					showshipMethod();
				}
				// $("#couponCode").val('CYBERMONDAY');
			} else {
				$('.freeship_toggle').hide();
				showExpsuperShip();
				if(window.$selectedShipping) {
					window.$selectedShipping.click();
				}
				if(window.shipVal) {
					$("#shipProfileId").val(window.shipVal);
				}
				if(window.showshipMethod) {
					showshipMethod();
				}
				// $("#couponCode").val('CYBERMONDAY25');
			}

			if($("#couponCode").val() !== '') {
				validate_coupon(1);
			}

			/* Change product display price */
			if(isSubscription) {
				subTotal -= productOneTimePrice;
				subTotal += productSubscriptionPrice;
			} else {
				subTotal -= productSubscriptionPrice;
				subTotal += productOneTimePrice;
			}
			var productNewPrice = isSubscription ? productSubscriptionPrice : productOneTimePrice;
			$this.closest('.product').find('h5 strong').text('$'+productNewPrice.toFixed(2));
			changeSubtotal(subTotal.toFixed(2));
		}
	});
});

function changeSubtotal(subTotal) {
	$(".subProVal").html('$'+subTotal);
	$(".priceTableCol").find('span').html(subTotal);
	$("#productPriceTotal").val(subTotal);

	orderTotal = orderTotalCal(parseFloat(subTotal), parseFloat($("#taxVal").val()), parseFloat($('#disVal').val()),0.00,parseFloat($("#product1_shipPrice").val()));
	
	
	console.log(orderTotal,"orderTotalprfff");
	$(".priceTableCol").find('strong').find('span').html(orderTotal);

	if($("#subscriptPresent").val()>0){
		$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
		if($(".shipping-box").first().hasClass('border-green')){
			$(".shipping-box").first().click();
		}
	} else{
		if((orderTotal - parseFloat($("#product1_shipPrice").val())) < 59){
			$(".shipping-box").first().attr("shipping-data-val", "6.00").find("p strong").html("US $6.00");
			if($(".shipping-box").first().hasClass('border-green')){
				$(".shipping-box").first().click();
			}
		}
	}

	if( $("#productPriceTotal").val() >= 59){
		$(".shipping-box").first().attr("shipping-data-val", "0.00").find("p strong").html("<label style='color:green'>FREE</label>");
		if($(".shipping-box").first().hasClass('border-green')){
			$(".shipping-box").first().click();
		}
	}

	setTimeout(function() {
		calculateTax(1);
	}, 50);
}

/*$('input[name=phone]').on('blur', function() {
	if(this.value != '') {
		$(this).addClass('required');
	} else {
		$(this).removeClass('required');
	}
});*/


$("#custom_sms_messages:checkbox").on("click", function(){
	if(!$(this).is(":checked")){
		$(".phoneSection").hide();
		$(".num").val('');
		$(".phoneSection input").removeClass('required');
	}else{
		$(".phoneSection").show().animate({ opacity: 1 });
		$(".phoneSection input").addClass('required');
	}
});

$(document).ready(function() {
	window.backToCartUrl = sessionStorage.getItem('backToCartUrl');
	setTimeout(function() {
		calculateTax(1);
	}, 50);
});

$(document).on('click', '.backToCartBtn', function(e) {
	e.preventDefault();
	sessionStorage.setItem('returnToCart', true);
	if(window.backToCartUrl) {
		sessionStorage.removeItem('backToCartUrl');
		window.location.replace(window.backToCartUrl);
	} else {
		window.location.replace('/');
	}
});
