/**
* Jono Juli 2014
*/
Ext.define('vts.model.WsData', {
    extend: 'Ext.data.Model',
    /*requires:[
		'Ext.data.proxy.Ajax'
    ],*/
    
    fields: ['id_data','id_titik_ukur', 'value','id_trip','data_time','year','month','day','hour','minute','origin']

    
});
