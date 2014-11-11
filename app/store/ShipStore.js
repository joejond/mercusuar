/**
* Jono Juli 2014
*/
Ext.define('vts.store.ShipStore', {
    extend: 'Ext.data.Store',
    requires: 'vts.model.ShipStore',
	model: 'vts.model.ShipStore',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/getWsData/index3'
        },
		reader: {
            type: 'json',
            root: 'ship',
            messageProperty: 'message'
        }
    }
	
});