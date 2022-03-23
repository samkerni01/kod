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
			'res-1.cloudinary.com',
			'res-2.cloudinary.com',
			'res-3.cloudinary.com',
			'res-4.cloudinary.com',
			'res-5.cloudinary.com'
		]
	}
};
