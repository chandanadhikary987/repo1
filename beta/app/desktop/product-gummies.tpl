<?php
  require_once("rating/rsslib.php");
  $companyid = 6255;
  $companyguid = "2926eb67-66df-45ca-8c62-c183507250cb";
  $ratingboxid = 14271;
  $productid = urlencode("https://sundayscaries.com/cbd-gummies/");
  $category = "12";
  $page = 1;
  if (@$_GET["rspage"]!="") {$page = (int)@$_GET["rspage"];}
  $url = "https://www.rating-system.com/rss/AProductSchemaGravatar.ashx?cid=".$companyid."&cguid=".$companyguid."&rid=".$ratingboxid."&itemid=".$productid."&itemtype=".$category."&maxelements=10&page=".$page."&url=".urlencode("https://".$_SERVER["HTTP_HOST"].$_SERVER['REQUEST_URI']);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once 'general/__header__.tpl' ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Sunday Scaries ® | CBD Gummies with Vitamins B12 & D3</title>
    <meta name="description" content="Sunday Scaries are the best selling CBD gummy bears formulated to relieve stress, eliminate your moral hangover and avoid having a nervous freaking breakdown." />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://sundayscaries.com/app/desktop/images/cbd-gummies.png">
    <meta property="og:title" content="CBD Gummies | CBD Gummies for Chillin'" />
    <meta property="og:description" content="The best CBD Gummies that'll keep you chill at work, home, or out on the town.  Formulated with absolutely no THC.  Contains Vitamins D3 &amp; B12. Grab your bottle of CBD Gummies today!" />
    <meta property="og:url" content="https://sundayscaries.com/cbd-gummies/" />
    <meta property="og:site_name" content="Sunday Scaries" />
    <meta name="twitter:card" content="The best CBD Gummies that'll keep you chill at work, home, or out on the town.  Formulated with absolutely no THC.  Contains Vitamins D3 &amp; B12. Grab your bottle of CBD Gummies today!" />
    <meta name="twitter:description" content="The best CBD Gummies that'll keep you chill at work, home, or out on the town.  Formulated with absolutely no THC.  Contains Vitamins D3 &amp; B12. Grab your bottle of CBD Gummies today!" />
    <meta name="twitter:title" content="CBD Gummies | CBD Gummies for Chillin'" />
    <meta name="twitter:creator" content="@SundayScariesSD" />
    <meta name="twitter:image" content="https://sundayscaries.com/app/desktop/images/cbd-gummies.png" />
    <meta name="twitter:site" content="https://sundayscaries.com/cbd-gummies/" />
    <link rel="canonical" href="https://sundayscaries.com/cbd-gummies/" />
    <!-- Bootstrap -->
    <link href="<?= $path['css']; ?>/opt-new-ck-product-style.css" rel="stylesheet">
    <?php if( $doLoadScripts ) : ?>
    <link rel="stylesheet" href="/rating/style.css" type="text/css" />
    <?php endif;?>
    <!--slick slider for press-->
    <!-- <script src="https://www.googleoptimize.com/optimize.js?id=OPT-W64MM5W"></script>  -->
</head>

<body class="product">
    <?php  perform_body_tag_open_actions();?>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCKVR7K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <?php require_once 'general/custom_header.tpl' ?>
    <p id="loading-indicator" style="display:none;">Processing...</p>
    <section class="productSection" id="prosec">
        <div class="container">
            <ul class="cartMenu hidden-sm">
                <li><a href="/<?php make_query_string() ?>" alt="Click here to beat Sunday Scaries with the best Broad spectrum CBD available" title="Broad Spectrum CBD">Home</a></li>
                <li><img src="<?= $path['images']; ?>/arrow-3.png" alt="Breadcrumbs" title="Breadcrumb Arrow"></li>
                <li class="active">CBD Gummies</li>
            </ul>
            <div class="row pro_m_d">
                <div class="col-lg-6 col-md-5">
                    <div class="slider-section">
                        <div id="big" class="owl-carousel owl-theme product_slider">
                            <div class="item">
                                <img data-thumb="<img src='<?= $path['images']; ?>/cbd-gummies-front.png' width='500' height='385' alt='Front side of CBD Gummies bottle to keep you chilled out'>" src="<?= $path['images']; ?>/cbd-gummies-front.png" alt="Front side of CBD Gummies bottle to keep you chilled out" title="Front of bottle of CBD Gummies" id="productImg" width="500" height="385" />
                            </div>
                            <div class="item">
                                <img data-thumb="<img src='<?= $path['images']; ?>/cbd-gummies-label.jpg' width='500' height='385' alt='CBD Gummies laying on top of a bunch of gummy bears'>" src="<?= $path['images']; ?>/cbd-gummies-label.jpg" alt="CBD Gummies laying on top of a bunch of gummy bears" title="CBD Gummies On Bears" width="500" height="385" />
                            </div>
                            <div class="item">
                                <img data-thumb="<img src='<?= $path['images']; ?>/Lifestyle_2_Edit1-20.jpg' width='500' height='385' alt='CBD Gummies Lifestyle'>" src="<?= $path['images']; ?>/Lifestyle_2_Edit1-20.jpg" alt="CBD Gummies Lifestyle" width="500" height="385" title="CBD Gummies Lifestyle" />
                            </div>
                            <div class="item">
                                <img data-thumb="<img src='<?= $path['images']; ?>/gummies-foxactress.jpg' width='500' height='385' alt='CBD Gummies Lifestyle'>" src="<?= $path['images']; ?>/gummies-foxactress.jpg" alt="CBD Gummies Lifestyle" width="500" height="385" title="CBD Gummies Lifestyle" />
                            </div>
                            <div class="item">
                                <img data-thumb="<img src='<?= $path['images']; ?>/gummies-lifestyle2.jpg' width='500' height='385' alt='CBD Gummies Lifestyle'>" src="<?= $path['images']; ?>/gummies-lifestyle2.jpg" alt="CBD Gummies Lifestyle" width="500" height="385" title="CBD Gummies Lifestyle" />
                            </div>
                            <div class="item">
                                <video id="cbdGummies" class="vid_content" data-thumb="<img src='<?= $path['images']; ?>/thumbnail-play-button.png' alt='Video of CBD Gummies'>" style="width:100%;" controls autoplay muted playsinline>
                                 
                                </video>
                            </div>
                        </div>
                    </div>
                    <div class="hidden-sm hidden-xs d-bages">
                        <div class="detailCard">
                            <div class="badgeImg">
                                <img class="lazyload" width="126" height="126" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/made_in_USA.png" alt="Made in USA">
                                <img class="lazyload" width="126" height="126" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/free_2day_shipping.png" alt="Free Shipping">
                                <img class="lazyload" width="126" height="126" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/100__money_back.png" alt="100% Money Back">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-7 device_switch">
                    <div class="detailsContainer order-1">
                        <div class="headlabel">
                            <div class="divider"></div>
                            <h1 class="main-h">CBD Gummies</h1>
                            <p class="main-sub-h">Vitamins D3 and B12</p>
                            <hr class="ss-hr hidden-sm hidden-xs">
                            <p class="ProReviewTxt"><img class="lazyload" src="<?= $path['images']; ?>/loadlazy.gif" width="90" height="20" data-src="<?= $path['images']; ?>/star5.gif" alt="Sunday Scaries Ratings"> <a href="#reviews"><span class="cbdReviewCount"><!-- 122 Reviews --></span></a></p>
                        </div>
                    </div>
                    <div class="detailsContainer">
                        <div class="">
                            <p>Our CBD Gummies are perfect for...</p>
                            <ul class="description-list">
                                <li>Accepting your questionable weekend decisions</li>
                                <li>Handling your micromanaging boss</li>
                                <li>Dealing with a crying baby on a plane</li>
                                <li>Saying 'whatever' to a parking ticket</li>
                                <li>Realizing not everyone is vacationing all the time on social media</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <?php
                        
                        $offerProducts = [];

                        foreach ($gummiesOffers as $offer => $val) {

                        $val['mainprice']=$mainProductPrice[$val['product_id']];

                        if($val['product_id']==26){
                            $offerProducts[1]['onetime'] = $val;
                            $listPrice=$val['mainprice'];
                            $offerProducts[1]['onetime']['listPrice']=$listPrice;
                            $displayPrice=$val['product_price'];
                            $offerProducts[1]['onetime']['displayPrice']=$displayPrice;
                            $productName=str_replace('step1-','',$val['campaign_label']);
                            $offerProducts[1]['onetime']['productName']=$productName;
                            $discount=number_format($listPrice-$displayPrice,2);
                            $discountPercent=number_format(((100*$discount)/$listPrice),2);
                            $display="none";
                        }
                        elseif($val['product_id']==27){
                            $offerProducts[1]['subscription'] = $val;
                            $listPrice=$val['mainprice'];
                            $offerProducts[1]['subscription']['listPrice']=$listPrice;
                            $displayPrice=$val['product_price'];
                            $offerProducts[1]['subscription']['displayPrice']=$displayPrice;
                            $productName=str_replace('step1-','',$val['campaign_label']);
                            $offerProducts[1]['subscription']['productName']=$productName;
                            $discount=number_format($listPrice-$displayPrice,2);
                            $discountPercent=number_format(((100*$discount)/$listPrice),2);
                            $display="none";
                        }
                        elseif($val['product_id']==28){
                            $offerProducts[2]['onetime'] = $val;
                            $listPrice=$val['mainprice'];
                            $offerProducts[2]['onetime']['listPrice']=$listPrice;
                            $displayPrice=$val['product_price'];
                            $offerProducts[2]['onetime']['displayPrice']=$displayPrice;
                            $productName=str_replace('step1-','',$val['campaign_label']);
                            $offerProducts[2]['onetime']['productName']=$productName;
                            $discount=number_format($listPrice-$displayPrice,2);
                            $discountPercent=number_format(((100*$discount)/$listPrice),2);
                            $display="none";
                        }
                        elseif($val['product_id']==29){
                            $offerProducts[2]['subscription'] = $val;
                            $listPrice=$val['mainprice'];
                            $offerProducts[2]['subscription']['listPrice']=$listPrice;
                            $displayPrice=$val['product_price'];
                            $offerProducts[2]['subscription']['displayPrice']=$displayPrice;
                            $productName=str_replace('step1-','',$val['campaign_label']);
                            $offerProducts[2]['subscription']['productName']=$productName;
                            $discount=number_format($listPrice-$displayPrice,2);
                            $discountPercent=number_format(((100*$discount)/$listPrice),2);
                            $display="none";
                        }
                        elseif($val['product_id']==30){
                            $offerProducts[3]['onetime'] = $val;
                            $listPrice=$val['mainprice'];
                            $offerProducts[3]['onetime']['listPrice']=$listPrice;
                            $displayPrice=$val['product_price'];
                            $offerProducts[3]['onetime']['displayPrice']=$displayPrice;
                            $productName=str_replace('step1-','',$val['campaign_label']);
                            $offerProducts[3]['onetime']['productName']=$productName;
                            $discount=number_format($listPrice-$displayPrice,2);
                            $discountPercent=number_format(((100*$discount)/$listPrice),2);
                            $display="none";
                        }
                        elseif($val['product_id']==31){
                            $offerProducts[3]['subscription'] = $val;
                            $listPrice=$val['mainprice'];
                            $offerProducts[3]['subscription']['listPrice']=$listPrice;
                            $displayPrice=$val['product_price'];
                            $offerProducts[3]['subscription']['displayPrice']=$displayPrice;
                            $productName=str_replace('step1-','',$val['campaign_label']);
                            $offerProducts[3]['subscription']['productName']=$productName;
                            $discount=number_format($listPrice-$displayPrice,2);
                            $discountPercent=number_format(((100*$discount)/$listPrice),2);
                            $display="none";
                        }

                        else{
                        $display="none";
                        } ?>
                        <label class="checkCol checkCol-<?php echo $val['product_id']; ?>" style="display: none; ?>">
                            <input type="radio" class="addAttr-<?php echo $val['product_id']; ?>" product-id="<?php echo $val['product_id'];?>" name="productid" display-price="<?php echo $displayPrice;?>" actual-price="<?php echo $listPrice; ?>" productId="<?php echo $val['id']?>" campaign-Id="<?php echo $val['id']?>" data-id="<?php echo $displayPrice; ?>" display-price-ne="<?php echo number_format($displayPrice);?>" discount-percentage-price="<?php echo $discount;?>" product-name="<?php echo $productName; ?>" value="<?php echo $val['product_id']?>" <?php if($val['product_id']==27 ){?> checked="checked"
                            <?php }?>/>
                            <div class="checkIn">
                                <?php if($val['product_id']==27 || $val['product_id']==29 || $val['product_id']==31 ){ ?>
                                <span class="repl1">Subscribe & Save <i class="saveRight">Save: 20%
                                        <!-- (<?php echo $discountPercent; ?>%) --></i> </span>
                                <?php }else{?>
                                <span>ONE-TIME PURCHASE</span>
                                <?php } ?>
                                <strong class="repl1">
                                    <!-- <i class="price-strike">$10</i> -->
                                    <?php echo "$".number_format($displayPrice); ?></strong>
                            </div>
                        </label>
                        <?php } ?>
                        <input type="hidden" id="productPageName" name="pagename" value="product-gummies.php">
                        <div class="detailsContainer">
                            <div class="checkWrap clearfix">
                                <div class="processCheckout black">
                                    <p class="processHeadline text-center save20Text">SAVE 20% OFF!</p>
                                    <div class="FlexBoxROw">
                                        <div class="price_option">
                                            <div class="switch switch--vertical">
                                                <input id="radio-c" type="radio" name="second-switch" value="onetime" />
                                                <label for="radio-c">One-Time Purchase</label>
                                                <input id="radio-d" type="radio" name="second-switch" value="subscription" checked="checked" />
                                                <label for="radio-d" class="newSub">Subscription <span>Billed monthly</span></label><span class="toggle-outside"><span class="toggle-inside"></span></span>
                                            </div>
                                        </div>
                                        <div class="qty_changer">
                                            <div class="increment_input">
                                                <button class="incre_action" onclick="decrement()">-</button>
                                                <input id="prodGummyQty" type="number" min=1 max=3 value=1 readonly>
                                                <button class="incre_action" onclick="increment()">+</button>
                                            </div>
                                            <p class="text-center">Buy More & Save</p>
                                        </div>
                                    </div>
                                    <div class="process_checkout_btn">
                                        <span class="price">$<?= number_format($offerProducts[1]['subscription']['displayPrice'], 0) ?></span>
                                        <a href="javascript:void(0)" class="checkoutBTN newaddToCart">ADD TO CART</a>
                                    </div>
                                </div>
                                 <div class="hidden-lg hidden-md">
                                    <div class="detailCard">
                                        <div class="badgeImg">
                                            <img class="lazyload" width="126" height="126" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/made_in_USA.png" alt="Made in USA">
                                            <img class="lazyload" width="126" height="126" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/free_2day_shipping.png" alt="Free Shipping">
                                            <img class="lazyload" width="126" height="126" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/100__money_back.png" alt="100% Money Back">
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div class="yellow-box" data-aos="fade-up">
        <div class="container">
            <div id="slick-press" class="slider press">
                <div>
                    <a href="https://www.popsugar.com/fitness/Why-CBD-Everything-46288531" rel="noreferrer nofollow" class="popsugar" target="_blank" alt="Sunday Scaries CBD in PopSugar">
                        <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/popsugar.png" alt="Popsugar">
                        <p>"I feel calmer, I’m not plagued by racing, intrusive thoughts"</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.buzzfeed.com/beccan9/cbd-oil-for-period-cramps" rel="noreferrer nofollow" target="_blank" class="BuzzFeed" alt="Sunday Scaries in BuzzFeed">
                        <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/buzzfeed.png" alt="Buzzfeed">
                        <p>"Sunday Scaries were more ideal for levels of mental stress"</p>
                    </a>
                </div>
                <div>
                    <a href="#reviews" class="ssReview" alt="Sunday Scaries Reviews">
                        <img class="rate lazyload" width="90" height="20" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/star5.gif" alt="Sundayscaries Rating">
                        <span><strong>5 Star Reviews</strong></span>
                    </a>
                </div>
                <div>
                    <a href="https://www.forbes.com/sites/ambergibson/2020/04/03/five-sophisticated-snacks-to-get-you-through-another-month-of-quarantine/#6632ec8c24af" rel="noreferrer nofollow" class="forbes" target="_blank" alt="Sunday Scaries CBD in Forbes">
                        <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/forbes.png" alt="Forbes">
                        <p>"Boosted with vitamins, setting them apart from the competition"</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.cosmopolitan.com/health-fitness/a27576132/cbd-gummies/" rel="noreferrer nofollow" target="_blank" class="Cosmopolitan" alt="Sunday Scaries in Cosmopolitan">
                        <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/Cosmopolitan.png" alt="Cosmopolitan">
                        <p>"By the time I hit the pillow, I felt chilled out”</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="benBotom" data-aos="fade-up">
        <!-- <div class="container"> -->
            <!-- <div class="row"> -->
                <!-- <div class="col-md-12 col-sm-12"> -->
                    <div class="detailsLeftWrap">
                        <div class="container">
                        <ul class="detailsTab product-page nav nav-tabs" id="myTabs" role="tablist">
                            <li role="presentation" class="active">
                                <div data-target="#home" aria-controls="Benefits" title="Benefits of CBD Gummies" alt="Read the benefits of using CBD Gummies for chillin'" aria-expanded="true" role="tab" data-toggle="tab" name="" id="input" class="tab title-tab"> Description</div>
                            </li>
                            <li role="presentation">
                                <div data-target="#profile" role="tab" data-toggle="tab" aria-controls="Ingredients" title="Ingredients Used In CBD Gummies" alt="Read the ingredients and usage information of CBD Gummies for chillaxing" aria-expanded="false" name="" id="input" class="tab title-tab"> Ingredients</div>
                            </li>
                            <li role="presentation">
                                <div data-target="#messages" role="tab" data-toggle="tab" aria-controls="reviews" alt="Read reviews on CBD Gummies written by real customers" title="Reviews of CBD Gummies" aria-expanded="false" name="" id="input" class="tab title-tab">Reviews </div>
                            </li>
                            <li role="presentation">
                                <div data-target="#settings" role="tab" data-toggle="tab" aria-controls="faq" name="" id="input" class="tab title-tab"> FAQ</div>
                            </li>
                        </ul>
                        </div>
                        <div class="tab-content product-page">
                            
                            <div role="tabpanel" class="tabContRow tab-pane active fade in animated fadeInDown" id="home">
                                <div class="container">
                                    <p class="shadwbox">Directions: Take 2-3 gummies anytime you are feeling agitated or on edge from everyday frustations.</p>
                                    <h2 class="helpSectionHeading">Sunday Scaries Broad Spectrum CBD Gummies</h2><br>
                                    <p>Sunday Scaries are the best selling CBD gummy bears formulated to relieve stress, eliminate your moral hangover and avoid having a nervous freaking breakdown.</p>
                                    <p>While you’ll no longer fear Mondays, they support a relaxed, focused & on-track vibe no matter what day of the week it is. Each bottle contains 20 gummy bears with 10mg of broad spectrum CBD per gummy plus the added benefits of vitamins B12 & D3.</p>
                                    <p>Not to brush our shoulders off too much but Sunday Scaries have been ranked the best CBD gummies in Forbes, Healthline, Discover Magazine, Best Products, Cosmopolitan and many more since 2017. Believe the hype.</p>
                                </div>
                            </div>
                            
                            <div role="tabpanel" class="tabContRow tab-pane animated fadeInDown" id="profile">
                                <div class="container">
                                    <div class="col-sm-12">
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <div>
                                                    <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/cbd-gummies-label.jpg" width="500" height="385" alt="CBD Gummies back of the bottle showing ingredients." title="Photo of CBD Gummies label">
                                                </div>
                                                <ul class="ingredient-gluten-icon">
                                                    <li>
                                                        <div>
                                                            <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/made_in_USA.png" width="126" height="126" alt="Made in USA">
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/imgs/NO_THC.png" width="126" height="126" alt="No THC">
                                                        </div>
                                                    </li>
                                                    <div class="clearfix"></div>
                                                </ul>
                                                <p class="text-center"><strong>Allergy Information:</strong> Contains Treenuts</p>
                                            </div>
                                            <div class="col-md-7 col-sm-12">
                                                <h2 class="helpSectionHeading">Here are the ingredients in our CBD oil gummies.</h2>
                                                <br>
                                                <p>At Sunday Scaries we keep it 100 in life and with our products. We’re transparent with our ingredients and supply chain so you can finally buy CBD gummies without getting shook.</p>
                                                <p>While our brand is Deadpool-esque, we get serious when it comes to product quality. We work with our cGMP and ISO 9001:2015 certified supply chain partner, KND Labs, to custom formulate blends with a specific intention to decrease stress. All products are 3rd party lab tested to ensure compliance and consistency. We’re extremely happy with our product line and we receive glowing reviews, but we’ll never stop placing a laser focused emphasis on product development.</p>
                                                <p>From our 10mg of broad spectrum CBD to the 6.2 mcg Vitamin B12 to the 400 IU Vitamin D3, every ingredient has a purpose and place so you can live your life Scarefree.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="ingredients" data-aos="fade-up">
                                    <img class="lazyload ing-bg" data-aos="fade-up" src="<?= $path['images'] ?>/loadlazy.gif" alt="ingredients background" data-src="<?= $path['images'] ?>/bg-black-wrinkle.jpg" width="1875" height="1174">
                                    <div class="container ing_main">
                                        <div class="col-sm-12">
                                            <div class="top-text text-center">
                                                <h2>High Quality Ingredients<span>!</span></h2>
                                                <p>We separate ourselves from the pack by ensuring we use premium ingredients that all serve a purpose. Our custom formulations will have you dancing like Carlton from Fresh Prince.</p>
                                            </div>
                                            <div class="flex-row">
                                                <div class="col-md-4 col-sm-6 col-xs-12">
                                                    <div class="ing-items">
                                                        <img class=" lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/ing-1.jpg" width="252" height="249" alt="Broad Spectrum CBD Oil">
                                                        <h4>Broad Spectrum CBD Oil</h4>
                                                        <p>Can help calm the mind</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-6 col-xs-12">
                                                    <div class="ing-items">
                                                        <img class=" lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/ing-2.jpg" width="252" height="249" alt="Vitamin B12">
                                                        <h4>Vitamin B12</h4>
                                                        <p>Can balance out moods</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-6 col-xs-12">
                                                    <div class="ing-items">
                                                        <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images'] ?>/ing-3.jpg" width="252" height="249" alt="Vitamin D3">
                                                        <h4>Vitamin D3</h4>
                                                        <p>Can ward off negative thinking</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <a href="https://www.sundayscarieslabtests.com/sunday-scaries-lab-tests/" rel="noreferrer" target="_blank" class="labreport text-center">[ Click Here To Download Lab Report ]</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="KND_Section" data-aos="fade-up">
                                    <div class="container">
                                        <div class="knd_media">
                                            <div class="media-left media-middle">
                                                <img src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/KNDLogo@2x.png" alt="KND Labs" alt="KND Labs" class="media-object lazyload" style="width:220px">
                                            </div>
                                            <div class="media-body">
                                                <p>At Sunday Scaries, all of our CBD raw materials are sourced from KND Labs in Denver, Colorado. KND Labs is a cGMP, ISO 9001:2015 and Active Pharmaceutical Ingredient (API) Certified supply chain partner of CBD ingredients for global consumer products. Their pristine, state of the art facility ensures clean, consistent and reliable CBD throughout the supply chain, from soil to oil.</p>
                                            </div>
                                        </div>
                                        <div class="icons_container">
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon1.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon2.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon3.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon4.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon5.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon6.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon7.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon8.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon9.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                            <div class="image_items">
                                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/knd_icon10.png" width="314" height="294" alt="KND Labs Icons" title="KND Labs Icons">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php if( $doLoadScripts ) : ?>
                            <div role="tabpanel" class="tab-pane tabContRow animated fadeInDown" id="messages">
                                <div class="container">
                                    <h2 class="helpSectionHeading">CBD Gummies Reviews</h2>
                                    <p>Check out the Sunday Scaries CBD gummies hype from our customers. They’re the real MVP’s and they say it like it is.</p>
                                    <a name="RateIt">&nbsp;</a>
                                    <div id="reviews" itemscope itemtype="https://schema.org/Product">
                                        <meta itemprop="name" content="CBD Gummies" />
                                        <link itemprop="image" href="https://sundayscaries.com/dev/app/desktop/images/cbd-gummies.png" />
                                        <meta itemprop="description" content="Our original CBD Gummies feel like a giant hug to your nervous system. Using our proprietary blend of the highest quality, broad spectrum CBD, Vitamin B12 and Vitamin D3, our CBD gummies are the perfect everyday treat to support a relaxed, focused & on track vibe no matter what day of the week it is." />
                                        <div itemprop="brand" itemtype="http://schema.org/Brand" itemscope>
                                            <meta itemprop="name" content="Sunday Scaries" />
                                        </div>
                                        <meta itemprop="sku" content="GUM1BOT-SGL" />
                                        <meta itemprop="gtin13" content="636123313095" />
                                        <div itemprop="offers" itemtype="http://schema.org/Offer" itemscope>
                                            <meta itemprop="price" content="36.00" />
                                            <meta itemprop="priceCurrency" content="USD" />
                                            <meta itemprop="priceValidUntil" content="2021-01-01" />
                                            <link itemprop="availability" href="https://schema.org/InStock" />
                                            <link itemprop="url" href="https://sundayscaries.com/cbd-gummies/" />
                                        </div>
                                        <div class='rssystem'>
                                            <?php
                                            RSS_Retrieve($url);
                                            echo RSS_Display($url, 10, false, true);
                                        ?>
                                        </div>
                                        <script type='text/javascript' src='https://www.rating-system.com/v4/masterrs.js' defer></script>
                                    </div>
                                </div>
                            </div>
                            <?php  endif; ?>
                            <div role="tabpanel" class="tabContRow tab-pane animated fadeInDown" id="settings">
                                <div class="container">
                                    <div class="panel-group" id="qsn" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn1" aria-expanded="true" aria-controls="qsn1">
                                                   Do CBD gummies for anxiety actually work?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="qsn1">
                                            <div class="panel-body">
                                                While Sunday Scaries CBD gummies provide a cool, calm sense of relief they are not intended to diagnose, treat, cure or prevent any disease. Since cannabis has been bastardized since the Marihuana Tax Act of 1937, there has been a significant lack of studies due to its legal status. Although, there are some reports that exist from the <a href="https://www.who.int/medicines/access/controlled-substances/CannabidiolCriticalReview.pdf" target="_blank" rel="noreferrer">World Health Organization</a> as well as the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4604171/" target="_blank" rel="noreferrer">US National Library of Medicine - National Institute of Health</a> that go into some detail about the safety and efficacy of CBD. We are stoked for FDA regulations in our industry to get established and for more information to come out regarding the effects of CBD for anxiety. Until then, we’re not doctors so please consult your physician with the treatment of any medical condition, including anxiety.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn2" aria-expanded="false" aria-controls="qsn2">
                                                    Do CBD gummies for sleep actually work?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn2">
                                            <div class="panel-body">
                                                Sunday Scaries CBD gummies can encourage a better sleep because they enable your mind to stop racing at night and allow you to decompress and get out of your own head. CBD gummies are perfect to take right before bed time so you can unwind and allow yourself to enter a deep sleep. Just like CBD gummies for anxiety, CBD gummies for sleep still need to undergo clinical trials and there are a lot of studies that need to occur outlining the effects. While the <a href="https://archives.drugabuse.gov/about-nida/noras-blog/2015/07/researching-marijuana-therapeutic-purposes-potential-promise-cannabidiol-cbd" target="_blank" rel="noreferrer">National Institute on Drug Abuse</a> and <a href="https://pubmed.ncbi.nlm.nih.gov/30624194/" target="_blank" rel="noreferrer">National Library of Medicine - National Center for Biotechnology Information</a> do showcase some information on the safety and efficacy of CBD, it’s still important to consult your doctor with the treatment of any condition, including insomnia.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn3" aria-expanded="false" aria-controls="qsn3">
                                                    Can you buy CBD gummies on Amazon?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn3">
                                            <div class="panel-body">
                                                Do not trust the CBD products on Amazon. A ton of “hemp” products will populate when you search for CBD gummies but many of them are from companies that are not credible, have inconsistent or falsely advertised dosing, and may not be safe to consume. These illegitimate companies give the entire industry a bad look, and that’s why we feel full transparency is key. We keep it 100, that’s how we roll. If you want CBD oil gummies that are made in the USA and lab tested then avoid Amazon altogether or ensure you’ve done your research on the company behind the product. If you avoid Amazon, try buying Sunday Scaries CBD gummies. You will be sent tasty and effective CBD gummies, fun inserts to make you laugh and you’ll be geared up to win potential prizes. We offer a 100% money-back guarantee without the Amazon hassles so there is no risk in purchasing.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn4" aria-expanded="false" aria-controls="qsn4">
                                                    How many CBD gummies should I eat?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn4">
                                            <div class="panel-body">
                                                We suggest taking 2-3 gummies anytime you are feeling frustrated, overwhelmed or on the verge of tearing your own hair out. We intentionally formulated our Sunday Scaries CBD gummies with 10mg per gummy so our Squad members can scale up incrementally. Everyone’s physiologically different and CBD affects people in different ways, following the same premise as caffeine intake. Also, how many gummies you take can depend on what your desired effects are. For example, if you are kinda stressed from getting stuck in Monday morning traffic then you may want to take 2 gummies. But if you’re stressed tf out because your student debt keeps haunting you then 3 might be the answer for your woes.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn5" aria-expanded="false" aria-controls="qsn5">
                                                    What are CBD gummies?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn5">
                                            <div class="panel-body">
                                                CBD gummies are gelatin or pectin-based jelly candies that are infused with cannabidiol oil, which is the therapeutic compound found in the cannabis plant. While CBD gummies have been trending in mainstream media and are now widely available, not all CBD gummies are created equal. Some CBD gummies are inconsistently sprayed with CBD instead of going through a formulation process with a legitimate manufacturer and infused. Some CBD gummies are also made with CBD isolate instead of broad spectrum CBD, which does not allow the full plant theory or entourage effect to occur. Sunday Scaries sells broad spectrum CBD gummies infused with vitamins B12 & D3 so you get the full chill effect of the CBD while balancing out your mood and warding off negative thinking. 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn6" aria-expanded="false" aria-controls="qsn6">
                                                    How long do CBD gummies take to start working?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn6">
                                            <div class="panel-body">
                                                The onset of the effects from Sunday Scaries CBD gummies takes about 20-30 minutes depending on how long you chew them in your mouth and how much food you have in your stomach. Patience you must have, my young Padawan. Before swallowing the CBD gummies and allowing the CBD to hit your digestive system you can accelerate the effects by allowing the chewed up gummies to sit under your tongue so that the CBD is absorbed sublingually. Say that perfectly 5 times fast and the CBD will probably work before you’re able to. Fortunately, Sunday Scaries CBD gummies are infused with vitamins B12 and D3 which can help increase the bioavailability of the CBD and increase your mood while the CBD sets in and does it’s work.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn7" aria-expanded="false" aria-controls="qsn7">
                                                    How long do CBD gummies last?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn7" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn7">
                                            <div class="panel-body">
                                                When discussing how long Sunday Scaries CBD gummies last it’s important to try and not think about them like your stoner friend’s edibles she made in her Mom’s kitchen. With our consistency you’ll know what kind of efficacy to expect in every gummy and considering CBD is non-psychoactive you won’t be rocking back and forth under your covers regretting eating them. CBD gummies provide a calm, chill sensation or feeling of relief and our recommended dose can last up to 4 hours. That being said, because they relax you it’s highly possible you won’t just start stressing again once the 4 hours is up. Instead you’ll probably be in the right mindset to live your best life, Scarefree. The continual use of CBD also compounds the effectiveness. So the more you use Sunday Scaries the better the calming effects will be and you’ll start to see continual improvement in your overall health and wellness. 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn8" aria-expanded="false" aria-controls="qsn8">
                                                    Do CBD gummies work for hangovers?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn8" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn8">
                                            <div class="panel-body">
                                                Sunday Scaries CBD gummies work for hangovers and can help you alleviate your self doubt and make you feel less isolated after a series of weekend shenanigans. While the term “hangxiety” is used often to describe your state of mind after partying or staying out late, it can still be viewed as a medical claim and is not something we endorse. Although, we encourage you to mellow out and show yourself some self-compassion after a night out partying. We get it, Hair of the dog works, but Sunday Scaries CBD gummies gummies will probably be a better solution than more alcohol. At the end of the day, you deserve to have some fun every once in a while so take a deep breath and don’t beat yourself up.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab">
                                            <h3 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#qsn" href="#qsn9" aria-expanded="false" aria-controls="qsn9">
                                                    What makes Sunday Scaries the best CBD gummies?
                                                </a>
                                            </h3>
                                        </div>
                                        <div id="qsn9" class="panel-collapse collapse" role="tabpanel" aria-labelledby="qsn9">
                                            <div class="panel-body">
                                                We’re just rad, ok! But seriously though, Sunday Scaries are the best cbd gummies because unlike other CBD brands who get a lot of their CBD oil from China and other sources with loose regulatory requirements, our CBD is sourced directly from farms in the USA and grown in accordance with the 2018 Farm Bill. Our CBD gummies are infused, not sprayed, and we’re so confident you’ll love the taste, texture and efficacy that we offer a 100% money-back guarantee. And let’s be real. In an industry filled with a ton of “CBD-this” or “CBD-that” brands we carry a fun vibe with a cool personality. We’re here to build a wellness community and include you on our path to chilldom. We’re different for all the best reasons, and we’re proud of that.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
               <!--  </div> -->
            <!-- </div> -->
        <!-- </div> -->
        <div class="clearfix"></div>
    </div>
    
    <div class="expert-panel new-panel" data-aos="fade-up">
        <img class="lazyload exp_bg" data-aos="fade-up" src="<?= $path['images'] ?>/loadlazy.gif" alt="Sunday Scaries Expert panel background" data-src="<?= $path['images'] ?>/bg-testimonial.jpg" width="1440" height="790">
        <div class="devider"></div>
        <div class="contentHeading">
            <span>What Experts Say About CBD</span>
        </div>
        <div class="carousel-reviews broun-block">
            <div class="container">
                <div class="row">
                    <div class="slider" id="testimonial">
                        <div>
                            <div class="border-testi">
                                <div class="person-text">
                                    <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/p1.png" alt=" Dr. Andrew Weil, MD" />
                                </div>
                                <div class="block-text zmin">
                                    <p>As a physician, I recommend nutritious hemp seeds and oil to anyone interested maintaining a healthy diet. Everyone will benefit when American farmers can grow this amazing crop once again.</p>
                                    <p class="ts">- Dr. Andrew Weil, MD <span class="block">Integrative Medicine</span></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="border-testi">
                                <div class="person-text">
                                    <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/p2.png" alt="Yasmin Hurd, PhD" />
                                </div>
                                <div class="block-text zmin">
                                    <p>The brain is about a symphony, and CBD can bring the entire symphony onto harmony.</p>
                                    <p class="ts">- Yasmin Hurd, PhD <span class="block">Pharmacological Sciences</span></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="border-testi">
                                <div class="person-text ">
                                    <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/p3.png" alt="Tim Lewis" />
                                </div>
                                <div class="block-text zmin">
                                    <p>CBD will change culture. People are less interested in drinking in bars, getting really drunk, feeling like shit the next day, letting their body down, having issues with their body because of that. The shift is happening: more people are interested in eating healthier, living healthier, and this is part of that.</p>
                                    <p class="ts">- Tim Lewis <span class="block">The Guardian (www.theguardian.com)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="video-reels" data-aos="fade-up">
        <img class="lazyload reels_bg" data-aos="fade-up" src="<?= $path['images'] ?>/loadlazy.gif" alt="Sunday Scaries Video background" data-src="<?= $path['images'] ?>/video-reels.png" width="1435" height="829">
        <div class="container">
            <video class="reelVid s2 vid_content" poster='/app/desktop/images/SS_Mondays.jpg' style="width:100%;" controls="" muted="" playsinline="" -webkit-playsinline="" preload="none">
                
            </video>
        </div>
    </div>
    <div class="other-product" data-aos="fade-up">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <h6 class="reference-header">Other Products You May Enjoy</h6>
                </div>
                <div class="divFlex">
                    <div class="reference-block clearfix">
                        <div class="reference-img-holder">
                            <img class="back lazyload" width="131" height="168" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/vegan-cbd-gummies-product.png" alt="Vegan CBD Gummies designed to keep you chill" title="Vegan CBD Gummies">
                        </div>
                        <div class="reference-content-holder">
                            <h4 class="reference-product-name text-center">Vegan CBD gummies</h4>
                            <div class="txtrow">
                                <span class="reference-product-price">$23.00</span>
                                <p>Save: 20%</p>
                            </div>
                            <div class="rating-custom">
                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" width="212" height="35" data-src="<?= $path['images']; ?>/star-5.png" alt="Sunday Scaries Stars">
                            </div>
                            <a href="/vegan-cbd-gummies/<?php make_query_string() ?>" class="reference-booking" title="Purchase Vegan CBD Gummies" alt="Purchase Vegan CBD Gummies">buy now <i class="fas fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div class="reference-block clearfix">
                        <div class="reference-img-holder">
                            <img class="back lazyload" width="262" height="336" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/cbd-tincture-product@2x.png" alt="CBD Oil that's perfect for keeping you mellow" title="CBD Oil">
                        </div>
                        <div class="reference-content-holder">
                            <h4 class="reference-product-name text-center">CBD Oil</h4>
                            <div class="txtrow">
                                <span class="reference-product-price">$39.00</span>
                                <p>Save: 20%</p>
                            </div>
                            <div class="rating-custom">
                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" width="212" height="35" data-src="<?= $path['images']; ?>/star-5.png" alt="Sunday Scaries Stars">
                            </div>
                            <a href="/cbd-tincture/<?php make_query_string() ?>" class="reference-booking" title="Pruchase CBD Oil" alt="Purchase pure CBD Oil">buy now <i class="fas fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div class="reference-block clearfix">
                        <div class="reference-img-holder">
                            <img class="back lazyload" width="131" height="168" src="<?= $path['images'] ?>/loadlazy.gif" data-src="<?= $path['images']; ?>/other-candy-shot.png" alt="CBD Candy that's perfect for keeping you mellow" title="CBD Candy">
                        </div>
                        <div class="reference-content-holder">
                            <h4 class="reference-product-name text-center">CBD Candy</h4>
                            <div class="txtrow">
                                <span class="reference-product-price">$15.00</span>
                                <p>Save: 20%</p>
                            </div>
                            <div class="rating-custom">
                                <img class="lazyload" src="<?= $path['images'] ?>/loadlazy.gif" width="212" height="35" data-src="<?= $path['images']; ?>/star-5.png" alt="Sunday Scaries Stars">
                            </div>
                            <a href="/cbd-candy/<?php make_query_string() ?>" class="reference-booking" title="Pruchase CBD Candy" alt="Purchase pure CBD Candy">buy now <i class="fas fa-caret-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <div class="bodyOverlay"> </div>
    <?php
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>
    <?php require_once 'general/custom_footer.tpl'; ?>

    <?php require_once 'general/__analytics__.tpl' ?>
    <?php perform_body_tag_close_actions(); ?>
    <?php require_once 'general/__scripts__.tpl' ?>
    <?php if( $doLoadScripts ) : ?>
    <script type="text/javascript">
    window.offerProducts = <?= json_encode($offerProducts) ?>
    </script>
    <!--content and video lazy load-->
    <script type="text/javascript">
        $(window).load(function(){
        setTimeout(function(){ $('<source src="https://media.sundayscaries.com/SS_Mondays.mp4" type="video/mp4"><source src="https://media.sundayscaries.com/SS_Mondays.ogv" type="video/ogg"><source src="https://media.sundayscaries.com/SS_Mondays.webm" type="video/webm">').appendTo("video.vid_content"); }, 5000);
        });
    </script>
   <script src="<?= $path['js']; ?>/aos.js"></script>
   <script type="text/javascript">
        AOS.init();
    </script>
    <!--content and video lazy load-->
    <script src="<?= $path['js']; ?>/product-gummies-script.js" defer></script>
    <script src="<?= $path['js']; ?>/single-product-owl.js" defer></script>
    <script type="text/javascript" src="<?= $path['js']; ?>/common-product.js" defer></script>
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sundayscaries.com/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "CBD Gummies",
            "item": "https://sundayscaries.com/cbd-gummies/"
        }]
    }
    </script>
    <script type="application/ld+json">
    {
        "@context": "http://schema.org/",
        "@type": "Product",
        "name": "CBD Gummies",
        "image": "https://sundayscaries.com/app/desktop/images/cbd-gummies.png",
        "description": "Our original CBD Gummies feel like a giant hug to your nervous system. Using our proprietary blend of the highest quality, broad spectrum CBD, Vitamin B12 and Vitamin D3, our CBD gummies are the perfect everyday treat to support a relaxed, focused & on track vibe no matter what day of the week it is.",
        "brand": {
            "@type": "Brand",
            "name": "Sunday Scaries"
        },
        "gtin13": "636123313095",
        "sku": "GUM1BOT-SGL",
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Luke"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "86"
        },
        "offers": [{
            "@type": "Offer",
            "sku": "GUM1BOT-SGL",
            "name": "CBD Gummies - 1 Bottle",
            "price": 29,
            "priceCurrency": "USD",
            "priceValidUntil": "2022-01-01",
            "url": "https://sundayscaries.com/cbd-gummies/",
            "availability": "https://schema.org/InStock"
        }, {
            "@type": "Offer",
            "sku": "GUM2BOT-SGL",
            "name": "CBD Gummies - 2 Bottles",
            "price": 70,
            "priceCurrency": "USD",
            "priceValidUntil": "2022-01-01",
            "url": "https://sundayscaries.com/cbd-gummies/",
            "availability": "https://schema.org/InStock"
        }, {
            "@type": "Offer",
            "sku": "GUM3BOT-SGL",
            "name": "CBD Gummies - 3 Bottles",
            "price": 99,
            "priceCurrency": "USD",
            "priceValidUntil": "2022-01-01",
            "url": "https://sundayscaries.com/cbd-gummies/",
            "availability": "https://schema.org/InStock"
        }]
    }
    </script>
    <?php endif; ?>
    <?php
  $product = array(
    'name'      => 'CBD Gummies - 1 Bottle',
    'id'        => 'GUMBOT-SGL',
    'category'  => 'CBD Product',
    'brand'     => 'Sunday Scaries',
    'list'      => 'Product Page',
    'position'  => 1
  );
  require_once 'general/__ga_products__.tpl';
?>
    <?php if( $doLoadScripts ) : ?>
  
    <script src="<?= $path['js']; ?>/slick-press.js" defer></script>
    <script type="text/javascript">
   function increment(){document.getElementById("prodGummyQty").stepUp(),jQuery(document.getElementById("prodGummyQty")).trigger("change")}function decrement(){document.getElementById("prodGummyQty").stepDown(),jQuery(document.getElementById("prodGummyQty")).trigger("change")}jQuery(document).ready(function(e){jQuery("#testimonial").slick({dots:!1,infinite:!1,nav:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,autoplay:!0,nav:!1,autoplaySpeed:2e3,dots:!0}},{breakpoint:767,settings:{slidesToShow:1,autoplay:!0,autoplaySpeed:2e3,slidesToScroll:1,nav:!1,dots:!0}}]})}),jQuery(".reviewscount").find("span").html(),jQuery(".cbdReviewCount").html($(".reviewscount").find("span").html()+" Reviews");
    </script>
    <?php endif; ?>
</body>

</html>