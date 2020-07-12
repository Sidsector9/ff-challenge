<?php
/**
 * Bootstraps PHPUnit
 *
 * @package FF_Challenge
 */

/**
 * Requires and initializations.
 */
require_once dirname( dirname( __FILE__ ) ) . '/vendor/autoload.php';
WP_Mock::bootstrap();
require_once dirname( dirname( __FILE__ ) ) . '/ffc-app/shortcodes/class-challenge.php';
