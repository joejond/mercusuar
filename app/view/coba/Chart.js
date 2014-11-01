Ext.define('vts.view.coba.Chart', {
	extend : 'Ext.panel.Panel',
	requires : ['Ext.ux.*','Ext.chart.Chart','Ext.chart.axis.Time','Ext.chart.axis.Category','Ext.chart.series.Line','Ext.layout.container.Table'],
	xtype : 'xchart',
	height: 250,
			width: 800,
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
})