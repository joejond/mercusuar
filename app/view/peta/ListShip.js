/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.ListShip', {
    extend	: 'Ext.grid.Panel',
	requires	: ['Ext.grid.column.CheckColumn'],
	
	xtype	: 'list_ship',
	store	: 'ShipStore',
	
	columns: [{
			text	: "Id", 
			//hidden	: true,
			width	: 30, 
			dataIndex: 'id',
			xtype	: 'checkcolumn'
		},{
			text	: "Ship Name", 
			width	: 150, 
			dataIndex: 'name'
		}],
		
	//initConfig : 
	
	
	
})

