sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zmirocust/test/integration/FirstJourney',
		'zmirocust/test/integration/pages/ZC_MIRO_PList',
		'zmirocust/test/integration/pages/ZC_MIRO_PObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_MIRO_PList, ZC_MIRO_PObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zmirocust') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_MIRO_PList: ZC_MIRO_PList,
					onTheZC_MIRO_PObjectPage: ZC_MIRO_PObjectPage
                }
            },
            opaJourney.run
        );
    }
);