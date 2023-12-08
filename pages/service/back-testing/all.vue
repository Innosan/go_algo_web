<script setup lang="ts">
import { serviceFilename, statuses } from "~/types";
import { useTasksStore } from "~/stores/tasksStore";
import type { BackTestResult, isBuyHoldSharp } from "~/types/backTestResult";
import { timeframeMapping } from "~/utils/parameters";
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
			v-for="test in tests"
		>
			<CardHeading :heading="test.config.ticker" icon="ui/ic_ticker" />
			<CardHeading
				:heading="test.config.timeframe"
				icon="ui/ic_timeframe"
			/>
			<CardHeading
				:heading="statuses[test.status].title"
				:icon="statuses[test.status].icon"
			/>
			<div
				class="flex flex-col gap-4"
				v-if="test.status === 2"
				v-auto-animate
			>
				<button
					@click="getRes(test.id)"
					class="text-white"
					key="res_button"
				>
					Посмотреть результаты
				</button>
				<div
					v-if="taskResult.task_id"
					class="flex gap-4 items-center"
					key="dialogs"
				>
					<Dialog
						:ticker="test.config.ticker"
						description="dq"
						heading="Показатели"
						action="Показатели"
					>
						<div class="flex gap-4 flex-wrap">
							<template
								v-for="(value, key) in taskResult"
								:key="key"
							>
								<div
									class="w-fit border-b-2 p-2"
									v-if="isBuyHoldSharp(value)"
								>
									<p class="opacity-70">
										{{ value.description }}
									</p>
									<p class="font-bold">{{ value.value }}</p>
								</div>
							</template>
						</div>
					</Dialog>
					<Dialog action="Графики">
						<ClientOnly>
							<Tabs>
								<template #ideal>
									<XYChart
										:data="
											tasksStore.transformBackTestData(
												taskResult.dyn_neural_trading
													.value,
											)
										"
										:ticker="'fwef'"
										:timeframe="''"
									/>
								</template>

								<template #neural>
									<XYChart
										:data="
											tasksStore.transformBackTestData(
												taskResult.dyn_ideal_trading
													.value,
											)
										"
										:ticker="'fwef'"
										:timeframe="''"
									/>
								</template>
							</Tabs>
						</ClientOnly>
					</Dialog>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
