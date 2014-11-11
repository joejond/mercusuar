Ext.define('vts.controller.Detail', {
	extend:'Ext.app.Controller',
	views: [
		'detail.Detail'
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