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
Ext.define('TickBiteCard.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

 requres: [
        'Ext.layout.*',
        'Ext.draw.*',
        'Ext.scroll.Scroller',
        'Ext.tip.ToolTip',
        'Ext.data.*'
    ],
    onMouseOver: function (item, event) {
        var sprite = item && item.sprite;
        if (sprite) {

                if (!sprite.tooltip && sprite.type == 'path' && sprite.dataEmbeded && sprite.dataEmbeded.Id > 0 && sprite.dataEmbeded.Id < 30) {

            //         sprite.tooltip = new Ext.tip.ToolTip({
            //             target: sprite.element,
            //             hideAnimation: {
            //                 type: 'slide',
            //                 direction: 'left'
            //             },
            //             showAnimation: {
            //                 type: 'slide',
            //                 direction: 'right'
            //             },
            //             dismissDelay: 2000,
            //             trackMouse: true,
            //             html: '<p><b>' + sprite.title + '</b></p>'
            //         });
            //     }
            //     else if (!sprite.tooltip) {
            //         var raion = Ext.data.StoreManager.lookup('Raion');
            //         var indexV = raion.findExact('id', sprite.raion_id);

            //         if (indexV && indexV != -1) {
            //             var raionV = raion.getAt(indexV);
            //             sprite.tooltip = new Ext.tip.ToolTip({
            //                 target: sprite.element,
            //                 hideAnimation: {
            //                     type: 'slide',
            //                     direction: 'left'
            //                 },
            //                 showAnimation: {
            //                     type: 'slide',
            //                     direction: 'right'
            //                 },
            //                 dismissDelay: 2000,
            //                 trackMouse: true,
            //                 html: '<p><b>' + raionV.data.name + '</b></p>'
            //             });
            //         }
            //     }
            //     sprite.tooltip.show();
            // }

            this.oldFillingValue = sprite.fillStyle;
            var dataEmbeded = sprite && sprite.dataEmbeded;
            // if (dataEmbeded && dataEmbeded.Id > 0 && dataEmbeded.Id < 30) {

            //     var html_p = '<b>' + sprite.title + '</b></br>';

            //     var Diseases = Ext.data.StoreManager.lookup('Diseases');

            //     var MainData = Ext.data.StoreManager.lookup('MainData');

            //     MainData.clearFilter(true);
            //     MainData.filter('raion_id', new RegExp("^" + dataEmbeded.Id + "$"));
            //     MainData.group('raion_id');
            //     var rowh = [];
            //     var colh = [];
            //     MainData.each(function (record) {
            //         // var disease = Diseases.getAt(Diseases.findExact('id', record.data.disease_id));
            //         // html_p += disease.data.name + '</br>'
            //         if (rowh.indexOf(record.data.disease_id) == -1) rowh.push(record.data.disease_id)
            //         if (colh.indexOf(record.data.year) == -1) colh.push(record.data.year)
            //     });

            //     html_p += '<table border="1" cellspacing="0">';
            //     html_p += "<tr>";
            //     html_p += '<td style="width: 300px">';
            //     html_p += "</td>";
            //     colh.forEach(function (year) {
            //         html_p += '<td style="width: 20px">' + year + "</td>";
            //     });
            //     html_p += "</tr>";
            //     rowh.forEach(function (disease_id) {
            //         html_p += "<tr>";
            //         var disease = Diseases.getAt(Diseases.findExact('id', disease_id));
            //         html_p += '<td>' + disease.data.name + '</td>'
            //         colh.forEach(function (year) {
            //             var val=0;
            //             MainData.queryBy(function(record,id){
            //                 return (record.get('disease_id') == disease_id && 
            //                         record.get('year') == year &&
            //                         record.get('raion_id') ==  dataEmbeded.Id
            //                     );
            //             }).items.forEach(function (item) {val+=item.data.count;});
            //             html_p += '<td  align="center">' + (val==0?'':new String(val)) + '</td>'
            //         });
            //         html_p += "</tr>";
            //     });
            //     html_p += "<table>";

            //     var pan = Ext.getCmp('titulPanel');
            //     Ext.toast({ html: html_p,
            //     title: 'My Title',
            //     //width: 200,
            //     align: 't',
            //     hideDuration: 200,
            //     autoCloseDelay: 5000,});
            //     // pan.body.update(html_p);
            //     if (sprite.type == 'path') {
            //         sprite.setAttributes({
            //             // strokeStyle: '#FF0000',
            //             // lineWidth: 3,
            //             fillStyle: '#FFFF33'
            //         });
                // }
                // else {
                //     var fSprite =  sprite.getParent();//.getSprites();//sprite.dataEmbeded.name);
                //     var del=Ext.get(sprite.dataEmbeded.name);
                // }
                sprite.getSurface().renderFrame();
            }
            // else{
            //                         var raion = Ext.data.StoreManager.lookup('Raion');
            //         var indexV = raion.findExact('id', sprite.raion_id);

            // }
        }
    },
    onMouseOut: function (item, event) {
        var sprite = item && item.sprite;
        if (sprite) {
            var dataEmbeded = sprite && sprite.dataEmbeded;
            if (dataEmbeded && dataEmbeded.Id > 0 && dataEmbeded.Id < 90) {
                var pan = Ext.getCmp('titulPanel');
                pan.body.update('');
                sprite.setAttributes({
                    // strokeStyle: '#000000',
                    // lineWidth: 1,
                    fillStyle: this.oldFillingValue
                });
                sprite.getSurface().renderFrame();
            }
        }
    },
    onSpriteClick: function (item, event) {
        var sprite = item && item.sprite,
            color = Ext.util.Color.create(
                Math.random() * 255,
                Math.random() * 255,
                Math.random() * 255
            ),
            dataEmbeded = sprite && sprite.dataEmbeded;

        if (sprite) {
            if (sprite.type === 'path' && dataEmbeded && dataEmbeded.Id > 0 && dataEmbeded.Id < 90) {
                sprite.setAttributes({
                    fillStyle: color
                    // ,
                    // strokeStyle: color
                });
            }
            sprite.getSurface().renderFrame();
        }
    },
    onDrawResize: function (el, inf, eOpt) {
        // var mapSamara = Ext.getCmp('SamaraMapImg');
        // scaleFactor = 0.65;
        // width: 837.64001 ,
        //     height: 921.37 ,
        // Ext.data.StoreManager.lookup('Raion').load();
    },
    onRaionLoad: function (store, recs, success, operation) {


        console.log('onRaionLoad');
        var mapSamara = Ext.getCmp('SamaraMapImg');
        var surface = mapSamara.getSurface();
        surface.removeAll();
        store.each(function (record) {
            var spr = Ext.create('Ext.draw.sprite.Path', {
                scaling: {
                    x: scaleFactor,
                    y: scaleFactor,
                    centerX: 0,
                    centerY: 0
                },
                id: record.data.id_name,
                name: record.data.id_name,
                type: record.data.type,
                path: record.data.path,
                fillStyle: record.data.fillStyle,
                title: record.data.name,
                lineWidth: 1,
                strokeStyle: record.data.strokeStyle,
                dataEmbeded: {
                    cap: record.data.cap,
                    Id: record.data.id
                }
            });
            surface.add(spr);

        });
        // surface.renderFrame();
        Ext.data.StoreManager.lookup('Locality').load();
    },
    pathRendert: function (surface, ctx, rect) {
        var tip = Ext.create("Ext.tip.ToolTip", {
            target: ctx.element,
            html: "me.tooltip"
        });
    },
    onLocalityLoad: function (store, recs, success, operation) {
        var mapSamara = Ext.getCmp('SamaraMapImg');
        var surface = mapSamara.getSurface();
        store.each(function (record) {
            var raion = Ext.data.StoreManager.lookup('Raion');
            var indexV = raion.findExact('id', record.data.raion_id);
            var raionV = raion.getAt(indexV);

            surface.add(
                {
                    scaling: {
                        x: (scaleFactor),
                        y: (scaleFactor),
                        centerX: 0,
                        centerY: 0
                    },
                    raion_id: record.data.raion_id,
                    title: raionV.data.name,
                    type: 'circle',
                    fillStyle: record.data.fillStyle_circle,
                    r: parseFloat(record.data.r_circle) / scaleFactor,
                    x: parseFloat(record.data.x_circle),
                    y: parseFloat(record.data.y_circle),
                    disabled: true,
                    dataEmbeded: {
                        cap: raionV.data.cap,
                        Id: raionV.data.id,
                        name: raionV.data.id_name,
                    }
                });
            surface.add(
                {
                    scaling: {
                        x: (scaleFactor),
                        y: (scaleFactor),
                        centerX: 0,
                        centerY: 0
                    },
                    raion_id: record.data.raion_id,
                    type: 'text',
                    text: record.data.name,
                    title: raionV.data.name,
                    fontSize: parseFloat(record.data.fontSize_text),
                    x: parseFloat(record.data.x_text),
                    y: parseFloat(record.data.y_text),
                    fillStyle: record.data.fillStyle_text,
                    disabled: true,
                    dataEmbeded: {
                        cap: record.data.cap,
                        Id: record.data.id,
                        name: raionV.data.id_name,
                    }
                });
        });
        surface.renderFrame();
        // Ext.fly('spinner').fadeOut({ duration: 800, remove: true });
    },
    initMainVindow: function () {
        console.log('initMainVindow');
    },
    onAfterRender: function (comp, opts) {
        console.log('onAfterRender');

        var MainD=  this.getViewModel().getStore('getDiseases');
        if(MainD) MainD.load();
        //Ext.data.StoreManager.lookup('diseases');
        // Ext.data.StoreManager.lookup('Raion').load();
        var Raion=  this.getViewModel().getStore('getRaions');
        if(Raion) Raion.load();
    },
    onSeriesTooltipRender: function () { },
    onDiseasesLoad: function (store, recs, success, operation) {
        console.log('onDiseasesLoad');
        // Ext.data.StoreManager.lookup('MainData').load();
        var MainData=  this.getViewModel().getStore('getMainData');
        if(MainData) MainData.load();
    },
    onMainDataLoad: function (store, recs, success, operation) {
        console.log('onMainDataLoad');
        // store.each(function (record) {
        //     var Diseases = Ext.data.StoreManager.lookup('Diseases');
        //     var indexV = Diseases.findExact('id', record.data.disease_id);
        //     var raionV = Diseases.getAt(indexV);
        // });
    }

});
