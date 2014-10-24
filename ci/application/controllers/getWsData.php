<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
* @author : Sony Surahman
*/
class getWsData extends CI_Controller
{
	
	function __construct()
	{
        parent::__construct();
		$this->load->model('ws_data_model');
	}
	public function index()
	{
		try {
			$q = $this->ws_data_model->getData();
			/*foreach ($q->result() as $row) {
				$data[] = array(
						"id_data" => $row->id_data,
						"id_tu" => $row->id_titik_ukur,
						"value" => $row->value
					);
			}*/
			$hasilJson = array(
					"success " => true,
					"data" => $q
				);

			
		} catch (Exception $e) {
			echo 'Caught exception: ',  $e->getMessage();
		}
		//$this->load->view('transpose');
		echo json_encode($hasilJson);
	}
}