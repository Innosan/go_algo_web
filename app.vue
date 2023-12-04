<script setup lang="ts">
import { useParametersStore } from "~/stores/parametersStore";
import type { Duration, Security } from "~/types";

const securitiesStore = useParametersStore<Security>(
	"securities",
	"http://213.171.14.97:8080/api/v1/data/lists/securities",
);

const durationsStore = useParametersStore<Duration>(
	"durations",
	"http://213.171.14.97:8080/api/v1/data/lists/durations",
);

const securities = securitiesStore();
const durations = durationsStore();

securities.fetchData();
durations.fetchData();
</script>

<template>
	<Header />
	<NuxtPage />
	<Footer />
</template>
