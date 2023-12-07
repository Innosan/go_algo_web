<script setup lang="ts">
import { useTasksStore } from "~/stores/tasksStore";
import { serviceFilename } from "~/types";
import MarkUpCard from "~/components/containers/MarkUpCard.vue";

const tasksStore = useTasksStore();
const markups = tasksStore.getTasksByService(serviceFilename.MARK_UP);
</script>

<template>
	<PageHeading icon="ui/ic_markup" title="Все разметки" />
	<NuxtLink to="/service/mark-up/add-new">Добавить новую</NuxtLink>
	<div class="flex gap-7 flex-wrap">
		<MarkUpCard v-for="markup in markups" :markup="markup" />
	</div>
</template>

<style scoped></style>
