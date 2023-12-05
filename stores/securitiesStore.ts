import { defineStore } from "pinia";
import type { Security } from "~/types";

export const useSecuritiesStore = defineStore("securities", () => {
	const securities = ref<Security[]>([]);

	const isFetched = ref(false);
	async function fetchSecurities() {
		if (!isFetched.value) {
			const { data: securitiesData } = await useFetch(
				"http://213.171.14.97:8080/api/v1/data/lists/securities",
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
