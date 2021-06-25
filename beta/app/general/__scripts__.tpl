<?php use Application\Session; ?>

<script>
function name_to_category(name){
    var sku = "";
    if(name.toLowerCase().includes("subscri")){
        return "Subscription";
    }

    if(name.toLowerCase().includes("add")){
        return "Add-On";
    }

    return "One-Time";
}


function name_to_sku(name){
    var sku = "";
    switch(name){
        case "CBD Gummies - 1 Bottle":
        case "CBD Gummies - 1 Bottle Subscription":
            sku = "GUM1BOT-SGL";
            break;
        case "CBD Gummies - 2 Bottles":
        case "CBD Gummies - 2 Bottle Subscription":
            sku = "GUM2BOT-SGL";
            break;
        case "CBD Gummies - 3 Bottles":
        case "CBD Gummies - 3 Bottle Subscription":
            sku = "GUM3BOT-SGL";
            break;
        case "Vegan AF - 1 Bottle":
        case "Vegan AF - 1 Bottle Subscription":
            sku = "VAF1BOT-SGL";
            break;
        case "Vegan AF - 2 Bottles" :
        case "Vegan AF - 2 Bottle Subscription":
            sku = "VAF2BOT-SGL";
            break;
        case "Vegan AF - 3 Bottle":
        case "Vegan AF - 3 Bottle Subscription":
            sku = "VAF3BOT-SGL";
            break;
        case "CBD Tincture - 1 Bottle":
        case "CBD Tincture - 1 Bottle Subscription":
            sku = "TIN1BOT-SGL";
            break;
        case "CBD Tincture - 2 Bottles":
        case "CBD Tincture - 2 Bottle Subscription":
            sku = "TIN2BOT-SGL";
            break;
        case "CBD Tincture - 3 Bottles":
        case "CBD Tincture - 3 Bottle Subscription":
            sku = "TIN3BOT-SGL";
            break;
        case "1 Bottle CBD Gummies (Add On)":
            sku = "GUM1BOT-ADD";
            break;
        case "1 Bottle CBD Tincture (Add On)":
            sku = "TIN1BOT-ADD";
            break;
        case "1 Bottle Vegan AF (Add On)":
            sku = "VAF1BOT-ADD";
         	break;
        case "CBD Gummies & Vegan AF Combo":
            sku ="VDAY-BNDL";
            break;
        case "Dynamic Duo 1- Bundle":
        case "Dynamic Duo 1- Bundle Subscription":
            sku = "DYNA1BDLE-SGL";
            break;
        case "Dynamic Duo 2- Bottle":
        case "Dynamic Duo 2- Bottle Subscription":
            sku = "DYNA2BDLE-SGL";
            break;
        case "Dynamic Duo 3- Bottle":
        case "Dynamic Duo 3- Bottle Subscription":
            sku = "DYNA3BDLE-SGL";
            break;
        case "The CBD Flight Bundle":
        case "The CBD Flight Bundle Subscription":
        case "The CBD Flight 1-Bundle":
        case "The CBD Flight 1-Bundle Subscription":
	case "The Dawn To Yawn":
	case "The Dawn To Yawn Subscription":
            sku = "FLGT1BDLE-SGL";
            break;
        case "The CBD Flight 2-Bottle":
        case "The CBD Flight 2-Bottle Subscription":
            sku = "FLGT2BDLE-SGL";
            break;
        case "The CBD Flight 3-Bottle":
        case "The CBD Flight 3-Bottle Subscription":
            sku = "FLGT3BDLE-SGL";
            break;
        case "Mans Best Friend 1-Bundle":
        case "Mans Best Friend 1-Bundle Subscription":
            sku = "BEST1BDLE-SGL";
            break;
        case "Mans Best Friend 2-Bottle":
        case "Mans Best Friend 2-Bottle Subscription":
            sku = "BEST2BDLE-SGL";
            break;
        case "Mans Best Friend 3-Bottle":
        case "Mans Best Friend 3-Bottle Subscription":
            sku = "BEST3BDLE-SGL";
            break;
        case "Side Piece 1-Bundle":
        case "Side Piece 1-Bundle Subscription":
            sku = "SIDE1BDLE-SGL";
            break;
        case "Side Piece 2-Bottle":
        case "Side Piece 2-Bottle Subscription":
            sku = "SIDE2BDLE-SGL";
            break;
        case "Side Piece 3-Bottle":
        case "Side Piece 3-Bottle Subscription":
            sku = "SIDE3BDLE-SGL";
            break;
        case "Full Chill 1-Bundle":
        case "Full Chill 1-Bundle Subscription":
            sku = "FULL1BDLE-SGL";
            break;
        case "Full Chill 2-Bottle":
        case "Full Chill 2-Bottle Subscription":
            sku = "FULL2BDLE-SGL";
            break;
        case "Full Chill 3-Bottle":
        case "Full Chill 3-Bottle Subscription":
            sku = "FULL3BDLE-SGL";
            break;
        case "Unicorn Jerky - 1 Bag":
            sku = "UNI1BAG-SGL";
            break;
        case "YOLO Shot - Coconut Lime":
        case "YOLO Shot - Coconut Lime Subscription":
            sku = "YOLO12PCK-COCO";
            break;
        case "YOLO Shot - Fruit Punch":
        case "YOLO Shot - Fruit Punch Subscription":
            sku = "YOLO12PCK-FRUIT";
            break;
        case "YOLO Shot - Tropical Pineapple":
        case "YOLO Shot - Tropical Pineapple Subscription":
            sku = "YOLO12PCK-TROPIC";
            break;
        case "Tub Cub 3 Pack":
        case "Tub Cub 3 Pack Subscription":
            sku = "TUBCUB-3PCK";
            break;
        case "Tub Cub 6 Pack":
        case "Tub Cub 6 Pack Subscription":
            sku = "TUBCUB-6PCK";
            break;
        case "Weekend Warrior":
            sku = "WKNDWARR";
            break;
        case "Daily Dominator":
            sku = "DAILYDOM";
            break;
        case "Urban Yogi":
            sku = "URBNYOGI";
            break;
        case "Stocking Stuffer":
            sku = "STCK-STFER";
            break;

    }

     return sku;
}
</script>


      <!--  <script src="<?= $path['js']; ?>/cart.js"></script>
      <script src="<?= $path['js']; ?>/bootstrap.min.js"></script>
      <script src="<?= $path['js']; ?>/slick.min.js"></script>
      <script src="<?= $path['js']; ?>/sticky-sidebar.js"></script>
      <script src="<?= $path['js']; ?>/jquery.collapsible.js"></script> -->


      <!--C:\Users\CISPL-BHARAT\Desktop\optimization\indexScript.js -->
   
      <script src="<?= $path['js']; ?>/commonScript.js?v=1.0.0" defer></script>
    <!--     <script type="text/javascript" defer>
    $(window).on("load", function(){var script=document.createElement("script");script.src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script);script.addEventListener("load",function(event){/*console.log("Script finished loading and executing");*/var scriptCallback=document.createElement("script");scriptCallback.text='KlaviyoSubscribe.attachToForms("#klaviyo_email_subscription_droplet_sunday_scaries", {hide_form_on_success: true,success_message: "Hell Yeah. Subscribed, you have - Yoda. Awesome perks and hookups will be heading your way soon!"});',scriptCallback.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(scriptCallback)});});
</script> -->

<!--   <script type="text/javascript" defer>
    $(window).on("load", function(){var script=document.createElement("script");script.src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script);script.addEventListener("load",function(event){/*console.log("Script finished loading and executing");*/var scriptCallback=document.createElement("script");scriptCallback.text='KlaviyoSubscribe.attachToForms("#klaviyo_email_subscription_droplet_sunday_scaries_index", {hide_form_on_success: true,success_message: "Hell Yeah. Subscribed, you have - Yoda. Awesome perks and hookups will be heading your way soon!"});',scriptCallback.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(scriptCallback)});});
</script> -->
 <!-- <script type="text/javascript" defer>
    $(window).on("load", function(){var script=document.createElement("script");script.src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script);script.addEventListener("load",function(event){/*console.log("Script finished loading and executing");*/var scriptCallback=document.createElement("script");scriptCallback.text='KlaviyoSubscribe.attachToForms("#email_signup_header", {hide_form_on_success: true,success_message: "Hell Yeah. Subscribed, you have - Yoda. Awesome perks and hookups will be heading your way soon!"});',scriptCallback.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(scriptCallback)});});
</script> -->
 <script type="text/javascript" defer>
    $(window).on("load", function(){var script=document.createElement("script");script.src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script);script.addEventListener("load",function(event){/*console.log("Script finished loading and executing");*/var scriptCallback=document.createElement("script");scriptCallback.text='KlaviyoSubscribe.attachToForms("#email_signup_footer", {hide_form_on_success: true,success_message: "Hell Yeah. Subscribed, you have - Yoda. Awesome perks and hookups will be heading your way soon!"});',scriptCallback.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(scriptCallback)});});
</script>





   <script type="text/javascript" src="<?= $path['js']; ?>/jquery.lazy.min.js"></script>
    <script type="text/javascript" src="<?= $path['js']; ?>/jquery.lazy.plugins.min.js"></script>
  <script>
  $( document ).ready(function() {
    $(function() {
        console.log('Lazy Loading');
        $('.lazy').Lazy();
    });
});
</script>



<!-- Snap Pixel Code -->
<script type='text/javascript'>

// (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
// {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
// a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
// r.src=n;var u=t.getElementsByTagName(s)[0];
// u.parentNode.insertBefore(r,u);})(window,document,
// 'https://sc-static.net/scevent.min.js');

// snaptr('init', '44a59dec-90fc-453a-a07a-32ae8bc388c5', {
// 'user_email': '<?=  empty(Session::get('memberSessionData.email')) ? : Session::get('memberSessionData.email') ?>'
// });

// snaptr('track', 'PAGE_VIEW');


</script>
<!-- End Snap Pixel Code -->
<script type="text/javascript" src="<?= $path['js']; ?>/lazysizes.min.js" async=""></script>

<!-- Adtaxi signal tag -->
<script type="text/javascript">
(function () {
var tagjs = document.createElement("script");
var s = document.getElementsByTagName("script")[0];
tagjs.async = true;
tagjs.src = "//s.btstatic.com/tag.js#site=1PR3l09";
s.parentNode.insertBefore(tagjs, s);
}());
</script>
<noscript>
<iframe src="//s.thebrighttag.com/iframe?c=1PR3l09" width="1" height="1"
frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</noscript>
<!-- End adtaxi signal tag-->