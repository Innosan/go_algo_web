<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
</script>

<template>
	<PageHeading icon="ui/ic_dataset" title="Генерация дата-сета" />
	<div class="flex flex-row flex-wrap gap-7">
		<Select
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
			:description="markupParameters.description"
			units="шт."
			display-key="value"
		/>
		<Select
			title="Временная рамка"
			:items="timeframes.list"
			:description="timeframes.description"
			display-key="title"
		/>
		<Select
			title="Количество баров"
			units="шт."
			:items="bars.list"
			:description="bars.description"
			display-key="value"
		/>
		<Select
			title="Размер дата-сета"
			:items="maxDatasetSize"
			units="гб."
			display-key="value"
		/>
		<Select
			title="Максимум неразмеченных баров волны"
			:items="maxBars.list"
			:description="maxBars.description"
			units="%"
			display-key="value"
		/>
	</div>
</template>

<style scoped></style>
