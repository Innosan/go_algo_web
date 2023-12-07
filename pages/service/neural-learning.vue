<script setup lang="ts">
import { serviceFilename } from "~/types";

const {
	selectedEpochs,
	selectedValidationSteps,
	selectedStepsPerEpoch,
	selectedTimeframe,
	selectedLearningRate,
	selectedNewModelFlag,
	selectedDataSet,
	onSelect,
} = useSelectHandlers();

const servicesStore = useServicesStore();
const tasksStore = useTasksStore();
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
			title="Временная рамка"
			:items="timeframes.list"
			@select="(selected) => onSelect('selectedTimeframe', selected)"
			:description="timeframes.description"
			display-key="title"
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
		<Select
			title="Дата-сет"
			:items="
				tasksStore.getTasksByService(serviceFilename.DATASET_GENERATION)
			"
			@select="(selected) => onSelect('selectedDataSet', selected)"
			display-key="id"
			:is-full-sized="true"
			display-full-size-key="config"
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
	<button
		class="text-white"
		@click="
			servicesStore.createNeuralLearningTask({
				data_path: selectedDataSet.config.data_path,
				new_model_flag: !selectedNewModelFlag,
				learning_rate: selectedLearningRate,
				epochs: selectedEpochs.value,
				steps_per_epoch: selectedStepsPerEpoch.value,
				validation_steps: selectedValidationSteps.value,
			})
		"
	>
		Обучить сеть
	</button>
</template>

<style scoped></style>
