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
   		title : 'HAHAH',
    	align : 'stretch',
		split	: true,
		bodyPadding : 5,
		html : '<h1>Test Atas</h1>',
		flex : 2
    }]
})