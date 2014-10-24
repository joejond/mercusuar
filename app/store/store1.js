
Ext.define('vts.app.store.store1', {
    extend      : 'Ext.tab.Panel',
    xtype       : 'store1',
store.load({
    params: {
        group: 3,
        type: 'user'
    },
    callback: function(records, operation, success) {
        // do something after the load finishes
    },
    scope: this
});
 });