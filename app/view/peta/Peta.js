/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.Peta', {
	extend		: 'Ext.tab.Panel',
	xtype		: 'xpeta',
	requires	: [				],	
	
    tabPosition	: 'left',
	items: [{
        title	: 'SHIP - MAP VIEW', 
		//layout	: 'border',
		iconCls	: 'tab-map',
		xtype	: 'panel',
		layout	: 'border',
		items		: [{
			region	: 'center',
			xtype	: 'panel',
			
		},{
			region	: 'west',
			title	: 'Ship List',
			collapsible	: true,
			xtype	: 'd_peta',
			width	: 200,
			split	: true
		}]
		
	}, {
		title	: 'SHIP - DETAIL DATA', 
		layout: 'fit', 
		id: 'detail_tab',
		iconCls: 'ship_detail'
		
    },{
		title: 'DAILY REPORT', 
		layout: 'fit',  
		id: 'analisis_tab',
		iconCls: 'report',
		//xtype : 'xtgl'
		//items: [ panel_hitung ],
	}]
});
