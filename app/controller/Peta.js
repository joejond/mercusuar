/**
* Jono Juli 2014
*/
Ext.define('vts.controller.Peta', {
	extend:'Ext.app.Controller',
    
	views: [
		// 'peta.Peta',
		'peta.dPeta',
		'peta.ListShip'
    ],

    stores: [
		'Kapals',
		// 'WsData'
    ],
    
    models: [
		'Kapal',
		// 'WsData'
    ],
	
	refs : [
		{
            ref: 'xpeta',
            selector: 'xpeta'
        },{
			ref: 'gpeta',
            selector: 'gpeta'
			
		}
	],
	
	 
	init:function(){
		this.control({
               //Component listeners
		});

		this.application.on({
			//Event handlers
		});
	}
});