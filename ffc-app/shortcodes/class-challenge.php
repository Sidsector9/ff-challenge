<?php
/**
 * Sets up the `ffc_challenge` shortcode.
 *
 * @package FF_Challenge
 */

namespace FFCApp\Shortcodes;

/**
 * Defines methods to register the `ffc_challenge` shortcode.
 */
class Challenge {

	/**
     * Calls necessary actions and filters.
     */
	public function init() {
		add_shortcode( 'ffc_challenge', array( $this, 'render_shortcode' ) );
	}

	/**
     * Renders the content for the `ffc_challenge` shortcode.
	 *
	 * @param array $attributes Array of shortcode attributes. 
	 * @return string
     */
	public function render_shortcode( $attributes ) {

		/**
		 * The cache will contain a cached copy of the data for the
		 * shortcode with an expiry of 1 hour.
		 */
		$cached_data = wp_cache_get( 'ffc_challenge_payload' );

		if ( false === $cached_data || empty( $cached_data ) ) {

			/**
			 * We don't want `ffc-script-front` script to enqueue if the
			 * shortcode isn't used on the post page. This is why the
			 * script is conditionally enqueued from the render_shortcode
			 * method.
			 *
			 * If the cache is empty, enqueue the `ffc-script-front` script.
			 * This script is responsible for making the AJAX call to the API
			 * to fetch data for the shortcode.
			 */
			wp_enqueue_script( 'ffc-script-front' );

			/**
			 * Render the table container which will be populated by the
			 * response of the AJAX call performed by `ffc-script-front`
			 * script.
			 */
			return '<table class="ffc-challenge-table"></table>';
		}

		ob_start();

		?>

		<table>
			<thead>
			

		<?php

		/**
		 * Print the headers for the table.
		 */
		foreach ( $cached_data['data']['headers'] as $header_item ) {
			printf(
				'<th>%s</th>',
				esc_html( $header_item )
			);
		}

		?>

			</thead>
			<tbody>
		<?php

		/**
		 * Print the body of the table.
		 */
		foreach ( $cached_data['data']['rows'] as $body_item ) {
			printf(
				'
				<tr>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
				</tr>
				',
				esc_html( $body_item['id'] ),
				esc_html( $body_item['fname'] ),
				esc_html( $body_item['lname'] ),
				esc_html( $body_item['email'] ),
				esc_html( $body_item['date'] )
			);
		}
		
		?>
			</tbody>
		</table>

		<?php

		return ob_get_clean();
	}
}
