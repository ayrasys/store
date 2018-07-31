// config used by server side only
const dbHost = process.env.DB_HOST || 'ds159631.mlab.com';
const dbPort = process.env.DB_PORT || 59631;
const dbName = process.env.DB_NAME || 'nearpins';
const dbUser = process.env.DB_USER || 'imajkumar';
const dbPass = process.env.DB_PASS || 'Ajay#9711';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';
	//mongodb://<dbuser>:<dbpassword>@ds159631.mlab.com:59631/nearpins

const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `http://localhost:3001/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `http://localhost:3001/ajax`,

	// Access-Control-Allow-Origin
	storeBaseUrl: `http://localhost:3000`,

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 3001,
	storeListenPort: 3000,

	// used by API
	mongodbServerUrl: dbUrl,

	smtpServer: {
		host: '',
		port: 0,
		secure: true,
		user: '',
		pass: '',
		fromName: '',
		fromAddress: ''
	},

	// key to sign tokens
	jwtSecretKey: '-',

	// key to sign store cookies
	cookieSecretKey: '-',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000,

	developerMode: true
};
