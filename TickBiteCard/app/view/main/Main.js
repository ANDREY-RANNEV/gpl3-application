/*
This file is part of Ext JS 6.0.0.640

Copyright (c) 2011-2015 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Version: 6.0.0.640 Build date: 2015-06-28 12:48:37 (134671ed5b6bf074e014e83502b615cd2e26a515)

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

        'Ext.plugin.Viewport',
        'TickBiteCard.view.main.MainController',
        'TickBiteCard.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        bodyPadding: 5
    },
    scrollable: true,
    layout: 'border',
    border: true,
    width: '100%',
    height: '100%',
    items: [
        {
            xtype: 'panel',
            width: 837.64001 * scaleFactor + 10,
            height: 921.37 * scaleFactor + 5,
            region: 'west',
            border: true,
            items: [
                {
                    xtype: 'label',
                    html: '<a href="https://github.com/ANDREY-RANNEV/gpl3-application.git" >GitHub</a>'
                },
                {
                    id: 'SamaraMapImg',
                    name: 'SamaraMapImg',
                    layout: 'fit',
                    xtype: 'draw',
                    width: 837.64001 * scaleFactor + 5,
                    height: 921.37 * scaleFactor,
                    engine: 'Ext.draw.engine.Svg',
                    border: false,
                    // plugins: {
                    // spriteevents: true
                    // },

                    sprites: [
                        {
                            type: 'rect',
                            x: 50,
                            y: 50,
                            width: 100,
                            height: 100,
                            lineWidth: 4,
                            strokeStyle: 'green',
                            fillStyle: 'yellow'
                        }
                    ],

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
            region: 'center',
            layout: 'border',
            border: true,
            items: [
                {
                    xtype: 'panel',
                    id: 'titulPanel',
                    name: 'titulPanel',
                    width: 200,
                    height: 200,
                    region: 'north',
                    border: true,
                    items: [

                    ]
                },
                {
                    id: 'detailPanel',
                    name: 'detailPanel',
                    xtype: 'panel',
                    width: 200,
                    height: 200,
                    region: 'center',
                    border: true,
                    items: [

                    ]
                }
            ]
        }
    ],

    listeners: {
        afterrender: 'onAfterRender'
    }
});
