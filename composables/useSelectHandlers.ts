export default function useSelectHandlers() {
	const selectedMarkUp = ref(null);
	const selectedTimeframe = ref(null);

	const onMarkUpSelect = (selected) => {
		selectedMarkUp.value = selected;
		console.log(selectedMarkUp.value);
	};

	const onTimeframeSelect = (selected) => {
		selectedTimeframe.value = selected;
		console.log(selectedTimeframe.value);
	};

	return {
		selectedMarkUp,
		selectedTimeframe,
		onMarkUpSelect,
		onTimeframeSelect,
	};
}
