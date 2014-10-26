<?php

class Ship extends CI_Model {
	function get_ship(){
        //$this->db->select('id_ship, modem_id');
		$query = $this->db->get('ship');
        return $query->result();
	}
	
}

/* End of file option.php */
/* Location: ./application/models/option.php */
