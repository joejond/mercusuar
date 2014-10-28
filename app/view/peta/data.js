/**
* Jono Juli 2014
*/
Ext.define('vts.view.peta.data', {
    extend      : 'Ext.form.Panel',
    xtype       : 'data',
    requires    : [
        'Ext.form.field.Checkbox',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.layout.container.Form',
        'vts.view.peta.ListShip',
        
        //'vts.store.dPeta'
    ],
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    items:[    
    {                            
        height: 140,
        layout: 'form',
        id: 'simpleForm',
        padding: 10,
        frame: true,
        
        items: [
        {
            xtype: 'checkboxfield',
            name: 'checkbox1',
            boxLabel: 'show track path',
            listeners:{
                change: function(checkbox, newValue, oldValue, eOpts) {
                    if (newValue) {
                        Ext.getCmp('start_path').enable();
                        Ext.getCmp('stop_path').enable();
                        Ext.getCmp('button_update').enable();
                        status_path = 1;
                        //addpath();
                    } else {
                        Ext.getCmp('start_path').disable();
                        Ext.getCmp('stop_path').disable();
                        Ext.getCmp('button_update').disable();
                        status_path = 0;
                        //removepath();
                    }
                }
                
            }
        },{
            fieldLabel: 'Start Date',
            name: 'date',
            id: 'start_path',
            labelWidth: 70,
            xtype: 'datefield',
            value: new Date(),
            format: 'd-M-Y',
            disabled: true
        },{
            fieldLabel: 'Stop Date',
            name: 'date',
            id: 'stop_path',
            labelWidth: 70,
            xtype: 'datefield',
            value: new Date(),
            format: 'd-M-Y',
            disabled: true
        },
        {
            xtype: 'button',
            text : 'Update',
            id: 'button_update',
            disabled: true,
            handler : function() {
                //removepath();
                //addpath();
            }           
        }]
    },{
        xtype   : 'list_ship'
            
    }]
    
    
});