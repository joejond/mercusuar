<?php

class Vessel extends CI_Controller {
	function __construct() {
        parent::__construct();
        $this->load->model('ws_data_model');
    }
	public function rShip()	{		
		try {
		
			$query = $this->ws_data_model->getShip();
			foreach ($query as $row)
			{
			   $ship[] = array(
					'id'	=>$row->id_ship,
					'nama'	=>$row->name,
					'active'=>true);
			}
			
			$jsonResult = array(
						'success' => true,
						'ship' => $ship
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