const httpRequest = require('request');
const config = require('../config/config');
const User = require('../models/user');


module.exports = function (req, res) {

	const options = {
		url: 'https://api.instagram.com/oauth/access_token',
		method: 'POST',
		form: {
			client_id: config.instagram.client_id,
			client_secret: config.instagram.client_secret,
			grant_type: 'authorization_code',
			redirect_uri: config.instagram.redirect_uri,
			code: req.query.code
		}
	};

	httpRequest(options, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			const r = JSON.parse(body);
			const user = {
				id: r.user.id,
				username: r.user.username,
				full_name: r.user.full_name,
				bio: r.user.bio,
				website: r.user.website,
				profile_picture: r.user.profile_picture,
				access_token: r.access_token
			};
			console.log('user', user);
			User.create(user, function (error) {
				if (error) res.send(error);
				res.redirect('/');
			})
		}
	});

};
