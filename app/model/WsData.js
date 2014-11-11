/**
* Jono Juli 2014
*/
Ext.define('vts.model.WsData', {
    extend: 'Ext.data.Model',
    requires:[
		'Ext.data.proxy.Ajax','Ext.data.JsonStore'
    ],
    
    fields: ['data_time','lat','lon','speed','heading','rpm1','prop1','flow1_olah','overflow1_olah','temp1','press1','rpm2','prop2','flow2_olah','overflow2_tot','temp2','press2','runhour1_olah','runhour2_olah','battery','charger','id_ship','modem_id'],

    proxy: {
		type: 'ajax',
		api: {
			read: 'ci/index.php/getWsData/'
        },
        reader: {
            type: 'json',
            root: 'ship',
            messageProperty: 'message'
        }
    }
});
