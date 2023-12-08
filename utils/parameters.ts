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
			title: "1 минута",
		},
		{
			id: 2,
			timeframe: "10m",
			title: "10 минут",
		},
		{
			id: 3,
			timeframe: "1h",
			title: "1 час",
		},
		{
			id: 4,
			timeframe: "1D",
			title: "1 день",
		},
		{
			id: 5,
			timeframe: "1W",
			title: "1 неделя",
		},
		{
			id: 6,
			timeframe: "1M",
			title: "1 месяц",
		},
		{
			id: 7,
			timeframe: "1Q",
			title: "1 квартал",
		},
	],
	description:
		"Вы можете настроить временной промежуток между барами\n" +
		"на графе (1 день, 10 минут и т.д.)",
};

export const timeframeMapping = {
	"1m": { title: "minute", value: 1 },
	"10m": { title: "minute", value: 10 },
	"1h": { title: "hour", value: 1 },
	"1D": { title: "day", value: 1 },
	"1W": { title: "week", value: 1 },
	"1M": { title: "month", value: 1 },
	"1Q": { title: "quarter", value: 1 },
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
		id: 0,
		value: 10,
	},
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
export const stepsPerEpoch = [
	{
		id: 1,
		value: 128,
	},
	{
		id: 2,
		value: 256,
	},
];

export const validationSteps = [
	{
		id: 1,
		value: 128,
	},
	{
		id: 2,
		value: 256,
	},
];

export const countDays = [
	{
		id: 1,
		value: 90,
	},
	{
		id: 2,
		value: 180,
	},
	{
		id: 2,
		value: 360,
	},
];
