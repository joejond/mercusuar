Ext.define('vts.view.detail.dataList', {
	extend		: 'Ext.grid.Panel',
	xtype   	: 'xdetail',
	requires	: ['vts.view.detail.visualData'],
   
  title: 'Data List',
  store: 'WsData',
  // columnLines: true,
   columns: [
          {
            width : 120,
            locked : true,
            text : 'Time',
            dataIndex: 'data_time',
        },{
            text : 'Data Satelit',
            columns: [{
              text : 'Latitude',
              dataIndex : 'lat'
            },{
              text : 'Longitude',
              dataIndex : 'lon'
            },{
              text : 'Speed',
              dataIndex : 'speed'
            },{
              text : 'Heading',
              dataIndex : 'heading'
            }]
        },{
          text : 'Engine#1',
          columns : [{
            text : 'rpm#1',
            dataIndex : 'rpm1'
          },{
            text : 'prop#1',
            dataIndex : 'prop1'
          },{
            text : 'flowmeter#1',
            dataIndex : 'flow1_olah'
          },{
            text : 'overflow#1',
            dataIndex : 'overflow1_olah'
          },{
            text : 'temp#1',
            dataIndex : 'temp1'
          },{
            text : 'press#1',
            dataIndex : 'press1'
          }]
        },{
          text : 'Engine#2',
          columns : [{
            text : 'rpm#2',
            dataIndex : 'rpm2'
          },{
            text : 'prop#2',
            dataIndex : 'prop2'
          },{
            text : 'flowmeter#2',
            dataIndex : 'flow2_olah'
          },{
            text : 'overflow#2',
            dataIndex : 'overflow2_tot'
          },{
            text : 'temp#2',
            dataIndex : 'temp2'
          },{
            text : 'press#2',
            dataIndex : 'press2'
          }]
        },{
          text : 'Data Genset',
          columns : [{
            text : 'runhour#1',
            dataIndex : 'runhour1_olah'
          },{
            text : 'runhour#2',
            dataIndex : 'runhour2_olah'
          }]
        },{
          text : 'Data Panel',
          columns : [{
            text : 'Battery',
            dataIndex : 'battery'
          },{
            text : 'Charger',
            dataIndex : 'charger'
          }]
        },{
          text : 'Data Source',
          columns : [{
            text : 'ID Kapal',
            dataIndex : 'id_ship'
          },{
            text : 'ID Modem',
            dataIndex : 'modem_id'
          }]
        }]
})