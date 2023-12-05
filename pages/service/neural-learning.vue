<script setup lang="ts"></script>

<template>
	<PageHeading icon="ui/ic_neural_network" title="Обучение сети" />
	<Select
		title="Число эпох"
		:items="epochs"
		units="шт."
		display-key="value"
	/>
</template>

<style scoped></style>
