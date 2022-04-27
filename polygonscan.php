

$hash = '0x2f07f36176409eff4442c76520b938e288c3494de57f3de9decbd1abc5ccb73e';
    // transaction hash to find its status 
    
$API = 'https://api-testnet.polygonscan.com/api?module=transaction&action=gettxreceiptstatus&txhash='.$hash.'&apikey=CT3YM4K58YF4URCWY8XX47WAFYXWRUQRUQ';  
    // apikey after registering depends on plan we subscribe to

$response = file_get_contents($API);
$response = json_decode($response);
 
print_r($response->result->status);

