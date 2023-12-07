import { serviceFilename } from "~/types";

export const useServicesStore = defineStore("services", () => {
	const runtimeConfig = useRuntimeConfig();

	const markUpResponse = ref({});
	const taskResponse = ref({});

	async function createMarkUpTask(config: Object) {
		const { data: markResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "conf/add",
			{
				method: "post",
				body: {
					service: serviceFilename.MARK_UP,
					ticker: config.ticker,
					timeframe: config.timeframe,
					count_points: config.markup,
					start_date: config.startDate,
					end_date: config.endDate,
					respos_url: "localhost:8080",
				},
			},
		);

		console.log("Created config: ", markResponse);
		markUpResponse.value = markResponse;

		const { data: taskResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "task/add",
		);

		console.log("Added task response: ", taskResponse);
		console.log("taskResponse id:", taskResponse.value.id);
		console.log("markResponse id:", markResponse.value.id);

		const { data: taskCreateResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "task/setConfig",
			{
				method: "get",
				headers: {
					Authentication:
						"Basic cXdlcnR5QGdtaWFsLmNvbTpxd2VydHkxMjM=",
				},
				params: {
					task_id: taskResponse.value.id,
					conf_id: markResponse.value.id,
				},
			},
		);

		console.log("Set task config response:", taskCreateResponse);

		useNuxtApp().$toast.info("Добавление разметки успешно!");
	}

	return {
		markUpResponse,
		taskResponse,
		markUp: createMarkUpTask,
	};
});
