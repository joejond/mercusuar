/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.Peta', {
	extend		: 'Ext.tab.Panel',
	xtype		: 'xpeta',
	requires	: ['vts.view.detail.Detail','vts.view.daily.Daily','vts.view.daily.Daily2'],	
	
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
			region	: 'west',
			collapsible	: true,
			xtype	: 'xdetail',
			title   : 'ini toolbar nantinya',
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
			xtype	: 'xdaily2',
		},{
			region	: 'west',
			xtype	: 'xdaily',
		}]
		//xtype : 'xtgl'
		//items: [ panel_hitung ],
	}]

});
Ext.define('vts.view.peta.data', {
	extend		: 'Ext.form.Panel',
	xtype		: 'data',
	requires	: [
		'Ext.form.field.Checkbox',
		'Ext.form.field.Date',
		'Ext.grid.Panel',
		'Ext.layout.container.Form',
		'vts.view.peta.ListShip',
		
		//'vts.store.dPeta'
	],
	layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
	
	items:[    
    {                            
        height: 140,
        layout: 'form',
        id: 'simpleForm',
        padding: 10,
        frame: true,
        
		items: [
        {
            xtype: 'checkboxfield',
            name: 'checkbox1',
            boxLabel: 'show track path',
            listeners:{
                change: function(checkbox, newValue, oldValue, eOpts) {
                    if (newValue) {
                        Ext.getCmp('start_path').enable();
                        Ext.getCmp('stop_path').enable();
                        Ext.getCmp('button_update').enable();
                        status_path = 1;
                        //addpath();
                    } else {
                        Ext.getCmp('start_path').disable();
                        Ext.getCmp('stop_path').disable();
                        Ext.getCmp('button_update').disable();
                        status_path = 0;
                        //removepath();
                    }
                }
                
            }
        },{
            fieldLabel: 'Start Date',
            name: 'date',
            id: 'start_path',
            labelWidth: 70,
            xtype: 'datefield',
            value: new Date(),
            format: 'd-M-Y',
            disabled: true
        },{
            fieldLabel: 'Stop Date',
            name: 'date',
            id: 'stop_path',
            labelWidth: 70,
            xtype: 'datefield',
            value: new Date(),
            format: 'd-M-Y',
            disabled: true
        },
        {
            xtype: 'button',
            text : 'Update',
            id: 'button_update',
            disabled: true,
            handler : function() {
                //removepath();
                //addpath();
            }           
        }]
    },{
		xtype 	: 'list_ship'
		    
    }]
	
	
});
