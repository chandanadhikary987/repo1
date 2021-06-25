
<?php
$klaviyo_products = '';
$productImage = '';
$categories = array();
    
if($subTotal>=59 || $subscriptPresent=='1'){
 $shippingVal='0.00';
 $basicShipping = 0.00;
 $shippingProId='';
 $displayShip="<label style='color:green'>FREE</label>";
 $displayShipfinal="<label style='color:green'>FREE</label>";
 $classHighlight="border-green";
    }else{
 $shippingVal='6.00';
 $shippingProId=5;
 $displayShip="US $6.00";
 $displayshipto="$6.00";
 $classHighlight="border-green";
 $basicShipping = 6.00;
 }


 ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once 'general/__header__.tpl' ?>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1 , user-scalable=no , maximum-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <link rel="shortcut icon" type="image/x-icon" href="<?= $path['images'] ?>/imgs/favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="<?= $path['images'] ?>/imgs/favicon.png">
    <link rel="icon" type="image/x-icon" href="<?= $path['images'] ?>/imgs/favicon.ico">
    <link rel="icon" type="image/x-icon" href="<?= $path['images'] ?>/imgs/favicon.png">
    <link rel="canonical" href="https://sundayscaries.com/checkout" />
    <title>100% Secure Checkout | Sunday Scaries</title>
    <meta name="description" content="This is the 100% secure, trusted checkout for Sunday Scaries.">
    <!-- css-links -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Quicksand:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css">
    <!--  <link rel="stylesheet" href="<?= $path['css']; ?>/font-awesome.min.css"> -->
    <link href="<?= $path['css']; ?>/bootstrap.min.css" rel="stylesheet">
    <link href="<?= $path['css']; ?>/ck-slick.css" rel="stylesheet">
    <link href="<?= $path['css']; ?>/ck-custom.css" rel="stylesheet">
    <link href="<?= $path['css']; ?>/ck-css.css" rel="stylesheet">
    <link href="<?= $path['css']; ?>/checkout-new-style.css" rel="stylesheet">
    <!-- Google Analytics -->
    <script>
    (function(b, c, d, e, f, h, j) {
        b.GoogleAnalyticsObject = f, b[f] = b[f] || function() {
            (b[f].q = b[f].q || []).push(arguments)
        }, b[f].l = 1 * new Date, h = c.createElement(d), j = c.getElementsByTagName(d)[0], h.async = 1, h.src = e, j.parentNode.insertBefore(h, j)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    </script><!-- End Google Tag Manager -->
    
    <!-- Facebook Pixel Code -->
    <script>
      //  fbq('trackSingle','738652216578293','AddToCart');
    </script>
    <span style="display: none;">
    <img height="1" width="1" style="border-style:none;" alt="" src="//insight.adsrvr.org/track/evnt/?adv=ytu5j9d&ct=0:&fmt=3"/>
    </span>
</head>
<div class="modal fade" id="special_coup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <p class="woho"><img src="<?= $path['images'] ?>/woohoo.png" /></p>
                <p>You just saved 15% and donated 15% of your order to the Bartender Emergency Assistance Program.</p>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
</div>
<div class="modal fade upsell-bigspoon" id="upsell-popup" tabindex="-1" role="dialog" aria-labelledby="upsell-tinture" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content text-center">
            <button type="button" class="close ssNew" id="closeModal" onclick="onClickNothanks()" data-dismiss="modal"></button>
            <div class="modal-body">
                        
                <div class="header-rght text-center">
                    <p class="text-center para-text">Grab a bottle of 'Big Spoon' and sleep like the little spoon again.</p>
                    <h4 class="text-center"><span class="crosss">$59</span><strong>$36</strong></h4>
                    <a href="javascript:void(0)" class="buyBtn claimNow" onclick="onClickClaimNow()" title="Buy Sunday Scaries" alt="Buy Sunday Scaries CBD Gummies, Vegan CBD Gummies, and CBD Tincture">CLAIM NOW</a>
                    <a href="javascript:void(0)" class="noThanks" onclick="onClickNothanks()" title="Buy Sunday Scaries" alt="Buy Sunday Scaries CBD Gummies, Vegan CBD Gummies, and CBD Tincture"><strong>(No Thanks, I like to toss and turn at night)</strong></a>
                </div>
                <div class="clearfix"></div>
                
                <div class="right-box-timer">
                    <div class="timmer-box">
                        <div class="timmer"><span class="countdown"></span></div>
                    </div>
                    <!-- <div class="timmer-box">
                        <div class="timmer"><span class="countdown"><span class="minutes">0</span>:<span class="seconds">15</span></span></div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div> 

<!--  <div class="modal fade" id="upsell-popup" tabindex="-1" role="dialog" aria-labelledby="upsell-tinture" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content text-center">
            <div class="modal-body">
                        
                <div class="header-rght text-center">
                    <h3 class="text-center"><span>Special</span> One-Time Offer!</h3>
                    <p class="text-center para-text">GRAB THE CBD OIL <span>TINCTURE</span> AND STAY EXTRA CHILL.</p>
                    <h4 class="text-center"><span class="crosss">REG $69</span><strong>$29  !</strong></h4>
                </div>
                <div class="clearfix"></div>
                <div class="left-box-offer text-center">
                    <h4>LIMITED TIME ONLY!<br><span>SAVE 44%</span></h4>
                </div>
                <div class="right-box-timer">
                    <h4>LIMITED TIME ONLY!</h4>
                    <div class="timmer-box">
                        <div class="timmer"><span class="countdown"></span></div>
                    </div>
                    <h4><span>SAVE 44%</span></h4>
                </div>
                <div class="footer-btn-area">
                <a href="javascript:void(0)" class="buyBtn claimNow" onclick="onClickClaimNow()" title="Buy Sunday Scaries" alt="Buy Sunday Scaries CBD Gummies, Vegan CBD Gummies, and CBD Tincture">CLAIM NOW</a>
                <a href="javascript:void(0)" class="noThanks" onclick="onClickNothanks()" title="Buy Sunday Scaries" alt="Buy Sunday Scaries CBD Gummies, Vegan CBD Gummies, and CBD Tincture"><strong>(NAHHH, POP-UPS SCARE ME FOR NO REASON.)</strong></a>
                </div>
            </div>
        </div>
    </div>
</div>  -->

<!-- <div class="modal fade" id="upsell-popup" tabindex="-1" role="dialog" aria-labelledby="upsell-tinture" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content text-center">
            <div class="modal-body">
                        
                <div class="header-rght text-center">
                    <p class="text-center para-text">This Valentine's Day give your bae the gift of chill and show them love with this wellness pack.</p>

                </div>
                <div class="clearfix"></div>
                <div class="right-box-timer">
                     <h4 class="text-center"><span class="crosss">$71</span><strong>$49!</strong></h4>
                    <h4 class="green_save"><span>SAVE 31% !</span></h4>
                    <div class="timmer-box">
                        <div class="timmer"><span class="countdown"></span></div>
                    </div>
                   
                </div>
                <div class="footer-btn-area">
                <a href="javascript:void(0)" class="buyBtn claimNow" onclick="onClickClaimNow()" title="Buy Sunday Scaries" alt="Buy Sunday Scaries CBD Gummies, Vegan CBD Gummies, and CBD Tincture">CLAIM NOW</a>
                <a href="javascript:void(0)" class="noThanks" onclick="onClickNothanks()" title="Buy Sunday Scaries" alt="Buy Sunday Scaries CBD Gummies, Vegan CBD Gummies, and CBD Tincture"><strong>No thanks I like sleeping on the couch</strong></a>
                </div>
            </div>
        </div>
    </div>
</div> -->

<body>
    <?php perform_body_tag_open_actions(); ?>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCKVR7K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- <div style="display: none;" id="Iframe-div"></div> -->
    <section class="headerBottom">
        
        <div class="container">
            <a href="/<?php make_query_string() ?>" class="logoCell"><img class="img-responsive site-logo" src="/app/desktop/images/logo.png" alt=""></a>
            <div class="headerRight">
                <p>Questions? We're here to help!<br>Call us at <a href="tel:619-892-7174" style="color:#fff;">619-892-7174</a>.</p>
            </div>
        </div>
    </section>
    <section class="section_ck">
        <div class="container">
            <ul class="cartMenu">
                <li>Cart</li>
                <li><img src="<?= $path['images']; ?>/arrow-3.png" alt="" /></li>
                <li class="last">Customer Information</li>
                <li><img src="<?= $path['images']; ?>/arrow-3.png" alt="" /></li>
                <li>Order Confirmation</li>
            </ul>
             <input class="checkoutAddon-53" type="hidden" value="Add to cart" data-image-pro="<?= $path['images']; ?>/cbd-candy-front.png" product-price='12.00' id="add_candy_addn" tabindex="20" codebase-camp-id='53' crm-pro-id='165' value="0.00">
             <input class="checkoutAddon-106" type="hidden" value="Add to cart" data-image-pro="<?= $path['images']; ?>/ss-hats.png" product-price='18.00' id="add_vegan_addn" tabindex="0" codebase-camp-id='106' crm-pro-id='906' value="0.00">
            <div class="row">
                <div class="col-md-8 col-sm-7">
                   
                   <?php if(!in_array(53, $camIds)){ ?>
                  <div class="addonWrap addonTocheckOut-53">

                        <div class="custop-chkbx-wrp">
                            <img src="<?= $path['images']; ?>/cbd-candy-front.png" class="coup_img">
                            <div class="coup-wrap">                   
                        
                                <label for="add_candy_addn">
                                    <span>
                                        Try our pouch of Unicorn Jerky CBD Rainbow Candy to relieve stress and elevate your mood. Portion of proceeds donated to The Trevor Project.
                                    </span>
                                </label>
                                
                            </div>
                            <div class="coup-check-widget custom-chk-bx-jerky">
                                <p class="coup_price"><span class="text-red bold">$12</span><del class="text-grey">$19</del><span class="saveCoup">( Save 40% )</span></p>
                                <a class="coup_btn unicornAddon" onclick="addAddonToCart(53)" href="javascript:void(0)">Add to Order</a>
                            </div>
                        </div>

                  
                     </div>
                    <!--    <div class="addonWrap addonTocheckOut-106" style="display: none;">
                        <div class="custop-chkbx-wrp">
                            <img src="<?= $path['images']; ?>/ss-hats.png" class="coup_img">
                            <div class="coup-wrap">
                                <label for="add_yellow_shot">
                                    <h5>Step your swag game up with our Sunday Scaries Hat</h5>
                                    <span>
                                        Wear this branded snapback to show you’re part of the Scary Squad while promoting mental health awareness.
                                    </span>
                                </label>
                            </div>
                            <div class="coup-check-widget">
                                <p class="coup_price"><span class="text-red bold">$18</span><del class="text-grey">$25</del><span class="saveCoup">( Save 28% )</span></p>
                                <a class="coup_btn hatAddon" onclick="addAddonToCart(106)" href="javascript:void(0)">Add to Order</a>
                            </div>
                        </div>
                     </div> -->
                 <?php } ?>
                    <?php if(!in_array(106, $camIds)){ 

                         if(in_array(53, $camIds)){
                            $hatDispaly="block";
                         }else{
                            $hatDispaly="none";
                         }
                        ?>

                     <div class="addonWrap addonTocheckOut-106" style="display: <?= $hatDispaly?>;">
                        <div class="custop-chkbx-wrp">
                            <img src="<?= $path['images']; ?>/ss-hats.png" class="coup_img">
                            <div class="coup-wrap">
                                <label for="add_yellow_shot">
                                    <h5>Step your swag game up with our Sunday Scaries Hat</h5>
                                    <span>
                                        Wear this branded snapback to show you’re part of the Scary Squad while promoting mental health awareness.
                                    </span>
                                </label>
                            </div>
                            <div class="coup-check-widget">
                                <p class="coup_price"><span class="text-red bold">$18</span><del class="text-grey">$25</del><span class="saveCoup">( Save 28% )</span></p>
                                <a class="coup_btn hatAddon" onclick="addAddonToCart(106)" href="javascript:void(0)">Add to Order</a>
                            </div>
                        </div>
                     </div>
                 <?php } ?>
                </div>
                <div class="col-md-4 col-sm-5 pull-right">
                    <div class="summeryPanel">
                        <div class="summeryHead">ORDER SUMMARY</div>
                        <div class="cartNavCont">
                            <ul class="selecrPackList">
                                <?php
                  $subTotal=0;
                  $klaviyoIDs = array();
                  $campaignIDs = array();
                  $klaviyo_product_1_name = '';
                  $klaviyo_product_1_qunatity = '';
                  $klaviyo_product_1_price = '';
                  $proIdTosaltex=array();

                  $proIdsforsaltaxcal='';
                  $totalQuantyPrompt=0;
                  $proQtyTosaltex='';

                  $addonarry = array('19','20','21','106','53');

                  if(!empty($cartArray)){
                    
                   sort($cartArray);

                         foreach($cartArray as $key =>$val){
                      if(in_array($val['id'],$addonarry)){

                      $adoonArray[]=$val;
                    }else{
                    $mainArry[]=$val;
                      }
                    }
                     if(!empty($adoonArray)){
                     $cartArray = array_merge($mainArry, $adoonArray);
                   }
                   else{

                 }

         
              $backUrl="/cbd-gummies";
         
                $camIds=[];
                $totalCartQty = 0;
                $totalOrderCount=count($cartArray);
                  foreach($cartArray as $key => $data){
                  array_push($camIds, $data['id']);
                

                  $partition="main-sec";
                   if(!empty($data['id'])){

                  array_push( $campaignIDs, $data['id'] );
                  if(!empty($data['product_id'])){

                  array_push( $klaviyoIDs, $data['product_id'] );
                  array_push( $proIdTosaltex, $data['product_id']);
                  }
                  

                  $quantity=$data['quantity']?$data['quantity']:'1';
                  $totalCartQty += $quantity;

                  if( in_array( $data['id'], $addonarry ) === false ) {
                    $klaviyo_product_1_name = str_replace( 'step1-', '', $data['campaign_label'] );
                    // set quantity dynamically
                    // $klaviyo_product_1_qunatity = $quantity;
                    $klaviyo_product_1_qunatity = 1;
                    $klaviyo_product_1_price = number_format( ( $data['product_price'] * $quantity ), 2 );
                  }





                  $productName=str_replace('step1-','',$data['campaign_label']);
                  $subTotal+=($data['product_price']*$quantity);
                if($data['pagname']=='product-vegan-cbd.php'){
                    $class="main-prod";
                    $addClasses="mainProd-vegan";
                    $image="vegan-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/vegan-cbd-gummies.png";
                    $productImage = $image;
                    $identity="vegan";
                    $proClass="vegan";
                    if(!in_array('Gummies', $categories)) array_push($categories, 'Gummies');
                    }
                    if($data['pagname']=='product-gummies.php'){
                    $class="main-prod";
                    $addClasses="mainProd-gummies";
                    $image="gummies-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cbd-gummies.png";
                    $productImage = $image;
                    $identity="gummies";
                    $proClass="gummies";
                    if(!in_array('Gummies', $categories)) array_push($categories, 'Gummies');
                    }


                    if($data['pagname']=='product-tincture.php'){
                    $class="main-prod";
                    $addClasses="mainProd-tincture";
                    $image="tincture-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cbd-tincture.png";
                    $productImage = $image;
                    $identity="tincture";
                    $proClass="tincture";
                    if(!in_array('Tincture', $categories)) array_push($categories, 'Tincture');
                    }
                    if($data['pagname']=='cbd-candy.php' || $data['pagname']=='national-coming-out-day.php'){
                    $class="main-prod";
                    $addClasses="mainProd-candy";
                    $image="cbd-candy-front.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cbd-candy.png";
                    $productImage = $image;
                    $identity="candy";
                    $proClass="candy";
                    if(!in_array('candy', $categories)) array_push($categories, 'Candy');
                    }

                       if($data['pagname']=='holiday-scaries.php'){
                    $class="main-prod";
                    $addClasses="mainProd-holiday-scaries";
                    $image="holiday-scaries-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/holiday-scaries-cart.png";
                    $productImage = $image;
                    $identity="holiday-scaries";
                    $proClass="holiday-scaries";
                    if(!in_array('holiday-scaries', $categories)) array_push($categories, 'holiday-scaries');
                    }
                     if($data['pagname']=='tub-cubs.php'){
                    $class="main-prod";
                    $addClasses="mainProd-tub-cubs";
                    $image="tub-cubs-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cbd-tub-cubs.png";
                    $productImage = $image;
                    $identity="tub-cubs";
                    $proClass="tub-cubs";
                    if(!in_array('tub-cubs', $categories)) array_push($categories, 'tub-cubs');
                    } 
                    

                if($data['pagname']=='rando-bundle.php'){
                    $class="main-prod";
                    $addClasses="mainProd-rando-bundle";
                    $image="randobundle-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/randobundle-cart.png";
                    $productImage = $image;
                    $identity="rando-bundle";
                    $proClass="rando-bundle";
                    if(!in_array('rando-bundle', $categories)) array_push($categories, 'rando-bundle');
                    }
                    
                    if($data['pagname']=='partypack-trop.php'){
                    $class="main-prod";
                    $addClasses="mainProd-partypack-trop";
                    $image="partypack-trop-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/partypack-trop-cart.png";
                    $productImage = $image;
                    $identity="partypack-trop";
                    $proClass="partypack-trop";
                    if(!in_array('partypack-trop', $categories)) array_push($categories, 'partypack-trop');
                    }
                    if($data['pagname']=='partypack-coco.php'){
                    $class="main-prod";
                    $addClasses="mainProd-partypack-coco";
                    $image="partypack-coco-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/partypack-coco-cart.png";
                    $productImage = $image;
                    $identity="partypack-coco";
                    $proClass="partypack-coco";
                    if(!in_array('partypack-coco', $categories)) array_push($categories, 'partypack-coco');
                    }
                    if($data['pagname']=='partypack-pine.php'){
                    $class="main-prod";
                    $addClasses="mainProd-partypack-pine";
                    $image="partypack-pine-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/partypack-pine-cart.png";
                    $productImage = $image;
                    $identity="partypack-pine";
                    $proClass="partypack-pine";
                    if(!in_array('partypack-pine', $categories)) array_push($categories, 'partypack-pine');
                    }
                    if($data['pagname']=='everyday-scaries.php'){
                    $class="main-prod";
                    $addClasses="mainProd-everyday-scaries";
                    $image="everyday-scaries-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/everyday-scaries-cart.png";
                    $productImage = $image;
                    $identity="everyday-scaries";
                    $proClass="everyday-scaries";
                    if(!in_array('everyday-scaries', $categories)) array_push($categories, 'everyday-scaries');
                    }

                    if($data['pagname']=='product-bundle-sidePiece.php'){
                      $class="main-prod";
                      $addClasses="mainProd-bundle-sidePiece";
                      $image="SidePiecebndl4.png";
                      $klaviyoImagePath=DOMAIN."app/desktop/images/m-prdct-bundle4.png";
                      $identity="bundle-sidePiece";
                      $proClass="bundle-sidePiece";
                      if(!in_array('Tincture', $categories)) array_push($categories, 'Side Piece');
                      }
                 

                          if($data['pagname']=='bra-bearies.php'){
                    $class="main-prod";
                    $addClasses="mainProd-bra-bearies";
                    $image="bra-bearies-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cbd-bra-bearies.png";
                    $productImage = $image;
                    $identity="bra-bearies";
                    $proClass="bra-bearies";
                    if(!in_array('bra-bearies', $categories)) array_push($categories, 'bra-bearies');
                    }
                         if($data['pagname']=='cbd-cbn-oil-for-sleep.php'){
                    $class="main-prod";
                    $addClasses="mainProd-bigspoon";
                    $image="cbn-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cbn-cart.png";
                    $productImage = $image;
                    $identity="bigspoon";
                    $proClass="bigspoon";
                    if(!in_array('bigspoon', $categories)) array_push($categories, 'bigspoon');
                    }
                    
                     if($data['pagname']=='cuddle-bundle.php'){
                    $class="main-prod";
                    $addClasses="mainProd-cuddle-bundle";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/cuddle-bundle-cart.png";
                    $image="/cuddle-bundle-cart.png";
                    $productImage = $image;
                    $identity="cuddle-bundle";
                    $proClass="cuddle-bundle";
                    if(!in_array('cuddle bundle', $categories)) array_push($categories, 'cuddle bundle');
                    }

                     if($data['pagname']=='super-mom-bundle.php'){
                    $class="main-prod";
                    $addClasses="mainProd-super-mom-bundle";
                    $image="super-mom-cart.png";
                    $klaviyoImagePath=DOMAIN."app/desktop/images/super-mom-bundle-cart.png";
                    $productImage = $image;
                    $identity="super-mom-bundle";
                    $proClass="super-mom-bundle";
                    if(!in_array('super-mom-bundle', $categories)) array_push($categories, 'super-mom-bundle');
                    }


                    if($data['id']==19){
                    $image="gummies-cart.png";
                    $proClass="addon-Gummies";
                    $identity="addon-Gummies";
                    $addClasses="addon-prod-addon-Gummies";
                    $productName="1 Bottle CBD Gummies (add on)";
                    $partition="addon-sec";


                    }
                     else if($data['id']==20){
                    $image="tincture-cart.png";
                    $identity="addon-Tincture";
                    $proClass="addon-Tincture";
                    $addClasses="addon-prod-addon-Tincture";
                    $productName="1 Bottle CBD Tincture (add on)";
                    $partition="addon-sec";
                    }
                    else if($data['id']==21){

                    $image="vegan-cart.png";
                    $proClass="addon-Vegan";
                    $identity="addon-Vegan";
                    $addClasses="addon-prod-addon-Vegan";
                    $productName="1 Bottle Vegan AF (add on)";
                    $partition="addon-sec";
                    }
                    else if($data['id']==114){

                    $image="holiday-upsell.png";
                    $proClass="addon-Holiday-Scaries";
                    $identity="addon-Holiday-Scarie";
                    $addClasses="addon-prod-addon-Holiday-Scarie";
                    $productName="Holiday Scaries (add on)";
                    $partition="addon-sec";
                    }
                    else if($data['id']==53){

                    $image="cbd-candy-front.png";
                    $proClass="addon-unicorn-Scaries";
                    $identity="addon-unicorn-Scarie";
                    $addClasses="addon-prod-addon-unicorn-Scarie";
                    $productName="Unicorn Jerky Addon";
                    $partition="addon-sec";
                    }
                    else if($data['id']==106){

                    $image="ss-hats.png";
                    $proClass="addon-Hat-Scaries";
                    $identity="addon-Hat-Scarie";
                    $addClasses="addon-prod-addon-Hat-Scarie";
                    $productName="Sunday Scaries Hat";
                    $partition="addon-sec";
                    }
                    
                    

                    }
                    $imageUrl=DOMAIN."app/desktop/images".$image;
                  $productsKlaviyoImage=$klaviyoImagePath;

                    if( !empty($klaviyo_products) ) {
                      $klaviyo_products .= ', ' . $productName;
                    }
                    else {
                      $klaviyo_products .= $productName;
                    }
                   
                    
                    if( !empty($proQtyTosaltex) ) {
                      $proQtyTosaltex .= ','.$data['quantity'];
                      $totalQuantyPrompt+=$data['quantity'];
                    }
                    else {
                      $proQtyTosaltex .= $data['quantity'];
                      $totalQuantyPrompt+=$data['quantity'];
                    }
                     if( !empty($data['product_id']) && $totalOrderCount>='1' ) {
                      $proIdsforsaltaxcal .= ','.$data['product_id'];
                      $proIdsforsaltaxcal=ltrim($proIdsforsaltaxcal,',');

                    }
                    else {
                      $proIdsforsaltaxcal=$data['product_id'];
                    }

                  ?>
                                <li class="clearfix <?php echo $partition; ?> product cartId_<?php echo $data['id'] ?>">
                                    <div class="packImg">
                                        <img src="/app/desktop/images/<?php echo $image ?>" alt="">
                                    </div>
                                    <div class="packRight clearfix">
                                        <div class="prd_detls prd_detls-<?= $data['id'] ?>">
                                            <h4>
                                                <?php echo str_replace('Subscription', '<span class="product-subscription">Subscription</span>', $productName); ?>
                                            </h4>
                                            <h5>
                                                <strong>$
                                                    <?php echo $data['product_price'] ?></strong>
                                                <!-- <span>$<?php echo $mainProductPrice[$data['product_id']] ?></span> -->
                                            </h5>
                                        </div>
                                        <input type="text" readonly class="quantity-input" value="<?php echo $quantity ?>">
                                        <input type="hidden" name="cb-proid[]" class="cb-proid" value="<?php echo $data['product_id'] ?>">
                                        <input type="hidden" name="cb-price[]" class="cb-price" value="<?php echo $data['product_price']; ?>">
                                    </div>
                                        <?php if($data['productType']=='onetime' && $data['id']!='19' && $data['id']!='20' && $data['id']!='21' && $data['id']!='53' && $data['id']!='106' && $data['id']!='107' && $data['id']!='108' && $data['id']!='109' && $data['id']!='114' && $data['id']!='115' && $data['id']!='116'){
                                                $subscriptionProdId = $subscriptionId[$data['id']];
                                            ?>
                                        <div class="switchtosubs">
                                            Upgrade to Subscription & Save
                                            <div class="material-switch pull-right">
                                                <input class="someSwitchOptionPrimary" id="someSwitchOptionPrimary<?= $data['id'] ?>" value="<?= $data['id'] ?>" name="someSwitchOption" type="checkbox" data-subscriptionid="<?=$subscriptionProdId?>" data-pagename="<?=$data['pagname']?>" data-onetimeprice="<?=$data['product_price']?>" data-subprice="<?=$subscriptionProductPrice[$subscriptionProdId]?>" data-onetimetaxproduct="<?=$data['product_id']?>" data-subscriptiontaxproduct="<?=$campaignProductIds[$subscriptionProdId]?>" />
                                                <label for="someSwitchOptionPrimary<?= $data['id'] ?>" class="label-success"></label>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </li>
                                <?php }} ?>
                            </ul>
                            <?php if(!in_array(53, $camIds)){ ?>
                            <li class="clearfix main-sec product cartId_53" style="display: none;">
                                <div class="packImg">
                                 
                                    <img src="/app/desktop/images/cbd-candy-front.png" alt="">
                                </div>
                                <div class="packRight clearfix">
                                    <div class="prd_detls">
                                        <h4>Unicorn Jerky</h4>
                                        <h5>
                                            <strong>$ 12.00</strong>
                                        </h5>
                                    </div>
                                    <input type="text" readonly="" class="quantity-input" value="1">
                                    <input type="hidden" name="cb-proid[]" class="cb-proid" value="165">
                                    <input type="hidden" name="cb-price[]" class="cb-price" value="15.00">
                                </div>
                            </li>
                            <?php } ?>
                            <?php if(!in_array(106, $camIds)){ ?>
                            <li class="clearfix main-sec product cartId_106" style="display: none;">
                                <div class="packImg">
                                    
                                    <img src="/app/desktop/images/ss-hats.png" alt="">
                                </div>
                                <div class="packRight clearfix">
                                    <div class="prd_detls">
                                        <h4>Sunday Scaries Hat</h4>
                                        <h5>
                                            <strong>$18.00</strong>
                                        </h5>
                                    </div>
                                    <input type="text" readonly="" class="quantity-input" value="1">
                                    <input type="hidden" name="cb-proid[]" class="cb-proid" value="906">
                                    <input type="hidden" name="cb-price[]" class="cb-price" value="18.00">
                                </div>
                            </li>
                            <?php } ?>
                            <?php if(!in_array(21, $camIds)){ ?>
                            <li class="clearfix main-sec product cartId_21" style="display: none;">
                                <div class="packImg">
                                   
                                    <img src="/app/desktop/images/vegan-cart.png" alt="">
                                </div>
                                <div class="packRight clearfix">
                                    <div class="prd_detls">
                                        <h4>1 Bottle Vegan AF (add on)</h4>
                                        <h5>
                                            <strong>$ 20.00</strong>
                                        </h5>
                                    </div>
                                    <input type="text" readonly="" class="quantity-input" value="1">
                                    <input type="hidden" name="cb-proid[]" class="cb-proid" value="46">
                                    <input type="hidden" name="cb-price[]" class="cb-price" value="20.00">
                                </div>
                            </li>
                            <?php } ?>
                            </ul>
                            
                            <input type="hidden" id="add_jerky" value="0.00">
                            <div class="freeship_toggle" <?= $subscriptPresent ? '' : 'style="display: none;"' ?>>
                            * FREE SHIPPING, Billed Monthly, No Contract
                           </div>
                           
                            <span id="cuponForm" class="mailForm cuponForm clearfix" autocomplete="disabled">
                                <input type="hidden" id="disVal" name="" value="0.00">
                                
                                <div class="priceTableRow totalRow"><span style="font-size:small;color:#aa00c9;" class="couponMsg"></span></div>
                                <input type="text" tabindex="21" id="couponCode" class="mailInput" placeholder="Enter Coupon" value="<?= $appliedCoupon; ?>" oninput="this.value = this.value.toUpperCase()">
                                <button type="submit" class="couponbtn" tabindex="22" onclick="validate_coupon(1)">Apply</button>
                               
                                
                            </span>
                            <input type="hidden" name="productPriceTotal" id="productPriceTotal" value="<?=number_format($subTotal,2) ;?>" />
                          
                            
                            <div class="additonal-details-section">
                                <div class="priceDetailsHead">
                                    Price Details
                                </div>
                                <div class="priceTable">
                                    <div class="priceTableRow">
                                        <div class="priceTableCol">Product Total</div>
                                        <div class="priceTableCol" style="display:none">$<span>
                                                <?php if(!empty($subTotal)) { echo $subTotal ;}?></span> </div>
                                        <div class="priceTableCol subProVal">$
                                            <?php if(!empty($subTotal)) { echo number_format($subTotal,2) ;}?>
                                        </div>
                                    </div>
                                    <div class="priceTableRow">
                                        <div class="priceTableCol">Shipping</div>
                                        <div class="priceTableCol shipPrice">
                                            <?= !(empty($displayShipfinal))?$displayShipfinal:$displayshipto ?>
                                        </div>
                                        <input type="hidden" id="previousShipPrice" value="0">
                                    </div>
                                    <div class="priceTableRow">
                                        <div class="priceTableCol">Tax</div>
                                        <div class="priceTableCol priceTableColTax">$<label class="text-value">0.00</label></div>
                                    </div>
                                    <div class="priceTableRow disPlace" style="display:none;">
                                        <div class="priceTableCol ">Discounts</div>
                                        <div class="priceTableCol disPrice">($0.00)</div>
                                    </div>
                                    <div class="priceTableRow">
                                        <div class="priceTableCol"></div>
                                        <div class="priceTableCol"></div>
                                    </div>
                                    <div class="priceTableRow totalRow">
                                        <div class="priceTableCol"><strong>Order Total</strong></div>
                                        <div class="priceTableCol"><strong>$<span class="orderTotal">
                                                    <?php
                        $subTotal=$subTotal+$basicShipping;
                       if(!empty($subTotal)) { echo number_format($subTotal,2);}?></span> </strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="polistRow clearfix  hidden-xs text-center">
                        <img src="<?= $path['images']; ?>/new-badge-img.jpg" alt="" />
                    </div>
                </div>
                <div class="col-md-8 col-sm-7">
                    <form method="post" action="ajax.php?method=downsell1" name="downsell_form1" accept-charset="utf-8" enctype="application/x-www-form-urlencoded;charset=utf-8" id="checkout-formID" autocomplete="disabled">
                        <?php if(!empty($cartArray)) {
              $count=1;
              foreach($cartArray as $key =>$value){
              $count=trim($count);
              ?>
                        <span class="addedcampIds-<?php echo $value['id'] ?>">
                            <input type="hidden" name="campaigns[<?php echo  $count ?>][id]" value="<?php echo $value['id'] ?>" autocomplete="disabled" id="campaign_<?=str_replace('.php', '', $value['pagname'])?>">
                            <input type="hidden" name="campaigns[<?php echo  $count ?>][quantity]" value="<?php echo $value['quantity'] ?>" autocomplete="disabled">
                        </span>
                        <?php
              $count++;
              } }?>
                        <span class="UnicornProduct" data-count="<?php echo $count ?>"></span>
                        <span class="hatAddonProduct" data-count="<?php echo $count+1 ?>"></span>
                        <span class="upsellProduct" data-count="<?php echo $count+2?>"></span>
                        <input type="hidden" name="couponCode" id="couponCodeAdd" value="" autocomplete="disabled">
                        <input type="hidden" id="taxVal" name="salesOmit" value="0.00" autocomplete="disabled">
                        <input type="hidden" name="limelight_charset" id="limelight_charset" value="utf-8" autocomplete="disabled" />
                        <input type="hidden" id="partialOrderID" name="partialOrderID" value="" autocomplete="disabled">
                        <input type="hidden" name="productIds" value="<?php echo  $proIdsforsaltaxcal  ?>">
                        <input type="hidden" name="productQty" value="<?php echo  $proQtyTosaltex  ?>">
                        <input type="hidden" name="shipProfileId" id="shipProfileId" value="<?= !empty($shippingProId)?$shippingProId:'' ?>" />
                        <input type="hidden" name="subscriptPresent" id="subscriptPresent" value="<?= !empty($subscriptPresent)?$subscriptPresent:''?>">
                        <input type="hidden" id="upsellID" name="upsellID" value="" autocomplete="disabled">
                        <input type="hidden" name="custom_note" id="custom_note" value="<?= $klaviyo_products; ?>" autocomplete="disabled">
                        <input type="hidden" name="product1_shipPrice" id="product1_shipPrice" value="<?= $shippingVal?>" autocomplete="disabled">
                        <input type="hidden" id="test-up" value="<?= !empty($_GET['testup'])?$_GET['testup']:''?>" name="">
                        <div class="ckRow">
                            <div class="ckBodyHeading"><b><i class="far fa-address-book"></i></b> <span>Personal Details</span></div>
                            <div class="ckFormBody">
                                <div class="clearfix">
                                    <div class="customerCol">
                                       
                                        <input type="email" name="email" placeholder="Email Address" tabindex="1" class="inputFild required" data-validate="email" data-error-message="Please enter a valid email id!" value="<?= !empty($userData['email'])?$userData['email']:''?>" autocomplete="disabled" />
                                        <span class="astrix">*</span>
                                        
                                        <div class="clearfix"></div>
                                        
                                    </div>
                                    <div class="customerCol">
                                        <input type="tel" name="phone" placeholder="Phone Number" tabindex="2" class="inputFild num" value="<?= !empty($user_info['user_info']['phone'])?$user_info['user_info']['phone']:''?>" data-error-message="Please enter a valid contact number!" maxlength="12" minlength="12" autocomplete="disabled" />
                                        <div class="clearfix"></div>

                                    </div>
                                </div>
                                <div class="clearfix ckhbx-cnf">
                                        
                                    <div class="checkbox">
                                        <label for="confimation-box">
                                            <input type="checkbox" name="custom_age_confirm" tabindex="3" id="confimation-box" value="yes" checked="checked">
                                            I confirm I am 18 years of age or older.
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label for="newsletter-confimation-box">
                                            <input type="checkbox" name="custom_newsletter_confirm" tabindex="4" id="newsletter-confimation-box" value="yes" checked="checked">
                                            Subscribe to our newsletter.
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label for="sms-messages">
                                            <input type="checkbox" name="custom_sms_messages" id="custom_sms_messages" onclick="$(this).attr('value', this.checked ? 'Yes' : 'No')" value="No" tabindex="5"  style="display:inline-block;">
                                            Allow text messages
                                        </label>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div class="ckRow">
                            <div class="ckBodyHeading"><b><i class="fas fa-truck"></i></b> <span>Shipping Details</span></div>
                            <div class="ckFormBody">
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                                        <input type="text" name="firstName" placeholder="First Name" tabindex="6" id="firstName" class="required inputFild firstName" value="<?= !empty($user_info['user_info']['firstName'])?$user_info['user_info']['firstName']:''?>" data-error-message="Please enter your shipping first name!" autocomplete="disabled" />
                                        <span class="astrix">*</span>
                                    </div>
                                    <div class="halfColum">
                                        <input type="text" name="lastName" placeholder="Last Name" tabindex="7" id="lastName" class="inputFild required" value="<?= !empty($user_info['user_info']['lastName'])?$user_info['user_info']['lastName']:''?>" data-error-message="Please enter your shipping last name!" autocomplete="disabled" />
                                        <span class="astrix">*</span>
                                    </div>
                                </div>
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                            <input type="text" name="shippingAddress1" placeholder="Address Line 1" tabindex="8" class="inputFild required" data-error-message="Please enter your Address Line1!" value="<?= !empty($user_info['user_info']['shippingAddress1'])?$user_info['user_info']['shippingAddress1']:''?>" autocomplete="disabled" />
                            <span class="astrix">*</span>
                                    </div>
                                    <div class="halfColum">
                                        <input type="text" name="shippingAddress2" placeholder="Address Line 2 (apt #, suite #, etc)" tabindex="9" class="inputFild" data-error-message="Please enter your Address Line2!" id="shi2address" autocomplete="disabled" />
                                    </div>
                                </div>
                                <div class="formRow clearfix" style="display: none;">
                                    <div class="halfColum">
                                        <select name="shippingCountry" class="required" data-selected="US" tabindex="10" data-error-message="Please select your shipping country!">
                                            <option value="">Select Country</option>
                                        </select>
                                        <span class="astrix">*</span>
                                    </div>
                                    <div class="halfColum"><input type="text" placeholder="City" class="inputFild" /></div>
                                </div>
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                                        <input type="text" name="shippingCity" placeholder="Shipping City" tabindex="10" class="inputFild required" data-error-message="Please enter your shipping city!" value="<?= !empty($user_info['user_info']['shippingCity'])?$user_info['user_info']['shippingCity']:''?>" autocomplete="disabled" />
                                        <span class="astrix">*</span>
                                    </div>
                                    <div class="halfColum">
                                        <input type="text" name="shippingState" id="shippingState" tabindex="11" placeholder="State" class="required inputFild" data-error-message="Please select your shipping state!" readonly onchange="calculateTax(this)" autocomplete="disabled" />
                                        <span class="astrix">*</span>
                                        <span class="error_to_state"></span>
                                    </div>
                                </div>
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                                        <input type="text" name="shippingZip" tabindex="12" placeholder="Shipping Zip Code" id="to_zip" maxlength="5" class="inputFild required numeric to_zip" data-error-message="Please enter a valid Shipping Zip Code!" value="<?= !empty($user_info['user_info']['shippingZip'])?$user_info['user_info']['shippingZip']:''?>" autocomplete="disabled" />
                                        <span class="astrix">*</span>
                                        <span class="error_to_zip"></span>
                                    </div>
                                    <input type="hidden" name="shippingSTateForTaxCal" id="shippingSTateForTaxCal" value="<?= !empty($user_info['user_info']['shippingState'])?$user_info['user_info']['shippingState']:''?>">
                                 
                                </div>
                                <label class="promotCheck" style="opacity:0;visibility:hidden;">
                                    <span>
                                        Ship to a different address?&nbsp;</span>
                                    <input type="radio" name="billingSameAsShipping" id="billingcheckyes" class="col-sm-2" value="yes" checked="checked" style="display: none;" autocomplete="disabled">
                                    <input type="radio" name="billingSameAsShipping" id="billingcheckno" class="col-sm-2" value="no" style="display: none;" autocomplete="disabled">
                                </label>
                                <div class="formRow clearfix">
                                    <div class="shipping-options">
                                        <span>Shipping Method</span>
                                        <div tabindex="13" class="shipping-box shipping-option1 <?php echo $classHighlight; ?>" shipping-data-val="<?= $shippingVal?>" data-shipProfileId='<?= !empty($shippingProId)?$shippingProId:'' ?>'>
                                            <p><strong>
                                                    <?= $displayShip ?></strong><span>STANDARD SHIPPING</span></p>
                                        </div>
                                        <?php if(!$subscriptPresent) {?>
                                        <div tabindex="14" class="shipping-box shipping-option2" shipping-data-val="9.00" data-shipProfileId='3'>
                                            <p><strong>US $9.00</strong><span>EXPEDITED SHIPPING (3-5 business days)</span></p>
                                        </div>
                                        <div tabindex="15" class="shipping-box shipping-option3" shipping-data-val="25.00" data-shipProfileId='4'>
                                            <p><strong>US $25.00</strong><span>SUPER FAST SHIPPING (2-3 business days)</span></p>
                                        </div>
                                        <?php } ?>
                                    </div>
                                </div>
                                <div class="custop-chkbx-wrp">
                                    <div class="custom-chk-bx">
                                        <input type="checkbox" tabindex="16" id="bill-ship-option" checked="checked">
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <label for="bill-ship-option">
                                        <strong>Use delivery address above for billing.</strong>
                                        <span>Billing address must match the address on your credit card statement. </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="ckRow billing-info" id="chkShippingAddress" style="display: none;">
                            <div class="ckBodyHeading"><b><i class="fa fa-truck" aria-hidden="true"></i></b> <span>Billing Address</span></div>
                            <div class="ckFormBody">
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                                        <input type="text" class="inputFild" name="billingFirstName" id="billingFirstNameChange" placeholder="First Name" data-error-message="Please enter your billing first name!" autocomplete="disabled" />
                                    </div>
                                    <div class="halfColum">
                                        <input type="text" class="inputFild" name="billingLastName" id="billingLastNameChange" placeholder="Last Name" data-error-message="Please enter your billing last name!" autocomplete="disabled" />
                                    </div>
                                </div>
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                                        <input type="text" name="billingAddress1" placeholder="Billing Address" data-error-message="Please enter your billing address!" class="inputFild" autocomplete="disabled" id="onblurPincodeTick" />
                                    </div>
                                    <div class="halfColum">
                                        <input type="text" name="billingCity" placeholder="Billing City" data-error-message="Please enter your billing city!" class="inputFild" autocomplete="disabled" />
                                        <select style="display: none;" name="billingCountry" data-selected="US" data-error-message="Please select your billing Country!">
                                            <option value="">Select Country</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="formRow clearfix">
                                    <div class="halfColum">
                                        <input type="text" name="billingState" placeholder="State" class="inputFild" data-error-message="Please enter your billing state!" autocomplete="disabled" />
                                    </div>
                                    <div class="halfColum">
                                        <input type="text" name="billingZip" maxlength="5" class="inputFild numeric" placeholder="Billing Zip Code" data-error-message="Please enter a valid Billing Zip Code!" id="billingZipTick" autocomplete="disabled" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ckRow">
                            <div class="ckBodyHeading"><b><i class="fas fa-credit-card"></i></b> <span class="payment-sec">Payment Details <span class="right-orange"><i class="check-text">
                                <img src="<?= $path['images']; ?>/fullsecure.png">
                            </i> 
                                    </span></span>
                            </div>
                            <div class="ckFormBody">
                                <div class="formRow">
                                    <input type="text" name="creditCardNumber" tabindex="17" class="required inputFild cardFild" maxlength="16" data-error-message="Please enter a valid credit card number!" placeholder="Card number" autocomplete="disabled" />
                                    <span class="astrix">*</span>
                                    <div class="halfColum" style="display:none;">
                                        <select name="creditCardType" class="required inputFild" data-error-message="Please select valid card type!">
                                            <option value="">Card Type</option>
                                            <?php foreach($config['allowed_card_types'] as $key=>$value): ?>
                                            <option value="<?= $key ?>">
                                                <?= ucfirst($value) ?>
                                            </option>
                                            <?php endforeach ?>
                                        </select>
                                        <span class="astrix">*</span>
                                    </div>
                                    
                                </div>
                                <div class="formRow clearfix">
                                    <div class="halfColum clearfix dtm_mnt_fld" style="display:none;">
                                        <div class="dateCell">
                                            <select name="expmonth" class="required inputFild" data-error-message="Please select a valid expiry date!">
                                                <?php get_months(); ?>
                                            </select>
                                            <span class="astrix">*</span>
                                           
                                        </div>
                                        <div class="dateCell">
                                            <select name="expyear" class="inputFild">
                                                <?php get_years(); ?>
                                            </select>
                                            <span class="astrix">*</span>
                                        </div>
                                    </div>
                                    <div class="fullColum dateCell">
                                        <div class="">
                                            <input id="expdate" type="tel" maxlength="5" tabindex="18" placeholder="Exp (MM/YY)" class="date_valid required inputFild" onchange="getCardDate()" />
                                            <span class="astrix">*</span>
                                        </div>
                                    </div>
                                    <div class="halfColum  cvvcolumn">
                                        <div class="cvvCell">
                                            <input type="tel" name="CVV" class="required inputFild" tabindex="19" data-validate="cvv" maxlength="4" data-error-message="Please enter a valid CVV code!" placeholder="CVC" autocomplete="disabled" />
                                            <span class="astrix">*</span>
                                            <input type="hidden" name="campaignIds" value="8" autocomplete="disabled" />
                                            
                                        </div>
                                        <img src="<?= $path['images']; ?>/card-img.png" alt="" class="cardImg" />
                                        
                                        <!--      <img src="<?= $path['images']; ?>/card-img.png" alt="" /> -->
                                    </div>
                                    <div style="clear: both"></div>
                                        <div class="mobileBtnGroup clearfix mobile_shw">
                                            <img src="<?= $path['images']; ?>/card-img.png" alt="" />
                                        </div>
                                   
                                </div>
                            </div>
                        </div>
                        
                        <div class="mobileHide clearfix mobile_shw">
                            <a href="<?php echo $backUrl; ?>" class="backBtn mobile_off">&lt; GO BACK</a>
                            <div class="rightBtn">
                                <input type="submit" name="" class="buyBtn purchesBtn" tabindex="23" value="Complete Purchase" autocomplete="disabled" />
                                <span><img src="<?= $path['images']; ?>/lock.png" alt="" /> Your Order Is Safe & Secure</span>
                            </div>
                        </div>
                        <div class="mobileBtnGroup">
                        </div>
                        <p id="loading-indicator" style="display:none;">Processing...</p>
                        <p id="crm-response-container" style="display:none;">Konnektive messages will appear here...</p>
                    </form>
                  
                    <div class="polistRow hidden-sm hidden-md hidden-lg clearfix text-center">
                        <img src="<?= $path['images']; ?>/new-badge-img.jpg" alt="" />
                    </div>
                   
                    <?php
            if (!empty($cartArray)) {
              foreach($cartArray as $key =>$val){
                ?>
                    <input type="hidden" name="product-ids[]" value="<?=$val['product_id'];?>">
                    <input type="hidden" name="product-prices[]" value="<?=$val['product_price'];?>">
                    <?php
              }
            }
          ?>
                    <div class="mobileon">
                        <a href="<?php echo $backUrl; ?>" class="backBtn">&lt; GO BACK</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="ckFooter">
        <div class="container">
          <div class="row">
          <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
            <ul class="ckFooterNav">
                <li><a href="/refund-policy/" title="Sunday Scaries Refund Policy" alt="View the refund policy for Sunday Scaries products">Refund Policy</a></li>
                <li><a href="/privacy-policy/" title="Sunday Scaries Privacy Policy" alt="View the privacy policy for Sunday Scaries products">Privacy Policy</a></li>
                <li><a href="/terms/" title="Sunday Scaries Terms &amp; Conditions" alt="View the terms and conditions for Sunday Scaries products">Terms &amp; Conditions</a></li>
                <li><a href="/cookie-policy/" title="Sunday Scaries Cookie Policy" alt="View the Cookie Policy for Sunday Scaries products">Cookie Policy</a></li>
                <li><a href="/copyright-policy/" title="Sunday Scaries Copyright Policy" alt="View the Copyright Policy for Sunday Scaries products">Copyright Policy</a></li>
                <li><a href="/privacy-policy/ccpa/" title="Sunday Scaries CCPA" alt="View the CCPA for Sunday Scaries products">CCPA</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <div class="ckCopyRight">&copy;
                <?php echo date("Y"); ?> Sunday Scaries. All rights reserved.
            </div>
          </div>

        </div>
        </div>
    </footer>
    <?php

  include 'general/__analytics__.tpl';
  ?>
    <?php perform_body_tag_close_actions(); ?>
    <?php   include 'general/__scripts__.tpl'; ?>
    <!-- js-scripts -->
    <script src="<?= $path['js']; ?>/checkout.js"></script>
    <?php
    if($appliedCoupon){
    ?>
    <script type="text/javascript">
    validate_coupon(1);
    </script>
    <?php
     }

   ?>
    <script>
    function getCardDate() {
        var date = $('#expdate').val();
        var arr = date.split('/');
        var month = arr[0];
        var year = arr[1];
        var currtYear = new Date().getFullYear().toString().substr(-2);
        var maxYear = parseInt(currtYear) + 19;

        if ((month >= 1 && month <= 12) && (year >= currtYear && year <= maxYear)) {
            $('select[name="expmonth"]').find("option[value='" + month + "']").prop('selected', true);
            $('select[name="expyear"]').find("option[value='" + year + "']").prop('selected', true);
        } else {
            $("#expdate").val('');
            $('select[name="expmonth"]').find("option").prop('selected', false);
            $('select[name="expyear"]').find("option").prop('selected', false);
            $("#expdate").addClass('has-error');
            $("#expdate").removeClass('no-error');
        }

    }

    $(document).ready(function() {
        $('.date_valid').mask('00/00');
    });

    $("form[name='downsell_form1']").on("submit", function() {
        if (!$("#expdate").val().length) {
            $("#expdate").addClass('has-error');
            $("#expdate").removeClass('no-error');
        } else {
            $("#expdate").addClass('no-error');
            $("#expdate").removeClass('has-error');
        }
    });

    // check if browser is chrome
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    if (isChrome == true) {
        $('input[name=shippingAddress1]').mouseenter(function() {
            $('input[name=shippingAddress1]').attr('autocomplete', "disabled");
        });
    } else {

        $('input[type=text]').attr('autocomplete', "off");

    }




    $(document).ready(function() {
        $('.numeric').on("keyup", function() {
            var value = $(this).val();
            var regex_cell = /[^[0-9 ]]*/gi;
            var new_value = value.replace(regex_cell, '');
            $(this).val(new_value);
        });

        // Klaviyo Abandoned Cart
        pingKlaviyo();
        modifyNewsletter();
    });
    var count = 0;
    $("#additonal-details").click(function() {
        count++;
        var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
        };
        if (isEven(count) === false) {
            $('.additonal-details-section').slideDown();
            $('#additonal-details a i').addClass('gly-rotate-90');
        } else if (isEven(count) === true) {
            $('.additonal-details-section').slideUp();
            $("#additonal-details a i").removeClass('gly-rotate-90');
        }
    });

    // Custom checkbox
    $(document).ready(function() {


    

        $("#bill-ship-option").click(function() {

            if ($(this).prop('checked')) {
                $("#billingcheckyes").trigger("click");

            } else {
                $("#billingcheckno").trigger("click");
            }
        });

       
    });
    //---function to add array values----//
    function sum(input) {

        if (toString.call(input) !== "[object Array]")
            return false;
        var total = 0;
        for (var i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
                continue;
            }
            total += Number(input[i]);
        }
        return total;
    }
    //--- Iframe functionality end-----//
    </script>
    <?php include 'general/__klaviyo__abandoned_cart_scripts__.tpl'; ?>
    <?php
    include 'general/__ga_checkout__.tpl';
  ?>
    <?php include 'general/pixel_checkout_sourceknowledge.tpl'; ?>
    <script type="text/javascript" async defer src="https://track.socialix.com/5749.js"></script>
    <script type="text/javascript">
    ga('create', 'UA-106883381-9', 'auto');
    ga('require', 'ec');

    try {
        ga('ec:addProduct', { // Provide product details in an productFieldObject.
            'id': '<?= $proIdsforsaltaxcal ?>', // Product ID (string).
            'name': 'CBD', // Product name (string).
            'category': 'CBD Product', // Product category (string).
            'brand': 'Sunday Scaries', // Product brand (string).
            'price': '<?= number_format($subTotal,2);?>', // Product price (currency).
            'quantity': 1 // Product quantity (number).
        });

        // Add the step number and additional info about the checkout to the action.
        ga('ec:setAction', 'checkout', {
            'step': 1,
        });
        ga('send', 'event', 'Checkout');
    } catch (err) {
        console.log(err);
    }
    </script>
    
    <div class="modal fade" id="warningModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <center>
                        <div class="red-border">
                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        </div>
                    </center>
                </div>
                <div class="modal-body sucessmsgNe">
                    Bummer. You have to be over 18 years of age to purchase
                    products from this site. We apologize for the disappointment.
                </div>
                <div class="modal-footer">
                    <center>
                        <a href="https://www.amazon.com/stores/node/19466713011?_encoding=UTF8&field-lbr_brands_browse-bin=Sunday%20Scaries&ref_=bl_dp_s_web_19466713011" class="btn btn-lg btn-success closeD">SHOP AMAZON</a>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <script>
    $(document).ready(function() {
        $("#shi2address").blur(function() {
            $(this).addClass('no-error');
        });
        $("#onblurPincodeTick").blur(function() {
            console.log($("#billingZipTick").val(), "billiZip");

            $("#billingZipTick").addClass('no-error');

        });

    });
    <?php if(!empty($allSessionData['CBDCandyView'])){?>
    $('input[name="email"]').on('blur', function() {

        var email = $(this).val();
        //console.log(email,"email");
        $.ajax({
            url: '/klaviyo_cbd_candy.php',
            type: 'POST',
            data: {
                "email": $(this).val(),
                "action": "candyView",
            },
            success: function(data) {

            }
        });
    });
    <?php  } ?>
    </script>
    <script type="text/javascript">
    var modal = document.getElementById('upsell-popup');
    window.onclick = function(event) {
        if (event.target == modal) {
            var patrialForm = $('#checkout-formID');

            $("#upsellID").val("");
            $("#upsell-popup").modal('hide');
            //alert(count);
            $(".upsellProduct").html('');
            arrangeShipping();
            if ($("#partialOrderID").val().length) {
                patrialFormSubmit(patrialForm);
            } else {
                createPartial(patrialForm);
            }
        }
    }



<?php if(!empty($user_info['user_info']['shippingState'])) { ?>
   jQuery(document).ready(function($){
   $('select').find('option').removeAttr('selected');
  $('select').find('option[value="<?= trim($user_info['user_info']['shippingState'])?>"]').attr('selected','selected');
});
   calculateTax(1);
<?php }?>
 $(document).on('click', '#error_handler_overlay_close', function(event) {
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);

 if ($('[name=phone]').val() == '' && $('[name=phone]').hasClass('required'))
        {
         if($('[name=email]').val() != ''){
           
           $('[name=phone]').trigger('focus');
           
        }else{
            $('[name=email]').trigger('focus');
           
        }
          
          
             
        }
        else{
            if($('[name=email]').val()==''){
            $('[name=email]').trigger('focus');
            
            }
            
        }

    });



    $(document).on('blur', 'input[name=phone]', function(event) {
        var $this = $(this);
        if($this.val() != '') {
            $this.addClass('required');
        } else {
            $this.removeClass('required');
        }
    });
      // chartable Pixel
    trackable('checkout', {
     value: '<?=number_format($subTotal,2) ;?>',
     currency: 'USD',
})
      
    </script>
   
</body>

</html>