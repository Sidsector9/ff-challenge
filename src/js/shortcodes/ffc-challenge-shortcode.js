import {
	getChallengeData,
	sendChallengeShortcodeDataToServer,
	generateChallengeShortcodeTable,
	addLoaderToElements,
	removeLoaderFromElements,
} from '../common-functions';

import '../../sass/ff-challenge-shortcode.scss';

/**
 * Append a loader to the end of the table
 * to indicate AJAX is running.
 */
addLoaderToElements( '.ffc-challenge-table' );

/**
 * Call the Challenge API.
 */
getChallengeData().then( function ( responseData ) {
	/**
	 * Remove the loader once AJAX call completes.
	 */
	removeLoaderFromElements();

	/**
	 * Send the AJAX response to server to cache for
	 * an hour so that on next page load we can render
	 * the data from cache instead of making another
	 * AJAX call to API.
	 */
	sendChallengeShortcodeDataToServer( responseData );

	/**
	 * Render the table on the front end.
	 */
	generateChallengeShortcodeTable( responseData.data );
} );
