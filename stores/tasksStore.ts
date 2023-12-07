export const useTasksStore = defineStore("tasks", () => {
	const runtimeConfig = useRuntimeConfig();

	const tasks = ref([]);
	const isFetched = ref(false);

	async function getAllTasks() {
		const { data: allTasks } = await useFetch(
			runtimeConfig.public.apiRoot + "task/lists/all",
		);

		isFetched.value = true;
		tasks.value = allTasks.value;
	}

	function getTasksByService(service: string) {
		return tasks.value.filter((task) => task.config?.service === service);
	}

	async function getTaskResult(taskId: number) {
		const { data: taskResult } = await useFetch(
			runtimeConfig.public.apiRoot + "task/result",
			{
				params: {
					task_id: taskId,
				},
			},
		);

		return taskResult.value;
	}

	function transformChartData(taskResult: any) {
		let values = taskResult;
		return values.Datetime.map((time, i) => ({
			Date: time / 1000000,
			Open: values.Open[i],
			High: values.High[i],
			Low: values.Low[i],
			Close: values.Close[i],
			Volume: values.Volume[i],
		}));
	}

	return {
		tasks,
		isFetched,
		getAllTasks,
		getTasksByService,
		getTaskResult,
		transformChartData,
	};
});
