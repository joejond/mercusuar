Ext.define('vts.view.konten.DateInfo', {
    extend	: 'Ext.form.Panel',
    xtype 	: 'vtsdateinfo',

    requires : [
        'Ext.form.Label'
    ],

    layout	: 'vbox',

    items: [{
        xtype: 'label',
        text : 'welcome, ID Login',
        
    }, {
        xtype: 'label',
        // forId: 'myFieldId',
        text: 'Date Time Tanggal',
        // margin: '0 0 0 10'
    }]
    



})