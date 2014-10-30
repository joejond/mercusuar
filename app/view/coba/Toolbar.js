Ext.define('vts.view.coba.Toolbar', {
    extend      : 'Ext.panel.Panel',
    xtype       : 'xtoolbar',
    requires    : ['vts.store.ShipStore','Ext.toolbar.Spacer','Ext.form.field.ComboBox','Ext.layout.container.Table'],
   
   dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        height: 35,
        items: [' ',' ',' ',' ',' ', // Spacer
        {
            xtype: 'label',
            text: 'Selected Ship : '
        },' ',' ',' ',{
            xtype: 'combobox',
            // store: shipStore
        },'-',' ',' ',' ',' ',{
            xtype: 'label',
            text: 'Date : '
        },' ',' ',' ',{
            xtype: 'datefield'
        },'-',' ',' ',' ',' ',{
            html: '<b style="font-size:15px;color:blue;">(Current View -> - Date:)</b>'
        }]
    }]
})