<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class getWsData extends CI_Controller {
	function __construct() {
        parent::__construct();
        $this->load->model('ws_data_model');
    }
	public function index()
	{		try {
			$query = $this->ws_data_model->getData();
			foreach ($query->result() as $row)
			{
			   $ship[] = array(
					"data_time" => $row->data_time,
					"lat" => $row->lat,
					"lon" => $row->lon,
					"speed" => $row->speed,
					"heading" => $row->heading,
	    			"rpm1" => $row->rpm1,
	    			"prop1" => $row->prop1,
	    			"flow1_olah" => $row->flow1_olah,
	    			"overflow1_olah" => $row->overflow1_olah,
	    			"temp1" => $row->temp1,
	    			"press1" => $row->press1,
	    			"rpm2" => $row->rpm2,
	    			"prop2" => $row->prop2,
	    			"flow2_olah" => $row->flow2_olah,
	    			"overflow2_tot" => $row->overflow2_tot,
	    			"temp2" => $row->temp2,
	    			"press2" => $row->press2,
	    			"runhour1_olah" => $row->runhour1_olah,
	    			"runhour2_olah" => $row->runhour2_olah,
	    			"battery" => $row->battery,
	    			"charger" => $row->charger,
    			);
			}
			
			$jsonResult = array(
						'success' => true,
						'data' => $ship
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