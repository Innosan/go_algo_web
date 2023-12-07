import { serviceFilename } from "~/types";

export const useServicesStore = defineStore("services", () => {
	const runtimeConfig = useRuntimeConfig();

	const markUpResponse = ref({});
	const taskResponse = ref({});
	const datasetConfig = ref({});

	async function createTask(
		service: string,
		config: object,
		successfulMessage: string,
	) {
		const { data: configResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "conf/add",
			{
				method: "post",
				body: {
					service: service,
					...config,
					respos_url: "localhost:8080",
				},
			},
		);

		console.log("Created config: ", configResponse);

		const { data: taskResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "task/add",
		);

		console.log("Added task response: ", taskResponse);
		console.log("taskResponse id:", taskResponse.value.id);
		console.log("configResponse id:", configResponse.value.id);

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
					conf_id: configResponse.value.id,
				},
			},
		);

		console.log("Set task config response:", taskCreateResponse);

		useNuxtApp().$toast.info(successfulMessage);
		useTasksStore().getAllTasks();
	}

	async function createMarkUpTask(config: object) {
		await createTask(
			serviceFilename.MARK_UP,
			config,
			"Добавление разметки успешно!",
		);
	}

	async function createGenDatasetTask(config: object) {
		await createTask(
			serviceFilename.DATASET_GENERATION,
			config,
			"Добавление датасета успешно!",
		);
	}

	async function createNeuralLearningTask(config: Object) {
		const { data: configResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "conf/add",
			{
				method: "post",
				body: {
					service: serviceFilename.DATASET_GENERATION,
					timeframe: config.timeframe,
					count_points: config.markup,
					start_date: config.startDate,
					end_date: config.endDate,
					max_unmark: config.maxUnmark,
					size_df: config.datasetSize,
					extr_bar_count: 10,
					data_path: "app/data/" + config.timeframe,
					respos_url: "localhost:8080",
				},
			},
		);

		console.log("Created config: ", configResponse);
		datasetConfig.value = configResponse;

		const { data: newTaskResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "task/add",
		);

		console.log("Added task response: ", newTaskResponse);
		console.log("taskResponse id:", newTaskResponse.value.id);
		console.log("markResponse id:", configResponse.value.id);

		const { data: taskCreateResponse } = await useFetch(
			runtimeConfig.public.apiRoot + "task/setConfig",
			{
				method: "get",
				headers: {
					Authentication:
						"Basic cXdlcnR5QGdtaWFsLmNvbTpxd2VydHkxMjM=",
				},
				params: {
					task_id: newTaskResponse.value.id,
					conf_id: configResponse.value.id,
				},
			},
		);

		console.log("Set task config response:", taskCreateResponse);

		useNuxtApp().$toast.info("Добавление разметки успешно!");
		useTasksStore().getAllTasks();
	}

	return {
		markUpResponse,
		taskResponse,
		createTask,
		createMarkUpTask,
		createGenDatasetTask,
	};
});
