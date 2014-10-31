Ext.define('vts.view.daily.dailySummary', {
    extend      : 'Ext.panel.Panel',
    xtype       : 'xdaily',

    title   : 'Daily Summary',
    // split : true,

        layout: {
            type: 'table',
            columns: 2,
                tableAttrs: { 
                    style: { 
                        width: '100%',
                        } },
            },

        defaults: {
            bodyStyle: 'padding:10px',
            },

    items: [
                {
                    id          : 'tbl-all',
                    html        : 'Total Daily Fuel',
                    colspan     : 2,
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all1',
                    html: 'NaN Liters',
                    colspan : 2,
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all2',
                    html: 'Engine#1',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all3',
                    html: 'Engine#2',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all4',
                    html: 'NaN Liters',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all5',
                    html: 'NaN Liters',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all6',
                    html: 'Genset Daily Running Hours',
                    colspan : 2,
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all7',
                    html: 'Genset#1',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all8',
                    html: 'Genset#2',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all9',
                    html: '0 Hours',
                    dataIndex   : ''
                },
                {
                    id      : 'tbl-all10',
                    html: '0 Hours',
                    dataIndex   : ''
                }
            ],
});