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
    {
		align   : 'left',
		title   : 'Daily Summary',
		flex : 1,
        split   : true,
        items :[{
                html : '<style type="text/css">table.total_daily {font-family: verdana,arial,sans-serif;font-size:12px;text-align: center;color:#333333;border-width: 1px;border-color: #a9c6c9;border-collapse: collapse;}table.total_daily td {border-width: 1px;padding: 4px;border-style: solid;border-color: #a9c6c9;}</style><table width="100%" class="total_daily"><tbody><tr><td colspan="2">Total Daily Fuel</td></tr><tr><td colspan="2" style="font-size:22px;">NaN Liters</td></tr><tr><td>Engine#1</td><td>Engine#2</td></tr><tr><td><span style="font-size:18px;">NaN Liters</span></td><td><span style="font-size:18px;">NaN Liters</span></td></tr><tr><td colspan="2"></td></tr><tr><td colspan="2">Genset Daily Running Hours</td></tr><tr><td>genset#1</td><td>genset#2</td></tr><tr><td><span style="font-size:18px;">0 Hours</span></td><td><span style="font-size:18px;">0 Hours</span></td></tr></tbody></table>'
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