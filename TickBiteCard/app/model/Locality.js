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
Ext.define('TickBiteCard.model.Locality', {
    extend: 'TickBiteCard.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'raion_id', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'city_village', type: 'auto' },
        { name: 'fillStyle_circle', type: 'auto' },
        { name: 'r_circle', type: 'auto' },
        { name: 'x_circle', type: 'auto' },
        { name: 'y_circle', type: 'auto' },
        { name: 'fillStyle_text', type: 'auto' },
        { name: 'fontSize_text', type: 'auto' },
        { name: 'x_text', type: 'auto' },
        { name: 'y_text', type: 'auto' }
    ]
});
