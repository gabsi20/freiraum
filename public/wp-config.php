<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'freiraum-abtenau.at');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'H}H]#m>r8&W8a!tteb@Iz7Ur[NwK1CpG+i*v:R{F{?c54lr_:lzEotriybsGXl(Q');
define('SECURE_AUTH_KEY',  '0odk#4:6,-CF)an}J}9sxY a<`[13wRGLh3K.&BACQYrND<^_@W%v>?nf$H2ooA}');
define('LOGGED_IN_KEY',    'lmK4v*O.:yzT<IzSzE/T(SHGgb{f4*jKiuBT+hLr%H];|M%+Lmg`=oOAaTO;L,Z!');
define('NONCE_KEY',        'c7:sI4i],eHgfD0^,i)d:W5FUTUpyUn7W$vn<9^:xN:3?Z^Z$)W2E2x*Z?.+B^-i');
define('AUTH_SALT',        '9pn@r&2TG#5A&P,NK?vVUY`C`bTB#<mCA;ediD#M5JBbu`9CDF^HE t5M|Hb>QOG');
define('SECURE_AUTH_SALT', '!R!T2fRUf;CI=6|(W~%OfRRybczGny&FTbK_Z2@(u;w$u6-=xp_ot!~tNfV%L7=K');
define('LOGGED_IN_SALT',   'B$)PB3l(;2#-bxK=x_F}4/D)ldeEI{x4^Elsm1&HlHp>p}2l~#Q9R`in,+XLHF!B');
define('NONCE_SALT',       'peHD}^LtY*;%1^l6^[(pn~9[m|FNO$S[(CjT,t_aG{96Ye:=tO<UKb$ZScZC5Ujb');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
