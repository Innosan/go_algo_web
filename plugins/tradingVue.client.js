import TradingVue from "trading-vue-js";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(TradingVue);
});
