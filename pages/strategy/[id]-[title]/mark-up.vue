<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
securitiesStore.filterSecurities();
const selectedTicker = useSelectedTickerStore();

const { onMarkUpSelect, onTimeframeSelect, selectedTimeframe } =
	useSelectHandlers();

async function markUp() {
	const { data: response } = await $fetch(
		"http://213.171.14.97:8080/api/v1/conf/add",
		{
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: {
				ticker: selectedTicker.ticker.guid,
				timeframe: selectedTimeframe.value.timeframe,
				respos_url: "localhost:8080",
			},
		},
	);

	console.log(response);
}
</script>

<template>
	<PageHeading icon="ui/ic_markup" title="Разметка" />
	<div class="flex flex-row flex-wrap gap-7">
		<SelectTicker
			title="Тикер"
			:items="securitiesStore.filteredSecurities"
			:description="tickers.description"
			:is-full-sized="true"
			display-full-size-key="companyName"
			display-key="guid"
		/>
		<Select
			title="Параметр разметки"
			:items="markupParameters.list"
			@select="onMarkUpSelect"
			:description="markupParameters.description"
			units="шт."
			display-key="value"
		/>
		<Select
			title="Временная рамка"
			:items="timeframes.list"
			@select="onTimeframeSelect"
			:description="timeframes.description"
			display-key="title"
		/>
		<Input type="date" title="Разметить с" id="start_date" />
		<Input type="date" title="Разметить по" id="start_date" />
	</div>
	<button @click="markUp">Разметить</button>
</template>

<style scoped></style>
