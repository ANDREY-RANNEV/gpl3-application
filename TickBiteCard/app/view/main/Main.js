/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TickBiteCard.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.chart.*',
        
        'TickBiteCard.view.main.MainController',
        'TickBiteCard.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        bodyPadding: 5
    },

    items: [{
        items: [
        {    
        xtype: 'draw',
        width: 250,
        height: 250,
        sprites: [{
            type: 'rect',
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            lineWidth: 4,
            strokeStyle: 'green',
            fillStyle: 'yellow'
        }
    ]
    }]
    }]
});
