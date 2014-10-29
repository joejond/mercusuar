Ext.define('vts.view.daily.dailySummary', {
    extend      : 'Ext.panel.Panel',
    xtype       : 'xdaily',

    title   : 'Daily Summary',
    split : true,

        layout: {
            type: 'table',
            columns: 2,
                tableAttrs: { 
                    style: { 
                        width: '100%',
                        } },
            },

        defaults: {
            bodyStyle: 'padding:20px',
            align : 'center'
            },

    items: [
                {
                    html        : 'Total Daily Fuel',
                    colspan     : 2,
                    dataIndex   : ''
                },
                {
                    html: 'NaN Liters',
                    colspan : 2,
                    dataIndex   : ''
                },
                {
                    html: 'Engine#1',
                    dataIndex   : ''
                },
                {
                    html: 'Engine#2',
                    dataIndex   : ''
                },
                {
                    html: 'NaN Liters',
                    dataIndex   : ''
                },
                {
                    html: 'NaN Liters',
                    dataIndex   : ''
                },
                {
                    html: 'Genset Daily Running Hours',
                    colspan : 2,
                    dataIndex   : ''
                },
                {
                    html: 'Genset#1',
                    dataIndex   : ''
                },
                {
                    html: 'Genset#2',
                    dataIndex   : ''
                },
                {
                    html: '0 Hours',
                    dataIndex   : ''
                },
                {
                    html: '0 Hours',
                    dataIndex   : ''
                }
            ],
});