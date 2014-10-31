Ext.define('vts.store.WsData', {
    extend: 'Ext.data.Store',
    requires: 'vts.model.WsData',
	model: 'vts.model.WsData',
	 // storeId: 'WsData',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/getWsData'
        },
		reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'message'
        }
    }
    
	
});