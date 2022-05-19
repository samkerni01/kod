export default interface Post {
	feature_image: string;
	id: string;
	excerpt: string;
	tags: Array<{ slug: string }>;
	published_at: string;
	slug: string;
	title: string;
}
