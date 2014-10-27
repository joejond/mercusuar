Ext.define('vts.view.daily.Daily', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdaily',
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
            layout : 'hbox',
            xtype: 'grid',
			store	: 'WsData',
                columns: [
                        {
                            text : "Date",
                            align : 'center',
                            dataIndex : 'data_time'
                        },{
                            text    : "Hour",
                            align : 'center',
                            dataIndex : 'hour',
                            width : 60,
                        },{
                            text    : "Engine#1",
                            align : 'center',
                            width : 599,
                                items : [{
                                    xtype : 'gridcolumn',
                                    text : "Engine#1 (avg)",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Propeler#1 (avg)",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Flowmeter#1",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Overflow#1",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Temperature#1",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Pressure#1",
                                    
                                }]
                        },{
                            text    : "Engine#2", 
                            align : 'center',
                            width : 599,
                                items : [{
                                    xtype : 'gridcolumn',
                                    text : "Engine#2 (avg)",
                                    dataIndex : 'id_data'
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Propeler#2 (avg)",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Flowmeter#2",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Overflow#2",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Temperature#2",
                                    
                                },{
                                    xtype : 'gridcolumn',
                                    text : "Pressure#2",
                                    
                                }]
                        }], // An array of form fields
            flex: 2             // Use 2/3 of Container's height (hint to Box layout)
    }]
});