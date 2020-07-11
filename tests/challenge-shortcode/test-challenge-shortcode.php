<?php

class Test_Challenge_Shortcode extends WP_Mock\Tools\TestCase {


    public function test_render_shortcode_without_cached_data() {
        \WP_Mock::userFunction( 'wp_cache_get', array(
			'args' => 'ffc_challenge_payload',
			'times' => 1,
			'return' => false,
        ) );

        \WP_Mock::userFunction( 'wp_enqueue_script', array(
			'args' => 'ffc-challenge-shortcode-script',
			'times' => 1,
			'return' => true,
        ) );

        $challenge = new \FFCApp\Shortcodes\Challenge();
        $result    = $challenge->render_shortcode( array() );

		$this->assertEquals( '<table class="ffc-challenge-table"></table>', $result );
    }
    
    public function test_render_shortcode_with_cached_data() {
        $cached_data = require_once 'dummy-challenge-shortcode-data.php';
        $expected_html = require_once 'expected-html.php';

        \WP_Mock::userFunction( 'wp_cache_get', array(
			'args' => 'ffc_challenge_payload',
			'times' => 1,
			'return' => $cached_data,
        ) );

        $challenge = new \FFCApp\Shortcodes\Challenge();
        $result    = $challenge->render_shortcode( array() );

        $$expected_html = str_replace( array( "\r", "\n", "\t" ), '', $expected_html );
        $result = str_replace( array( "\r", "\n", "\t" ), '', $result );

        $this->assertEquals( $$expected_html, $result );
    }
}
