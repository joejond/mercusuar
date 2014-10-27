Ext.define('vts.view.daily.Daily2', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdaily2',
	requires : ['vts.view.coba.Chart','Ext.ux.*','Ext.chart.Chart','Ext.chart.axis.Time','Ext.chart.axis.Category','Ext.chart.series.Line','Ext.layout.container.Table'],
	width: 1366,
	region : 'center',
	split  : true,
   	items : [{
   		title : 'Data Chart',
    	// align : 'stretch',
		// split	: true,
		// bodyPadding : 5,
		// flex : 2,
		// height : 317,
		items : [{
			xtype : 'chart',
			height: 327,
			layout : 'fit',
			extend : 'Ext.chart.Chart',
    		theme: 'Green',
			store: 'store',
			axes: [
			        {
			            title: 'Temperature',
			            type: 'Numeric',
			            position: 'left',
			            fields: ['temperature'],
			            minimum: 0,
			            maximum: 100
			        },
			        {
			            title: 'Time',
			            type: 'Time',
			            position: 'bottom',
			            fields: ['date'],
			            dateFormat: 'ga'
			        }
			    ],
			series: [
				        {
				            type: 'line',
				            xField: 'date',
				            yField: 'temperature'
				        }
				    ]
		}]
    }]
})