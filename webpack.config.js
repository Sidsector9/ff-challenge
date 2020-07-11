const path = require( 'path' );

module.exports = {
	entry: {
		'ffc-challenge-shortcode': [ './src/shortcodes/ffc-challenge-shortcode.js' ],
		'ffc-settings': [ './src/admin/ffc-settings.js' ],
	},
	output: {
		path: path.resolve( __dirname , 'dist/js' ),
		filename: '[name].js'
	}
};