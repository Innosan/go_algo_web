<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
const servicesStore = useServicesStore();
const selectedTicker = useSelectedTickerStore();

const {
	onMarkUpSelect,
	onTimeframeSelect,
	onEndDateSelect,
	onStartDateSelect,
	selectedTimeframe,
	selectedMarkUp,
	selectedEndDate,
	selectedStartDate,
} = useSelectHandlers();
</script>

<template>
	<PageHeading icon="ui/ic_markup" title="Разметка" />
	<div class="flex flex-row flex-wrap gap-7">
		<SelectTicker
			title="Тикер"
			:items="securitiesStore.securities"
			:description="tickers.description"
			:is-full-sized="true"
			display-full-size-key="secname"
			display-key="secid"
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
		<Input
			type="date"
			@input="onStartDateSelect"
			title="Разметить с"
			id="start_date"
		/>
		<Input
			type="date"
			@input="onEndDateSelect"
			title="Разметить по"
			id="end_date"
		/>
	</div>
	<button
		:disabled="
			!selectedStartDate ||
			!selectedEndDate ||
			!selectedTicker.ticker.secid
		"
		@click="
			servicesStore.markUp({
				ticker: selectedTicker.ticker.secid,
				timeframe: selectedTimeframe.timeframe,
				markup: selectedMarkUp.value,
				startDate: selectedStartDate,
				endDate: selectedEndDate,
			})
		"
	>
		Разметить
	</button>
</template>

<style scoped></style>
