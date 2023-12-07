<template>
	<div>
		<p>{{ markup.config.ticker }}</p>
		<div class="flex gap-2 items-center">
			<NuxtIcon
				:name="statuses[markup.status].icon"
				:alt="statuses[markup.status].title"
			/>
			<p>{{ statuses[markup.status].title }}</p>
		</div>
		<button
			class="text-white hover:border-red-300 transition-all"
			:disabled="markup.status !== 2"
			@click="getRes"
		>
			Получить результаты
		</button>
		<div class="text-black" v-if="taskResult.profit_with_shift">
			<Dialog
				heading="График"
				action="Показать график"
				description="gerrg"
			>
				<ClientOnly>
					<Chart
						:data="
							tasksStore.transformChartData(
								taskResult.markup.values,
							)
						"
						:ticker="markup.config.ticker"
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

const tasksStore = useTasksStore();
const taskResult = ref({});

const getRes = async () => {
	taskResult.value = await tasksStore.getTaskResult(props.markup.id);
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
