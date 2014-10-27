<?php 
class M_Login extends CI_Model{
	public function getLog()
	{
		// $dataLogin = array(
		// 					'email' => $this->input->post('emailU'),
		// 					'password' => md5($this->input->post('passU')),
		// 					'status' => '1'
		// 					);
		// $q = $this->db->get_where('cp-user',$dataLogin);
		$u = $this->input->post('user');
		$p = $this->input->post('password');
		$q = $this->db->query("SELECT * FROM `user` WHERE username='$u' AND password='$p' ");
		if ($q->num_rows()>0) {
				$rowUser = $q->row();
				$session = array(
								'username' => $rowUser->username,
								);
				$this->session->set_userdata($session);
				$dataLogin[]= array('username' => $rowUser->username,'password'=> $rowUser->password);
				$jsonResult = array(
						'success' => true,
						'dataLogin' => $dataLogin
					);
			// echo json_encode($jsonResult);
			header("location:http://localhost/mercusuar?success=1");

		}else{
			echo "<script>alert('Username atau password salah !');location='javascript:history.go(-1);'</script>";
		}
		return $q;
	}

}