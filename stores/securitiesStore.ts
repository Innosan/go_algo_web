import { defineStore } from "pinia";
import type { Security } from "~/types";

export const useSecuritiesStore = defineStore("securities", () => {
	const runtimeConfig = useRuntimeConfig();
	const securities = ref<Security[]>([]);
	const leaderboard = ref([]);

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

	function getSortedLeaderboard(timeframe) {
		return leaderboard.value
			.sort((a, b) => b.predict_profit - a.predict_profit)
			.filter((ticker) => ticker.timeframe === timeframe)
			.filter((v, i, a) => {
				return a.findIndex((t) => t.ticker === v.ticker) === i;
			})
			.slice(0, 7);
	}

	return {
		securities,
		leaderboard,
		isFetched: isSecuritiesFetched,
		isLeaderboardFetched,
		fetchSecurities,
		fetchLeaderboard,
		getSortedLeaderboard,
	};
});
