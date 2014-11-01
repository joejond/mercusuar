Ext.define('vts.view.detail.Detail', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdetail',
    
    layout: {
        type	: 'hbox',
        align	: 'stretch'
    },

    items: [{               
		xtype	: 'gridpanel',
		title   : 'Data List',
		// store	: 'WsData',
			columns: [
                        {
                        	text : 'Time',
                        	dataIndex :''
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
                        }],	
			flex: 1 
		},{
			xtype: 'splitter'   		
		},{                    
			title: 'Ship Data View',
			bodyPadding: 5,
				items: [{
					fieldLabel: 'Kapal'
					}], 
			flex: 2            
	}]
})