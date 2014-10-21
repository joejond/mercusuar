<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class getShip extends CI_Controller {
	function __construct() {
        parent::__construct();
		$this->load->model('dataship');
    }
	public function index()
	{
		try {
			$query = $this->dataship->getShip();
			foreach ($query->result() as $row)
			{
			   $ship[] = array(
					"id"=>$row->id_ship,
					"name"=>$row->name);
			}
			
			$jsonResult = array(
						'success' => true,
						'ship' => $ship
					);
			echo json_encode($jsonResult);
			
			
		}
		catch(Exception $e){
			echo 'Caught exception: ',  $e->getMessage();
		}
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */