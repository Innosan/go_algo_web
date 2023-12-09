<script setup lang="ts">
import { serviceFilename, statuses } from "~/types";
import { useTasksStore } from "~/stores/tasksStore";
import CloseTaskButton from "~/components/utils/CloseTaskButton.vue";
const tasksStore = useTasksStore();
const networks = computed(() =>
	tasksStore.getTasksByService(serviceFilename.NEURAL_LEARNING),
);
</script>

<template>
	<div v-if="networks.length === 0">
		<p>Пока сетей нет!</p>
	</div>
	<div v-else class="flex gap-7 flex-wrap">
		<div
			v-for="network in networks"
			class="card hover:border-b-red-400 transition-all flex gap-4 flex-col p-4 border-2 rounded-xl"
		>
			<CardHeading
				:heading="'Сеть ' + network.id"
				icon="ui/ic_neural_network"
			/>
			<CardHeading
				:heading="statuses[network.status].title"
				:icon="statuses[network.status].icon"
			/>
			<CloseTaskButton
				v-if="network.status !== 2 && network.status !== 3"
				:task-id="network.id"
			/>
		</div>
	</div>
</template>

<style scoped></style>
