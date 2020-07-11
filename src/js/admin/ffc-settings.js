import {
	getChallengeData,
	sendChallengeShortcodeDataToServer,
	generateChallengeShortcodeTable,
	toggleLoader,
} from '../common-functions';

import '../../images/logo.svg';
import '../../images/loader.svg';
import '../../sass/ff-challenge-options.scss';

/**
 * Button to refresh the Challenge data.
 */
const refreshDataButton = document.querySelector(
	'.ffc-options__button--refresh-data'
);

if ( refreshDataButton ) {
	refreshDataButton.addEventListener( 'click', function () {
		toggleLoader( 'show' );
		refreshDataButton.firstChild.textContent = ffI18n.refreshing;
		const ffcTable = document.querySelector( '.ffc-challenge-table' );

		/**
		 * If table is not empty, then clear it.
		 */
		if ( ffcTable.innerHTML ) {
			ffcTable.innerHTML = '';
		}

		getChallengeData().then( function ( responseData ) {
			refreshDataButton.firstChild.textContent = ffI18n.refreshData;
			toggleLoader( 'hide' );
			sendChallengeShortcodeDataToServer( responseData );
			generateChallengeShortcodeTable( responseData.data );
		} );
	} );
}
