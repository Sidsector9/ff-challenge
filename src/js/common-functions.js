/**
 * GET's the challenge data from the strategy11 API.
 */
export function getChallengeData() {
	return fetch( 'http://api.strategy11.com/wp-json/challenge/v1/1' ).then(
		( response ) => {
			return response.json();
		}
	);
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

	return fetch( ffcGlobal.ajaxUrl, {
		method: 'POST',
		body: ffcShortcodeData,
	} );
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
	[].forEach.call( ffcTable, function ( node ) {
		const fragment = document.createDocumentFragment();
		const tableHeader = document.createElement( 'thead' );
		const tableFooter = document.createElement( 'tfoot' );
		const tableHeaderRow = document.createElement( 'tr' );
		const tableFooterRow = document.createElement( 'tr' );
		const tableBody = document.createElement( 'tbody' );

		tableHeader.appendChild( tableHeaderRow );
		tableFooter.appendChild( tableFooterRow );

		/**
		 * Populate <th /> elements inside <thead />.
		 */
		tableHeaderData.forEach( ( item ) => {
			const thNode = document.createElement( 'th' );
			thNode.innerText = item;
			tableHeaderRow.appendChild( thNode );
		} );

		/**
		 * Populate <th /> elements inside <tfoot />.
		 */
		tableHeaderData.forEach( ( item ) => {
			const thNode = document.createElement( 'th' );
			thNode.innerText = item;
			tableFooterRow.appendChild( thNode );
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
		}

		/**
		 * Append <thead /> and <tbody /> to
		 * Document Fragment.
		 */
		fragment.appendChild( tableHeader );
		fragment.appendChild( tableBody );
		fragment.appendChild( tableFooter );

		/**
		 * Append Document Fragment to all the empty <table />
		 * containers with the class `.ffc-challenge-table`
		 */
		node.appendChild( fragment );
	} );
}

/**
 * Display toggles the loading icon on the options page.
 *
 * @param {string} status Status of the loader icon.
 */
export function toggleLoader( status ) {
	const loaders = document.querySelectorAll( '.ffc-options__loader' );

	if ( ! loaders ) {
		return;
	}

	if ( 'show' === status ) {
		[].forEach.call( loaders, function ( loader ) {
			loader.classList.remove( 'ffc-options__loader--hide' );
			loader.classList.add( 'ffc-options__loader--show' );
		} );
	}

	if ( 'hide' === status ) {
		[].forEach.call( loaders, function ( loader ) {
			loader.classList.remove( 'ffc-options__loader--show' );
			loader.classList.add( 'ffc-options__loader--hide' );
		} );
	}
}

/**
 * Appends a loader to elements which are waiting for the AJAX call to the API to finish.
 *
 * @param {string} className The name of the element where the loader needs to be appended.
 */
export function addLoaderToElements( className ) {
	const elements = document.querySelectorAll( className );

	if ( ! elements ) {
		return;
	}

	[].forEach.call( elements, function ( element ) {
		element.insertAdjacentHTML(
			'afterend',
			`<div class="ffc-loader-container">
				<img class="ffc-loader" src="${ ffcGlobal.pluginUrl }/dist/images/loader.svg" />
			</div>`
		);
	} );
}

/**
 * Removes the loaders added by `addLoaderToElements` once AJAX call completes.
 */
export function removeLoaderFromElements() {
	const elements = document.querySelectorAll( '.ffc-loader-container' );

	if ( ! elements ) {
		return;
	}

	[].forEach.call( elements, function ( element ) {
		element.remove();
	} );
}
