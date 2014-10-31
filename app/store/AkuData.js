Ext.define('vts.store.AkuData', {
    extend: 'Ext.data.Store',
    requires: 'vts.model.AkuData',
	model: 'vts.model.AkuData',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/getAkuData'
        },
		reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'message'
        }
    }
    
	
});