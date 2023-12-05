<script setup lang="ts"></script>

<template class="page_content">
	<div class="flex flex-row gap-4">
		<PageHeading title="Стратегии" icon="ui/ic_strategies" />
		<Dialog
			heading="Добавить новую стратегию"
			description=""
			action="Новая стратегия"
		/>
	</div>
	<div class="flex gap-4">
		<StrategyCard
			v-for="strategy in strategies"
			:strategy="strategy"
			v-on:click="
				navigateTo(`/strategy/${strategy.id}-${strategy.title}/mark-up`)
			"
		/>
	</div>
</template>

<style scoped lang="scss"></style>
