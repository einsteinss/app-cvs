const user = require("./../data/userData")

function getUser(argument) {
	return user.getUser()
}

module.exports = getUser()