Ext.define('vts.Application', {
    name: 'vts',

    extend: 'Ext.app.Application',

    views: [
        'peta.Peta',
        'peta.dPeta'
    ],

    controllers: [
        // TODO: add controllers here
		'Peta',
        'Detail'
    ],

    stores: [
        // TODO: add stores here
    ]
});
