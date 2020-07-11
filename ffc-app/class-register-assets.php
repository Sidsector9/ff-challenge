<?php
/**
 * Registers plugin assets.
 *
 * @package FF_Challenge
 */

namespace FFCApp;

/**
 * Defines methods to register | enqueue assets like JS and CSS
 * necessary for the plugin.
 */
class Register_Assets {

	/**
	 * Calls necessary actions and filters.
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
	}

	/**
	 * Registers styles and scripts.
	 */
	public function register_scripts() {
		$is_cached = wp_cache_get( 'ffc_challenge_payload' );

		if ( false === $is_cached ) {
			wp_register_script( 'ffc-challenge-shortcode-script', FFC_URL . 'dist/js/ffc-challenge-shortcode.js', array(), '1.0', true );
			wp_localize_script(
				'ffc-challenge-shortcode-script',
				'ffcGlobal',
				array(
					'ajaxUrl'           => admin_url( 'admin-ajax.php' ),
					'ffcShortcodeNonce' => wp_create_nonce( 'ffc-shortcode-nonce' ),
				)
			);
		}
	}
}
