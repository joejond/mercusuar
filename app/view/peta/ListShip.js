/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.ListShip', {
    extend	: 'Ext.grid.Panel',
	requires	: [
		'Ext.form.field.Checkbox',
		'Ext.grid.column.CheckColumn'
	],
	
	xtype	: 'list_ship',
	store	: 'Kapals',
	
	columns: [{
			// text	: "Id", 
			//hidden	: true,
			width	: 30, 
			dataIndex: 'active',
			
			xtype : 'checkcolumn'
		},{
			text	: "Ship Name", 
			flex 	: 1, 
			dataIndex: 'nama'
		}],
		
	//initConfig : 
	
	
	
})

