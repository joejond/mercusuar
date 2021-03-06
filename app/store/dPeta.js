/**
* Jono Juli 2014
*/
Ext.define('vts.store.dPeta', {
    extend: 'Ext.data.Store',
    //requires: 'vts.model.dPeta',
	model: 'vts.model.dPeta',
	autoLoad: true,
	
	proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/getShip'
        },
		reader: {
            type: 'json',
            root: 'ship',
            messageProperty: 'message'
        }
    }
	
});