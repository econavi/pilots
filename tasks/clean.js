/* clean */

const del = require('del');


module.exports = () => (
	del([
		'public'
	])
);