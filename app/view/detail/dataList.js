Ext.define('vts.view.detail.dataList', {
	extend		: 'Ext.panel.Panel',
	xtype   	: 'xdetail',
	requires	: ['vts.view.detail.visualData','vts.store.WsData'],
    
    layout: {
        type	: 'hbox',
        align	: 'stretch'
    	},

    items: [{               
		store	: 'WsData',
    xtype : 'grid',
    title   : 'Data List',
			columns: [{
                    text : 'Time',
                    dataIndex :'data_time'
                    },{
                        text    : 'Data Satelit',
                        align   : 'center',
                        width   : 'auto',
                            items : [{
                                text : 'Latitude',
                                width : 100,
                                dataIndex : 'lat'
                            },{
                                text : "longitude",
                                dataIndex : 'lon'
                            },{
                                text : "speed",
                                dataIndex : 'speed'
                            },{
              
                                text : "heading",
                                dataIndex : 'heading'
                            	}],
                         	},{
                        text	: 'Data Engine#1',
                        align	: 'center',
                        width	: 'auto',
                          	items : [{
            
                          		text : 'rpm#1',
                          		dataIndex : 'rpm1'
                          	},{
            
                          		text : 'prop#1',
                          		dataIndex : 'prop1'
                          	},{
            
                          		text : 'flowmeter#1',
                          		dataIndex : 'flow1_olah'
                          	},{
            
                          		text : 'overflow#1',
                          		dataIndex : 'overflow1_olah'
                          	},{
            
                          		text : 'temp#1',
                          		dataIndex : 'temp1'
                          	},{
            
                          		text : 'press#1',
                          		dataIndex : 'press1'
                          		}],
                          	},{
                        text	: 'Data Engine#2',
                       	align	: 'center',
                       	width	: 'auto',
                       		items : [{
          
                        		text : 'rpm#2',
                        		dataIndex : 'rpm2'
                        	},{
          
                        		text : 'prop#2',
                        		dataIndex : 'prop2'
                        	},{
          
                        		text : 'flowmeter#2',
                        		dataIndex : 'flow2_olah'
                        	},{
          
                        		text : 'overflow#2',
                        		dataIndex : 'overflow2_olah'
                        	},{
          
                        		text : 'temp#2',
                        		dataIndex : 'temp2'
                        	},{
          
                        		text : 'press#2',
                        		dataIndex : 'press2'
                        		}],
                          	},{
                          	text	: 'Data Genset',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
              
                          			text : 'Runhour#1',
                          			dataIndex : 'runhour1_olah'
                          		},{
              
                          			text : 'Runhour#2',
                          			dataIndex : 'runhour2_olah'
                          			}],
                          		},{
                          	text	: 'Data Panel',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
              
                          			text : 'Battery',
                          			dataIndex : 'battery'
                          		},{
              
                          			text : 'Charger',
                          			dataIndex : 'charger'
                          			}],
                          		},{
                          	text	: 'Data Source',
                          	align	: 'center',
                          	width	: 'auto',
                          		items : [{
              
                          			text : 'ID Kapal',
                          			dataIndex : ''
                          		},{
              
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