<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Aku_data_model extends CI_Model {
 
    function __construct()
    {
        parent::__construct();
        //$this->load->database();
    }

    function getData()
    {
        //$this->db->select('id_ship, modem_id');
        // $this->db->limit(data,30);
        $query = $this->db->get('data_perjam',30,30);
        return $query;
    }
    
        

}
?>