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
Ext.define('TickBiteCard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    requres: [
        'TickBiteCard.model.Raion',
        'TickBiteCard.model.Locality',
        'TickBiteCard.model.diseases',
        'TickBiteCard.model.mainData',
        'TickBiteCard.model.Base',
        'TickBiteCard.store.Raion',
        'TickBiteCard.store.Locality',
        'TickBiteCard.store.diseases',
        'TickBiteCard.store.mainData',
        // 'TickBiteCard.view.main.List1',
        // 'TickBiteCard.view.main.List',
        'Ext.data.*'
    ],
    data: {
        name: 'TickBiteCard',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    stores: {
        // getRaions:Ext.create('Tick.bite.map.store.Raion',{
        getRaions: {

            // alias: 'store.raion',
            model: 'TickBiteCard.model.Raion',
            autoLoad: false,
            proxy: {
                type: 'ajax',
                url: 'resources/Data/Raion.json',
                reader: {
                    type: 'json',
                    rootProperty: 'raion'
                }
            },
            storeId: 'Raion',
            listeners: {
                load: 'onRaionLoad'
            }
        },
        getLocality: {
            model: 'TickBiteCard.model.Locality',
            autoLoad: false,
            proxy: {
                type: 'ajax',
                url: 'resources/Data/Locality.json',
                reader: {
                    type: 'json',
                    rootProperty: 'locality'
                }
            },
            storeId: 'Locality',
            listeners: {
                load: 'onLocalityLoad'
            }
        },
        getDiseases: {
            model: 'TickBiteCard.model.diseases',
            autoLoad: false,
            proxy: {
                type: 'ajax',
                url: 'resources/Data/diseases.json',
                reader: {
                    type: 'json',
                    rootProperty: 'diseases'
                }
            },
            storeId: 'diseases',
            listeners: {
                load: 'onDiseasesLoad'
            }
        },
        getMainData: {
            model: 'TickBiteCard.model.mainData',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/Data/mainData.json',
                reader: {
                    type: 'json',
                    rootProperty: 'mainData'
                }
            },
            storeId: 'MainData',
            listeners: {
                load: 'onMainDataLoad'
            }
        }
    }
});
