import {
	getChallengeData,
	sendChallengeShortcodeDataToServer,
	generateChallengeShortcodeTable,
} from '../common-functions';

/**
 * Button to refresh the Challenge data.
 */
const refreshDataButton = document.querySelector( '.ff-refresh-challenge-data' );

if ( refreshDataButton ) {
	refreshDataButton.addEventListener( 'click', function() {
		const ffcTable = document.querySelector( '.ffc-challenge-table' );

		/**
		 * If table is not empty, then clear it.
		 */
		if ( ffcTable.innerHTML ) {
			ffcTable.innerHTML = '';
		}

		getChallengeData().then( function( responseData ) {
			sendChallengeShortcodeDataToServer( responseData );
			generateChallengeShortcodeTable( responseData.data );
		} );
	} )
}
