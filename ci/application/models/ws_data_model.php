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
<<<<<<< HEAD
    	$q = $this->db->query("SELECT * FROM data LIMIT 30");
=======
    	$q = $this->db->query("SELECT * FROM data GROUP BY id_titik_ukur LIMIT 30");
>>>>>>> f043780d945f9235c4d2023432d6a245f90b86b3
    	return $q;
    }
}