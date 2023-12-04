<script setup lang="ts">
import { useParametersStore } from "~/stores/parametersStore";
import type { Duration, Security } from "~/types";

const securitiesStore = useParametersStore<Security>(
	"securities",
	"http://213.171.14.97:8080/api/v1/data/lists/securities",
);

const durationsStore = useParametersStore<Duration>(
	"durations",
	"http://213.171.14.97:8080/api/v1/data/lists/securities",
);

const securities = securitiesStore();
const durations = durationsStore();

const filteredSecurities = computed(() => {
	return securities.data.map((item) => ({
		guid: item.guid,
		id: item.id,
		// Add other keys as needed
	}));
});
</script>

<template>
	<PageHeading icon="ui/ic_markup" title="Разметка" />
	<div class="flex flex-row flex-wrap gap-7">
		<Select
			title="Тикер"
			:items="filteredSecurities"
			:description="tickers.description"
			display-key="guid"
		/>
		<Select
			title="Параметр разметки"
			:items="markupParameters.list"
			:description="markupParameters.description"
			units="шт."
			display-key="value"
		/>
		<Select
			title="Временная рамка"
			:items="durations.data"
			:description="timeframes.description"
			display-key="title"
		/>
	</div>
</template>

<style scoped></style>
