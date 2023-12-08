export default function useSelectHandlers() {
	const state = reactive({
		selectedMarkUp: null,
		selectedTimeframe: null,
		selectedStartDate: null,
		selectedEndDate: null,
		selectedBars: null,
		selectedDatasetSize: null,
		selectedMaxUnmarkedBars: null,
		selectedEpochs: null,
		selectedStepsPerEpoch: null,
		selectedValidationSteps: null,
		selectedNewModelFlag: true,
		selectedLearningRate: null,
		selectedDataSet: null,
	});

	const onSelect = (key, selected) => {
		state[key] = selected;
	};

	return {
		...toRefs(state),
		onSelect,
	};
}
