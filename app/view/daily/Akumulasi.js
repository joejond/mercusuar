Ext.define('vts.view.daily.Akumulasi', {
    extend      : 'Ext.grid.Panel',
    xtype       : 'xdaily2',
    requires    : [],

    title :'Akumulasi Data Flowmeter',
	// store : '',
    columnLines : true,
    columns : [{
            text : 'Date',
            dataIndex : ''
        },{
            text : 'Hour',
            dataIndex : ''
        },{
            text : 'Engine#1',
            columns : [{
                text : 'Engine#1 (avg)',
                dataIndex : ''
            },{
                text : 'Propeler#1 (avg)',
                dataIndex : ''
            },{
                text : 'Flowmeter (avg)',
                dataIndex : ''
            },{
                text : 'Overflow#1 (avg)',
                dataIndex : ''
            },{
                text : 'Temperature#1 (avg)',
                dataIndex : ''
            },{
                text : 'Pressure#1 (avg)',
                dataIndex : ''
            }],
        },{
            text : 'Engine#2',
            columns : [{
                text : 'Engine#2 (avg)',
                dataIndex : ''
            },{
                text : 'Propeler#2 (avg)',
                dataIndex : ''
            },{
                text : 'Flowmeter (avg)',
                dataIndex : ''
            },{
                text : 'Overflow#2 (avg)',
                dataIndex : ''
            },{
                text : 'Temperature#2 (avg)',
                dataIndex : ''
            },{
                text : 'Pressure#2 (avg)',
                dataIndex : ''
            }],
        },{
            text : 'Genset Run-Hour',
            columns : [{
                text : 'Genset#1',
                dataIndex : ''
            },{
                text : 'Genset#2',
                dataIndex : ''
            }]
        }]
})