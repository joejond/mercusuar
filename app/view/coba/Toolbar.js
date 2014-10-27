Ext.define('vts.view.coba.Toolbar', {
    extend      : 'Ext.toolbar.Toolbar',
    xtype       : 'xtoolbar',
    requires    : ['Ext.form.field.ComboBox','Ext.form.ComboBox'],
    items: [
        'Selected Ship :',
        {
            extend : 'Ext.form.ComboBox',
            displayField: 'name',
            xtype: 'combo',
            queryMode: 'local',
            store   : 'ShipStore',
            tpl: Ext.create('Ext.XTemplate',
                '<tpl for="." style="">',
                    '<div class="x-boundlist-item">{id} - {name}</div>',
                '</tpl>'
            ),
            // template for the content inside text field
            displayTpl: Ext.create('Ext.XTemplate',
                '<tpl for=".">',
                    '{id} - {name}',
                '</tpl>'
            )
        },
        'Date :',
        {
            xtype: 'datefield',
        },
        '<h2 style="color:blue;">(Current View -> - Date: )</h2>',
        // begin using the right-justified button container
        // '->', // same as { xtype: 'tbfill' }
        // {
        //     xtype    : 'textfield',
        //     name     : 'field1',
        //     emptyText: 'enter search term'
        // },
        // // add a vertical separator bar between toolbar items
        // '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
        // 'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
        // { xtype: 'tbspacer' },// same as ' ' to create Ext.toolbar.Spacer
        // 'text 2',
        // { xtype: 'tbspacer', width: 50 }, // add a 50px space
        // 'text 3'
    ]
})