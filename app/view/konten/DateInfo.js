Ext.define('vts.view.konten.DateInfo', {
    extend	: 'Ext.form.Panel',
    xtype 	: 'vtsdateinfo',

    requires : [
        'Ext.form.Label'
    ],

    layout	: 'vbox',

    items: [{
        xtype: 'label',
        bodyPadding : 8,
        text : 'welcome, ID Login',
        
    }, {
        xtype: 'label',
        bodyPadding : 8,
        // forId: 'myFieldId',
        text: 'Date Time Tanggal',
        // margin: '0 0 0 10'
    }]
    



})