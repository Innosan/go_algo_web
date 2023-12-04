<script setup lang="ts">
import { useParametersStore } from "~/stores/parametersStore";
import type { Security } from "~/types";

const securitiesStore = useParametersStore<Security>(
	"securities",
	"http://213.171.14.97:8080/api/v1/data/lists/securities",
);

const securities = securitiesStore();

securities.fetchData();
</script>

<template>
	<Header />
	<NuxtPage />
	<Footer />
</template>
