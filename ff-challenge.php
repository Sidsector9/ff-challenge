<?php
/**
 * Plugin Name:     Ff Challenge
 * Description:     A challenge from Formidable Forms
 * Author:          Siddharth Thevaril
 * Author URI:      http://github.com/Sidsector9/
 * Text Domain:     ff-challenge
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Ff_Challenge
 */

if ( ! defined( 'FFC_PATH' ) ) {
	define( 'FFC_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'FFC_URL' ) ) {
	define( 'FFC_URL', plugin_dir_url( __FILE__ ) );
}

if ( file_exists( FFC_PATH . 'vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
	new \FFCApp\Init_App();
}
