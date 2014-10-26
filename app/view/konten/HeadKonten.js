Ext.define('vts.view.konten.HeadKonten', {
    extend	: 'Ext.panel.Panel',
    xtype 	: 'hKonten',

    requires	: [
    	'vts.view.konten.DateInfo'
    ],

    layout	: 'hbox',

    items	: [{

    	xtype	: 'component',
    	id		: 'app-header-title',
    	html	: document.title,
    	flex 	: 1,
    	
    },{
    	xtype	: 'vtsdateinfo'

    }]
})