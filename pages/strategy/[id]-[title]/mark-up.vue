<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securitiesStore = useSecuritiesStore();
securitiesStore.filterSecurities();

const { onTickerSelect, onMarkUpSelect, onTimeframeSelect } =
	useSelectHandlers();
</script>

<template>
	<PageHeading icon="ui/ic_markup" title="Разметка" />
	<div class="flex flex-row flex-wrap gap-7">
		<Select
			title="Тикер"
			:items="securitiesStore.filteredSecurities"
			@select="onTickerSelect"
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
	</div>
	<button @click="">Разметить</button>
</template>

<style scoped></style>
