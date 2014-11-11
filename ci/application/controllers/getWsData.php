<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class getWsData extends CI_Controller {
	function __construct() {
        parent::__construct();
        $this->load->model('ws_data_model');
    }

	public function index()
	{		
		try {
			$query = $this->ws_data_model->getData();
		foreach ($query as $row)
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

	public function index2()
	{		
		try {
			$query = $this->ws_data_model->getDat();
		foreach ($query as $row)
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

	public function index3()
	{		
		try {
			$query = $this->ws_data_model->getShip();
		foreach ($query as $row)
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

	// public function getThnSap()
	// {
	// 	try{
	// 		$this->load->model('sap');
	// 		$tgl = isset($this->input->get('tgl'))$this->input->get('tgl'):date('Y-m-d');
	// 		$jsonResult = array(
	// 			'success' => true,
	// 			'sapthn' => $this->sap->get_tahun($tgl)
	// 			);
	// 		}
	// 	catch (Exception $e) {
	// 		$jsonResult = array(
	// 			'success' => false,
	// 			'massage' => $e->getMessage()
	// 			);
	// 		}
	// 		echo json_encode($jsonResult);
	// }

//Fungsi-fungsi convert yang di panggil dari helper\\
//================================================\\
		function lon(){
			$this->load->helper('convert');
			lon();
		}
		function lat(){
			$this->load->helper('convert');
			lat();
		}
//================================================\\

}