<script setup lang="ts">
const {
	selectedEpochs,
	selectedValidationSteps,
	selectedStepsPerEpoch,
	selectedLearningRate,
	selectedNewModelFlag,
	onSelect,
} = useSelectHandlers();
</script>

<template>
	<PageHeading icon="ui/ic_neural_network" title="Обучение сети" />
	<div class="flex flex-row flex-wrap gap-7">
		<Select
			title="Число эпох"
			:items="epochs"
			@select="(selected) => onSelect('selectedEpochs', selected)"
			units="шт."
			display-key="value"
		/>
		<Select
			title="Шаги за эпоху"
			:items="stepsPerEpoch"
			@select="(selected) => onSelect('selectedStepsPerEpoch', selected)"
			units="шт."
			display-key="value"
		/>
		<Select
			title="Валидационные шаги"
			:items="validationSteps"
			@select="
				(selected) => onSelect('selectedValidationSteps', selected)
			"
			units="шт."
			display-key="value"
		/>
		<Input
			type="number"
			@input="(selected) => onSelect('selectedLearningRate', selected)"
			title="Скорость обучения"
			id="learning_rate"
		/>
		<Input
			type="checkbox"
			v-model:checked="selectedNewModelFlag"
			@input="(selected) => onSelect('selectedNewModelFlag', selected)"
			title="Новая модель"
			id="new_model_flag"
		/>
	</div>
</template>

<style scoped></style>
