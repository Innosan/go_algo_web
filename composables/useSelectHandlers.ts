export default function useSelectHandlers() {
	const selectedMarkUp = ref(null);
	const selectedTimeframe = ref(null);
	const selectedStartDate = ref(null);
	const selectedEndDate = ref(null);

	const onMarkUpSelect = (selected) => {
		selectedMarkUp.value = selected;
		console.log(selectedMarkUp.value);
	};

	const onTimeframeSelect = (selected) => {
		selectedTimeframe.value = selected;
		console.log(selectedTimeframe.value);
	};

	const onStartDateSelect = (selected) => {
		selectedStartDate.value = selected;
		console.log(selectedStartDate.value);
	};

	const onEndDateSelect = (selected) => {
		selectedEndDate.value = selected;
		console.log(selectedEndDate.value);
	};

	return {
		selectedMarkUp,
		selectedTimeframe,
		selectedStartDate,
		selectedEndDate,
		onMarkUpSelect,
		onTimeframeSelect,
		onStartDateSelect,
		onEndDateSelect,
	};
}
