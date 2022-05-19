module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		});

		return config;
	},
	images: {
		domains: [
			'res-5.cloudinary.com',
			'res-4.cloudinary.com',
			'static.ghost.org',
			'images.unsplash.com'
		]
	}
};
