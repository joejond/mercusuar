Ext.define('vts.view.daily.Akumulasi', {
    extend      : 'Ext.panel.Panel',
    xtype       : 'xdaily2',

    title	: 'Akumulasi Data Flowmeter',
    width	: '100%',
    height	: '50%',
	
    	items : [{
    		xtype	: 'gridpanel',
    			columns : [{
    				text : 'Date',
    				dataIndex : ''
    			},{
    				text : 'Hour',
    				dataIndex : ''
    			},{
    				text : 'Engine#1',
    				align : 'center',
    				width : 'auto',
    					items : [{
    						xtype : 'gridcolumn',
    						text : 'Engine#1 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Propeler#1 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Flowmeter (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Overflow#1 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Temperature#1 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Pressure#1 (avg)',
    						dataIndex : ''
    					}],
    			},{
    				text : 'Engine#2',
    				align : 'center',
    				width : 'auto',
    					items : [{
    						xtype : 'gridcolumn',
    						text : 'Engine#2 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Propeler#2 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Flowmeter (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Overflow#2 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Temperature#2 (avg)',
    						dataIndex : ''
    					},{
    						xtype : 'gridcolumn',
    						text : 'Pressure#2 (avg)',
    						dataIndex : ''
    					}],
    			}],
    	}]
})