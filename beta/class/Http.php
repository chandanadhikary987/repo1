<?php
/**
 * 
 */
class HttpRequest {
	
	function __construct() {
		return;
	}
	// Production
	public static $api_auth_key = "FCACHGBCAFCBFGHCBDDZ1663740239626343677Y!n313638042";
	public static $pass_code="0.14464098";
	public static $userName="customapiuser";
	public static $password="GForcedev9832@!";
	
	//Staging

	//private static $api_auth_key = "FJDJEDFACFEEBGFAAJGZ1415284704471256482Y!n757536906";
	//private static $pass_code="0.08690351";
	public function Get( $request ) {

		if( empty( $request ) ) {
			return;
		} 

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_POST, 0);
		curl_setopt($ch, CURLOPT_HTTPGET, 1);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, $request);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$response = curl_exec($ch);
		curl_close($ch);

		return $response;

	}

	public function Post( $method, $postdata = array() ) { 
		   if(!empty($postdata)){
		   	$postdata['loginId']=HttpRequest::$userName;
			$postdata['password']=HttpRequest::$password;
		   }

		if( empty( $method ) || empty( $postdata ) ) {
			return;
		} 

		

		$request = 'https://api.konnektive.com/'. $method . '/';

		$ch = curl_init();

		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_TIMEOUT, 180);
		curl_setopt($ch, CURLOPT_URL, $request);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		if( !empty( $postdata ) ) {
			curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
		}

		
		$response = curl_exec($ch);


		return $response;
	}


public function GiftOrder( $method, $postdata = array() ) { 
		   if(!empty($postdata)){
		   	$postdata['loginId']=HttpRequest::$userName;
			$postdata['password']=HttpRequest::$password;
		   }

		if( empty( $method ) || empty( $postdata ) ) {
			return;
		} 

		  // echo "<pre>";
		  // print_r($postdata);
		  // die;

		$request = 'https://api.konnektive.com/'. $method . '/';

		$ch = curl_init();

		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_TIMEOUT, 180);
		curl_setopt($ch, CURLOPT_URL, $request);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		if( !empty( $postdata ) ) {
			curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
		}

		
		$response = curl_exec($ch);

   // echo "<pre>";
   // print_r(json_decode($response));
   // die;
		return json_decode($response);
	}


	// Nextbee 

	public function postNextBee($endPoint,$dataNextBee = array()) { 
		  $transaction_timestamp=time()*1000;

		$this->$api_call_signature=MD5(HttpRequest::$api_auth_key.HttpRequest::$pass_code.$transaction_timestamp);
		
		  try {
            $ch = curl_init($endPoint);
         
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($dataNextBee));
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'ts-key:' .$transaction_timestamp,'api-call-signature:'.$this->$api_call_signature
                ));
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POST,       true);
            $result = curl_exec($ch);
            curl_close($ch);
        
           return $result;
        }

        catch(Exception $error) {
            return ['success' => false, 'msg' => $error->message() ];
        };
	}

	//NextBee Get Member Referral Link
public function nextBeeReferralLink($endPoint,$dataNextBee) { 
		  $transaction_timestamp=time()*1000;
		
		$this->$api_call_signature=MD5(HttpRequest::$api_auth_key.HttpRequest::$pass_code.$transaction_timestamp);
		
		  try {
            $ch = curl_init($endPoint);
         
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($dataNextBee));
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'ts-key:' .$transaction_timestamp,'api-call-signature:'.$this->$api_call_signature
                ));
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POST,       true);
            $result = curl_exec($ch);
            curl_close($ch);
        
           return $result;
        }

        catch(Exception $error) {
            return ['success' => false, 'msg' => $error->message() ];
        };
	}


public function curlCall($endPoint, $data) {
     
      $this->$api_call_signature=MD5(HttpRequest::$api_auth_key.HttpRequest::$pass_code.$transaction_timestamp);
//echo $endPoint . '?' . http_build_query($data);
        try {
            $ch = curl_init($endPoint . '?' . http_build_query($data));
         
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
           curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'ts-key:' .$transaction_timestamp,'api-call-signature:'.$this->$api_call_signature
                ));;
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POST,       true);
            $result = curl_exec($ch);
            curl_close($ch);
		

           return  $result;
        }

        catch(Exception $error) {
            return ['success' => false, 'msg' => $error->message() ];
        };
    }

 public function orderRestartDate($oredrCreatedDate){
    	//02/05/2020
      $oredrCreatedDate=strtotime($oredrCreatedDate);
      $currentDateTime = new DateTime( 'now', new DateTimeZone( 'America/New_York' ) );
      $currentDateTimeTimestamp = strtotime( $currentDateTime->format('m/d/Y') );
      $beforethirtydays=strtotime('-30 days',$currentDateTimeTimestamp);
      if($oredrCreatedDate>$beforethirtydays){
        $orderRestartDate=date('m/d/Y',strtotime('+1 month',$oredrCreatedDate));
      }else{
         $orderRestartDate=date('m/d/Y',strtotime('+1 days',$currentDateTimeTimestamp));
      }
      // echo "oredrCreatedDate<pre>";
      // print_r($oredrCreatedDate);
      // echo "</pre>";
      // echo "currentDateTimeTimestamp<pre>";
      // print_r($currentDateTimeTimestamp);
      // echo "</pre>";
      // echo "<pre>";
      // print_r(strtotime('-30 days',$currentDateTimeTimestamp));
      // echo "</pre>";
      // echo "orderRestartDate<pre>";
      // print_r($orderRestartDate);
      // echo "</pre>";
      // die;

      return $orderRestartDate;


}


public static function generatePassword($length = 9)
	{
		$string = 'abcdefghijklmnopqrstuvwxyz';
		$string .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$string .= '1234567890';

		$password = array();
		$stringLength = strlen($string) - 1;

		for ($ii = 0; $ii < $length; $ii++)
		{
			$index = rand(0, $stringLength);
			$password[] = $string[$index];
		}

		return implode($password);
	}

public static function memberDetails( $method, $postdata = array() ) { 
		if(!empty($postdata)){
		   	$postdata['loginId']=HttpRequest::$userName;
			$postdata['password']=HttpRequest::$password;
		   }

		if( empty( $method ) || empty( $postdata ) ) {
			return;
		} 

		

		$request = 'https://api.konnektive.com/'. $method . '/';

		$ch = curl_init();

		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_TIMEOUT, 180);
		curl_setopt($ch, CURLOPT_URL, $request);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		if( !empty( $postdata ) ) {
			curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
		}

		$response = curl_exec($ch);
		$response=json_decode($response,true);
		$datrow=$response['message']['data'];
		//
	
		foreach($datrow as $key =>$val ){
           if($datrow[$key]['campaignName']=='Sunday Scaries'){
           	$response=$val;
           }
           else{
           	$response='';
           }
	   
		}
		
		

		return $response;
	}






    
}

