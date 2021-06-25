<?php
// All Product Sku for Sundayscaries for Campaign Id  8

   function productSku($id){
    $productSpecificSku=array();

    $ProductSkusSyndayScaries = ['26' => 'GUM1BOT-SGL', '27' => 'GUM1BOT-SGL', '28' => 'GUM2BOT-SGL', '29' => 'GUM2BOT-SGL', '30' => 'GUM3BOT-SGL', '31' => 'GUM3BOT-SGL', '32' => 'VAF1BOT-SGL', '33' => 'VAF1BOT-SGL', '34' => 'VAF2BOT-SGL', '35' => 'VAF2BOT-SGL', '36' => 'VAF3BOT-SGL', '37' => 'VAF3BOT-SGL', '38' => 'TIN1BOT-SGL', '39' => 'TIN1BOT-SGL', '40' => 'TIN2BOT-SGL', '41' => 'TIN2BOT-SGL', '42' => 'TIN3BOT-SGL', '43' => 'TIN3BOT-SGL','44'=>'GUM1BOT-ADD','45'=>'VAF1BOT-ADD','46'=>'TIN1BOT-ADD', '48' => 'DYNA1BDLE-SGL', '49' => 'DYNA1BDLE-SGL', '54' => 'FLGT1BDLE-SGL', '55' => 'FLGT1BDLE-SGL', '60' => 'BEST1BDLE-SGL', '61' => 'BEST1BDLE-SGLn', '66' => 'SIDE1BDLE-SGLe', '67' => 'SIDE1BDLE-SGL', '72' => 'FULL1BDLE-SGL', '73' => 'FULL1BDLE-SGL','165' => 'UNI1BAG-SGL','170' => 'YOLO12PCK-COCO','171' => 'YOLO12PCK-COCO','172' => 'YOLO12PCK-FRUIT','173' => 'YOLO12PCK-FRUIT','174' => 'YOLO12PCK-TROPIC','175' => 'YOLO12PCK-TROPIC',  '268' => 'TUBCUB-3PCK', '269' => 'TUBCUB-3PCK', '270' => 'TUBCUB-6PCK ', '271' => 'TUBCUB-6PCK'];
  
         $productSpecificSku=$ProductSkusSyndayScaries[$id];
          return $productSpecificSku;
  }

  function allSubscriptionProductIds(){
    return ['27','29','31','33','35','37','39','41','43','49','55','61','67','73','171','173','175','269','271','572','586','588','590','592','594','596','598','717','719','721','729','734','864','866','868','870','923','994','998','1000','1002'];
  }
    function allOntimeProductIds(){
      return ['26','28','39','34','36','38','40','42','44','45','46','47','48','50','52','54','56','58','60','62','64','66','68','70','72','74','76','165','170','172','174','268','270','571','587','589','591','593','595','597','716','718','720','728','733','863','865','867','869','913','922','993','997','999','1001'];
    }
    function subscriptionProductPrice(){

$subscriptionProductPrice=[
               
               '27'=>'31.00',
              
               '29'=>'55.00',
             
               '31'=>'75.00',
              
               '33'=>'35.00',
               
               '35'=>'62.00',
              
               '37'=>'86.00',
              
               '39'=>'64.00',
             
               '41'=>'119.00',

               '43'=>'169.00',
               '118'=>'49.00',
               '120'=>'47.00',
               '122'=>'90.00',
               '124'=>'127.00'    
             
  
];
return $subscriptionProductPrice;

    }

    function oneTimeToSubscription(){
  return [
    '1'=>'2',
    '3'=>'4',
    '5'=>'6',
    '7'=>'8',
    '9'=>'10',
    '11'=>'12',
    '13'=>'14',
    '15'=>'16',
    '17'=>'18',
    '41'=>'42',
    '74'=>'75',
    '82'=>'83',
    '84'=>'85',
    '86'=>'87',
    '94'=>'95',
    '96'=>'97',
    '98'=>'99',
    '100'=>'101',
    '102'=>'103',
    '104'=>'105',
    '107'=>'108',
    '110'=>'111',
    '60'=>'61',
    '62'=>'63',
    '117'=>'118',
    '119'=>'120',
    '121'=>'122',
    '123'=>'124'
  ];
}

        function subscriptionCampaignPrice() {
      return [
        '2'=>'23.00',
        '4'=>'44.00',
        '6'=>'63.00',
        '8'=>'23.00',
        '10'=>'44.00',
        '12'=>'63.00',
        '14'=>'39.00',
        '16'=>'75.00',
        '18'=>'106.00',
        '42'=>'43.00',
        '75'=>'60.00',
        '83'=>'15.00',
        '85'=>'29.00',
        '87'=>'41.00',
        '95'=>'39.00',
        '97'=>'23.00',
        '99'=>'69.00',
        '101'=>'79.00',
        '103'=>'54.00',
        '105'=>'63.00',
        '108'=>'69.00',
        '111'=>'9.00',
        '61'=>'22.00',
        '63'=>'37.00',
        '118'=>'49.00',
        '120'=>'47.00',
        '122'=>'90.00',
        '124'=>'127.00'
      ];
    }



    function mainProductPrice(){

              // @Start Create array for main product Price for sunday scaries gummies
              // @key=product Id
              $mainProductPrice=[];
              //Sunday Scaries Gummies - 1 Bottle of Sunday Scaries
              $mainProductPrice[26]='44.95';
              //Sunday Scaries - 1 Bottle of Sunday Scaries Subscription
              $mainProductPrice[27]='44.95';
              //Sunday Scaries Gummies- 2  Bottles of Sunday Scaries
              $mainProductPrice[28]='89.90';
              //Sunday Scaries Gummies - 2 Bottles of Sunday Scaries - Subscription
              $mainProductPrice[29]='89.90';
              //Sunday Scaries Gummies- 3  Bottles of Sunday Scaries
              $mainProductPrice[30]='134.85';
              //Sunday Scaries Gummies - 3  Bottles of Sunday Scaries Subscription
              $mainProductPrice[31]='134.85';
              //End@
              // @Start Create array for main product Price for sunday scaries vegan
              // @key=product Id
              //Sunday Scaries Gummies - 1 Bottle of Sunday Scaries
              $mainProductPrice[32]='49.99';
              //Sunday Scaries - 1 Bottle of Sunday Scaries Subscription
              $mainProductPrice[33]='49.99';
              //Sunday Scaries Gummies- 2  Bottles of Sunday Scaries
              $mainProductPrice[34]='99.98';
              //Sunday Scaries Gummies - 2 Bottles of Sunday Scaries - Subscription
              $mainProductPrice[35]='99.98';
              //Sunday Scaries Gummies- 3  Bottles of Sunday Scaries
              $mainProductPrice[36]='149.97';
              //Sunday Scaries Gummies - 3  Bottles of Sunday Scaries Subscription
              $mainProductPrice[37]='149.97';
              //End@
              // @Start Create array for main product Price for sunday scaries Tincture
              // @key=product Id
              //Sunday Scaries Gummies - 1 Bottle of Sunday Scaries
              $mainProductPrice[38]='79.99';
              //Sunday Scaries - 1 Bottle of Sunday Scaries Subscription
              $mainProductPrice[39]='79.99';
              //Sunday Scaries Gummies- 2  Bottles of Sunday Scaries
              $mainProductPrice[40]='159.98';
              //Sunday Scaries Gummies - 2 Bottles of Sunday Scaries - Subscription
              $mainProductPrice[41]='159.98';
              //Sunday Scaries Gummies- 3  Bottles of Sunday Scaries
              $mainProductPrice[42]='239.97';
              //Sunday Scaries Gummies - 3  Bottles of Sunday Scaries Subscription
              $mainProductPrice[43]='239.97';
              //End@

              //addon main Product price
              $mainProductPrice[44]='49.99';
              $mainProductPrice[45]='79.99';
              $mainProductPrice[46]='44.95';
              $mainProductPrice[545]='12.00';
              //addon main Product price

              //Dynamic Pro
              $mainProductPrice[48]='83.00';
              $mainProductPrice[49]='66.00';
              $mainProductPrice[50]='166.00';
              $mainProductPrice[51]='132.00';
              $mainProductPrice[52]='197.95';
              $mainProductPrice[53]='395.90';
              // CBD Flight
              $mainProductPrice[54]='197.95';
              $mainProductPrice[55]='130.00';
              $mainProductPrice[56]='395.90';
              $mainProductPrice[57]='260.00';
              $mainProductPrice[58]='593.85';
              $mainProductPrice[59]='390.00';
              //Mens Best friend
              $mainProductPrice[60]='78.95';
              $mainProductPrice[61]='64.96';
              $mainProductPrice[62]='157.90';
              $mainProductPrice[63]='129.92';
              $mainProductPrice[64]='236.85';
              $mainProductPrice[65]='194.88';

              //Side Piece
              $mainProductPrice[66]='114.00';
              $mainProductPrice[67]='95.00';
              $mainProductPrice[68]='228.00';
              $mainProductPrice[69]='190.00';
              $mainProductPrice[70]='342.00';
              $mainProductPrice[71]='285.00';
              // Full Chill
              $mainProductPrice[72]='197.95';
              $mainProductPrice[73]='163.96';
              $mainProductPrice[74]='395.90';
              $mainProductPrice[75]='327.92';
              $mainProductPrice[76]='593.85';
              $mainProductPrice[77]='491.88';
              // CBD Candy
              $mainProductPrice[165]='24.99';
              //cbd-energy-shot
              //cbd-energy-shot
              $mainProductPrice[170]='79.99';
              $mainProductPrice[171]='79.99';
              $mainProductPrice[172]='79.99';
              $mainProductPrice[173]='79.99';
              $mainProductPrice[174]='79.99';
              $mainProductPrice[175]='79.99';

              $mainProductPrice[268]='75.00';
              $mainProductPrice[269]='75.00';
              $mainProductPrice[270]='100.00';
              $mainProductPrice[271]='100.00';

              $mainProductPrice[428]='197.95';
              $mainProductPrice[429]='130.00';

              $mainProductPrice[496]='219.00';
              $mainProductPrice[497]='219.00';

              $mainProductPrice[498]='411.00';
              $mainProductPrice[499]='411.00';

              $mainProductPrice[500]='476.00';
              $mainProductPrice[501]='476.00';
               //cabin scaries
              $mainProductPrice[571]='45.00';
              $mainProductPrice[572]='60.00';

              $mainProductPrice[585]='200.00';
              $mainProductPrice[586]='200.00';

            
              $mainProductPrice[587]='200.00';
              $mainProductPrice[588]='200.00';
              $mainProductPrice[589]='200.00';
              $mainProductPrice[590]='200.00';
              $mainProductPrice[591]='200.00';
              $mainProductPrice[592]='200.00';
             
              $mainProductPrice[593]='100.00';
              $mainProductPrice[594]='100.00';
              $mainProductPrice[595]='100.00';
              $mainProductPrice[596]='100.00';
              $mainProductPrice[597]='100.00';
              $mainProductPrice[598]='100.00';
              $mainProductPrice[863]='100.00';
              $mainProductPrice[864]='100.00';
              $mainProductPrice[865]='100.00';
              $mainProductPrice[866]='100.00';


             

              return $mainProductPrice;
    }
  function checkMainProductInCart($productName){
    if (preg_match("/Gummies/mi", $productName)){

      $mainprouct['gummies']=1;

         return $mainprouct;

    }
    if (preg_match("/Vegan/mi", $productName)){
      $mainprouct['vegan']=1;
         return $mainprouct;

    }
    if (preg_match("/Tincture/mi", $productName)){
      $mainprouct['tincture']=1;
        return $mainprouct;

    }
    if (preg_match("/YOLO Shot/mi", $productName)){
       $mainprouct['yoloshot']=1;
         return $mainprouct;

    }

  }
  function relatedProductCreate($productName){

     if (preg_match("/Gummies/mi", $productName)){

      $mainprouct['main_product_id']=[2,4,6];
      $mainprouct['addon_product_id']=[20,21];
      $mainprouct['bundle_product_id']=[67,588,586];

         return $mainprouct;

    }
    if (preg_match("/Vegan/mi", $productName)){
      $mainprouct['main_product_id']=[8,10,12];
      $mainprouct['addon_product_id']=[19,20];
      $mainprouct['bundle_product_id']=[67,588,586];
         return $mainprouct;

    }
    if (preg_match("/Tincture/mi", $productName)){
      $mainprouct['main_product_id']=[14,16,18];
      $mainprouct['addon_product_id']=[19,21];
      $mainprouct['bundle_product_id']=[67,588,586];
        return $mainprouct;

    }
    if (preg_match("/YOLO Shot/mi", $productName)){
       $mainprouct['main_product_id']=[55,57,59];
       $mainprouct['addon_product_id']=[19,20,21];
       $mainprouct['bundle_product_id']=[67,588,586];
         return $mainprouct;

    }

  }


$allProductPageName=['product-gummies.php','product-vegan-cbd.php','product-tincture.php','cbd-candy.php','everyday-scaries.php','rando-bundle.php','side-piece-bundle.php','bra-bearies.php','national-coming-out-day.php','tub-cubs.php','cbd-cbn-oil-for-sleep.php'];



function checkProductPage($currentPageNAme){
  
$allProductPageName=['product-gummies.php','product-vegan-cbd.php','product-tincture.php','everyday-scaries.php','rando-bundle.php','side-piece-bundle.php','bra-bearies.php','tub-cubs.php','cbd-cbn-oil-for-sleep.php'];
  
if(in_array($currentPageNAme,$allProductPageName)){
  return 1;
}else{
  return 0;
}

}

   $allProductbyMoreSave=['product-gummies.php','product-vegan-cbd.php','product-tincture.php','cbd-candy.php','bra-bearies.php','national-coming-out-day.php','tub-cubs.php','cbd-cbn-oil-for-sleep.php'];


  function saveMoreOption($pageName){
 
      
      if($pageName=='product-gummies.php'|| $pageName=='product-vegan-cbd.php' || $pageName=='cbd-candy.php' || $pageName=='product-tincture.php' || $pageName=='bra-bearies.php' || $pageName=='tub-cubs.php' || $pageName=='national-coming-out-day.php' || $pageName=='holiday-scaries.php'|| $pageName=='cbd-cbn-oil-for-sleep.php' ){
        return 1;

      }else{
        return 0;
      }


  }

  function createOption($pageName,$productName){
    
    $optionValue=[];
      if ($pageName=='product-gummies.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['2','4','6'];
       }else{
          $optionValue=['1','3','5'];
       }
      }
if ($pageName=='product-vegan-cbd.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['8','10','12'];
       }else{
          $optionValue=['7','9','11'];
       }
      }

      if ($pageName=='product-tincture.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['14','16','18'];
       }else{
          $optionValue=['13','15','17'];
       }
      }

        if ($pageName=='cbd-candy.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['83','85','87'];
       }else{
          $optionValue=['82','84','86'];
       }
      }

      if($pageName=='national-coming-out-day.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['87','99','101'];
       }else{
          $optionValue=['86','98','100'];
       } 
      }

         if ($pageName=='bra-bearies.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['97','103','105'];
       }else{
          $optionValue=['96','102','104'];
       }
      }

      if ($pageName=='tub-cubs.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['111','61','63'];
       }else{
          $optionValue=['110','60','62'];
       }
      }

         if ($pageName=='cbd-cbn-oil-for-sleep.php'){
        if (preg_match("/subsc/mi", $productName)){
          $optionValue=['120','122','124'];
       }else{
          $optionValue=['119','121','123'];
       }
      }

       if ($pageName=='holiday-scaries.php'){
        $optionValue=['107','108','109'];
      }
   
      
       return $optionValue;

  }

function allIndividualCampIds($param){
  if($param=='gummies'){
    return ['1','2','3','4','5','6'];
  }
   if($param=='vegan'){
    return ['7','8','9','10','11','12'];
  }
   if($param=='tincture'){
    return ['13','14','15','16','17','18'];
  }
   if($param=='candy'){
    return ['82','83','84','85','86','87','98','99','100','101'];
  }
   if($param=='bra-bearies'){
    return ['96','97','102','103','104','105'];
  }
   if($param=='tub-cubs'){
    return ['110','111','60','61','62','63'];
  }
  if($param=='holiday-scaries'){
    return ['107','108','109'];
  }
  if($param=='bigspoon'){
    return ['119','120','121','122','123','124'];
  }
     
     

}

    function aes256_cbc_encrypt($key, $data, $iv) {
        if (32 !== strlen($key))
            $key = hash('SHA256', $key, true);
        if (16 !== strlen($iv))
            $iv = hash('MD5', $iv, true);
        $padding = 16 - (strlen($data) % 16);
        $data .= str_repeat(chr($padding), $padding);
        return mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $data, MCRYPT_MODE_CBC, $iv);
    }
      function excludeProductIds(){

      $productArray=['170','171','172','173','174','175','546','547','548','570','587','588','589','590','591','592','913','914','915','906','964','165'];
      return $productArray;

    }


 DEFINE('DOMAIN','https://sundayscaries.com/');
 DEFINE('PAGENAME',basename($_SERVER['PHP_SELF']));
 DEFINE('FREESHIPPING','59');




 ?>