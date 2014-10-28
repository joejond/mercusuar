/**
* Jono Juli 2014
*/
Ext.define('vts.view.konten.IsiKonten', {
	extend		: 'Ext.tab.Panel',
	xtype		: 'isikonten',
	requires	: [
		'vts.view.peta.dPeta',
		'vts.view.detail.Detail',
		'vts.view.daily.dailySummary',
		'vts.view.daily.Akumulasi',
		'vts.view.daily.Chart',
		'vts.view.coba.Toolbar'
	],	
	
    tabPosition	: 'left',
	items: [{
        title	: 'SHIP - MAP VIEW', 
		//layout	: 'border',
		iconCls	: 'tab-map',
		xtype	: 'panel',
		layout	: {
			type : 'border',
			align : 'stretch'
		},
		items		: [{
			region	: 'center',
			xtype	: 'panel',
			
		},{
			region	: 'west',
			title	: 'Vessel Navigation',
			collapsible	: true,
			collapsed	: true,
			xtype	: 'd_peta',
			// xtype	: 'panel',
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
			xtype   : 'panel',
					    
		},{
			region	: 'north',
			xtype	: 'xtoolbar',
		},{
			region	: 'west',
			// xtype	: 'panel',
			xtype	: 'xdetail',
			width	: '100%',
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
			xtype	: 'xchart',
		},{
			region	: 'west',
			xtype	: 'xdaily',
		},{
			region	: 'west',
			xtype	: 'xdaily2',
		}]
		//xtype : 'xtgl'
		//items: [ panel_hitung ],
	}]

});
