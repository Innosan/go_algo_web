<script setup lang="ts">
import { serviceFilename } from "~/types";
import { useTasksStore } from "~/stores/tasksStore";
import type { BackTestResult, isBuyHoldSharp } from "~/types/backTestResult";
const tasksStore = useTasksStore();
const tests = computed(() =>
	tasksStore.getTasksByService(serviceFilename.BACK_TESTING),
);

const taskResult = ref<BackTestResult>({ task_id: null });

const getRes = async (taskId) => {
	taskResult.value = await tasksStore.getTaskResult(taskId);
};

function isBuyHoldSharp(obj: any) {
	return (
		obj &&
		typeof obj.description === "string" &&
		typeof obj.value === "number"
	);
}
</script>

<template>
	<div class="flex gap-7 flex-wrap">
		<div
			class="card hover:border-b-red-400 transition-all flex gap-4 flex-col p-4 border-2 rounded-xl"
			v-for="test in tests.filter((test) => test.status === 2)"
		>
			<CardHeading :heading="test.config.ticker" icon="ui/ic_ticker" />
			<CardHeading
				:heading="test.config.timeframe"
				icon="ui/ic_timeframe"
			/>
			<button @click="getRes(test.id)" class="text-white">
				Посмотреть результаты
			</button>
			<div v-if="taskResult.task_id" class="flex gap-4 items-center">
				<Dialog
					:ticker="test.config.ticker"
					description="dq"
					heading="Пказатели"
					action="Показать результаты"
				>
					<div class="flex gap-4 flex-wrap">
						<template v-for="(value, key) in taskResult" :key="key">
							<div
								class="w-fit border-2 rounded-xl p-2"
								v-if="isBuyHoldSharp(value)"
							>
								<p>{{ value.description }}</p>
								<p class="font-bold">{{ value.value }}</p>
							</div>
						</template>
					</div>
				</Dialog>
				<Dialog
					:ticker="test.config.ticker"
					description="dq"
					heading="Пказатели"
					action="Показать графики"
				>
					<div class="flex gap-4 flex-wrap">
						<template v-for="(value, key) in taskResult" :key="key">
							<div
								class="w-fit border-2 rounded-xl p-2"
								v-if="isBuyHoldSharp(value)"
							>
								<p>{{ value.description }}</p>
								<p class="font-bold">{{ value.value }}</p>
							</div>
						</template>
					</div>
				</Dialog>
			</div>
		</div>
	</div>
</template>

<style scoped></style>