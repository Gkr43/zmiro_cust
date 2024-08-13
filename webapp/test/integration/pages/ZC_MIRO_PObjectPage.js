sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zmirocust',
            componentId: 'ZC_MIRO_PObjectPage',
            contextPath: '/ZC_MIRO_P'
        },
        CustomPageDefinitions
    );
});