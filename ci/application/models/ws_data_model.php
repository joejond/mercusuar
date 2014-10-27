<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
* @author : Sony Surahman
*/
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
    }
}