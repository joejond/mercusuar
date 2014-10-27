<?php 

class Login extends CI_Controller{

	function __construct()
	{
        parent::__construct();
		$this->load->model('m_login');
	}
	public function index()
	{
		if ($this->session->userdata('username')!="") {
			
		}else{
			$this->load->view('login_page');
		}
	}
	public function ceklogin()
	{
		$this->m_login->getLog();
	}
	public function logout()
	{
		$this->session->sess_destroy();
		redirect(site_url());
	}
}