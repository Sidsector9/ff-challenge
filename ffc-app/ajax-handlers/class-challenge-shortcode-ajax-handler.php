<?php
/**
 * Ajax handler for the `ffc_challenge` shortcode.
 *
 * @package FF_Challenge
 */

namespace FFCApp\AjaxHandlers;

/**
 * Defines ajax handler methods for the `ffc_challenge` shortcode.
 */
class Challenge_Shortcode_Ajax_Handler {

	/**
	 * Calls necessary actions and filters.
	 */
	public function init() {
		add_action( 'wp_ajax_ffc_challenge_shortcode_handler', array( $this, 'handler' ) );
		add_action( 'wp_ajax_nopriv_ffc_challenge_shortcode_handler', array( $this, 'handler' ) );
	}

	/**
	 * Called when the cache `ffc_challenge_payload` is empty.
	 */
	public function handler() {
		check_ajax_referer( 'ffc-shortcode-nonce', 'nonce' );

		/**
		 * Get the API response.
		 */
		$payload = filter_input( INPUT_POST, 'payload' );

		if ( is_null( $payload ) || false === $payload ) {
			wp_send_json_error();
		}

		$payload = json_decode( $payload, true );

		/**
		 * Cache the payload so that we don't call the API
		 * for at least 1 hour.
		 */
		$is_set = wp_cache_set( 'ffc_challenge_payload', $payload, '', HOUR_IN_SECONDS );

		if ( $is_set ) {
			wp_send_json_success();
		} else {
			wp_send_json_error();
		}
	}
}
