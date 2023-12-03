<script setup lang="ts"></script>

<template>
	<PageHeading icon="ic_dataset.svg" title="Генерация дата-сета" />
	<div class="flex flex-col gap-7">
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
