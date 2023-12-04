import { defineStore } from "pinia";

/*
 * Generic store for handling parameters fetch and storing.
 */
export const useParametersStore = <T>(storeID: string, apiEndpoint: string) => {
	return defineStore(storeID, () => {
		const data = ref<T[]>([]);
		const isFetched = ref(false);

		async function fetchData() {
			if (!isFetched.value) {
				const { data: fetchedData } = await useFetch(apiEndpoint);

				data.value = fetchedData.value;
				isFetched.value = true;
			}
		}

		return { data, isFetched, fetchData };
	});
};
