<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Ws_data_model extends CI_Model
{
    
    function __construct()
    {
        parent::__construct();
        //$this->load->database();
    }
    public function getData()
    {
        
        $q = $this->db->get('data',30,30);
        return $q -> result();
	
	function __construct()
    {
        parent::__construct();
		//$this->load->database();
    }
    public function getData()
    {
    	$q = $this->db->query("SELECT * FROM data GROUP BY id_titik_ukur LIMIT 30");
    	return $q;
    }
}