/**
* Jono Juli 2014
*/
Ext.define('vts.view.coba.Tanggal', {
    extend      : 'Ext.form.Panel',
    
    xtype: 'xtgl',
    
    width: 300,
    bodyPadding: 10,
    title: 'Dates',
    items: [{
        xtype: 'datefield',
        anchor: '100%',
        fieldLabel: 'From',
        name: 'from_date',
        maxValue: new Date()  // limited to the current date or prior
    }, {
        xtype: 'datefield',
        anchor: '100%',
        fieldLabel: 'To',
        name: 'to_date',
        value: new Date()  // defaults to today
    }]
    
    
});