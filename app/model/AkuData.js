/**
* Jono Juli 2014
*/
Ext.define('vts.model.AkuData', {
    extend: 'Ext.data.Model',
    /*requires:[
		'Ext.data.proxy.Ajax'
    ],*/
    
    fields: ['tanggal','jam','rpm1_avg','prop1_avg','flow1_tot','overflow1_tot','temp1_avg','press1_avg','rpm2_avg','prop2_avg','flow2_tot','overflow2_tot','temp2_avg','press2_avg','runhour1','runhour2']

    
});
