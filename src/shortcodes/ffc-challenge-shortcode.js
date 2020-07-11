import {
	getChallengeData,
	sendChallengeShortcodeDataToServer,
	generateChallengeShortcodeTable,
} from '../common-functions';

getChallengeData().then( function( responseData ) {
	sendChallengeShortcodeDataToServer( responseData );
	generateChallengeShortcodeTable( responseData.data );
} );
