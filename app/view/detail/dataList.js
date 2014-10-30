Ext.define('vts.view.detail.dataList', {
	extend		: 'Ext.panel.Panel',
	xtype   	: 'xdetail',
	requires	: ['vts.view.detail.visualData','vts.store.WsData'],
    
    layout: {
        type	: 'hbox',
        align	: 'stretch'
    	},

    items: [{               
		xtype	: 'gridpanel',
		title   : 'Data List',
		store	: Ext.StoreMgr.lookup('WsData'),
			columns: [{
                    text : 'Time',
                    dataIndex :'data_time'
                    },{
                        text    : 'Data Satelit',
                        align   : 'center',
                        width   : 'auto',
                            items : [{
                                xtype : 'gridcolumn',
                                text : 'Latitude',
                                dataIndex : 'lat'
                            },{
                                xtype : 'gridcolumn',
                                text : "longitude",
                                dataIndex : 'lon'
                            },{
                                xtype : 'gridcolumn',
                                text : "speed",
                                dataIndex : 'speed'
                            },{
                                xtype : 'gridcolumn',
                                text : "heading",
                                dataIndex : 'heading'
                            	}],
                         	},{
                        text	: 'Data Engine#1',
                        align	: 'center',
                        width	: 'auto',
                          	items : [{
                          		xtype : 'gridcolumn',
                          		text : 'rpm#1',
                          		dataIndex : 'rpm1'
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'prop#1',
                          		dataIndex : 'prop1'
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'flowmeter#1',
                          		dataIndex : 'flow1_olah'
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'overflow#1',
                          		dataIndex : 'overflow1_olah'
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'temp#1',
                          		dataIndex : 'temp1'
                          	},{
                          		xtype : 'gridcolumn',
                          		text : 'press#1',
                          		dataIndex : 'press1'
                          		}],
                          	},{
                        text	: 'Data Engine#2',
                       	align	: 'center',
                       	width	: 'auto',
                       		items : [{
                        		xtype : 'gridcolumn',
                        		text : 'rpm#2',
                        		dataIndex : 'rpm2'
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'prop#2',
                        		dataIndex : 'prop2'
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'flowmeter#2',
                        		dataIndex : 'flow2_olah'
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'overflow#2',
                        		dataIndex : 'overflow2_olah'
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'temp#2',
                        		dataIndex : 'temp2'
                        	},{
                        		xtype : 'gridcolumn',
                        		text : 'press#2',
                        		dataIndex : 'press2'
                        		}],
                          	},{
                          	text	: 'Data Genset',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
                          			xtype : 'gridcolumn',
                          			text : 'Runhour#1',
                          			dataIndex : 'runhour1_olah'
                          		},{
                          			xtype : 'gridcolumn',
                          			text : 'Runhour#2',
                          			dataIndex : 'runhour2_olah'
                          			}],
                          		},{
                          	text	: 'Data Panel',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
                          			xtype : 'gridcolumn',
                          			text : 'Battery',
                          			dataIndex : 'battery'
                          		},{
                          			xtype : 'gridcolumn',
                          			text : 'Charger',
                          			dataIndex : 'charger'
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