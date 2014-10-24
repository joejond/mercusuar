Ext.define('vts.view.daily.Daily', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdaily',
	width: 1366,
	region : 'center',
	layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
   	},
    items: [
    {               // Results grid specified as a config object with an xtype of 'grid'
		layout  : 'hbox',
		align   : 'left',
		title   : 'Daily Summary',
		split	: true,
		
		items   : [{
			
			html    : '<style>table.tableT{height:100%;width:100%;max-width:317px;min-width:317px;}table.tableT tr td{border:solid 1px;}table.tableT tr td,table tr td h3,table.tableT tr td h4,table.tableT tr td h1,table.tableT tr td h2,table.tableT tr td h3{text-align:center;margin:5px;padding:1px;}</style><table style="position:relative;overflow:visible;align:center;" class="tableT" align="center"><tr><td colspan="2">Total Daily Fuel</td></tr><tr><td colspan="2" valign="middle"><h3>NaN Liters</h3></td></tr><tr><td>Engine #1</td><td>Engine #2</td></tr><tr><td><h4>NaN Liters</h4></td><td><h4>NaN Liters</h4></td></tr><tr><td colspan="2"></td></tr><tr><td colspan="2">Genset Daily Running Hours</td></tr><tr><td>Genset #1</td><td>Genset #2</td></tr><tr><td>0 Hours</td><td>0 Hours</td></tr></table>'
		}]
		}, {
			xtype: 'splitter'   // A splitter between the two child items
		}, {                    // Details Panel specified as a config object (no xtype defaults to 'panel').
			title: 'Akumulasi Data Flow Meter',
			bodyPadding: 5,
			align : 'right',
			layout : 'hbox',
				xtype: 'grid',
				columns: [
						{
							text : "Ini row atas",

						},{
							text	: "Id Data", 
							//hidden	: true,
							width	: 100, 
							dataIndex: 'id_data',
							// xtype	: 'checkcolumn'
						},{
							text	: "Id Titik Ukur", 
							//hidden	: true,
							width	: 80, 
							dataIndex: 'id_tu',
						},{
							text	: "Value", 
							width	: 150, 
							dataIndex: 'value'
						}],
			 // An array of form fields
			flex: 2             // Use 2/3 of Container's height (hint to Box layout)
	}]
});