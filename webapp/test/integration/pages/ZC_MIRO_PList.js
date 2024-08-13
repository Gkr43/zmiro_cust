sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zmirocust',
            componentId: 'ZC_MIRO_PList',
            contextPath: '/ZC_MIRO_P'
        },
        CustomPageDefinitions
    );
});