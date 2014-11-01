Ext.define('vts.view.coba.Docked', {
    extend      : 'Ext.panel.Panel',
    xtype       : 'xdocked',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Docked to the top'
        }]
    }]
})