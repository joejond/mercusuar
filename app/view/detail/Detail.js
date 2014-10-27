Ext.define('vts.view.detail.Detail', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdetail',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [{               // Results grid specified as a config object with an xtype of 'grid'
		xtype	: 'grid',
		title   : 'Data List',
		store	: 'WsData',
		columns: [{
			text	: "Id Data", 
			//hidden	: true,
			width	: 100, 
			dataIndex: 'id_data',
			// xtype	: 'checkcolumn'
		},{
			text	: "Id Titik Ukur", 
			//hidden	: true,
			width	: 80, 
			dataIndex: 'id_titik_ukur',
		},{
			text	: "Value", 
			width	: 150, 
			dataIndex: 'value'
		},{
			text	: "Id Trip",  
			dataIndex: 'id_trip'
		},{
			text	: "Data Time",  
			dataIndex: 'data_time'
		},{
			text	: "Year",  
			dataIndex: 'year'
		},{
			text	: "Month",  
			dataIndex: 'month'
		},{
			text	: "Day",  
			dataIndex: 'day'
		},{
			text	: "Hour",  
			dataIndex: 'hour'
		},{
			text	: "Minute",  
			dataIndex: 'minute'
		}
		],	// One header just for show. There's no data,
			flex: 1                                       // Use 1/3 of Container's height (hint to Box layout)
		}, {
			xtype: 'splitter'   // A splitter between the two child items
		}, {                    // Details Panel specified as a config object (no xtype defaults to 'panel').
			title: 'Ship Data View',
			bodyPadding: 5,
			items: [{
				fieldLabel: 'Data item',
				xtype: 'textfield'
			}], // An array of form fields
			flex: 2             // Use 2/3 of Container's height (hint to Box layout)
	}]
})