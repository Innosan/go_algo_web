export const useTickerSelect = () =>
	useState(
		"ticker-select",
		() =>
			new Object({
				guid: null,
				id: null,
				companyName: null,
			}),
	);
