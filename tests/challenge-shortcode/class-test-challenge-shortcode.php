<?php
/**
 * Contains tests for `ffc_challenge` shortcode.
 *
 * @package FF_Challenge
 */

/**
 * Tests the `ffc_challenge` shortcode
 */
class Test_Challenge_Shortcode extends WP_Mock\Tools\TestCase {

	/**
	 * Tests the output of the shortcode when the challenge
	 * data is not cached yet.
	 *
	 * An empty cache should render an empty <table />
	 * container which should be populated via JavaScript.
	 */
	public function test_render_shortcode_without_cached_data() {

		/**
		 * Mocks the `wp_cache_get` function to return
		 * a false value.
		 *
		 * @return false
		 */
		\WP_Mock::userFunction(
			'wp_cache_get',
			array(
				'args'   => 'ffc_challenge_payload',
				'times'  => 1,
				'return' => false,
			)
		);

		/**
		 * Mocks the `wp_enqueue_script` function.
		 */
		\WP_Mock::userFunction(
			'wp_enqueue_script',
			array(
				'args'   => 'ffc-challenge-shortcode-script',
				'times'  => 1,
				'return' => true,
			)
		);

		$challenge = new \FFCApp\Shortcodes\Challenge();
		$result    = $challenge->render_shortcode( array() );

		$this->assertEquals( '<table class="ffc-challenge-table"></table>', $result );
	}

	/**
	 * Tests the output of the shortcode when the challenge
	 * data is retrieved from the cache instead of the
	 * challenge API.
	 */
	public function test_render_shortcode_with_cached_data() {

		/**
		 * Get the dummy cached data which will be used to compare
		 * later.
		 */
		$cached_data = require_once 'dummy-challenge-shortcode-data.php';

		/**
		 * Expected dummy HTML which will be tested against
		 * the value from the shortcode.
		 */
		$expected_html = require_once 'expected-html.php';

		/**
		 * Mocks the `wp_cache_get` function to return
		 * the $cached_data mentioned above.
		 */
		\WP_Mock::userFunction(
			'wp_cache_get',
			array(
				'args'   => 'ffc_challenge_payload',
				'times'  => 1,
				'return' => $cached_data,
			)
		);

		$challenge = new \FFCApp\Shortcodes\Challenge();
		$result    = $challenge->render_shortcode( array() );

		$$expected_html = str_replace( array( "\r", "\n", "\t" ), '', $expected_html );
		$result         = str_replace( array( "\r", "\n", "\t" ), '', $result );

		$this->assertEquals( $$expected_html, $result );
	}
}
