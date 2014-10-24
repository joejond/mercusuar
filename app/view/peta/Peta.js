/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.Peta', {
	extend		: 'Ext.tab.Panel',
	xtype		: 'xpeta',
	requires	: ['vts.view.detail.Detail','vts.view.daily.Daily','vts.view.daily.Daily2','vts.view.coba.Toolbar'],	
	
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
		layout: 'border', 
		id: 'detail_tab',
		iconCls: 'ship_detail',

		items		: [{
			region	: 'center',
			xtype   : 'panel'
					    
		},{
			region	: 'north',
			xtype	: 'xtoolbar',
		},{
			region	: 'west',
			xtype	: 'xdetail',
			width	: 1366,
			split	: true
		}]
    },{
		title: 'DAILY REPORT', 
		layout: 'border',  
		id: 'analisis_tab',
		iconCls: 'report',
		items		: [
		{
			region	: 'center',
			xtype   : 'panel',
					    
		},{
			region	: 'north',
			xtype	: 'xtoolbar',
		},{
			region	: 'north',
			xtype	: 'xdaily2',
		},{
			region	: 'west',
			xtype	: 'xdaily',
		}]
		//xtype : 'xtgl'
		//items: [ panel_hitung ],
	}]

});
