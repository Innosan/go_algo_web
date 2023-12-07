export default function useSelectHandlers() {
	const selectedMarkUp = ref(null);
	const selectedTimeframe = ref(null);
	const selectedStartDate = ref(null);
	const selectedEndDate = ref(null);
	const selectedDatasetSize = ref(null);
	const selectedMaxUnmarkedBars = ref(null);
	const selectedBars = ref(null);

	const onMarkUpSelect = (selected) => {
		selectedMarkUp.value = selected;
	};

	const onTimeframeSelect = (selected) => {
		selectedTimeframe.value = selected;
	};

	const onStartDateSelect = (selected) => {
		selectedStartDate.value = selected;
	};

	const onEndDateSelect = (selected) => {
		selectedEndDate.value = selected;
	};

	const onDatasetSizeSelect = (selected) => {
		selectedDatasetSize.value = selected;
	};

	const onMaxUnmarkedBarsSelect = (selected) => {
		selectedMaxUnmarkedBars.value = selected;
	};

	const onBarsSelect = (selected) => {
		selectedBars.value = selected;
	};

	return {
		selectedMarkUp,
		selectedTimeframe,
		selectedStartDate,
		selectedEndDate,
		selectedDatasetSize,
		selectedMaxUnmarkedBars,
		selectedBars,
		onMarkUpSelect,
		onTimeframeSelect,
		onStartDateSelect,
		onEndDateSelect,
		onDatasetSizeSelect,
		onMaxUnmarkedBarsSelect,
		onBarsSelect,
	};
}
