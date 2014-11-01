Ext.define('vts.view.daily.Daily2', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdaily2',
	requires : ['vts.view.coba.Chart','Ext.ux.*','Ext.chart.Chart','Ext.chart.axis.Time','Ext.chart.axis.Category','Ext.chart.series.Line','Ext.layout.container.Table'],
	// width: '100%',
    // height: '60%',
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
		items : [{
			xtype : 'panel',
			}]
    }]
})