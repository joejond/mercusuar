<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Ship extends CI_Controller {
	function __construct() {
        parent::__construct();
        $this->load->model('ship');
    }
	public function rShip()	{		
		try {
		
			$query = $this->ship->get_ship();
			// foreach ($query as $row)
			// {
			//    $ship[] = array(
			// 		'id'	=>$row->id_ship,
			// 		'nama'	=>$row->name,
			// 		'active'=>'false');
			// }
			
			$jsonResult = array(
						'success' => true,
						'ship' => $query
					);
			
			
			
		}
		catch(Exception $e){
			echo 'Caught exception: ',  $e->getMessage();
		}
		echo json_encode($jsonResult);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */