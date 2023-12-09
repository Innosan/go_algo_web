<script setup lang="ts">
import { serviceFilename, statuses } from "~/types";
import { useTasksStore } from "~/stores/tasksStore";
const tasksStore = useTasksStore();
const datasets = computed(() =>
	tasksStore.getTasksByService(serviceFilename.DATASET_GENERATION),
);
</script>

<template>
	<div v-if="datasets.length === 0">
		<p>Пока датасетов нет!</p>
	</div>
	<div v-else class="flex gap-7 flex-wrap">
		<div
			v-for="dataset in datasets"
			class="card hover:border-b-red-400 transition-all flex gap-4 flex-col p-4 border-2 rounded-xl"
		>
			<CardHeading
				:heading="'Датасет ' + dataset.id"
				icon="ui/ic_dataset"
			/>
			<CardHeading
				:heading="statuses[dataset.status].title"
				:icon="statuses[dataset.status].icon"
			/>
		</div>
	</div>
</template>

<style scoped></style>
