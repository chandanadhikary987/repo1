<!DOCTYPE html>
<html lang="en">

<head>   

    <script>        
                    // If cookies have gatrackedNew value.
                    function redirect(){
                        window.location.href = 'https://sundayscaries.com/';
                        return;
                    }
              if(getCookie("gatrackedNew")){
                redirect();
                }else{
                    //alert("no Cookie value");
                } 

    function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
    </script>
    <style type="text/css">.smcx-modal{height:480px!important;background:#000000!important}.smcx-modal>.smcx-modal-content{height:410px!important;min-height:410px!important;}</style> 
<script>(function(t,e,s,o){var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type="text/javascript",l.async=!0,l.id=o,l.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd1M149Jb_2BbhMcjaGdPCT2mHa_2BrcsJ2jRKE9P5reYJibw.js",c.parentNode.insertBefore(l,c))})(window,document,"script","smcx-sdk");</script> 
    <script type="text/javascript">
    (function(a, b, c, d, e, f, g) { e['ire_o'] = c;
        e[c] = e[c] || function() {
            (e[c].a = e[c].a || []).push(arguments) };
        f = d.createElement(b);
        g = d.getElementsByTagName(b)[0];
        f.async = 1;
        f.src = a;
        g.parentNode.insertBefore(f, g); })('//d.impactradius-event.com/A1384931-289d-4392-871f-632b3de8b40a1.js', 'script', 'ire', document, window);
    ire('identify', { customerid: '<?= $steps['1']['customerId'] ?>',customeremail: '<?= sha1($customer['email']) ?>'});
    </script>
 <img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/pxl/?adv=ytu5j9d&ct=0:yhx1x3k&fmt=3"/>
    <script>
    //Sending value to tag Manager through DataLayer
    dataLayer = [{
        'price': '<?= number_format($totalAmount,2) ?>',
        'items': '<?= $commaitems ?>',
        'user_email': '<?= $customer['email']; ?>',
        'user_phone_number': '<?= $customer['phone']; ?>',
        'transaction_id': '<?= $steps['1']['orderId'] ?>',
        'products': <?= json_encode($dataitems) ?>,
        'sales_tax': '<?= $salesTaxValue ?>',
        'customer_name': '<?= $allDta[0]['data'][0]['name']?>',
        'shipping_price': '<?= $allDta[0]['data'][0]['shipUpcharge'] ?>',
        'address1': '<?= $allDta[0]['data'][0]['shipAddress1 ']?>',
        'address2': '<?= $allDta[0]['data'][0]['shipAddress2']?>',
        'shipping_city': '<?= $allDta[0]['data'][0]['shipCity']?>',
        'shipping_state': '<?= $allDta[0]['data'][0]['shipState']?>',
        'zip': '<?= $allDta[0]['data'][0]['shipPostalCode']?>',
        'coupon_code': '<?= $couponCode ?>',
        'ct-products':'<?= $liveConnectArray ?>',
        'coupon_amount': <?= number_format($discountPrice, 2) ?>,
    }];
   
    </script>


    <?php require_once 'general/__header__.tpl' ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noydir,noodp" />
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Thank You For Your Purchase</title>
    <!-- Bootstrap -->
    <link href="<?= $path['css']?>/bootstrap.css" rel="stylesheet">
    <link href="<?= $path['css'] ?>/custom.css" rel="stylesheet">
    <!--    <link href="<?= $path['css'] ?>/custom1.css" rel="stylesheet"> -->
    <link href="<?= $path['css'] ?>/slick.css" rel="stylesheet">
    <link href="<?= $path['css'] ?>/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900|Permanent+Marker" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900|Open+Sans:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css">
    <link href="<?= $path['css'] ?>/thankyou-style-new.css" rel="stylesheet">

    <!-- <?php include 'general/__pixel_postback_thank_you__.tpl' ?> -->
    <?php include 'general/__pixel_revcontent_thank_you__.tpl' ?>
    <script>
    window['GoogleAnalyticsObject'] = 'ga';
    window['ga'] = window['ga'] || function() {
        (window['ga'].q = window['ga'].q || []).push(arguments)
    };
    </script>
    
    <!-- Please implement this tag on your product purchase success page. -->
  <!--   <script type="text/javascript">
    window.liQ = window.liQ || [];
    window.liQ.push({
        "event": "conversion",
        "name": "product_purchase",
        "email": "<?= $customer['email'] ?>",
        "conversionId": "<?= $steps['1']['orderId'] ?>",
        "amount": "<?= number_format($totalAmount,2) ?>",
        "currency": "USD"
    });
    </script> -->
    <?php require_once 'general/__pixel_facebook_294129450926080_purchase__.tpl' ?>
</head>

<body class="bodyPadding pg-thnkyou">
    <?php perform_body_tag_open_actions(); ?>
    <input type="hidden" name="referEmail" id="emailforReferID" value="<?= $allDta[0]['data'][0]['emailAddress'] ?>">
    <input type="hidden" name="customerid" id="customerID" value="<?= $allDta[0]['data'][0]['customerId'] ?>">
    <input type="hidden" name="orderId" id="cutomerOrderID" value="<?= $allDta[0]['data'][0]['orderId'] ?>">
   
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCKVR7K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-----Stanmore Common Pixel-->
    <?php require_once 'general/custom_header.tpl' ?>
    <div style="display: none;" id="Iframe-div"></div>
    <div class="banner-other thanks"></div>
   

    <section class="confirmation-section">
        <div class="container">
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                <div class="header_thank">
                   
                    <h1>Welcome to the Scary Squad, <?= !empty($customer['firstName'])?$customer['firstName']:''?>.</h1>
                    <p class="text-center">Your Scarefree life is about to begin</p>
                </div>
                <div class="conf-box">
                    <div class="panel panel-ss"> 
                        <div class="panel-heading"> 
                            <h3 class="panel-title">Your Order is confirmed</h3> 
                        </div> 
                        <div class="panel-body"> 
                            <h5><strong>Your Order ID is: <?= $steps['1']['orderId'] ?></strong></h5>
                            You'll receive a confirmation email with your order number shortly. 
                        </div> 
                    </div>

                    
                    <div class="panel panel-ss">
                        <div class="panel-heading">
                            <h3 class="panel-title">Customer Information</h3> 
                        </div>
                        <div class="panel-body"> 
                            
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">
                                    <h5><strong>Customer Information</strong></h5>
                                    <p><?php if(!empty($allDta[0]['data'][0]['name'])) echo $allDta[0]['data'][0]['name']; ?> </p>
                                    <p><?=$allDta[0]['data'][0]['emailAddress']?></p>
                                    <?php if(!empty($allDta[0]['data'][0]['phoneNumber'])){?>
                                    <p><?= $allDta[0]['data'][0]['phoneNumber']?></p>
                                     <?php } ?>
                                </div>
                                <div class="col-sm-6 col-xs-12">
                                    <h5><strong>Order Total:&nbsp;</strong>$<?=$allDta[0]['data'][0]['totalAmount']?></h5>
                                    <br>
                                    <h5><strong>Payment Method</strong></h5>
                                    <p>
                                        <span class="cardToggle <?= strtolower($allDta[0]['data'][0]['cardType'])?>"></span> ending with <?=$allDta[0]['data'][0]['cardLast4']?> 
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">
                                    <h5><strong>Shipping Address</strong></h5>
                                    <p><?= $allDta[0]['data'][0]['shipFirstName']?> <?= $allDta[0]['data'][0]['shipLastName']?></p>
                                    <p><?= $allDta[0]['data'][0]['shipAddress1']?> <?= $allDta[0]['data'][0]['shipAddress2']?></p>
                                    <p><?= $allDta[0]['data'][0]['shipCity']?> <?= $allDta[0]['data'][0]['shipState']?> <?= $allDta[0]['data'][0]['shipPostalCode']?> United States</p>
                                </div>
                                <div class="col-sm-6 col-xs-12">
                                    <h5><strong>Billing Address</strong></h5>
                                   
                                    <p><?php if(!empty($allDta[0]['data'][0]['name'])) echo $allDta[0]['data'][0]['name']; ?></p>
                                    <p> <?= $allDta[0]['data'][0]['address1']?></p>
                                    <p><?= $allDta[0]['data'][0]['city']?> <?= $allDta[0]['data'][0]['state']?> <?= $allDta[0]['data'][0]['postalCode']?> United State</p>
                                
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">
                                    <h5><strong>Shipping Method</strong></h5>
                                    <p><?php if(!empty($allDta[0]['data'][0]['shipMethod'])){
                                        echo $allDta[0]['data'][0]['shipMethod'];
                                    }else{
                                    echo "Free";
                                }?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     

   
    </section>

    <img src="https://ad.ipredictive.com/d/track/cvt/pixel?acct_id=28177&cache_buster=[<?php echo microtime(true); ?>]" style="display:none" width="1" height="1" />
    <div class="bodyOverlay"> </div>

    <div class="thankyou_modal_bg" id="popup_alert" style="display: none;">
        <div class="modal-inner">
            <a href="#" class="thankyou-modal-close"><span aria-hidden="true">&times;</span></a>
            <div class="modal-inner-body" id="alert-modal">
                <p class="text-center msgContent"><strong>Your Email Has Been Sent!</strong><br>
                    Add more email addresses to share with more friends or wait for your confirmation email when someone uses your link to purchase.</p>
            </div> 
        </div>
    </div>
      <!--New modal popups start-->
    <!--Fist Modal-->
    <div class="thankyou_modal_bg" id="thank-modal-box1" style="display: none;">
        <div class="modal-inner">
            <div class="modal-inner-header">
                <a href="#" class="thankyou-modal-close"><span aria-hidden="true">&times;</span></a>
                <h3>Gum(my) Together, Right Now</h3>
            </div>
            <div class="modal-inner-body" id="inner-modal-box-first">
                <p class="text-center"><strong>Miss your friends? Are they isolated and need to chill?</strong><br>
                    Input their email addresses so we can hook them up with an insane offer and you can look like the hero</p>
                
                    <div class="form-group">
                        <input type="text" class="form-control allEmails" id="addingemail" data-role="tagsinput" aria-describedby="emailHelp" placeholder="Their Email Address" value="" name="email">
                        <p id="addingemail" class="form-text text-right"><a href="#"><small>Separate multiple emails with commas.</small></a></p>
                    </div>
                    <div class="form-group">
                        <button class="buttonBtn" onclick="sendEmailToKlaviyo();">Submit</button>
                     
                    </div>
              
            </div> 
        </div>
    </div>
    <!--Fist Modal-->
    <!--Second Modal-->
    <div class="thankyou_modal_bg" id="thank-modal-box2" style="display: none;">
        <div class="modal-inner">
            <div class="modal-inner-header">
                <a href="#" class="thankyou-modal-close"><span aria-hidden="true">&times;</span></a>
                <h3>Way to be the bestest bestie</h3>
            </div>
            <div class="modal-inner-body" id="inner-modal-box-secound">
                <p class="text-center"><strong>Text them and let them know to check their inbox for the hookup!</strong></p>
                <p><img src="<?= $path['images'] ?>/thankyoupop2ndbox.png"></p>
                <div><a href="#" class="buttonBtn btn-close-thank">Close</a></div>
            </div>
        </div>
    </div>
    <!--Second Modal-->
    <!--New modal popups end-->
    <?php require_once 'general/custom_footer.tpl'; ?>
    <?php include 'general/__analytics__.tpl'; ?>
    <?php perform_body_tag_close_actions(); ?>
    <?php include 'general/__scripts__.tpl'; ?>
    <?php
 $timestamp = time();
 $str = $customer['email'].",".$customer['firstName'].",".number_format($totalAmount,2).",".$timestamp.",1225869f2dc0332a6824ede1eb31bfb1";
 $signature = md5($str);
?>
   
    <?php include 'general/__klaviyo__metric__scripts__.tpl' ?>
    <?php include 'general/__klaviyo__metric__scripts__order__type__.tpl' ?>
    <script>
    $(document).ready(function() {
        $("#ratingsystem").hide();
        

        $('.single-slider').slick();

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 300) {
                $("body").addClass("stickHeader");
            } else {
                $("body").removeClass("stickHeader");
            }

            if (scroll >= 150) {
                $("body").addClass("noticed");
            } else {
                $("body").removeClass("noticed");
            }
        });

        function sticky_side_bar() {
            vw = $(window).width();
            if (vw >= 767) {
                $.stickysidebarscroll("#sidebar", {
                    offset: {
                        top: 110,
                        bottom: 660
                    }
                });
            }
        }

        $(window).on('resize', function() {
            sticky_side_bar();
        });

        $(window).on('load', function() {
            sticky_side_bar();
        });

        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        
        // Klaviyo Abandoned Cart
        pingKlaviyo();


        randomizeSurvey();
    });
    //FAQ click


    //scroll function

    $(".detailsTab.product-page li").each(function() {

        var body = $("html, body");

        $(this).find("a").click(function(e) {
            e.preventDefault();

            $(this).parent().addClass("active").siblings().removeClass("active");

            var href = $(this).attr("href");
            var dist = $(href).offset().top - 120;

            body.stop().animate({
                scrollTop: dist
            }, 500);

        });
    });


    function pingKlaviyo() {
        var email = '<?= $customer['email'] ?>';
        if (typeof email !== null && email.length) {
            $.ajax({
                url: 'klaviyo.php',
                type: 'POST',
                data: {
                    "email_id": email,
                    "action": "-1",
                },
                success: function(data) {
                    // nothing to do
                    // console.log(data)
                }
            });
        }
    }
    </script>
    
    <script type="text/javascript">
        function copyToClipBoard() {
  /* Get the text field */
  var copyText =document.getElementById("bar");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  $("#popup_alert").show();
  $(".msgContent").html("Your Referral Link Has Been Copied! Paste it into a text or message to share. "+copyText.value);
 // alert("Copied the text: " + copyText.value);
}

    </script>
     <script type="text/javascript">
        // Impact Radius Conversion Pixel
        ire('trackConversion', 17088, {
        orderId: "<?= $steps['1']['orderId'] ?>",
        items: <?= $impactPixelData?>
        }
        );
   </script>

    <?php include 'general/__ga_thank_you__.tpl' ?>
    <?php include 'general/__klaviyo__goal__cbd__gummies__.tpl' ?>
    <script type="text/javascript">
    var _slx = window._slx = window._slx || [];
    _slx.push(['addEvent', {
        name: 'conversion',
        data: {
            id: '<?= $steps['1']['orderId'] ?>',
            amount: '<?= number_format($totalAmount,2) ?>',
            coupon: '<?= $couponCode; ?>',
        }
    }]);
    </script>
    <script type="text/javascript" async defer src="https://track.socialix.com/5749.js"></script>

    <!-- Twitter universal website tag code -->
    <script>
    ! function(e, t, n, s, u, a) {
        e.twq || (s = e.twq = function() {
                s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
            a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a))
    }(window, document, 'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init', 'o1tvd');
    twq('track', 'Purchase');
    </script>
    <!-- End Twitter universal website tag code -->
    <!-----PURCHASE LINKEDIN -->
    <img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=1206769&conversionId=962844&fmt=gif" />
    <!-- Start CannaVu Netmng floodlight -->
    <script type='text/javascript'>
    $(document).ready(function() {
        // var productIds = $("input[name='product-ids[]']").map(function(){return $(this).val();}).get();
        var productIds = "<?= $itemsIds ?>";
        var transactionId = "<?= $steps['1']['orderId'] ?>";
        var totalPrice = <?= number_format($totalAmount,2) ?>;
        var Iframe = '<iframe src="https://9426721.fls.doubleclick.net/activityi;src=9426721;type=conve0;cat=canna0;qty=1;cost=' + totalPrice + ';u1=' + transactionId + ';u2=' + totalPrice + ';u3=[' + productIds + '];u4=[Promo Code(s)];u5=USD;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=' + transactionId + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        $('#Iframe-div').append(Iframe);
    })
    </script>
    <!-- End CannaVu Netmng floodlight -->
<!--     <script type="text/javascript">
       
        $.ajax({
            url: '/ajax_referrel_data.php',
            data: {
                "emailId": $("#emailforReferID").val(),
                "customerID": $("#customerID").val(),
                "cutomerOrderID": $("#cutomerOrderID").val(),
            },
            type: 'post',
            dataType: "json",
            beforeSend: function(x) {
                // $("#loading-indicator").show();
            },
            success: function(result) {
                //$("#loading-indicator").hide();

                if (result.msg == 'sucesss') {


                } else {

                }
            }
        });
    </script> -->


    <?php 

  if($firstTimeUser==1) { ?>
    <script>
    setTimeout(function() {

        $.ajax({
            url: '/ajax_sendmail_newUser.php',
            data: {
                "emailId": '<?= $allDta[0]['data'][0]['emailAddress'] ?>',
                "subscriptPresent": '<?= $subscriptPresent; ?>'
            },
            type: 'post',
            dataType: "json",
            beforeSend: function(x) {
                // $("#loading-indicator").show();
            },
            success: function(result) {
                //$("#loading-indicator").hide();

                if (result.msg == 'sucesss') {


                } else {

                }
            }
        });
    }, 5000);
    </script>
    <?php 
   } 
   if($steps['1']['orderId']) {
   ?>
    <script>
    sessionStorage.removeItem('has_prospectId');
    </script>
    <?php 
   } 
   ?>
    <?php include 'general/pixel_floodlight_conversion.tpl' ?>
    <?php include 'general/__pixel_sourceknowledge_thank_you__.tpl' ?>
    <?php include 'general/__pixel_smartadv_thank_you__.tpl' ?>
    <?php include 'general/__pixel_stanmore_thank_you__.tpl' ?>
    <?php 

 if(!empty($klaviyogummiesAbtest['product'])){
    include 'general/__klaviyo_subscription_order_variant_metric__scripts__.tpl';
}
 if(!empty($klaviyogummies['product'])){
    include 'general/__klaviyo_subscription_order_gumies_metric__scripts__.tpl';
}


 include 'general/__justNo_conversion.tpl';
 include 'general/__EF_conversion.tpl';

?>

  <script>
    trackerApplet.makeRequest(
        '<?=$allDta[0]['data'][0]["orderId"]?>',
        '<?=$allDta[0]['data'][0]["customerId"]?>',
        <?=$allDta[0]['data'][0]["totalAmount"]?>,
        <?=$allDta[0]['data'][0]["salesTax"]?>,
        <?=$allDta[0]['data'][0]["shipUpcharge"] ?? 0?>,
        'order_processing',
        'USD',
    {});
    </script>
    <script src="https://cdn.jsdelivr.net/bootstrap.tagsinput/0.8.0/bootstrap-tagsinput.min.js"></script>
    <script type="text/javascript">        
        $('#addingemail').tagsinput('items');
    </script>

    <script>    
        $(".thankyou-modal-close").on("click", function(){
            $("#popup_alert").hide();
        })

    </script>
    <script type="text/javascript">
         /*$(document).ready(function() {

       $("body").addClass("stickHeader");
        $('#modalsurvey').modal({
            backdrop: 'static',
            keyboard: false
        });

    });*/
        
  
     /*$("#modalsurvey").on("hidden.bs.modal", function () {
        $(".confirmation-section, .banner-other").css("visibility","visible");

    });*/

     function randomizeArray(arr) {
        var len = arr.length;
        for(var i = 0; i < len; i++) {
            var n = Math.floor(Math.random() * len);
            var temp = arr[i];
            arr[i] = arr[n];
            arr[n] = temp;
        }
        return arr;
     }

     function randomizeSurvey() {
        var $surveyWrapper = $('.survey_wrapper');
        var $surveyOptions = $('.random-survey-option');
        var $otherOption = $('.other-survey-option');
        var $submitSurvey = $('.submitsurvey');

        $surveyWrapper.empty();
        $surveyWrapper.append(randomizeArray($surveyOptions));
        $surveyWrapper.append($otherOption);
        $surveyWrapper.append($submitSurvey);
     }

     function submitSurvey() {
        var formData = $("#surveyForm").serialize();
        console.log(formData);

        $.ajax({
            url: '/ajax_survey_klaviyo.php',
            data: formData,
            type: 'post',
            success: function(result) {
                console.log(result);
            }
        });
     }

          //Chartable Purchase Pixel
trackable('purchase', {
  id: '<?=$allDta[0]['data'][0]["orderId"]?>',
  value: '<?=$allDta[0]['data'][0]["totalAmount"]?>',
  currency: 'USD',
})
    </script>
</body>

</html>