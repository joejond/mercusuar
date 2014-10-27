/**
* Jono Juli 2014
*/
Ext.define('vts.store.DataUser', {
    extend: 'Ext.data.Store',
    requires: 'vts.model.WsData',
	model: 'vts.model.WsData',
	autoLoad: true,
	
	proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/login'
        },
		reader: {
            type: 'json',
            root: 'dataLogin',
            messageProperty: 'message'
        }
    }
	
});