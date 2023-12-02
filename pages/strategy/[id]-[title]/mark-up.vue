<script setup lang="ts"></script>

<template>
	<PageHeading icon="ic_markup.svg" title="Разметка" />
	<div class="flex flex-row gap-7">
		<div class="flex flex-col w-fit">
			<p>Тикер</p>
			<Select :items="tickers" display-key="title" />
		</div>
		<div class="flex flex-col w-fit">
			<p>Параметр разметки</p>
			<Select :items="markupParameters" display-key="value" />
		</div>
		<div class="flex flex-col w-fit">
			<p>Временная рамка</p>
			<Select :items="timeframes" display-key="timeframe" />
		</div>
	</div>
	<div class="flex flex-row gap-7">
		<div class="flex flex-col w-fit">
			<p>Тикер</p>
			<Select :items="tickers" display-key="title" />
		</div>
		<div class="flex flex-col w-fit">
			<p>Параметр разметки</p>
			<Select :items="markupParameters" display-key="value" />
		</div>
		<div class="flex flex-col w-fit">
			<p>Временная рамка</p>
			<Select :items="timeframes" display-key="timeframe" />
		</div>
	</div>
</template>

<style scoped></style>
