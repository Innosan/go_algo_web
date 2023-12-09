import { defineStore } from "pinia";
import type { Security } from "~/types";

export const useSecuritiesStore = defineStore("securities", () => {
	const runtimeConfig = useRuntimeConfig();
	const securities = ref<Security[]>([]);
	const leaderboard = ref<Security[]>([]);

	const isSecuritiesFetched = ref(false);
	const isLeaderboardFetched = ref(false);
	async function fetchSecurities() {
		if (!isSecuritiesFetched.value) {
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
			isSecuritiesFetched.value = true;
		}
	}

	async function fetchLeaderboard() {
		if (!isLeaderboardFetched.value) {
			const { data: leaderboardData } = await useFetch(
				runtimeConfig.public.apiRoot + "leaderboard",
			);

			leaderboard.value = leaderboardData.value;
			isLeaderboardFetched.value = true;
		}
	}

	return {
		securities,
		leaderboard,
		isFetched: isSecuritiesFetched,
		isLeaderboardFetched,
		fetchSecurities,
		fetchLeaderboard,
	};
});
