/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TickBiteCard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    requres: [
        'Tick.bite.map.model.Raion',
        'Tick.bite.map.model.Locality',
        'SamaraMap.model.Base',
        'TickBiteCard.store.Raion',
        'TickBiteCard.store.Locality',
        'TickBiteCard.view.main.List1',
        'TickBiteCard.view.main.List'
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
            storeId: 'Diseases',
            listeners: {
                load: 'onDiseasesLoad'
            }
        }, 
        getMainData: {
            model: 'TickBiteCard.model.mainData',
            autoLoad: false,
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
