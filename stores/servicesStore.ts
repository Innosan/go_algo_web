export const useServicesStore = defineStore("services", () => {
	const runtimeConfig = useRuntimeConfig();

	const markUpResponse = ref({});
	async function markUp(config: Object) {
		const { data: markResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "conf/add",
			{
				method: "post",
				body: {
					version: 0,
					service: "string",
					task_id: 0,
					scaler_path: "string",
					neural_path: "string",
					extr_bar_count: 0,
					max_unmark: 0,
					size_df: 0,
					count_days: 0,
					data_path: "string",
					new_model_flag: true,
					learning_rate: 0,
					epochs: 0,
					steps_per_epoch: 0,
					validation_steps: 0,
					id: 0,
					guid: "string",
					ticker: config.ticker,
					timeframe: config.timeframe,
					count_points: config.markup,
					start_date: config.startDate,
					end_date: config.endDate,
					respos_url: "localhost:8080",
				},
			},
		);

		console.log(markResponse);
		markUpResponse.value = markResponse;
	}

	return {
		markUpResponse,
		markUp,
	};
});
