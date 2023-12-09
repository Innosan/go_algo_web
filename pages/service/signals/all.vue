<script setup lang="ts">
import { serviceFilename, statuses } from "~/types";
import { useTasksStore } from "~/stores/tasksStore";
import CloseTaskButton from "~/components/utils/CloseTaskButton.vue";
const tasksStore = useTasksStore();
const signals = computed(() =>
	tasksStore.getTasksByService(serviceFilename.SIGNALS),
);
</script>

<template>
	<div v-if="signals.length === 0">
		<p>Пока сигналов нет!</p>
	</div>
	<div v-else class="flex gap-7 flex-wrap">
		<div
			v-for="signals in signals"
			class="card hover:border-b-red-400 transition-all flex gap-4 flex-col p-4 border-2 rounded-xl"
		>
			<CardHeading
				:heading="'Сигнал ' + signals.id"
				icon="ui/ic_signal"
			/>
			<CardHeading
				:heading="statuses[signals.status].title"
				:icon="statuses[signals.status].icon"
			/>
			<CloseTaskButton
				v-if="signal.status !== 2 && signal.status !== 3"
				:task-id="signal.id"
			/>
		</div>
	</div>
</template>

<style scoped></style>
