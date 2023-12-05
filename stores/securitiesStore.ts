import { defineStore } from "pinia";
import type { Security } from "~/types";

export const useSecuritiesStore = defineStore("securities", () => {
	const securities = ref<Security[]>([]);
	const filteredSecurities = ref([]);

	const isFetched = ref(false);
	async function fetchSecurities() {
		if (!isFetched.value) {
			const { data: securitiesData } = await useFetch(
				"http://213.171.14.97:8080/api/v1/data/lists/securities",
			);
			securities.value = securitiesData.value;
			isFetched.value = true;
		}
	}

	function filterSecurities() {
		filteredSecurities.value = securities.value.map((item) => ({
			id: item.guid,
			guid: item.guid,
			companyName: item.secname,
		}));
	}

	return {
		securities,
		isFetched,
		fetchSecurities,
		filteredSecurities,
		filterSecurities,
	};
});
