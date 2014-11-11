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
			read: 'ci/index.php/getWsData/index3'
        },
		reader: {
            type: 'json',
            root: 'ship',
            messageProperty: 'message'
        }
    }
	
});