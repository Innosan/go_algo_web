<script setup lang="ts">
import MarkUpCard from "~/components/containers/MarkUpCard.vue";
import { serviceFilename } from "~/types";
import { useTasksStore } from "~/stores/tasksStore";
const tasksStore = useTasksStore();
const markups = tasksStore.getTasksByService(serviceFilename.MARK_UP);
</script>

<template>
	<div class="flex gap-7 flex-wrap">
		<MarkUpCard v-for="markup in markups" :markup="markup" />
	</div>
</template>

<style scoped></style>
