<?php
/**
 * Utility tools to perform operations on FF Challenge App
 * using WP-CLI.
 *
 * @package FF_Challenge
 */

namespace FFCApp\Cli;

/**
 * Defines WP-CLI commands for the FF Challenge App.
 */
class FF_Cli {

	/**
	 * Registers custom WP-CLI Commands.
	 */
	public function init() {
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			\WP_CLI::add_command( 'ff clear challenge-shortcode', array( $this, 'clear_cache' ) );
		}
	}

	/**
	 * Clears the `ffc_challenge_payload` cache used by `ffc_challenge` shortcode.
	 *
	 * @when after_wp_load
	 */
	public function clear_cache() {
		$is_deleted = wp_cache_delete( 'ffc_challenge_payload' );

		if ( $is_deleted ) {
			\WP_CLI::success( esc_html__( '`ffc_challenge` shortcode data flushed. The webpage will fetch the latest data.', 'ff-challenge' ) );
		} else {
			\WP_CLI::error( esc_html__( 'Cache is empty. Nothing to flush!', 'ff-challenge' ) );
		}
	}
}
