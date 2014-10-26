/**
* Jono Juli 2014
*/
Ext.define('vts.model.Kapal', {
    extend: 'Ext.data.Model',
    requires:[
		'Ext.data.proxy.Ajax'
    ],
    
    fields: ['id', 'name','status']

    proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/rh/rCause'
        },
        reader: {
            type: 'json',
            root: 'cause',
            messageProperty: 'message'
        }
    }
});

    
});
