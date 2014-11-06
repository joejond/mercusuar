<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class dectodms extends CI_Controller {

	function longitude(){
		$q = $this->db->query("SELECT * FROM data_olah LIMIT 30");
		foreach ($q->result() as $row) {
			echo "<table><tr>";
			$dec = $row->lon."</td>";
			echo "</tr></table>";

			$vars = explode(".",$dec);
		    $deg = $vars[0];
		    $tempma = "0.".$vars[1];

		    $tempma = $tempma * 3600;
		    $min = floor($tempma / 60);
		    $sec = floor($tempma - ($min*60));

		    echo $deg.'&deg '.$min.'&#39; '.$sec.'&#34; E';
    }
}

	function latitude(){
		$q = $this->db->query("SELECT * FROM data_olah LIMIT 30");
		foreach ($q->result() as $row) {
			
			echo "<table><tr>";
			$dec = $row->lat."</td>";
			echo "</tr></table>";
			
			$vars = explode(".",$dec);
		    $deg = $vars[0];
		    $tempma = "0.".$vars[1];

		    $tempma = $tempma * 3600;
		    $min = floor($tempma / 60);
		    $sec = floor($tempma - ($min*60));

		 //    if (substr($dec,1)='-') {
			// 	echo $dec."S";
			// }
		    echo $deg.'&deg '.$min.'&#39; '.$sec.'&#34;'.'S';
	}
}

}