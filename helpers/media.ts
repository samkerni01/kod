import { createMedia } from '@artsy/fresnel';

const ExampleAppMedia = createMedia({
	breakpoints: {
		sm: 0,
		md: 769,
		lg: 1024
	}
});

export const mediaStyle = ExampleAppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = ExampleAppMedia;
