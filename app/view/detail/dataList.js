Ext.define('vts.view.detail.dataList', {
	extend		: 'Ext.panel.Panel',
	xtype   	: 'xdetail',
	requires	: ['vts.view.detail.visualData'],
    
    layout: {
        type	: 'hbox',
        align	: 'stretch'
    	},

    items: [{               
		xtype	: 'gridpanel',
		title   : 'Data List',
		// store	: 'WsData',
			columns: [{
                    text : 'Time',
                    dataIndex :''
                    },{
                        text    : 'Data Satelit',
                        align   : 'center',
                        width   : 'auto',
                            items : [{
                                xtype : 'gridcolumn',
                                text : 'Latitude',
                                dataIndex : ''
                            },{
                                xtype : 'gridcolumn',
                                text : "longitude",
                                dataIndex : ''
                            },{
                                xtype : 'gridcolumn',
                                text : "speed",
                                dataIndex : ''
                            },{
                                xtype : 'gridcolumn',
                                text : "heading",
                                dataIndex : ''
                            	}],
                         	},{
                        text	: 'Data Engine#1',
                        align	: 'center',
                        width	: 'auto',
                          	items : [{
                          		xtype : 'gridcolumn',
                          		text : 'rpm#1',
                          		dataIndex : ''
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'prop#1',
                          		dataIndex : ''
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'flowmeter#1',
                          		dataIndex : ''
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'overflow#1',
                          		dataIndex : ''
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'temp#1',
                          		dataIndex : ''
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'press#1',
                          		dataIndex : ''
                          		}],
                          	},{
                        text	: 'Data Engine#2',
                       	align	: 'center',
                       	width	: 'auto',
                       		items : [{
                        		xtype : 'gridcolumn',
                        		text : 'rpm#2',
                        		dataIndex : ''
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'prop#2',
                        		dataIndex : ''
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'flowmeter#2',
                        		dataIndex : ''
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'overflow#2',
                        		dataIndex : ''
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'temp#2',
                        		dataIndex : ''
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'press#2',
                        		dataIndex : ''
                        		}],
                          	},{
                          	text	: 'Data Genset',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
                          			xtype : 'gridcolumn',
                          			text : 'Runhour#1',
                          			dataIndex : ''
                          		},{
                          			xtype : 'gridcolumn',
                          			text : 'Runhour#2',
                          			dataIndex : ''
                          			}],
                          		},{
                          	text	: 'Data Panel',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
                          			xtype : 'gridcolumn',
                          			text : 'Battery',
                          			dataIndex : ''
                          		},{
                          			xtype : 'gridcolumn',
                          			text : 'Charger',
                          			dataIndex : ''
                          			}],
                          		},{
                          	text	: 'Data Source',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
                          			xtype : 'gridcolumn',
                          			text : 'ID Kapal',
                          			dataIndex : ''
                          		},{
                          			xtype : 'gridcolumn',
                          			text : 'ID Modem',
                          			dataIndex : ''
                          			}]
                          	}],
    flex : 1
				},{
					xtype	: 'splitter'   		
				},{                    
					xtype	: 'xdetail2',
					flex: 2            
					}]
})