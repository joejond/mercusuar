/**
* Jono Juli 2014
*/
Ext.define('vts.model.Kapal', {
    extend: 'Ext.data.Model',
    requires:[
		'Ext.data.proxy.Ajax'
    ],
    
    fields: [{name : 'id', type : 'int'},
             {name : 'nama' ,type : 'string' },
             {name : 'active', type : 'bool'}
            ],

             
    proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/peta/Vessel/rShip'
        },
        reader: {
            type: 'json',
            root: 'ship',
            messageProperty: 'message'
        }
    }
});

