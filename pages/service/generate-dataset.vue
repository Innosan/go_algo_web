<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
const servicesStore = useServicesStore();

const {
	selectedTimeframe,
	selectedMarkUp,
	selectedEndDate,
	selectedStartDate,
	selectedBars,
	selectedDatasetSize,
	selectedMaxUnmarkedBars,
	onSelect,
} = useSelectHandlers();
</script>

<template>
	<PageHeading icon="ui/ic_dataset" title="Генерация дата-сета" />
	<div class="flex flex-row flex-wrap gap-7">
		<Select
			title="Параметр разметки"
			:items="markupParameters.list"
			@select="(selected) => onSelect('selectedMarkUp', selected)"
			:description="markupParameters.description"
			units="шт."
			display-key="value"
		/>
		<Select
			title="Временная рамка"
			:items="timeframes.list"
			@select="(selected) => onSelect('selectedTimeframe', selected)"
			:description="timeframes.description"
			display-key="title"
		/>
		<Select
			title="Количество баров"
			units="шт."
			@select="(selected) => onSelect('selectedBars', selected)"
			:items="bars.list"
			:description="bars.description"
			display-key="value"
		/>
		<Select
			title="Размер дата-сета"
			:items="maxDatasetSize"
			@select="(selected) => onSelect('selectedDatasetSize', selected)"
			units="гб."
			display-key="value"
		/>
		<Select
			title="Максимум неразмеченных баров волны"
			:items="maxBars.list"
			@select="
				(selected) => onSelect('selectedMaxUnmarkedBars', selected)
			"
			:description="maxBars.description"
			units="%"
			display-key="value"
		/>

		<Input
			type="date"
			@input="(selected) => onSelect('selectedStartDate', selected)"
			title="Разметить с"
			id="start_date"
		/>
		<Input
			type="date"
			@input="(selected) => onSelect('selectedEndDate', selected)"
			title="Разметить по"
			id="end_date"
		/>
	</div>
	<button
		class="text-white"
		@click="
			servicesStore.createGenDatasetTask({
				timeframe: selectedTimeframe.timeframe,
				markup: selectedMarkUp.value,
				startDate: selectedStartDate,
				endDate: selectedEndDate,
				extrBarCount: selectedBars.value,
				maxUnmark: selectedMaxUnmarkedBars.value,
				datasetSize: selectedDatasetSize.value,
			})
		"
	>
		Сгенерировать дата-сет
	</button>
</template>

<style scoped></style>
