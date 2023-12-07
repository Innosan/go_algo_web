<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";
import { useTasksStore } from "~/stores/tasksStore";

const securities = useSecuritiesStore();
const tasksStore = useTasksStore();

tasksStore.getAllTasks();
securities.fetchSecurities();
</script>

<template>
	<Header />
	<NuxtPage />
	<Footer />
</template>
