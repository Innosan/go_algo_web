<script setup lang="ts"></script>

<template>
	<PageHeading icon="ui/ic_markup" title="Разметка" />
	<div class="flex flex-row flex-wrap gap-7">
		<Select
			title="Тикер"
			:items="tickers.list"
			:description="tickers.description"
			display-key="title"
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
			display-key="timeframe"
		/>
	</div>
</template>

<style scoped></style>
