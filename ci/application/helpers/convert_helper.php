<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
if ( ! function_exists('lat')) {
function lat(){
	$CI = get_instance();
	$CI->load->model('ws_data_model');
	$query = $CI->ws_data_model->getData();
		foreach ($query as $row)
		{	
			echo "<table><tr>";
			$dec = $row->lat."</td>";
			echo "</tr></table>";
			
			$vars = explode(".",$dec);
		    $deg = $vars[0];
		    $tempma = "0.".$vars[1];
		    $south = " S";
		    $north = " N";

		    $tempma = $tempma * 3600;
		    $min = floor($tempma / 60);
		    $sec = floor($tempma - ($min*60));

			$a = ltrim($deg,"-");
		    if ($a) {
				echo $deg.'&deg '.$min.'&#39; '.$sec.'&#34;'.$north;
			}else{
				echo substr($deg,1).'&deg '.$min.'&#39; '.$sec.'&#34;'.$south;
			}
		    // echo $deg.'&deg '.$min.'&#39; '.$sec.'&#34;'.'';
		}
	}
}
if ( ! function_exists('lon')) {
function lon(){
	$CI = get_instance();
	$CI->load->model('ws_data_model');
	$query = $CI->ws_data_model->getData();
		foreach ($query as $row)
		{	
			echo "<table><tr>";
			$dec = $row->lon."</td>";
			echo "</tr></table>";
			
			$vars = explode(".",$dec);
		    $deg = $vars[0];
		    $tempma = "0.".$vars[1];
		    $east = " E";
		    $west = " W";

		    $tempma = $tempma * 3600;
		    $min = floor($tempma / 60);
		    $sec = floor($tempma - ($min*60));

		    $a = ltrim($deg,"-");
		    if ($a) {
				echo $deg.'&deg '.$min.'&#39; '.$sec.'&#34;'.$east;
			}else{
				echo substr($deg,1).'&deg '.$min.'&#39; '.$sec.'&#34;'.$west;
			}
		    // echo $deg.'&deg '.$min.'&#39; '.$sec.'&#34; ';
		}
	}
}