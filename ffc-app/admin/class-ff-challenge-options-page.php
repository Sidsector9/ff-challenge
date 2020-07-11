<?php
/**
 * Utility tools to perform operations on FF Challenge App
 * using WP-CLI.
 *
 * @package FF_Challenge
 */

namespace FFCApp\Admin;

/**
 * Defines WP-CLI commands for the FF Challenge App.
 */
class FF_Challenge_Options_Page {
	public function init() {
		add_action( 'admin_menu', array( $this, 'register_options_page' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register_scripts' ) );
	}

	/**
	 * Registers the `FF Challenge Options` options page.
	 */
	public function register_options_page() {
		add_menu_page(
			__( 'FF Challenge', 'ff-challenge' ),
			__( 'FF Challenge', 'ff-challenge' ),
			'manage_options',
			'ff-challenge',
			array( $this, 'render_ff_settings_page' )
		);
	}

	/**
	 * Registers the assets necessary for the
	 * `FF Challenge Options` page.
	 */
	public function register_scripts() {
		wp_register_script( 'ffc-settings', FFC_URL . 'dist/js/ffc-settings.js', array(), '1.0', true );
		wp_enqueue_script( 'ffc-settings' );
		wp_localize_script(
			'ffc-settings',
			'ffcGlobal',
			array(
				'ajaxUrl'           => admin_url( 'admin-ajax.php' ),
				'ffcShortcodeNonce' => wp_create_nonce( 'ffc-shortcode-nonce' ),
			)
		);
	}

	/**
	 * Renders content for the `FF Challenge Options` page.
	 */
	public function render_ff_settings_page() {
		printf(
			'<button type="button" class="ff-refresh-challenge-data">%s</button>',
			esc_html__( 'Refresh data', 'ff-challenge' )
		);

		$cached_data = wp_cache_get( 'ffc_challenge_payload' );

		if ( false === $cached_data || empty( $cached_data ) ) {
			wp_enqueue_script( 'ffc-challenge-shortcode-script' );
			printf( '<table class="ffc-challenge-table"></table>' );
		} else {
			\FFCApp\Shortcodes\Challenge::challenge_shortcode_table_content( $cached_data );
		}
	}
}
