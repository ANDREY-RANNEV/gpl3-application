/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'TickBiteCard',

    extend: 'TickBiteCard.Application',

    requires: [
        'TickBiteCard.view.main.Main',
        'TickBiteCard.*','Ext.draw.*', 
        'Ext.plugin.Viewport',
        'TickBiteCard.model.Raion',
        'TickBiteCard.model.Locality',
        'TickBiteCard.model.diseases',
        'TickBiteCard.model.mainData',
        'TickBiteCard.model.Base',
        'TickBiteCard.store.Raion',
        'TickBiteCard.store.Locality',
        'TickBiteCard.store.diseases',
        'TickBiteCard.store.mainData'
        // 'TickBiteCard.view.main.List1',
        // 'TickBiteCard.view.main.List',
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'TickBiteCard.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to TickBiteCard.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
var scaleFactor = 0.65;