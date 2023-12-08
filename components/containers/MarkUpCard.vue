<template>
	<div
		class="border-2 hover:border-b-red-400 transition-all rounded-xl p-4 flex flex-col gap-4"
		v-auto-animate
	>
		<p class="font-bold text-2xl">{{ markup.config.ticker }}</p>
		<div class="flex gap-2 items-center opacity-60">
			<NuxtIcon
				:name="statuses[markup.status].icon"
				:alt="statuses[markup.status].title"
			/>
			<p class="font-bold">{{ statuses[markup.status].title }}</p>
		</div>
		<button
			class="text-white hover:border-red-300 transition-all"
			:disabled="markup.status !== 2 || taskResult.profit_with_shift"
			@click="getRes"
		>
			Получить результаты
		</button>
		<div
			key="dialog"
			class="text-black"
			v-if="taskResult.profit_with_shift"
		>
			<Dialog
				heading="График"
				:ticker="markup.config.ticker"
				action="Показать график"
				description="gerrg"
			>
				<ClientOnly>
					<Chart
						:data="transformedChartData"
						:ticker="markup.config.ticker"
						:timeframe="timeframeMapping[markup.config.timeframe]"
					/>
					<ProfitCard
						:profit-without-shift="taskResult.profit_without_shift"
						:profit-with-shift="taskResult.profit_with_shift"
					/>
				</ClientOnly>
			</Dialog>
		</div>
	</div>
</template>
<script setup lang="ts">
import { statuses } from "~/types";
import { timeframeMapping } from "~/utils/parameters";

const tasksStore = useTasksStore();
const taskResult = ref({});
let transformedChartData = [];

const getRes = async () => {
	taskResult.value = await tasksStore.getTaskResult(props.markup.id);

	transformedChartData = tasksStore.transformMarkUpChartData(
		taskResult.value.markup.values,
	);
};

const props = defineProps({
	markup: Object,
});
</script>

<style scoped>
button {
	color: #fff;
}
</style>
