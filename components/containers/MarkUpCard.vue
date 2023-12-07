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
		<button :disabled="markup.status !== 2" @click="getRes">
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
					/>
					<div>
						<div>
							<p>
								{{
									taskResult.profit_without_shift.description
								}}
							</p>
							<p class="font-bold">
								{{ taskResult.profit_without_shift.value }}
							</p>
						</div>
						<div>
							<p>
								{{ taskResult.profit_with_shift.description }}
							</p>
							<p class="font-bold">
								{{ taskResult.profit_with_shift.value }}
							</p>
						</div>
					</div>
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
