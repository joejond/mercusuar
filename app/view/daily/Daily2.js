Ext.define('vts.view.daily.Daily2', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdaily2',
	width: 1366,
	region : 'center',
	split  : true,
	layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch',
   	},
   	items : [{
   		title : 'Data Chart',
    	align : 'stretch',
		split	: true,
		bodyPadding : 5,
		// xtype : 'xchart',
		height : 380,
    }]
})