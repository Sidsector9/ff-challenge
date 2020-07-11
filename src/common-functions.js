/**
 * GET's the challenge data from the strategy11 API.
 *
 * @return JSON
 */
export function getChallengeData() {
	return fetch( 'http://api.strategy11.com/wp-json/challenge/v1/1' )
		.then( response => {
			return response.json();
		} )
}

/**
 * Ajax call to `ffc_challenge_shortcode_handler` action.
 * Sends necessary data under the `payload` key to the server.
 *
 * @param {Object} data Data that needs to be sent to server for caching.
 */
export function sendChallengeShortcodeDataToServer( data ) {
    const ffcShortcodeData = new FormData();

    /**
     * Build form data before sending.
     */
	ffcShortcodeData.append( 'action', 'ffc_challenge_shortcode_handler' );
	ffcShortcodeData.append( 'nonce', ffcGlobal.ffcShortcodeNonce );
	ffcShortcodeData.append( 'payload', JSON.stringify( data ) );

	fetch( ffcGlobal.ajaxUrl, {
		method: 'POST',
		body: ffcShortcodeData,
	} )
}

/**
 * Generates table for `ffc_challenge` shortcode on the front end.
 *
 * @param {Object} tableData Data to generate table head and body.
 */
export function generateChallengeShortcodeTable( tableData ) {

    /**
     * This will be used inside <thead> element.
     */
    const tableHeaderData = tableData.headers;
    
    /**
     * This will be used inside <tbody> element.
     */
    const tableBodyData = tableData.rows;

    /**
     * The empty <table /> container on the page which will
     * be later populated by `tableData`.
     */
    const ffcTable = document.querySelectorAll( '.ffc-challenge-table' );
    
    if ( ffcTable.innerHTML ) {
        ffcTable.innerHTML = '';
    }

    /**
     * Loop through all empty <table /> containers on the front end.
     *
     * This is done since it is possible that a shor
     */
	[].forEach.call( ffcTable, function( node ) {
		const fragment = document.createDocumentFragment();
		const tableHeader = document.createElement( 'thead' );
		const tableBody = document.createElement( 'tbody' );

        /**
         * Populate <th /> elements.
         */
		tableHeaderData.forEach( item => {
			const thNode = document.createElement( 'th' );
			thNode.innerText = item;
			tableHeader.appendChild( thNode )
		} );

        /**
         * Populate <tr /> elements inside <tbody />
         */
		for ( const item in tableBodyData ) {
			const trNode = document.createElement( 'tr' );
			trNode.innerHTML = `
				<td>${ tableBodyData[ item ].id }</td>
				<td>${ tableBodyData[ item ].fname }</td>
				<td>${ tableBodyData[ item ].lname }</td>
				<td>${ tableBodyData[ item ].email }</td>
				<td>${ tableBodyData[ item ].date }</td>
			`;

			tableBody.appendChild( trNode );
		};

        /**
         * Append <thead /> and <tbody /> to
         * Document Fragment.
         */
		fragment.appendChild( tableHeader );
        fragment.appendChild( tableBody );
        
        /**
         * Append Document Fragment to all the empty <table />
         * containers with the class `.ffc-challenge-table`
         */
		node.appendChild( fragment );
	} )
}
