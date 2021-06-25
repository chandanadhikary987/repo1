<?php
use Application\Request;
use Application\Http;
use Application\Model\Configuration;
use Application\Session;

function viewRequestedOrder ( $orderId ) {
	$configuration = new Configuration( '1' );
	$crmInfo = $configuration->getCrm();
	$viewOrderApi['loginId'] = $crmInfo['username'];
	$viewOrderApi['password'] = $crmInfo['password'];
	$viewOrderApi['orderId'] = $orderId;
	$viewOrderApiUrl = trim($crmInfo['endpoint'], '/') . "/order/query/?";
	return Http::post( $viewOrderApiUrl, http_build_query( $viewOrderApi ) );
}

function viewOrderApiResponse ( $orderInfo ) {
	$orderInfoArr = json_decode( $orderInfo, true );
	if( isset($orderInfoArr['result']) && $orderInfoArr['result'] === 'SUCCESS' ) {
		return $orderInfoArr['message']['data'];
	}
	else {
		return [];
	}
}

function isAllowedToCancelOrder (){
	 $orderId = Request::get('orderID');
	if( !empty( $orderId ) ) {
		$viewOrderInfo = viewRequestedOrder( $orderId );
		if( !empty( $viewOrderInfo ) ) {
			$orderInfo = viewOrderApiResponse( $viewOrderInfo );
			$currentDateTime = new DateTime( 'now', new DateTimeZone( 'America/New_York' ) );
			// $currentDateTimeTimestamp = $currentDateTime->getTimestamp();
			$currentDateTimeTimestamp = strtotime( $currentDateTime->format('Y-m-d H:i:s') );
			$orderDateTime = '';
			$orderDateTimeTimestamp = 0;

			foreach ($orderInfo as $orderItem) {
				if( $orderItem['orderId'] === $orderId ) {
					$orderDateTime = $orderItem['dateCreated'];
					$orderDateTimeTimestamp = strtotime( $orderItem['dateCreated'] );
				}
			}
			if( $currentDateTimeTimestamp < ( $orderDateTimeTimestamp + ( 0.5 * 60 * 60 ) ) ) {
				return '0' ;
			}
		}
	}
	return '1' ;
}




function handleAffiliateCookieData($pageName){
         
  $cookiesDays=!empty(makeCookiesDays())?makeCookiesDays():1;
  if(Request::get('kid')){

    setcookie('rferkidCookies', serialize(Request::get('kid')), time() + (86400 * 30), "/"); // 86400 = 1 day
  }
       

   // TODO - Khurshid: All of the code that is common to the product pages regarding 

    // processing query string and cookies should be consolidated. 

    // It also seemed like there were some minor differences between that code on the product pages. 



    // if coming from thank-you page wipe out all affiliate info in cookie    

    if (strpos($_SERVER['HTTP_REFERER'], 'thank-you.php') !== false){

        setcookie('affilateCookieData', null, -1, '/');

    } else {

    

        // Create cookies for affilate Data

        // get the query string

        $cookie_value = Request::query()->all();

        //if there is a query string 

        if(!empty($cookie_value)){

            // TODO - map old affid to new affid

            

            // and there was data from the affiliate cookie from the customer's browser

            if (!empty($_COOKIE['affilateCookieData'])) {

                // TODO - IMPORTANT: check if the cookie data actually changed. 

                // If it didn't change don't unset and then reset the cookie because this resets the 30 days for the customer to be attributed to an affiliate                 

                                 

                // wipe out the cookie so that we end up using the query string data

                setcookie('affilateCookieData', null, -1, '/');

       	    } else {

        	// return false;

       	    }

            $cookie_name = "affilateCookieData";

            //  send cookie to browser with query string data

            setcookie($cookie_name, serialize($cookie_value), time() + (86400 * $cookiesDays), "/"); // 86400 = 1 day

            

            // I BELEVIE THIS IS WRONG: this code resends whatever the browser sent from this cookie in the request

            // actually this never gets used... should just be removed. (if $_COOKIE is used somewhere after this or $affilateCookieData after this then we should leave it)

            $affilateCookieData = unserialize($_COOKIE['affilateCookieData']);

        

        }else{

       	    $affilateCookieData=unserialize($_COOKIE['affilateCookieData']);

            // TODO - map old affid to new affid based upon the cookie data

            // TODO - set the cookie with the new affid info

            // TODO - set the query string in the browser

            // TODO - return the changed query_string

        }

        

        $affilateCookieData = $affilateCookieData?$affilateCookieData:'';

      

        

       	//Session affilate Data

        // if empty query string, but browser sent a cookie with affiliate data

        if(empty(Request::query()->all()) && !empty($affilateCookieData)){

            //reconstruct the query string and put it on the browser
           
        

          if($affilateCookieData['affId']=='A9F251D4' && $affilateCookieData['c1']=='[CBDAFF]' && $affilateCookieData['c2'] !=''){
                  // Chnage affId
              $affilateCookieData['affId']='5FD28FC5';
               // Remove c1 element
             unset($affilateCookieData['c1']);

                    }
                   
       
         
         	foreach($affilateCookieData as $key=>$val){
                 
        
         		$queryParam.=$key.'='.$affilateCookieData[$key].'&';         			

         	}
        

            // TODO - set cookie data

         	 $queryParam=$pageName.'?'.rtrim($queryParam,'&');

         	?>

         	<script>

         	  window.location.href="<?= $queryParam;?>";

         	</script>

         	<?php 

        }

        

        //End

    }








}

function makeCookiesDays(){
      // Email 1 - 5 Days
       // Email 1: ?affId=B677FDA6&c1=[c1]&c2=[c2]&c3=[c3]
        if(Request::get('affId')=='B677FDA6'){
          return $days=5;
        }
        //Email 2: ?affId=2C00C62D&c1=[c1]&c2=[c2]&c3=[c3]
        // Email 1 - 5 Days
       if(Request::get('affId')=='2C00C62D'){
          return $days=5;
        }

        // Facebook - 7 Days
       // Facebook:  ?affId=543F349E&c1=[facebook]&c2=[c2]&c3=[c3]&c4=[c4]
        if(Request::get('affId')=='543F349E' && Request::get('c1')=='[facebook]'){
          return $days=7;
        }
         //Google - 1 Day
       // Google: ?affId=543F349E&c1=[google]&c2=[c2]&c3=[c3]&c4=[c4]
        if(Request::get('affId')=='543F349E' && Request::get('c1')=='[google]'){
          return $days=1;
        }
       
      
      
}


function orderRestartDate(){
     $currentDateTime = new DateTime( 'now', new DateTimeZone( 'America/New_York' ) );
      // $currentDateTimeTimestamp = $currentDateTime->getTimestamp();
      $currentDateTimeTimestamp = strtotime( $currentDateTime->format('Y-m-d H:i:s') );
}


 function randomPassword(){
     $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
                $pass = array(); //remember to declare $pass as an array
                $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
                for ($i = 0; $i < 8; $i++) {
                    $n = rand(0, $alphaLength);
                    $pass[] = $alphabet[$n];
                }
                return implode($pass); //turn the array into a string

   }

     function ip_info($ip = NULL, $purpose = "location", $deep_detect = TRUE) {
    $output = NULL;
    if (filter_var($ip, FILTER_VALIDATE_IP) === FALSE) {
        $ip = $_SERVER["REMOTE_ADDR"];
        if ($deep_detect) {
            if (filter_var(@$_SERVER['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            if (filter_var(@$_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_CLIENT_IP'];
        }
    }
    $purpose    = str_replace(array("name", "\n", "\t", " ", "-", "_"), NULL, strtolower(trim($purpose)));
    $support    = array("country", "countrycode", "state", "region", "city", "location", "address");
    $continents = array(
        "AF" => "Africa",
        "AN" => "Antarctica",
        "AS" => "Asia",
        "EU" => "Europe",
        "OC" => "Australia (Oceania)",
        "NA" => "North America",
        "SA" => "South America"
    );
    if (filter_var($ip, FILTER_VALIDATE_IP) && in_array($purpose, $support)) {
        $ipdat = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
        if (@strlen(trim($ipdat->geoplugin_countryCode)) == 2) {
            switch ($purpose) {
                case "location":
                    $output = array(
                        "city"           => @$ipdat->geoplugin_city,
                        "state"          => @$ipdat->geoplugin_regionName,
                        "country"        => @$ipdat->geoplugin_countryName,
                        "country_code"   => @$ipdat->geoplugin_countryCode,
                        "continent"      => @$continents[strtoupper($ipdat->geoplugin_continentCode)],
                        "continent_code" => @$ipdat->geoplugin_continentCode
                    );
                    break;
                case "address":
                    $address = array($ipdat->geoplugin_countryName);
                    if (@strlen($ipdat->geoplugin_regionName) >= 1)
                        $address[] = $ipdat->geoplugin_regionName;
                    if (@strlen($ipdat->geoplugin_city) >= 1)
                        $address[] = $ipdat->geoplugin_city;
                    $output = implode(", ", array_reverse($address));
                    break;
                case "city":
                    $output = @$ipdat->geoplugin_city;
                    break;
                case "state":
                    $output = @$ipdat->geoplugin_regionName;
                    break;
                case "region":
                    $output = @$ipdat->geoplugin_regionName;
                    break;
                case "country":
                    $output = @$ipdat->geoplugin_countryName;
                    break;
                case "countrycode":
                    $output = @$ipdat->geoplugin_countryCode;
                    break;
            }
        }
    }
    return $output;
}

function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function sendEmailToReferrer($email) {
  $emailData['firstName']='';
  $emailData['mail_sub']="Someone used your Referral Link";
  $emailData['mail_temp_name']='rewards_link_used_mailtemplate.html';
  $emailData['email']=trim($email);
  $emailData['referral_link']='';
  $emailData['temp_password']='';
  sendMail($emailData);
}

function  sendMail($emailData){


                    
                        $mail = new PHPMailer(true);

                        try {
                        $mail->isSMTP();                                      
                        $mail->Host = 'smtp.sendgrid.net';  
                        $mail->SMTPAuth = true;               
                        $mail->Username = 'apikey';      
                        $mail->Password = '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';    
                        $mail->SMTPSecure = 'tls';    
                        $mail->Port = 587;    

                        $mail->From ="happiness@sundayscaries.com";
                        $fname=trim($emailData['firstName']);
                        $mail->FromName = 'Sunday Scaries';

                        $to=trim(strip_tags($emailData['email']));
                        $mail->addAddress($to, $emailData['firstName']);  
                        $mail->WordWrap = 50; 
                        $mail->isHTML(true);
                        $mail->Subject = $emailData['mail_sub'];
                        $emailData['referral_link']=!empty($emailData['referral_link'])?$emailData['referral_link']:'';

                        $msg_admin = file_get_contents($emailData['mail_temp_name']);
                        $msg_admin = str_replace("{login_link}", "https://sundayscaries.com/member/reset-password.php", $msg_admin);
                        $msg_admin = str_replace("{user_email}", $emailData['email'], $msg_admin);
                        $msg_admin = str_replace("{temp_password}", $emailData['temp_password'], $msg_admin);
                        $msg_admin = str_replace("{first_name}", $emailData['firstName'], $msg_admin);
                         $msg_admin = str_replace("{referral_link}", $emailData['referral_link'], $msg_admin);
                        $mail->Body    = $msg_admin;

                        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
                        
                        if(!$mail->send()) {
                         return false;
                        } else {
                          
                           return true;
                           
                        }


                        } catch (phpmailerException $e) {
                          echo $e->errorMessage(); //Pretty error messages from PHPMailer
                        } catch (Exception $e) {
                          echo $e->getMessage(); //Boring error messages from anything else!
                        }
                            }

