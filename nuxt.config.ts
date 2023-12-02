export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		"~/assets/css/main.css",
		"~/assets/css/general.scss",
		"~/assets/css/special.css",
		"~/assets/css/fonts.css",
		"~/assets/css/navigation.css",
		"~/assets/css/animations.css",
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	modules: ["nuxt-headlessui"],
});
