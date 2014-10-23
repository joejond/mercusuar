Ext.define('vts.view.daily.Daily', {
	extend		: 'Ext.panel.Panel',
	xtype       : 'xdaily',
	width: 1366,
	region : 'center',
	layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch',
   	},
    items: [
    {               // Results grid specified as a config object with an xtype of 'grid'
		xtype	: 'panel',
		layout  : 'hbox',
		align   : 'left',
		title   : 'Daily Summary',
		split	: true,
		flex    : 1
		}, {
			xtype: 'splitter'   // A splitter between the two child items
		}, {                    // Details Panel specified as a config object (no xtype defaults to 'panel').
			title: 'Akumulasi Data Flow Meter',
			bodyPadding: 5,
			align : 'right',
			layout : 'hbox',
			items: [{
				fieldLabel: 'Data item',
				xtype: 'textfield'
			}], // An array of form fields
			flex: 2             // Use 2/3 of Container's height (hint to Box layout)
	}]
});