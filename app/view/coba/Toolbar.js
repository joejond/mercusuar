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
            store: 'ShipStore',
            colorField: 'color',
                tpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                        '<div class="x-boundlist-item" style="background-color:white;">{id} - {name}</div>',
                    '</tpl>'
                ),
                displayTpl: Ext.create('Ext.XTemplate',
                    '<tpl for=".">',
                        '{id} - {name}',
                    '</tpl>'
                ),
        },'-',' ',' ',' ',' ',{
            xtype: 'label',
            text: 'Date : '
        },' ',' ',' ',{
            xtype: 'datefield',
            name: 'dtool',
            // id: 'dtools',
            // value: new Date(),
            format: 'd-M-Y'
        },'-',' ',' ',' ',' ',{
            html: '<b style="font-size:15px;color:blue;">(Current View -> - Date:)</b>'
        }]
    }]
})