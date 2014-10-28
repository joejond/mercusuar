Ext.define('vts.view.detail.Detail', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdetail',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{               // Results grid specified as a config object with an xtype of 'grid'
		xtype	: 'gridpanel',
		title   : 'Data List',
		// store	: 'WsData',
		columns: [
                        {
                            text : "Time",
                        },{
                            text    : 'Data Satelit',
                            align   : 'center',
                            width   : 'auto',
                                items : [{
                                    xtype : 'gridcolumn',
                                    text : 'Latitude',
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "longitude",
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "speed",
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "heading",
                                    dataIndex : '',
                                }]
                        },{
                        	text	: 'Data Engine#1',
                        	align   : 'center',
                            width   : 'auto',
                            	items : [{
                            		 xtype : 'gridcolumn',
                                    text : 'rpm#1',
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "prop#1",
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "flowmeter#1",
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "overflow#1",
                                    dataIndex : '',
                            	},{
                                    xtype : 'gridcolumn',
                                    text : "temp#1",
                                    dataIndex : '',
                            	},{
                                    xtype : 'gridcolumn',
                                    text : "press#1",
                                    dataIndex : '',
                            	}]
                            	},{
                        	text	: 'Data Engine#2',
                        	align   : 'center',
                            width   : 'auto',
                            	items : [{
                            		 xtype : 'gridcolumn',
                                    text : 'rpm#2',
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "prop#2",
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "flowmeter#2",
                                    dataIndex : '',
                                },{
                                    xtype : 'gridcolumn',
                                    text : "overflow#2",
                                    dataIndex : '',
                            	},{
                                    xtype : 'gridcolumn',
                                    text : "temp#2",
                                    dataIndex : '',
                            	},{
                                    xtype : 'gridcolumn',
                                    text : "press#2",
                                    dataIndex : '',
                            	}]
                        }],	// One header just for show. There's no data,
			flex: 1                                       // Use 1/3 of Container's height (hint to Box layout)
		}, {
			xtype: 'splitter'   // A splitter between the two child items
		}, {                    // Details Panel specified as a config object (no xtype defaults to 'panel').
			title: 'Ship Data View',
			bodyPadding: 5,
			items: [{
				fieldLabel: 'Kapal'
			}], // An array of form fields
			flex: 2             // Use 2/3 of Container's height (hint to Box layout)
	}]
})