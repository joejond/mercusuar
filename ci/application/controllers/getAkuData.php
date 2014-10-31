<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class getAkuData extends CI_Controller {
	function __construct() {
        parent::__construct();
        $this->load->model('aku_data_model');
    }
	public function index()
	{		try {
			$query = $this->aku_data_model->getData();
			foreach ($query->result() as $row)
			{
			   $ship[] = array(
			   		"tanggal" =>$row->tanggal,
			   		"jam" =>$row->jam,
			   		"rpm1_avg" =>$row->rpm1_avg,
			   		"prop1_avg" =>$row->prop1_avg,
			   		"flow1_tot" =>$row->flow1_tot,
			   		"overflow1_tot" =>$row->overflow1_tot,
			   		"temp1_avg" =>$row->temp1_avg,
			   		"press1_avg" =>$row->press1_avg,
			   		"rpm2_avg" =>$row->rpm2_avg,
			   		"prop2_avg" =>$row->prop2_avg,
			   		"flow2_tot" =>$row->flow2_tot,
			   		"overflow2_tot" =>$row->overflow2_tot,
			   		"temp2_avg" =>$row->temp2_avg,
			   		"press2_avg" =>$row->press2_avg,
			   		"runhour1" =>$row->runhour1,
			   		"runhour2" =>$row->runhour2,
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