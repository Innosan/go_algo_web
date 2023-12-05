export const useSelectedTickerStore = defineStore({
	id: "selectedTicker",
	state: () => ({
		ticker: null,
	}),
	actions: {
		selectTicker(ticker) {
			this.ticker = ticker;
		},
	},
});

export const useSelectedTimeframeStore = defineStore({
	id: "selectedTimeframe",
	state: () => ({
		timeframe: null,
	}),
	actions: {
		selectTicker(timeframe) {
			this.timeframe = timeframe;
		},
	},
});
