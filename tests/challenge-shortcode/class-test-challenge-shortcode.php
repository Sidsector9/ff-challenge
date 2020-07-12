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
		$cached_data = require 'dummy-challenge-shortcode-data.php';

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

		$expected_html = str_replace( array( "\r", "\n", "\t" ), '', $expected_html );
		$result        = str_replace( array( "\r", "\n", "\t" ), '', $result );

		$this->assertEquals( $expected_html, $result );
	}

	/**
	 * Test to ensure the plugin calls the challenge API only
	 * when the cache is unavailable.
	 *
	 * Also ensures that when the cache is available, the plugin
	 * doesn't enqueue the script which calls the challenge API.
	 */
	public function test_count_calls_to_challenge_api() {

		/**
		 * On cache empty, the plugin will call the challenge API.
		 *
		 * This is indicated by `false` returned by `wp_cache_get`
		 * below.
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
		 * On cache empty, the plugin will call the challenge API.
		 *
		 * This is indicated by `times: 1`, which means the plugin
		 * script which calls the challenge API will run 1 time.
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

		/**
		 * This is the first function call to render the shortcode.
		 *
		 * For the first call (on cache empty), the plugin will make a call to
		 * the challenge API.
		 *
		 * Subsequent function calls will use cached data instead
		 * of calling the challenge API.
		 */
		$challenge->render_shortcode( array() );

		/**
		 * Here onwards we will assume that the plugin has cached the
		 * response from the first call to the challenge API.
		 */
		$cached_data = require 'dummy-challenge-shortcode-data.php';

		/**
		 * `times: 5` indicates we will call `render_shortcode` 5 times
		 * with cached data.
		 */
		\WP_Mock::userFunction(
			'wp_cache_get',
			array(
				'args'   => 'ffc_challenge_payload',
				'times'  => 5,
				'return' => $cached_data,
			)
		);

		/**
		 * `times: 0` indicates that `wp_enqueue_script` will be called
		 * 0 times even when `render_shortcode` will be called 5 times.
		 * This is the correct behaviour when the cache is available.
		 *
		 * You can test the behaviour by setting `time > 0` and see the
		 * test failing. Which means it is correctly working.
		 */
		\WP_Mock::userFunction(
			'wp_enqueue_script',
			array(
				'args'   => 'ffc-challenge-shortcode-script',
				'times'  => 0,
				'return' => true,
			)
		);
		$challenge->render_shortcode( array() );
		$challenge->render_shortcode( array() );
		$challenge->render_shortcode( array() );
		$challenge->render_shortcode( array() );
		$challenge->render_shortcode( array() );

		/**
		 * If the test reaches here means everything worked fine.
		 */
		$this->assertEquals( true, true );
	}
}
