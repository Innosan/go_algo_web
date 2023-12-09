<script setup lang="ts">
import { serviceFilename } from "~/types";
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
		<div v-for="dataset in datasets">
			<p>{{ dataset.id }}</p>
		</div>
	</div>
</template>

<style scoped></style>
