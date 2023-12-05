export default function useSelectHandlers() {
	const selectedTicker = useTickerSelect();
	const selectedMarkUp = ref(null);
	const selectedTimeframe = ref(null);

	const onTickerSelect = (selected) => {
		selectedTicker.value = selected;
		console.log(selectedTicker.value);
	};

	const onMarkUpSelect = (selected) => {
		selectedMarkUp.value = selected;
		console.log(selectedMarkUp.value);
	};

	const onTimeframeSelect = (selected) => {
		selectedTimeframe.value = selected;
		console.log(selectedTimeframe.value);
	};

	return {
		selectedTicker,
		selectedMarkUp,
		selectedTimeframe,
		onTickerSelect,
		onMarkUpSelect,
		onTimeframeSelect,
	};
}
