<?php 
 function DECtoDMS($dec)
    {
    $vars = explode(".",$dec);
    $deg = $vars[0];
    $tempma = "0.".$vars[1];

    $tempma = $tempma * 3600;
    $min = floor($tempma / 60);
    $sec = $tempma - ($min*60);

    return array("deg"=>$deg,"min"=>$min,"sec"=>$sec);


    }  
    $fun= 43.676;
        echo DECtoDMS($fun);
 ?>