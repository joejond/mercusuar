// <?php 

// function transpose($array) {
	
// $transposed_array = array(
// 		'id' => '1', 'nama' => 'Sony Surahman',
// 		'id' => '2', 'nama' => 'Sony sada',
// 		'id' => '3', 'nama' => 'Sony asd',
// 	);
// 	if ($array) {
// 		foreach ($array as $row_key => $row) {
// 		if (is_array($row) && !empty($row)) { //check to see if there is a second dimension
// 		foreach ($row as $column_key => $element) {
// 		$transposed_array[$column_key][$row_key] = $element;
// 		}
// 	}
// 	else {
// 		$transposed_array[0][$row_key] = $row;
// 	}
// 	}
// 		return $transposed_array;
// 	}
// }
// ?>

<?php 
$q = $this->ws_data_model->getData();
foreach ($q->result() as $rowD) {
	$rows[] = array(
		"id_data" => $rowD->id_data,
		"id_tu" => $rowD->id_titik_ukur
	);
}
$result = mysql_query("SELECT * FROM data GROUP BY id_titik_ukur LIMIT 3");
while($info=mysql_fetch_array($result)){
  foreach($info as $key=>$val)
  {
      $rows[$key][]=$val;
  }
}
foreach($rows as $header=>$row) // Grab the header names from each column
{
echo '<table>';
   echo "<tr><td>$header</td>";
  foreach($row as $cell)
  {
    echo "<td>$cell</td>";
  }
  echo '</tr>';
echo '</table>';
}
?>