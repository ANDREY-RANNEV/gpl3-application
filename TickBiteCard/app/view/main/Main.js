/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TickBiteCard.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.chart.*',
        'Ext.layout.*',
        'Ext.draw.*',
        'Ext.scroll.Scroller',
        'Ext.tip.ToolTip',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.util.*',
        
        'Ext.plugin.Viewport' ,
        'TickBiteCard.view.main.MainController',
        'TickBiteCard.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        bodyPadding: 5
    },
    scrollable: true,
    layout:'border',
    border: true,
    width: '100%',
    height:'100%',
    items: [
            {
            xtype: 'panel',
            width: 837.64001 * 0.65 + 10,
            height: 921.37 * 0.65 + 5,
            region:'west',
            border: true,
            items: [
                {
                    id: 'SamaraMapImg',
                    name: 'SamaraMapImg',
                    layout: 'fit',
                    xtype: 'draw',
                    width: 837.64001 * 0.65 + 5,
                    height: 921.37 * 0.65,
                    engine: 'Ext.draw.engine.Svg',
                    border: false,
                    // plugins: {
                        // spriteevents: true
                    // },

                    sprites: [],

                    listeners: {
                        spriteclick: 'onSpriteClick',
                        spritemouseover: 'onMouseOver',
                        spritemouseout: 'onMouseOut'
                        // resize:'onDrawResize'
                        // scope: 'controller',
                        // renderedchange: 'onRenderChange',
                        // onRender: function () {
                        //     this.callParent();

                        //     console.log('start on render');
                        // },
                        // 'afterrender': 'onAfterRenderMap'
                        // function (me) {
                        //     var surface = me.getSurface(),
                        //         sprite = surface.getItems()[0];
                        // }
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            width: 200,
            height: 200,
            region:'center',
            layout:'border',
            border: true,
            items: [
                {
                    xtype: 'panel',
                    id:'titulPanel',
                    name:'titulPanel',
                    width: 200,
                    height: 200,
                    region:'north',
                    border: true,
                    items: [
        
                    ]},
                    {
                        id:'detailPanel',
                        name:'detailPanel',
                        xtype: 'panel',
                        width: 200,
                        height: 200,
                        region:'center',
                        border: true,
                        items: [
            
                        ]}
            ]}
        ],
        listeners: {
    afterrender: 'onAfterRender'
}
});
