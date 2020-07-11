const path = require( 'path' );

module.exports = {
	entry: {
		'ffc-challenge-shortcode': [ './src/js/shortcodes/ffc-challenge-shortcode.js' ],
		'ffc-settings': [ './src/js/admin/ffc-settings.js' ],
	},
	output: {
		path: path.resolve( __dirname , 'dist' ),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
						}
					},
				],
			},
		],
	},
};