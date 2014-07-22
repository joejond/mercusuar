<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class getData extends CI_Controller {
	function __construct() {
        parent::__construct();
		$this->load->model('dataship');
    }
	public function index()
	{
		
		date_default_timezone_set("Asia/Makassar");
		
		function hexTo32Float($number)
		{
			$binfinal    = sprintf("%032b", hexdec($number));
			$sign        = substr($binfinal, 0, 1);
			$exp         = substr($binfinal, 1, 8);
			$mantissa    = "1" . substr($binfinal, 9);
			$mantissa    = str_split($mantissa);
			$exp         = bindec($exp) - 127;
			$significand = 0;
			
			for ($i = 0; $i < 24; $i++) {
				$significand += (1 / pow(2, $i)) * $mantissa[$i];
			}
			return $significand * pow(2, $exp) * ($sign * -2 + 1);
		}
		
		try{
		
			$query = $this->dataship->getShip();
			
			foreach ($query->result() as $row){
				$id_kapal = $row->id_ship;
				$id_modem = $row->modem_id;
				
				echo 'id_kapal : '.$id_kapal.' dan modemnya : '.$id_modem.'<br>';
				$dateambil = date('Y-m-d H:i:s', time() - (15 * 3600));
				
				$tgl_ambil	= date("Y-m-d", strtotime($dateambil));
				$jam_ambil 	= date("H", strtotime($dateambil)).':00:00';
				
				
				echo 'dateambil : '.$dateambil.'<br>';
				
				$url = "http://isatdatapro.skywave.com/GLGW/GWServices_v1/RestMessages.svc/get_return_messages.xml/?access_id=70000214&password=STSATI2010&from_id=1450235&mobile_id=".$id_modem."&start_utc=".$tgl_ambil."%20".$jam_ambil."";
				echo 'url modem : '.$url.'<br>';
				
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
				// This is what solved the issue (Accepting gzip encoding)
				curl_setopt($ch, CURLOPT_ENCODING, "gzip,deflate");
				$response = curl_exec($ch);
				curl_close($ch);
				
				$xml_data = simplexml_load_string($response);
				// echo 'xml_data :'.$response.'<br>';
				
				foreach ($xml_data->children() as $child1) {
					if ($child1->getName() == "Messages") {
						foreach ($child1->children() as $child2) {
							if ($child2->getName() == "ReturnMessage") {
								foreach ($child2->children() as $child3) {
									$x = ''; // ini penting
									if ($child3->getName() == "RawPayload") {
										//echo 'RawPayLoad : '.$child3 . "<br>";
									
										$a = base64_decode($child3);
										//echo 'a : '.$a.'<br>';
										foreach (str_split($a) as $c) {
											$b = sprintf("%08b", ord($c));
											//echo 'b : '.$b.' <br> ';
											$x = $x . $b;
											//echo 'x : '.$x.'<br>';
										}
										
										$x = substr($x, 16);
										//echo '$x1 : '.$x.'<br>';
										$x      = substr($x, 5);
										//echo '$x2 : '.$x.'<br>';
										$data1  = substr($x, 0, 32);
										//echo $data1 . " => <br>";
										$hex1   = '0x' . dechex(bindec($data1));
										//echo 'hex1 : '.$hex1 . " => <br>";
										$hasil1 = hexTo32Float($hex1);
										//echo 'hasil1 : '.$hex1 . " => <br>";
										$date1  = date('r', $hasil1);
										echo 'date1 : '.$date1 . " => <br>";
										
										$x = substr($x, 32);
										
										$tanggal = date("Y-m-d",strtotime($date1));
										$jam   = date("H", strtotime($date1));
										$waktu = date("YmdHis", strtotime($date1));
										
										$query = $this->dataship->jmlDataTime($waktu,$id_kapal);
										
										if ($query->num_rows() == 0){
											//echo 'Data kosong bro!! <br>';
											
											$parsing = $this->dataship->parsingRef($id_kapal);
											$no = 1;
											foreach ($parsing->result() as $r){
												
												$x     = substr($x, 5);
												$data = substr($x, 0, 32);
												$hex_data  = dechex(bindec($data));
												
												$hasil_parsing = round(hexTo32Float($hex_data), 6);
												if ($hasil_parsing < 0)
													$hasil_parsing = round(hexTo32Float($hex_data), 6);									
											
												$x   = substr($x, 32);
												
												echo 'titik ukur '.$no.' : '.$r->id_tu.' ==> value : '.$hasil_parsing.'<br>';
												$no++;
												$data_tu = array(
													'id_ship'=> $id_kapal,
													'data_time'=> $waktu,
													'id_titik_ukur' => $r->id_tu ,
													'value' => $hasil_parsing,
													
												);
												$this->db->insert('data', $data_tu);
											}
										}
										else {
											echo 'Data tidak ada yang baru <br>';
										}								
									}
								}
							}
						}
					}
				}
			}
		}
		catch(Exception $e){
			echo 'Caught exception: ',  $e->getMessage();
		}
	}
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */