export default function useSelectHandlers() {
	const selectedMarkUp = ref(null);
	const selectedTimeframe = ref(null);
	const selectedStartDate = ref(null);
	const selectedEndDate = ref(null);

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
