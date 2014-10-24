<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Data_ship extends CI_Model {
 
    function __construct()
    {
        parent::__construct();
		//$this->load->database();
    }

	function getShip()
    {
        //$this->db->select('id_ship, modem_id');
		$query = $this->db->get('ship');
        return $query;
	}
	
	function jmlDataTime($waktu,$kapal){
		$sql = "select data_time from data where data_time = ? and id_ship= ? ";
		$query = $this->db->query($sql, array($waktu , $kapal));
		return $query;
	}
	
	function parsingRef($ship){
		$sql = "SELECT id_tu FROM parsing_ref where id_ship = ? and urutan_data_monita > 1 order by urutan_data_monita ";
		$query = $this->db->query($sql, array($ship));
		return $query;
	}
	
		

}
?>