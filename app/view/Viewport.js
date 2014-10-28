Ext.define('vts.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'vts.view.konten.HeadKonten',
        'vts.view.konten.IsiKonten'
        // 'vts.view.peta.Peta'
        
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region  : 'north',
        height  : 50,
        xtype   : 'hKonten',
        bodyStyle: 'background-color: #E0E0E0;',
        
    },{
        
        region  : 'center',  
        padding : 4,
        align   : 'stretch',
        frame   : true,
        xtype   : 'isikonten',
    }]  
});
