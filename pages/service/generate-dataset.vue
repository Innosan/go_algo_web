<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
const servicesStore = useServicesStore();

const {
	onMarkUpSelect,
	onTimeframeSelect,
	onEndDateSelect,
	onStartDateSelect,
	onDatasetSizeSelect,
	onMaxUnmarkedBarsSelect,
	onBarsSelect,
	selectedTimeframe,
	selectedMarkUp,
	selectedEndDate,
	selectedStartDate,
	selectedDatasetSize,
	selectedMaxUnmarkedBars,
	selectedBars,
} = useSelectHandlers();
</script>

<template>
	<PageHeading icon="ui/ic_dataset" title="Генерация дата-сета" />
	<div class="flex flex-row flex-wrap gap-7">
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
		<Select
			title="Количество баров"
			units="шт."
			@select="onBarsSelect"
			:items="bars.list"
			:description="bars.description"
			display-key="value"
		/>
		<Select
			title="Размер дата-сета"
			:items="maxDatasetSize"
			@select="onDatasetSizeSelect"
			units="гб."
			display-key="value"
		/>
		<Select
			title="Максимум неразмеченных баров волны"
			:items="maxBars.list"
			@select="onMaxUnmarkedBarsSelect"
			:description="maxBars.description"
			units="%"
			display-key="value"
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
		class="text-white"
		@click="
			servicesStore.createGenDatasetTask({
				timeframe: selectedTimeframe.timeframe,
				markup: selectedMarkUp.value,
				startDate: selectedStartDate,
				endDate: selectedEndDate,
				maxUnmark: selectedMaxUnmarkedBars.value,
				datasetSize: selectedDatasetSize.value,
			})
		"
	>
		Сгенерировать дата-сет
	</button>
</template>

<style scoped></style>
