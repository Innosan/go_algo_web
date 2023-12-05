<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
securitiesStore.filterSecurities();
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

async function markUp() {
	const { data: response } = await $fetch(
		"http://213.171.14.97:8080/api/v1/conf/add",
		{
			headers: {
				"Content-Type": "application/json",
			},
			method: "post",
			body: {
				version: 0,
				service: "string",
				task_id: 0,
				scaler_path: "string",
				neural_path: "string",
				extr_bar_count: 0,
				max_unmark: 0,
				size_df: 0,
				count_days: 0,
				data_path: "string",
				new_model_flag: true,
				learning_rate: 0,
				epochs: 0,
				steps_per_epoch: 0,
				validation_steps: 0,
				id: 0,
				guid: "string",
				ticker: selectedTicker.ticker.guid,
				timeframe: selectedTimeframe.value.timeframe,
				count_points: selectedMarkUp.value.value,
				start_date: selectedStartDate.value,
				end_date: selectedEndDate.value,
				respos_url: "localhost:8080",
			},
		},
	);

	console.log(response.value);
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
			id="start_date"
		/>
	</div>
	<button @click="markUp">Разметить</button>
</template>

<style scoped></style>
