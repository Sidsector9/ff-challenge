function getDataForChallenge() {
	return fetch( 'http://api.strategy11.com/wp-json/challenge/v1/1' )
		.then( response => {
			return response.json();
		} )
}

function cacheChallengeData( data ) {
	const ffcShortcodeData = new FormData();
	ffcShortcodeData.append( 'action', 'ffc_challenge_shortcode_handler' );
	ffcShortcodeData.append( 'nonce', ffcGlobal.ffcShortcodeNonce );
	ffcShortcodeData.append( 'payload', JSON.stringify( data ) );

	fetch( ffcGlobal.ajaxUrl, {
		method: 'POST',
		body: ffcShortcodeData,
	} )
}

function generateChallengeShortcodeTable( tableData ) {
	const tableHeaderData = tableData.headers;
	const tableBodyData = tableData.rows;
	const ffcTable = document.querySelectorAll( '.ffc-challenge-table' );

	[].forEach.call( ffcTable, function( node ) {
		const fragment = document.createDocumentFragment();
		const tableHeader = document.createElement( 'thead' );
		const tableBody = document.createElement( 'tbody' );

		tableHeaderData.forEach( item => {
			const thNode = document.createElement( 'th' );
			thNode.innerText = item;
			tableHeader.appendChild( thNode )
		} );

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

		fragment.appendChild( tableHeader );
		fragment.appendChild( tableBody );
		node.appendChild( fragment );
	} )
}

getDataForChallenge().then( function( responseData ) {
	cacheChallengeData( responseData );
	generateChallengeShortcodeTable( responseData.data );
} );
