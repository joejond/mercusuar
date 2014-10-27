Ext.define('vts.controller.Detail', {
	extend:'Ext.app.Controller',
	
	views: [
		'detail.Detail'
    ],
	
	stores: [
		'WsData'
    ],
    
    models: [
		
		'WsData'
    ],
	
	refs : [
		
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