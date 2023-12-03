export const tickers = {
	list: [
		{
			id: 1,
			title: "SBER",
		},
		{
			id: 2,
			title: "ASM",
		},
		{
			id: 3,
			title: "ABOBA",
		},
		{
			id: 4,
			title: "REF",
		},
	],
	description: "Наименование тикера на бирже. Например, SBER.",
};

export const timeframes = {
	list: [
		{
			id: 1,
			timeframe: "1m",
		},
		{
			id: 2,
			timeframe: "5m",
		},
		{
			id: 3,
			timeframe: "1D",
		},
		{
			id: 4,
			timeframe: "1M",
		},
	],
	description:
		"Вы можете настроить временной промежуток между барами\n" +
		"на графе (1 день, 5 минут и т.д.)",
};

export const markupParameters = {
	list: [
		{
			id: 1,
			value: 6,
		},
		{
			id: 2,
			value: 12,
		},
		{
			id: 3,
			value: 20,
		},
	],
	description:
		"Данный параметр показывает, что текущая точка экстремума является таковой для последующих, например, 6 точек",
};

export const bars = {
	list: [
		{
			id: 1,
			value: 10,
		},
		{
			id: 2,
			value: 20,
		},
		{
			id: 3,
			value: 40,
		},
	],
	description: "Разметка баров начиная с точки экстремума. Например, 20.",
};

export const maxBars = {
	list: [
		{
			id: 1,
			value: 20,
		},
		{
			id: 2,
			value: 30,
		},
		{
			id: 3,
			value: 80,
		},
	],
	description:
		"Вы можете настроить временной промежуток между барами\n" +
		"на графе (1 день, 5 минут и т.д.)",
};

export const maxDatasetSize = [
	{
		id: 1,
		value: 0.5,
	},
	{
		id: 2,
		value: 1,
	},
	{
		id: 3,
		value: 2,
	},
];

export const epochs = [
	{
		id: 1,
		value: 250,
	},
	{
		id: 2,
		value: 500,
	},
	{
		id: 3,
		value: 1000,
	},
];
