<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Ws_data_model extends CI_Model {
 
    function __construct()
    {
        parent::__construct();
        //$this->load->database();
    }

    function getData()
    {
        //$this->db->select('id_ship, modem_id');
        $query = $this->db->get('data_olah');
        return $query;
    }
    
        

}
?>