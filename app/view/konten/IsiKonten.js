/**
* Jono Juli 2014
*/
Ext.define('vts.view.konten.IsiKonten', {
	extend		: 'Ext.tab.Panel',
	xtype		: 'isikonten',
	requires	: [
		'vts.view.peta.dPeta',
		'vts.view.detail.dataList',
		'vts.view.detail.visualData',
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
			region	: 'north',
			xtype	: 'xtoolbar'
		},{
			region	: 'west',	
			xtype	: 'xdetail',
			flex	: 1,
			split	: true,
		},{
			region	: 'center',
			xtype	: 'xdetail2',
			flex	: 2
		}]
    },{	
		title: 'DAILY REPORT', 
		layout: 'border',  
		id: 'analisis_tab',
		iconCls: 'report',
		items		: [{
			region	: 'north',
			xtype	: 'xtoolbar',
		},{
			region	: 'north',
			xtype	: 'xchart',
			split	: true
		},{
			region	: 'center',
			xtype	: 'xdaily2',
			flex	: 2
		},{
			region	: 'west',
			xtype	: 'xdaily',
			split	: true,
			flex	: 1
		}]
		//xtype : 'xtgl'
		//items: [ panel_hitung ],
	}]

});
