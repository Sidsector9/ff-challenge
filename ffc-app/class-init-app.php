<?php
/**
 * Deals with setting up the plugin by instantiating
 * necessary classes.
 *
 * @package FF_Challenge
 */

namespace FFCApp;

/**
 * Instantiates classes necessary on plugin initialization.
 */
class Init_App {

	/**
	 * Constructor function.
	 */
	public function __construct() {
		( new \FFCApp\Register_Assets() )->init();
		( new \FFCApp\Shortcodes\Challenge() )->init();
		( new \FFCApp\AjaxHandlers\Challenge_Shortcode_Ajax_Handler() )->init();
		( new \FFCApp\Cli\FF_Cli() )->init();
	}
}
