<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Ws_data_model extends CI_Model {
 
    function __construct()
    {
        parent::__construct();
        //$this->load->database();
    }
    //=====================================================\\
    function getData()
    {
        $query = $this->db->get('data_olah',30);
        return $query->result();
        //$this->db->select('id_ship, modem_id');
        // $this->db->limit(data,30);
    }
    function getDat()
    {
        $query = $this->db->get('data_perjam',30);
        return $query->result();
        //$this->db->select('id_ship, modem_id');
        // $this->db->limit(data,30);
    }
    function getShip()
    {
        $query = $this->db->get('ship');
        return $query->result();
        //$this->db->select('id_ship, modem_id');
    }
    //=====================================================\\
}