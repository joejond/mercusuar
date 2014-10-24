/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.ListShip', {
    extend	: 'Ext.grid.Panel',
	requires	: ['Ext.grid.column.CheckColumn'],
	
	xtype	: 'list_ship',
	store	: 'ShipStore',
	
	columns: [
		{
			text    : 'Checkbox',
			xtype	: 'checkcolumn',
		},{
			text	: "Id", 
			// hidden	: true,
			width : 50,
			dataIndex: 'id',
		},{
			text	: "Ship Name", 
			width	: 150, 
			dataIndex: 'name'
		}],
		
	//initConfig : 
	
	
	
})

