export default defineNuxtConfig({
	devtools: { enabled: true },
	// routeRules: {
	// 	"/api/v1/**": { proxy: { to: "'http://213.171.14.97:8080/api/v1/**" } },
	// },
	css: [
		"~/assets/css/main.css",
		"~/assets/css/general.scss",
		"~/assets/css/special.css",
		"~/assets/css/fonts.css",
		"~/assets/css/navigation.css",
		"~/assets/css/animations.css",
		"~/assets/css/icons.css",
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
	modules: ["nuxt-headlessui", "nuxt-icons", "@pinia/nuxt"],
});
