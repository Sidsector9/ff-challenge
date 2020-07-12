# FF Challenge
![WPCS](https://github.com/Sidsector9/ff-challenge/workflows/WPCS/badge.svg?branch=master)
![PHPUnit](https://github.com/Sidsector9/ff-challenge/workflows/PHPUnit/badge.svg?branch=master)
![ESLint](https://github.com/Sidsector9/ff-challenge/workflows/ESLint/badge.svg?branch=master)

### Acceptance criteria:
- [x] Can be used when logged out or in
- [x] Calls the http://api.strategy11.com/wp-json/challenge/v1/1 endpoint to get the data to return
- [x] Which when called always returns the data, but regardless of when/how many times it is called should not request the data from our server more than 1 time per hour
- [x] Create a shortcode for the frontend, that when loaded uses Javascript to contact your AJAX endpoint and display the data returned formatted into a table-like display
- [x] Create a WP CLI command that can be used to force the refresh of this data the next time the AJAX endpoint is called
- [x] Create a WordPress admin page which displays this data in the style of the admin page of the WordPress plugin Formidable Forms that includes the Formidable logo and header. Include a button to refresh the data
- [x] Unit test to check if the request run multiple times an hour
- [x] Unit test to check ifthe table showing the expected results

### Installation notes:
This plugin relies on [Redis Object Cache](https://wordpress.org/plugins/redis-cache/) instead of Transient cache since Transient cache [can expire](https://developer.wordpress.org/apis/handbook/transients/#saving-transients) before the expiration time.

#### Steps to install:
- `git clone https://github.com/Sidsector9/ff-challenge.git`
- `cd ff-challenge`
- `composer install`
- `yarn install`
- `yarn build`

### Features:
- **Shortcode**: `[ffc_challenge /]` renders the data from the API from the acceptance criteria in a table
- **CLI**: `wp ff clear challenge-shortcode` will force the refresh of the data
- **Options Page**: `Admin Dashboard > FF Challenge ` displays the API data on a custom options page

### PHPUnit Tests:
PHPUnit tests are written using [10up's WP_Mock](https://github.com/10up/wp_mock) since it is closer to performing the Unit Tests without loading the WordPress environment as in the case of `WP_UnitTestCase`

### Post Page with shortcode (Twenty Twenty theme):
![formidable local_hello-world_](https://user-images.githubusercontent.com/17757960/87249704-3d349100-c47e-11ea-86b2-8cdc8c02dbce.png)

### Custom Options page:
![formidable local_wp-admin_admin php_page=ff-challenge](https://user-images.githubusercontent.com/17757960/87249708-4291db80-c47e-11ea-855f-8ce8bea56cf8.png)
