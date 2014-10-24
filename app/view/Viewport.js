Ext.define('vts.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
		'vts.view.peta.Peta'
        
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region 	: 'north',
		height	: 50,
		padding	: '0 5 0 5',
		border	: false,
		bodyStyle: 'background-color: #E0E0E0;',
		layout : 'hbox',
		
		items	: [{
				
				html 	: '<table><tr valign="middle"><td><img src="./inc/img/ship.png"></td><td>MONITA - Vessel Tracking System</td></tr></table>', 
				width 	: '75%',
				height 	: 48,
				bodyStyle: 'background-color: #E0E0E0; font-size: 28px;',
				border 	: false	
		},{
				//title: 'Tab 2',
				html 	: '<table><tr><td>Welcome, Admin <a href="#">(logout)</a></td></tr><tr><td>22 Oktober 2014, 10:54 WITA</td></tr></table>',
				width 	: '25%',
				height 	: 48,
				bodyStyle: 'background-color: #E0E0E0; font-size: 14px;',
				border 	: false,
				id		: 'header_id'
		}]
	},{
        
        region	: 'center',  
		padding : 5,
		align	: 'stretch',
		frame	: true,
		xtype	: 'xpeta',
    }]	
});
