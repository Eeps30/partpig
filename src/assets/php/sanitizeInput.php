<?php

function sanitizeInput($data, $options=[]){
	$defaults = ['whitespaceTrim'=>true, 'removeQuotes'=>true,'removeHTML'=>true];
	forEach($defaults as $key=>$value){
		if(empty($options[$key])){
			$options[$key] = $value;
		}
	}
    if($options['whitespaceTrim']){
    	$data = trim($data);
    }
    if($options['removeQuotes']){
    	$data = addslashes($data);
    }
    if($options['removeHTML']){
    	$data = htmlspecialchars($data);
    }    
    return $data;
}

?>

