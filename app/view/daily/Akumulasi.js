Ext.define('vts.view.daily.Akumulasi', {
    extend      : 'Ext.grid.Panel',
    xtype       : 'xdaily2',
    requires    : ['vts.store.AkuData'],

    title :'Akumulasi Data Flowmeter',
	store : 'AkuData',
    columnLines : true,
    columns : [{
            text : 'Date',
            dataIndex : 'tanggal'
        },{
            text : 'Hour',
            dataIndex : 'jam'
        },{
            text : 'Engine#1',
            columns : [{
                text : 'Engine#1 (avg)',
                dataIndex : 'rpm1_avg'
            },{
                text : 'Propeler#1 (avg)',
                dataIndex : 'prop1_avg'
            },{
                text : 'Flowmeter#1 (avg)',
                dataIndex : 'flow1_tot'
            },{
                text : 'Overflow#1 (avg)',
                dataIndex : 'overflow1_tot'
            },{
                text : 'Temperature#1 (avg)',
                dataIndex : 'temp1_avg'
            },{
                text : 'Pressure#1 (avg)',
                dataIndex : 'press1_avg'
            }],
        },{
            text : 'Engine#2',
            columns : [{
                text : 'Engine#2 (avg)',
                dataIndex : 'rpm2_avg'
            },{
                text : 'Propeler#2 (avg)',
                dataIndex : 'prop2_avg'
            },{
                text : 'Flowmeter#2 (avg)',
                dataIndex : 'flow2_tot'
            },{
                text : 'Overflow#2 (avg)',
                dataIndex : 'overflow2_tot'
            },{
                text : 'Temperature#2 (avg)',
                dataIndex : 'temp2_avg'
            },{
                text : 'Pressure#2 (avg)',
                dataIndex : 'press2_avg'
            }],
        },{
            text : 'Genset Run-Hour',
            columns : [{
                text : 'Genset#1',
                dataIndex : 'runhour1'
            },{
                text : 'Genset#2',
                dataIndex : 'runhour2'
            }]
        }]
})