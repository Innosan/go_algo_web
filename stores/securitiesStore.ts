import { defineStore } from "pinia";
import type { Security } from "~/types";

export const useSecuritiesStore = defineStore("securities", () => {
	const runtimeConfig = useRuntimeConfig();
	const securities = ref<Security[]>([]);

	const isFetched = ref(false);
	async function fetchSecurities() {
		if (!isFetched.value) {
			const { data: securitiesData } = await useFetch(
				runtimeConfig.public.apiRoot + "data/lists/securities",
				{
					headers: {
						Authorization:
							"Basic dXNlcjpmODFiMWVmNC1hZjVlLTRlMDctODNjMy04ZTVhNzhiN2Y5ZjQ=",
					},
				},
			);

			securities.value = securitiesData.value;
			isFetched.value = true;
		}
	}

	return {
		securities,
		isFetched,
		fetchSecurities,
	};
});
